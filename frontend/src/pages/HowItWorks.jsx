import {
  CreditCard,
  Activity,
  RefreshCcw,
  BarChart3,
  CheckCircle2
} from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      title: "Payment Initiated",
      description:
        "A customer submits a payment. Citadel Flow immediately captures intent, metadata, and context.",
      icon: CreditCard
    },
    {
      title: "Real-Time Authorization Intelligence",
      description:
        "Requests are routed through a state machine that tracks issuer response, latency, and failure signals.",
      icon: Activity
    },
    {
      title: "Smart Retry Engine",
      description:
        "Retry decisions are made dynamically based on failure type — not blindly or repeatedly.",
      icon: RefreshCcw
    },
    {
      title: "Metrics & Failure Attribution",
      description:
        "Every attempt emits structured metrics for success rate, latency, and failure distribution.",
      icon: BarChart3
    },
    {
      title: "Settlement & Final State",
      description:
        "Authorized payments settle asynchronously while the system broadcasts real-time updates.",
      icon: CheckCircle2
    }
  ];

  return (
    <section className="relative bg-[#0A0B0D] text-white overflow-hidden">

      {/* Ambient lighting */}
      <div className="absolute -top-40 right-0 w-[700px] h-[700px] bg-yellow-400/10 blur-[180px]" />
      <div className="absolute bottom-0 -left-40 w-[600px] h-[600px] bg-blue-500/10 blur-[160px]" />

      <div className="relative max-w-7xl mx-auto px-6 py-32 space-y-32">

        {/* ================= HERO ================= */}
        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.3em] text-yellow-400">
            How It Works
          </p>

          <h1 className="mt-8 text-4xl md:text-5xl font-semibold leading-tight">
            Payments are not transactions.  
            <br />
            <span className="text-gray-300">
              They are distributed systems.
            </span>
          </h1>

          <p className="mt-8 text-lg text-gray-400 leading-relaxed max-w-3xl">
            Most gateways treat payments as black boxes.
            Citadel Flow treats them as stateful, observable workflows —
            capturing intelligence at every step from authorization to settlement.
          </p>
        </div>

        {/* ================= FLOW VISUAL ================= */}
        <div className="relative">

          {/* Vertical timeline */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-white/10 hidden md:block" />

          <div className="space-y-16">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="relative grid grid-cols-1 md:grid-cols-[80px_1fr] gap-8 items-start"
                >
                  {/* Icon */}
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-yellow-400/10 text-yellow-400 flex items-center justify-center border border-yellow-400/20">
                      <Icon size={22} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="bg-[#121316] border border-white/10 rounded-2xl p-8 hover:border-yellow-400/40 transition">
                    <h3 className="text-xl font-semibold">
                      {step.title}
                    </h3>

                    <p className="mt-4 text-gray-400 leading-relaxed">
                      {step.description}
                    </p>

                    <p className="mt-4 text-sm text-gray-500">
                      Step {idx + 1}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= SYSTEM INTELLIGENCE ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div>
            <h2 className="text-3xl font-semibold leading-tight">
              Intelligence is captured  
              <br />
              <span className="text-gray-300">
                where failures actually happen
              </span>
            </h2>

            <p className="mt-6 text-gray-400 leading-relaxed">
              Citadel Flow instruments every transition — not just final outcomes.
              This means retries, issuer behavior, and latency spikes
              are first-class signals, not logs buried in infrastructure.
            </p>

            <ul className="mt-8 space-y-4 text-sm text-gray-400">
              <li>• Authorization state machines</li>
              <li>• Failure-aware retry logic</li>
              <li>• Real-time WebSocket updates</li>
              <li>• Metrics-first architecture</li>
            </ul>
          </div>

          {/* Visual Card */}
          <div className="relative bg-gradient-to-br from-[#161616] to-[#0F0F0F] border border-white/10 rounded-2xl p-10 shadow-[0_0_80px_rgba(234,179,8,0.08)]">
            <p className="text-sm text-gray-400">
              Example Payment Lifecycle
            </p>

            <div className="mt-6 space-y-3 text-sm">
              <Row label="CREATED" />
              <Row label="AUTH_IN_PROGRESS" />
              <Row label="AUTHORIZED" highlight />
              <Row label="SETTLED" />
            </div>
          </div>
        </div>

        {/* ================= CLOSING ================= */}
        <div className="max-w-4xl">
          <h2 className="text-3xl font-semibold">
            Designed to feel invisible — until you need it
          </h2>

          <p className="mt-6 text-gray-400 leading-relaxed">
            Citadel Flow runs quietly alongside your checkout.
            When things go wrong, it becomes the single place
            where teams understand what happened and why.
            <br /><br />
            That is the difference between monitoring payments
            and actually operating them.
          </p>
        </div>

      </div>
    </section>
  );
}

/* ================= HELPERS ================= */

function Row({ label, highlight }) {
  return (
    <div
      className={`flex items-center justify-between px-4 py-3 rounded-lg border
        ${highlight
          ? "border-yellow-400/40 bg-yellow-400/10 text-yellow-300"
          : "border-white/10 bg-[#121316] text-gray-300"
        }`}
    >
      <span>{label}</span>
      <span className="text-xs">✓</span>
    </div>
  );
}
