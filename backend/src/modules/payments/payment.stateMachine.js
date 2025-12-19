import { PAYMENT_STATUS } from "./payment.constants.js";

/**
 * Defines valid state transitions for a payment
 * Any transition not listed here is INVALID
 */
const STATE_TRANSITIONS = {
  [PAYMENT_STATUS.CREATED]: [
    PAYMENT_STATUS.AUTH_IN_PROGRESS,
    PAYMENT_STATUS.FAILED
  ],

  [PAYMENT_STATUS.AUTH_IN_PROGRESS]: [
    PAYMENT_STATUS.AUTHORIZED,
    PAYMENT_STATUS.FAILED
  ],

  [PAYMENT_STATUS.AUTHORIZED]: [
    PAYMENT_STATUS.CAPTURED,
    PAYMENT_STATUS.FAILED
  ],

  [PAYMENT_STATUS.CAPTURED]: [
    PAYMENT_STATUS.SETTLED
  ],

  [PAYMENT_STATUS.SETTLED]: [
    PAYMENT_STATUS.REFUNDED
  ],

  [PAYMENT_STATUS.FAILED]: [],

  [PAYMENT_STATUS.REFUNDED]: []
};

/**
 * Validates whether a state transition is allowed
 */
export function isValidTransition(currentState, nextState) {
  const allowedNextStates = STATE_TRANSITIONS[currentState] || [];
  return allowedNextStates.includes(nextState);
}

/**
 * Enforces a state transition
 * Throws if the transition is invalid
 */
export function transitionPaymentState(currentState, nextState) {
  if (!isValidTransition(currentState, nextState)) {
    const error = new Error(
      `Invalid payment state transition: ${currentState} → ${nextState}`
    );
    error.statusCode = 400;
    throw error;
  }

  return nextState;
}

/**
 * Helper: check if payment is in a terminal state
 */
export function isTerminalState(state) {
  return (
    state === PAYMENT_STATUS.FAILED ||
    state === PAYMENT_STATUS.REFUNDED
  );
}
