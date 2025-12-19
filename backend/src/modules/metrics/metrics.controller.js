import {
  getMetricsOverview,
  getFailureDistribution,
  getAuthLatencies
} from "./metrics.service.js";

/**
 * GET /api/metrics/overview
 */
export function metricsOverviewController(req, res, next) {
  try {
    const data = getMetricsOverview();

    res.status(200).json({
      success: true,
      data
    });
  } catch (err) {
    next(err);
  }
}

/**
 * GET /api/metrics/failures
 */
export function metricsFailureController(req, res, next) {
  try {
    const data = getFailureDistribution();

    res.status(200).json({
      success: true,
      data
    });
  } catch (err) {
    next(err);
  }
}

/**
 * GET /api/metrics/latency
 */
export function metricsLatencyController(req, res, next) {
  try {
    const data = getAuthLatencies();

    res.status(200).json({
      success: true,
      data
    });
  } catch (err) {
    next(err);
  }
}
