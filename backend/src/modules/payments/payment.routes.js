import { Router } from "express";

import {
  createPaymentController,
  getPaymentController
} from "./payment.controller.js";

const router = Router();

/**
 * POST /api/payments
 * Create a new payment
 */
router.post("/", createPaymentController);

/**
 * GET /api/payments/:id
 * Get payment by ID
 */
router.get("/:id", getPaymentController);

export default router;
