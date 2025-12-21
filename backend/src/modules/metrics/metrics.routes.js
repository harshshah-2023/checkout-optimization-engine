import { Router } from "express";
import { getMetricsOverview,  getSuccessTrendController ,
  getFailureDistributionController,  getLatencyMetricsController
} from "./metrics.controller.js";

const router = Router();

/**
 * GET /api/metrics/overview
 */
router.get("/overview", getMetricsOverview);
router.get("/success-trend", getSuccessTrendController);
router.get("/failure-distribution", getFailureDistributionController);
router.get("/latency", getLatencyMetricsController);
export default router;
