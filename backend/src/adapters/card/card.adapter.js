import { PAYMENT_STATUS } from "../../modules/payments/payment.constants.js";
import { simulateIssuerAuthorization } from "./issuer.simulator.js";

/**
 * Authorize a card payment via simulated issuer
 */
export async function authorizeCardPayment(payment, cardDetails) {
  const issuerResponse = await simulateIssuerAuthorization(
    cardDetails,
    payment.scenario || null
  );

  if (!issuerResponse.success) {
    return {
      status: PAYMENT_STATUS.FAILED,
      failureCode: issuerResponse.failureCode,
      latencyMs: issuerResponse.latency
    };
  }

  return {
    status: PAYMENT_STATUS.AUTHORIZED,
    failureCode: null,
    latencyMs: issuerResponse.latency
  };
}
