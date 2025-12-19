import {
  PAYMENT_STATUS,
  FAILURE_CODE
} from "../payments/payment.constants.js";

import {
  isRetryableFailure,
  canRetry
} from "./retry.rules.js";

import {
  transitionPaymentState,
  isTerminalState
} from "../payments/payment.stateMachine.js";

import {
  authorizeCardPayment
} from "../../adapters/card/card.adapter.js";

/**
 * Retry authorization for a payment
 */
export async function retryAuthorization({
  payment,
  validatedData,
  attemptNumber
}) {
  // Do not retry terminal payments
  if (isTerminalState(payment.status)) {
    return payment;
  }

  // Check retry eligibility
  if (
    !isRetryableFailure(payment.failureCode) ||
    !canRetry(attemptNumber)
  ) {
    return payment;
  }

  try {
    // Move back to AUTH_IN_PROGRESS
    payment.status = transitionPaymentState(
      payment.status,
      PAYMENT_STATUS.AUTH_IN_PROGRESS
    );

    // Simple backoff (linear)
    const backoffMs = attemptNumber * 500;
    await new Promise((r) => setTimeout(r, backoffMs));

    // Retry card authorization
    const result = await authorizeCardPayment(
      payment,
      validatedData.card
    );

    payment.status = transitionPaymentState(
      payment.status,
      result.status
    );

    payment.failureCode = result.failureCode || null;
  } catch (err) {
    payment.status = PAYMENT_STATUS.FAILED;
    payment.failureCode = FAILURE_CODE.UNKNOWN_ERROR;
  } finally {
    payment.updatedAt = new Date();
    return payment;
  }
}
