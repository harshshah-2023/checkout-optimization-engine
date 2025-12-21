import { query } from "../../config/db.js";
import { getSuccessTrend } from "./metrics.service.js";
import { getFailureDistribution } from "./metrics.service.js";
import { getLatencyMetrics } from "./metrics.service.js";

export async function getMetricsOverview(req, res, next) {
  try {
    const result = await query(`
      SELECT
        COUNT(*) AS total_payments,
        COUNT(*) FILTER (WHERE event_type = 'PAYMENT_SUCCESS') AS successful_payments,
        COUNT(*) FILTER (WHERE event_type = 'PAYMENT_FAILED') AS failed_payments
      FROM payment_metrics
    `);

    const total = Number(result.rows[0].total_payments);
    const success = Number(result.rows[0].successful_payments);
    const failed = Number(result.rows[0].failed_payments);

    res.json({
      success: true,
      data: {
        totalPayments: total,
        successfulPayments: success,
        failedPayments: failed,
        successRate: total === 0 ? 0 : (success / total) * 100
      }
    });
  } catch (err) {
    next(err);
  }
}

export async function getSuccessTrendController(req, res, next) {
  try {
    const data = await getSuccessTrend();
    res.json({ success: true, data });
  } catch (err) {
    next(err);
  }
}

export async function getFailureDistributionController(req, res, next) {
  try {
    const data = await getFailureDistribution();
    res.json({ success: true, data });
  } catch (err) {
    next(err);
  }
}
export async function getLatencyMetricsController(req, res, next) {
  try {
    const data = await getLatencyMetrics();
    res.json({ success: true, data });
  } catch (err) {
    next(err);
  }
}
