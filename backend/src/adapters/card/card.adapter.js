import { PAYMENT_STATUS } from "../../modules/payments/payment.constants.js";
import { simulateIssuerAuthorization } from "./issuer.simulator.js";

/**
 * Authorize a card payment via issuer
 */
export async function authorizeCardPayment(payment, cardDetails) {
  const issuerResponse = await simulateIssuerAuthorization(cardDetails);

  if (!issuerResponse.success) {
    return {
      authorized: false,
      status: PAYMENT_STATUS.FAILED,
      failureCode: issuerResponse.failureCode,
      latencyMs: issuerResponse.latency
    };
  }

  return {
    authorized: true,
    status: PAYMENT_STATUS.AUTHORIZED,
    latencyMs: issuerResponse.latency
  };
}
