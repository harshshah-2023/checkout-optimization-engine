import {
  createPayment,
  getPaymentById
} from "./payment.service.js";

/**
 * POST /api/payments
 * Create a new payment
 */
export async function createPaymentController(req, res, next) {
  try {
    const payment = await createPayment(req.body);

    res.status(201).json({
      success: true,
      data: payment
    });
  } catch (err) {
    next(err);
  }
}

/**
 * GET /api/payments/:id
 * Fetch payment details by ID
 */
export function getPaymentController(req, res, next) {
  try {
    const { id } = req.params;
    const payment = getPaymentById(id);

    res.status(200).json({
      success: true,
      data: payment
    });
  } catch (err) {
    next(err);
  }
}
