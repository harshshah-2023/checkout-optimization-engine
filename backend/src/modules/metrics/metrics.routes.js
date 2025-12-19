import { Router } from "express";

import {
  metricsOverviewController,
  metricsFailureController,
  metricsLatencyController
} from "./metrics.controller.js";

const router = Router();

/**
 * Metrics APIs
 */
router.get("/overview", metricsOverviewController);
router.get("/failures", metricsFailureController);
router.get("/latency", metricsLatencyController);

export default router;
