import { createRefund } from "./refund.service.js";

export async function createRefundController(req, res, next) {
  try {
    const { paymentId, amount } = req.body;
    const refund = await createRefund(paymentId, amount);
    res.json({ success: true, data: refund });
  } catch (err) {
    next(err);
  }
}
