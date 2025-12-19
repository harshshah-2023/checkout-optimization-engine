import { FAILURE_CODE } from "../../modules/payments/payment.constants.js";

/**
 * Simulates a card issuer (bank)
 * This mimics real-world authorization behavior
 */
export async function simulateIssuerAuthorization(cardDetails) {
  // Simulated network latency (100ms – 1200ms)
  const latency = Math.floor(Math.random() * 1100) + 100;
  await new Promise((resolve) => setTimeout(resolve, latency));

  const random = Math.random();

  /**
   * Failure distribution (realistic)
   * ~20% failures overall
   */
  if (random < 0.08) {
    return {
      success: false,
      failureCode: FAILURE_CODE.INSUFFICIENT_FUNDS,
      latency
    };
  }

  if (random < 0.14) {
    return {
      success: false,
      failureCode: FAILURE_CODE.ISSUER_TIMEOUT,
      latency
    };
  }

  if (random < 0.18) {
    return {
      success: false,
      failureCode: FAILURE_CODE.NETWORK_ERROR,
      latency
    };
  }

  // Success
  return {
    success: true,
    latency
  };
}
