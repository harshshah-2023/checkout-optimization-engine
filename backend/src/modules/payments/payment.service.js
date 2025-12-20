import { v4 as uuidv4 } from "uuid";
import { query } from "../../config/db.js";


import {
  PAYMENT_STATUS,
  FAILURE_CODE,
  PAYMENT_METHOD
} from "./payment.constants.js";

import {
  transitionPaymentState,
  isTerminalState
} from "./payment.stateMachine.js";

import {
  validateCreatePayment
} from "./payment.validator.js";

import {
  authorizeCardPayment
} from "../../adapters/card/card.adapter.js";

import {
  retryAuthorization
} from "../retries/retry.service.js";

import {
  recordMetric
} from "../metrics/metrics.service.js";

import {
  METRIC_EVENT
} from "../metrics/metrics.events.js";

/**
 * Temporary in-memory store
 */
// const paymentsStore = new Map(); 

/**
 * Create a new payment
 */
export async function createPayment(payload) {
  const validatedData = validateCreatePayment(payload);

  const paymentId = uuidv4();

  const payment = {
    id: paymentId,
    merchantId: uuidv4(),
    amount: validatedData.amount,
    currency: validatedData.currency,
    paymentMethod: validatedData.paymentMethod,
    status: PAYMENT_STATUS.CREATED,
    failureCode: null,
    attemptNumber: 0,
    createdAt: new Date(),
    updatedAt: new Date()
  };

  // paymentsStore.set(paymentId, payment);

  await query(
  `INSERT INTO payments
   (id, merchant_id, amount, currency, payment_method, status, failure_code, attempt_number, created_at, updated_at)
   VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)`,
  [
    payment.id,
    payment.merchantId,
    payment.amount,
    payment.currency,
    payment.paymentMethod,
    payment.status,
    payment.failureCode,
    payment.attemptNumber,
    payment.createdAt,
    payment.updatedAt
  ]
);


  // METRIC: payment created
  recordMetric({
    paymentId,
    eventType: METRIC_EVENT.PAYMENT_CREATED
  });

  // Move to AUTH_IN_PROGRESS
  payment.status = transitionPaymentState(
    payment.status,
    PAYMENT_STATUS.AUTH_IN_PROGRESS
  );

  // paymentsStore.set(paymentId, payment);

  // Authorization + retries
  await authorizeWithRetries(payment, validatedData);

  return payment;
}

/**
 * Authorization with retry handling
 */
async function authorizeWithRetries(payment, validatedData) {
  while (!isTerminalState(payment.status)) {
    payment.attemptNumber += 1;

    // METRIC: auth attempted
    recordMetric({
      paymentId: payment.id,
      eventType: METRIC_EVENT.AUTH_ATTEMPTED,
      metadata: {
        attemptNumber: payment.attemptNumber
      }
    });

    try {
      if (payment.paymentMethod === PAYMENT_METHOD.CARD) {
        const result = await authorizeCardPayment(
          payment,
          validatedData.card
        );

        payment.status = transitionPaymentState(
          payment.status,
          result.status
        );

        payment.failureCode = result.failureCode || null;

        if (payment.status === PAYMENT_STATUS.AUTHORIZED) {
          recordMetric({
            paymentId: payment.id,
            eventType: METRIC_EVENT.AUTH_SUCCEEDED,
            latencyMs: result.latencyMs
          });
        } else {
          recordMetric({
            paymentId: payment.id,
            eventType: METRIC_EVENT.AUTH_FAILED,
            latencyMs: result.latencyMs,
            failureCode: result.failureCode
          });
        }
      } else {
        payment.status = transitionPaymentState(
          payment.status,
          PAYMENT_STATUS.AUTHORIZED
        );

        recordMetric({
          paymentId: payment.id,
          eventType: METRIC_EVENT.AUTH_SUCCEEDED
        });
      }
    } catch (err) {
      payment.status = PAYMENT_STATUS.FAILED;
      payment.failureCode = FAILURE_CODE.UNKNOWN_ERROR;

      recordMetric({
        paymentId: payment.id,
        eventType: METRIC_EVENT.AUTH_FAILED,
        failureCode: FAILURE_CODE.UNKNOWN_ERROR
      });
    }

//     payment.updatedAt = new Date();
//     paymentsStore.set(payment.id, payment);

//     payment.updatedAt = new Date();
// paymentsStore.set(payment.id, payment);

payment.updatedAt = new Date();

await query(
  `UPDATE payments
   SET status = $1,
       failure_code = $2,
       attempt_number = $3,
       updated_at = $4
   WHERE id = $5`,
  [
    payment.status,
    payment.failureCode,
    payment.attemptNumber,
    payment.updatedAt,
    payment.id
  ]
);


// 🔔 REAL-TIME PAYMENT STATUS UPDATE
if (global.paymentWS) {
  global.paymentWS.broadcastPaymentUpdate({
    type: "PAYMENT_STATUS_UPDATE",
    payload: {
      id: payment.id,
      status: payment.status,
      failureCode: payment.failureCode,
      updatedAt: payment.updatedAt
    }
  });
}


    // Stop if authorized
    if (payment.status === PAYMENT_STATUS.AUTHORIZED) {
      recordMetric({
        paymentId: payment.id,
        eventType: METRIC_EVENT.PAYMENT_SUCCESS
      });
      break;
    }

    // METRIC: retry triggered
    recordMetric({
      paymentId: payment.id,
      eventType: METRIC_EVENT.RETRY_TRIGGERED,
      metadata: {
        attemptNumber: payment.attemptNumber
      }
    });

    const retriedPayment = await retryAuthorization({
      payment,
      validatedData,
      attemptNumber: payment.attemptNumber
    });

    if (retriedPayment.status === payment.status) {
      recordMetric({
        paymentId: payment.id,
        eventType: METRIC_EVENT.PAYMENT_FAILED,
        failureCode: payment.failureCode
      });
      break;
    }
  }
}

/**
 * Fetch payment by ID
 */
export async function getPaymentById(paymentId) {
  const result = await query(
    `SELECT * FROM payments WHERE id = $1`,
    [paymentId]
  );

  if (result.rows.length === 0) {
    const error = new Error("Payment not found");
    error.statusCode = 404;
    throw error;
  }

  return result.rows[0];
}
