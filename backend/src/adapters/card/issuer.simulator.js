import { FAILURE_CODE } from "../../modules/payments/payment.constants.js";

/**
 * Simulates a card issuer (bank)
 * Supports deterministic scenarios + realistic randomness
 */
export async function simulateIssuerAuthorization(
  cardDetails,
  scenario = null
) {
  // Simulated network latency (100ms – 1200ms)
  const latency = Math.floor(Math.random() * 1100) + 100;
  await new Promise((resolve) => setTimeout(resolve, latency));

  /**
   * 🎯 DETERMINISTIC MODE (for testing)
   */
  if (scenario) {
    switch (scenario) {
      case "INSUFFICIENT_FUNDS":
        return {
          success: false,
          failureCode: FAILURE_CODE.INSUFFICIENT_FUNDS,
          latency
        };

      case "TIMEOUT":
        return {
          success: false,
          failureCode: FAILURE_CODE.ISSUER_TIMEOUT,
          latency
        };

      case "NETWORK_ERROR":
        return {
          success: false,
          failureCode: FAILURE_CODE.NETWORK_ERROR,
          latency
        };

      case "SUCCESS":
      default:
        return {
          success: true,
          latency
        };
    }
  }

  /**
   * 🎲 REALISTIC RANDOM MODE (~20% failures)
   */
  const random = Math.random();

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

  return {
    success: true,
    latency
  };
}
