import { METRIC_EVENT } from "./metrics.events.js";

/**
 * Temporary in-memory metrics store
 * Each entry represents a single event
 */
const metricsStore = [];

/**
 * Record a metric event
 */
export function recordMetric({
  paymentId,
  eventType,
  latencyMs = null,
  failureCode = null,
  metadata = {}
}) {
  metricsStore.push({
    id: metricsStore.length + 1,
    paymentId,
    eventType,
    latencyMs,
    failureCode,
    metadata,
    createdAt: new Date()
  });
}

/**
 * Get high-level metrics overview
 */
export function getMetricsOverview() {
  const totalPayments = metricsStore.filter(
    (e) => e.eventType === METRIC_EVENT.PAYMENT_CREATED
  ).length;

  const successfulPayments = metricsStore.filter(
    (e) => e.eventType === METRIC_EVENT.PAYMENT_SUCCESS
  ).length;

  const failedPayments = metricsStore.filter(
    (e) => e.eventType === METRIC_EVENT.PAYMENT_FAILED
  ).length;

  return {
    totalPayments,
    successfulPayments,
    failedPayments,
    successRate:
      totalPayments === 0
        ? 0
        : (successfulPayments / totalPayments) * 100
  };
}

/**
 * Failure distribution
 */
export function getFailureDistribution() {
  const failures = metricsStore.filter(
    (e) => e.eventType === METRIC_EVENT.AUTH_FAILED
  );

  return failures.reduce((acc, curr) => {
    acc[curr.failureCode] =
      (acc[curr.failureCode] || 0) + 1;
    return acc;
  }, {});
}

/**
 * Authorization latency (raw values)
 */
export function getAuthLatencies() {
  return metricsStore
    .filter(
      (e) =>
        e.eventType === METRIC_EVENT.AUTH_SUCCEEDED &&
        e.latencyMs !== null
    )
    .map((e) => e.latencyMs);
}
