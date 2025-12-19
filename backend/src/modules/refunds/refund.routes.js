import { Router } from "express";

const router = Router();

/**
 * POST /api/refunds
 * Create a refund (stub)
 */
router.post("/", (req, res) => {
  res.status(501).json({
    message: "Refund processing not implemented yet"
  });
});

export default router;
