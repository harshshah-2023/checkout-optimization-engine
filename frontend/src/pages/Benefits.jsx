import {
  TrendingUp,
  Eye,
  Zap,
  Layers,
  ShieldCheck,
  Users
} from "lucide-react";

export default function Benefits() {
  return (
    <section className="relative bg-[#0A0B0D] text-white overflow-hidden">

      {/* Background depth */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-yellow-400/10 blur-[160px]" />
      <div className="absolute top-[30%] -right-40 w-[600px] h-[600px] bg-blue-500/10 blur-[160px]" />

      <div className="relative max-w-7xl mx-auto px-6 py-28 space-y-36">

        {/* ================= HERO ================= */}
        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-widest text-yellow-400">
            Why Citadel Flow
          </p>

          <h1 className="mt-6 text-4xl md:text-5xl font-semibold leading-tight">
            Payments are complex.  
            <br />
            <span className="text-gray-300">
              Citadel Flow makes them observable.
            </span>
          </h1>

          <p className="mt-8 text-lg text-gray-400 leading-relaxed max-w-3xl">
            Modern payment systems fail for dozens of reasons —
            issuer behavior, network instability, latency spikes, retries,
            and edge cases.
            <br /><br />
            Citadel Flow gives teams the intelligence layer required to
            understand, optimize, and trust their checkout flows.
          </p>
        </div>

        {/* ================= FEATURE SECTIONS ================= */}
        <Feature
          icon={TrendingUp}
          title="Recover Lost Revenue"
          description="Intelligent retry strategies recover transactions that would otherwise be abandoned by traditional gateways."
          points={[
            "Issuer-aware retry rules",
            "Failure classification by type",
            "Controlled backoff strategies"
          ]}
        />

        <Feature
          icon={Eye}
          title="See Every Failure Clearly"
          description="Stop guessing why payments fail. Citadel Flow exposes root causes across issuers, networks, and methods."
          points={[
            "Structured failure codes",
            "Real-time visibility",
            "Historical failure analysis"
          ]}
          reverse
        />

        <Feature
          icon={Zap}
          title="Optimize Latency Proactively"
          description="Latency kills conversion. Citadel Flow surfaces slow issuers and PSPs before customers feel the impact."
          points={[
            "p95 latency tracking",
            "Issuer-level performance",
            "Conversion impact awareness"
          ]}
        />

        {/* ================= METRICS STRIP ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-[#121316] border border-white/10 rounded-2xl p-10">
          <Metric value="↑ 8–15%" label="Authorization uplift" />
          <Metric value="↓ 30%" label="Retry-related failures" />
          <Metric value="Real-time" label="Payment observability" />
        </div>

        {/* ================= TRUST / BUILT FOR ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-3xl font-semibold">
              Built like real FinTech infrastructure
            </h2>

            <p className="mt-6 text-gray-400 leading-relaxed">
              Citadel Flow mirrors how modern payment platforms are actually built —
              state machines, async settlement, retries, metrics pipelines,
              and real-time dashboards.
            </p>

            <ul className="mt-6 space-y-4 text-sm text-gray-300">
              <li className="flex gap-3">
                <ShieldCheck className="text-yellow-400" size={18} />
                Production-grade payment state machine
              </li>
              <li className="flex gap-3">
                <Layers className="text-yellow-400" size={18} />
                Modular, scalable service design
              </li>
              <li className="flex gap-3">
                <Users className="text-yellow-400" size={18} />
                Designed for product, engineering & ops teams
              </li>
            </ul>
          </div>

          <div className="bg-[#121316] border border-white/10 rounded-2xl p-8">
            <p className="text-sm text-gray-400 mb-4">
              Example payment lifecycle
            </p>

            <div className="space-y-3">
              <Status label="CREATED" />
              <Status label="AUTH_IN_PROGRESS" />
              <Status label="AUTHORIZED" />
              <Status label="SETTLED" highlight />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ================= COMPONENTS ================= */

function Feature({ icon: Icon, title, description, points, reverse }) {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 gap-16 items-center ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <div>
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-yellow-400/10 text-yellow-400 mb-6">
          <Icon size={22} />
        </div>

        <h3 className="text-2xl font-semibold">{title}</h3>

        <p className="mt-4 text-gray-400 leading-relaxed">
          {description}
        </p>

        <ul className="mt-6 space-y-3 text-sm text-gray-300">
          {points.map((p) => (
            <li key={p}>• {p}</li>
          ))}
        </ul>
      </div>

      <div className="bg-[#121316] border border-white/10 rounded-2xl h-64" />
    </div>
  );
}

function Metric({ value, label }) {
  return (
    <div className="text-center">
      <p className="text-3xl font-semibold text-yellow-400">{value}</p>
      <p className="mt-2 text-sm text-gray-400">{label}</p>
    </div>
  );
}

function Status({ label, highlight }) {
  return (
    <div
      className={`px-4 py-2 rounded-lg text-xs font-medium ${
        highlight
          ? "bg-green-500/20 text-green-300"
          : "bg-gray-700/20 text-gray-300"
      }`}
    >
      {label}
    </div>
  );
}
