import { v4 as uuidv4 } from "uuid";
import { query } from "../../config/db.js";
import { PAYMENT_STATUS } from "../payments/payment.constants.js";

export async function createRefund(paymentId, amount) {
  const paymentRes = await query(
    `SELECT amount, status FROM payments WHERE id = $1`,
    [paymentId]
  );

  if (paymentRes.rows.length === 0) {
    throw new Error("Payment not found");
  }

  const payment = paymentRes.rows[0];

  if (payment.status !== PAYMENT_STATUS.SETTLED) {
    throw new Error("Only settled payments can be refunded");
  }

  const refundId = uuidv4();

  await query(
    `INSERT INTO refunds
     (id, payment_id, amount, status, created_at)
     VALUES ($1,$2,$3,$4,NOW())`,
    [refundId, paymentId, amount, "REFUNDED"]
  );

  return {
    refundId,
    paymentId,
    amount,
    status: "REFUNDED"
  };
}
