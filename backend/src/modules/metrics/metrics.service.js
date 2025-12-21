import { v4 as uuidv4 } from "uuid";
import { query } from "../../config/db.js";

/**
 * Record a metric event
 */
export async function recordMetric({
  paymentId,
  eventType,
  latencyMs = null,
  failureCode = null,
  metadata = null
}) {
  await query(
    `
    INSERT INTO payment_metrics (
      id,
      payment_id,
      event_type,
      latency_ms,
      failure_code,
      metadata
    )
    VALUES ($1, $2, $3, $4, $5, $6)
    `,
    [
      uuidv4(),
      paymentId,
      eventType,
      latencyMs,
      failureCode,
      metadata
    ]
  );
}

export async function getSuccessTrend() {
  const result = await query(`
    SELECT
      to_char(date_trunc('minute', created_at), 'HH24:MI') AS time,
      ROUND(
        100.0 * COUNT(*) FILTER (WHERE event_type = 'PAYMENT_SUCCESS')
        / NULLIF(COUNT(*), 0),
        1
      ) AS success_rate
    FROM payment_metrics
    WHERE created_at >= NOW() - INTERVAL '1 hour'
    GROUP BY time
    ORDER BY time ASC
  `);

  return result.rows.map(row => ({
    time: row.time,
    successRate: Number(row.success_rate)
  }));
}

export async function getFailureDistribution() {
  const result = await query(`
    SELECT
      failure_code AS reason,
      COUNT(*) AS count
    FROM payment_metrics
    WHERE event_type = 'PAYMENT_FAILED'
    GROUP BY failure_code
    ORDER BY count DESC
  `);

  return result.rows.map(row => ({
    reason: row.reason || "UNKNOWN",
    count: Number(row.count)
  }));
}
export async function getLatencyMetrics() {
  const result = await query(`
    SELECT
      percentile_cont(0.50) WITHIN GROUP (ORDER BY latency_ms) AS p50,
      percentile_cont(0.95) WITHIN GROUP (ORDER BY latency_ms) AS p95,
      percentile_cont(0.99) WITHIN GROUP (ORDER BY latency_ms) AS p99
    FROM payment_metrics
    WHERE latency_ms IS NOT NULL
  `);

  const row = result.rows[0];

  return {
    p50: row.p50 ? Math.round(row.p50) : 0,
    p95: row.p95 ? Math.round(row.p95) : 0,
    p99: row.p99 ? Math.round(row.p99) : 0
  };
}


