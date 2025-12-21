import { settleAuthorizedPayments } from "./settlement.service.js";

/**
 * Runs one settlement cycle
 * Safe to call repeatedly
 */
export async function runSettlementWorker() {
  try {
    const settledPayments = await settleAuthorizedPayments();

    for (const payment of settledPayments) {
      console.log(
        `💰 Payment settled: ${payment.id} | amount=${payment.amount}`
      );

      // 🔔 Real-time update to frontend
      if (global.paymentWS) {
        global.paymentWS.broadcastPaymentUpdate({
          type: "PAYMENT_SETTLED",
          payload: {
            id: payment.id,
            settlementStatus: "SETTLED"
          }
        });
      }
    }
  } catch (err) {
    console.error("❌ Settlement worker failed:", err.message);
  }
}
