import {
  RETRYABLE_FAILURES,
  NON_RETRYABLE_FAILURES
} from "../payments/payment.constants.js";

/**
 * Maximum retries allowed per payment
 * (Card networks typically allow 2–3)
 */
export const MAX_RETRY_ATTEMPTS = 2;

/**
 * Determines if a failure can be retried
 */
export function isRetryableFailure(failureCode) {
  if (!failureCode) return false;

  return RETRYABLE_FAILURES.includes(failureCode);
}

/**
 * Determines if retry limit is exceeded
 */
export function canRetry(attemptNumber) {
  return attemptNumber < MAX_RETRY_ATTEMPTS;
}
