import express from "express";
import cors from "cors";

import { requestLogger } from "./middlewares/requestLogger.middleware.js";
import { errorHandler } from "./middlewares/error.middleware.js";

// route placeholders (will be implemented step by step)
import paymentRoutes from "./modules/payments/payment.routes.js";
import refundRoutes from "./modules/refunds/refund.routes.js";
import metricsRoutes from "./modules/metrics/metrics.routes.js";


const app = express();

/**
 * Global Middlewares
 */
app.use(cors());
app.use(express.json());
app.use(requestLogger);

/**
 * Health Check
 */
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "UP",
    service: "checkout-intelligence-backend",
    timestamp: new Date().toISOString()
  });
});

/**
 * API Routes
 */
app.use("/api/payments", paymentRoutes);
app.use("/api/refunds", refundRoutes);
app.use("/api/metrics", metricsRoutes);

/**
 * Global Error Handler
 * (must be last)
 */
app.use(errorHandler);

export default app;
