import { useEffect, useState } from "react";

import SuccessRateChart from "../components/charts/SuccessRateChart";
import FailurePie from "../components/charts/FailurePie";
import LatencyChart from "../components/charts/LatencyChart";

import usePaymentUpdates from "../hooks/usePaymentUpdates";

import {
  fetchMetricsOverview,
  fetchSuccessTrend,
  fetchFailureDistribution,
  fetchLatencyTrend
} from "../services/metricsService";
// import SimulatorPanel from "../components/SimulatorPanel";

export default function Dashboard() {
  const [metrics, setMetrics] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [successTrend, setSuccessTrend] = useState([]);
  const [failureData, setFailureData] = useState([]);
  const [latencyData, setLatencyData] = useState([]);
  const [livePayments, setLivePayments] = useState([]);

  usePaymentUpdates(setLivePayments);

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
        setError("Unable to load dashboard data");
      } finally {
        setLoading(false);
      }
    }

    loadDashboard();
    intervalId = setInterval(loadDashboard, 10000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="min-h-screen mt-10 bg-[#0A0B0D] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-14">

        {/* HEADER */}
        <header>
          <h1 className="text-3xl font-semibold tracking-tight">
            Payments Control Center
          </h1>
          <p className="mt-2 text-gray-400 max-w-2xl">
            Monitor transaction reliability, failures, and real-time payment flow health.
          </p>
        </header>

        {error && (
          <p className="text-red-400">{error}</p>
        )}

        {/* KPI CARDS */}
        <section>
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </div>
          ) : metrics && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <KpiCard title="Success Rate" value={`${Number(metrics.successRate).toFixed(1)}%`} accent="green" />
              <KpiCard title="Total Payments" value={metrics.totalPayments} />
              <KpiCard title="Successful" value={metrics.successfulPayments} accent="green" />
              <KpiCard title="Failed" value={metrics.failedPayments} accent="red" />
            </div>
          )}
        </section>

        {/* <SimulatorPanel/> */}

        {/* CHARTS */}
        {!loading && (
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <GlassCard title="Success Trend">
              <SuccessRateChart data={successTrend} />
            </GlassCard>
            <GlassCard title="Failure Distribution">
              <FailurePie data={failureData} />
            </GlassCard>
            <GlassCard title="Latency (ms)">
              <LatencyChart data={latencyData} />
            </GlassCard>
          </section>
        )}

        {/* LIVE PAYMENTS */}
        <section>
          <h2 className="text-xl font-semibold mb-4">
            Live Payment Activity
          </h2>

          <div className="bg-[#121316] border border-white/10 rounded-xl divide-y divide-white/10">
            {livePayments.length === 0 ? (
              <p className="p-6 text-gray-400 text-sm">
                Waiting for live payment events…
              </p>
            ) : (
              livePayments.slice(0, 6).map((p) => (
                <div
                  key={p.id}
                  className="p-4 flex items-center justify-between hover:bg-white/5 transition"
                >
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-400">
                      Payment ID
                    </span>
                    <span className="font-mono text-sm">
                      {p.id.slice(0, 8)}…
                    </span>
                  </div>
                  <StatusBadge status={p.status} />
                </div>
              ))
            )}
          </div>
        </section>

      </div>
    </section>
  );
}

/* ---------- UI ATOMS ---------- */

function KpiCard({ title, value, accent }) {
  const accents = {
    green: "from-green-500/20 to-transparent",
    red: "from-red-500/20 to-transparent"
  };

  return (
    <div className={`relative bg-[#121316] border border-white/10 rounded-xl p-6 overflow-hidden`}>
      {accent && (
        <div className={`absolute inset-0 bg-gradient-to-br ${accents[accent]} pointer-events-none`} />
      )}
      <p className="text-sm text-gray-400 relative">{title}</p>
      <p className="mt-2 text-3xl font-semibold relative">{value}</p>
    </div>
  );
}

function GlassCard({ title, children }) {
  return (
    <div className="bg-[#121316] border border-white/10 rounded-xl p-6">
      <p className="text-sm text-gray-400 mb-4">{title}</p>
      {children}
    </div>
  );
}

function SkeletonCard() {
  return (
    <div className="bg-[#121316] border border-white/10 rounded-xl p-6 animate-pulse">
      <div className="h-4 w-24 bg-gray-700 rounded" />
      <div className="h-10 w-32 bg-gray-600 rounded mt-4" />
    </div>
  );
}

function StatusBadge({ status }) {
  const styles = {
    CREATED: "bg-gray-600/20 text-gray-300",
    AUTH_IN_PROGRESS: "bg-yellow-500/20 text-yellow-300 animate-pulse",
    AUTHORIZED: "bg-green-500/20 text-green-300",
    FAILED: "bg-red-500/20 text-red-300",
    SETTLED: "bg-blue-500/20 text-blue-300"
  };

  return (
    <span
      className={`px-4 py-1 rounded-full text-xs font-semibold tracking-wide ${
        styles[status] || styles.CREATED
      }`}
    >
      {status.replaceAll("_", " ")}
    </span>
  );
}
