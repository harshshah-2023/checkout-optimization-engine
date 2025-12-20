import { useEffect, useState } from "react";

import SuccessRateChart from "../components/charts/SuccessRateChart";
import FailurePie from "../components/charts/FailurePie";
import LatencyChart from "../components/charts/LatencyChart";

import {
  fetchMetricsOverview,
  fetchSuccessTrend,
  fetchFailureDistribution,
  fetchLatencyTrend
} from "../services/metricsService";

export default function Dashboard() {
  const [metrics, setMetrics] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [successTrend, setSuccessTrend] = useState([]);
  const [failureData, setFailureData] = useState([]);
  const [latencyData, setLatencyData] = useState([]);

  useEffect(() => {
    let intervalId;

    async function loadDashboard() {
      try {
        const overview = await fetchMetricsOverview();
        setMetrics(overview);

        try {
          setSuccessTrend(await fetchSuccessTrend());
          setFailureData(await fetchFailureDistribution());
          setLatencyData(await fetchLatencyTrend());
        } catch {
          // Fallback mock data (charts only)
          setSuccessTrend([
            { time: "10:00", successRate: 82 },
            { time: "10:05", successRate: 85 },
            { time: "10:10", successRate: 90 },
            { time: "10:15", successRate: 88 }
          ]);

          setFailureData([
            { reason: "INSUFFICIENT_FUNDS", count: 12 },
            { reason: "NETWORK_ERROR", count: 5 },
            { reason: "TIMEOUT", count: 3 }
          ]);

          setLatencyData([
            { time: "10:00", latency: 620 },
            { time: "10:05", latency: 580 },
            { time: "10:10", latency: 540 },
            { time: "10:15", latency: 560 }
          ]);
        }
      } catch {
        setError("Failed to load dashboard data");
      } finally {
        setLoading(false);
      }
    }

    loadDashboard();
    intervalId = setInterval(loadDashboard, 10000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="min-h-screen bg-[#0A0B0D]">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Page Header */}
        <div className="mb-10">
          <h1 className="text-3xl font-semibold text-white">
            Payments Dashboard
          </h1>
          <p className="mt-2 text-gray-400">
            Real-time visibility into payment performance, failures, and latency.
          </p>
        </div>

        {/* Error */}
        {error && (
          <p className="text-red-400 mb-6">{error}</p>
        )}

        {/* KPI Cards */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </div>
        ) : (
          metrics && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <KpiCard
                title="Success Rate"
                value={`${Number(metrics.successRate).toFixed(1)}%`}
              />
              <KpiCard title="Total Payments" value={metrics.totalPayments} />
              <KpiCard title="Successful Payments" value={metrics.successfulPayments} />
              <KpiCard title="Failed Payments" value={metrics.failedPayments} />
            </div>
          )
        )}

        {/* Charts */}
        {!loading && (
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <SuccessRateChart data={successTrend} />
            <FailurePie data={failureData} />
            <LatencyChart data={latencyData} />
          </div>
        )}

      </div>
    </section>
  );
}

/* ---------- Components ---------- */

function KpiCard({ title, value }) {
  return (
    <div className="bg-[#121316] border border-white/10 rounded-xl p-6">
      <p className="text-sm text-gray-400">{title}</p>
      <p className="mt-2 text-2xl font-semibold text-white">
        {value}
      </p>
    </div>
  );
}

function SkeletonCard() {
  return (
    <div className="bg-[#121316] border border-white/10 rounded-xl p-6 animate-pulse">
      <div className="h-4 w-24 bg-gray-700 rounded" />
      <div className="h-8 w-32 bg-gray-600 rounded mt-4" />
    </div>
  );
}
