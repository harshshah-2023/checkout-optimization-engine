import api from "./api";

export async function fetchMetricsOverview() {
  const res = await api.get("/metrics/overview");



  // backend wraps metrics inside `data`
  return res.data.data;
}

export async function fetchSuccessTrend() {
  const res = await api.get("/metrics/success-trend");
  return res.data.data;
}

export async function fetchFailureDistribution() {
  const res = await api.get("/metrics/failures");
  return res.data.data;
}

export async function fetchLatencyTrend() {
  const res = await api.get("/metrics/latency");
  return res.data.data;
}

