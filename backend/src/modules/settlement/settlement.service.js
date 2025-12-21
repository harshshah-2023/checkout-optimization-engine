import { query } from "../../config/db.js";
import { PAYMENT_STATUS } from "../payments/payment.constants.js";
import { v4 as uuidv4 } from "uuid";
// import { query } from "../../config/db.js";
import { recordMetric } from "../metrics/metrics.service.js";
import { METRIC_EVENT } from "../metrics/metrics.events.js";



export async function settleAuthorizedPayments() {
  const result = await query(
    `
    UPDATE payments
    SET settlement_status = 'SETTLED',
        settled_at = NOW(),
        updated_at = NOW()
    WHERE status = 'AUTHORIZED'
      AND settlement_status IS NULL
    RETURNING id, amount
    `
  );

  return result.rows;
}

export async function settlePayment(paymentId) {
  const settlementId = uuidv4();
  const settledAt = new Date();

  // Mark payment as settled
  await query(
    `
    UPDATE payments
    SET settlement_status = 'SETTLED',
        settled_at = $1
    WHERE id = $2
      AND status = 'AUTHORIZED'
    `,
    [settledAt, paymentId]
  );

  // Insert settlement record
  await query(
    `
    INSERT INTO settlements (id, payment_id, status, settled_at)
    VALUES ($1, $2, 'SETTLED', $3)
    `,
    [settlementId, paymentId, settledAt]
  );

  recordMetric({
    paymentId,
    eventType: METRIC_EVENT.PAYMENT_SETTLED
  });

  // Real-time update
  if (global.paymentWS) {
    global.paymentWS.broadcastPaymentUpdate({
      type: "PAYMENT_SETTLED",
      payload: {
        paymentId,
        status: "SETTLED",
        settledAt
      }
    });
  }

  return { settlementId, paymentId };
}