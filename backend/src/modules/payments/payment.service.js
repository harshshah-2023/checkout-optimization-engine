import { v4 as uuidv4 } from "uuid";

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
const paymentsStore = new Map();

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

  paymentsStore.set(paymentId, payment);

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

  paymentsStore.set(paymentId, payment);

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

    payment.updatedAt = new Date();
    paymentsStore.set(payment.id, payment);

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
export function getPaymentById(paymentId) {
  const payment = paymentsStore.get(paymentId);

  if (!payment) {
    const error = new Error("Payment not found");
    error.statusCode = 404;
    throw error;
  }

  return payment;
}
