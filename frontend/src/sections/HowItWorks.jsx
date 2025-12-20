export default function HowItWorks() {
  return (
    <section className="relative bg-[#0A0B0D] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            How It Works
          </h2>
          <p className="mt-4 text-gray-400">
            A simple, intelligent flow designed to maximize payment success
            while giving you full visibility into failures and performance.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Step 1 */}
          <div className="bg-[#121316] border border-white/10 rounded-xl p-8">
            <p className="text-[#D6B46A] text-xl font-bold">01</p>
            <h3 className="mt-4 text-lg font-semibold text-white">
              Intelligent Checkout
            </h3>
            <p className="mt-2 text-sm text-gray-400">
              Payments are initiated with real-time validation and
              method-specific optimizations for cards, UPI, and net banking.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-[#121316] border border-white/10 rounded-xl p-8">
            <p className="text-[#D6B46A] text-xl font-bold">02</p>
            <h3 className="mt-4 text-lg font-semibold text-white">
              Smart Retry Engine
            </h3>
            <p className="mt-2 text-sm text-gray-400">
              Failures are classified instantly and retried intelligently
              based on issuer behavior, latency, and failure codes.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-[#121316] border border-white/10 rounded-xl p-8">
            <p className="text-[#D6B46A] text-xl font-bold">03</p>
            <h3 className="mt-4 text-lg font-semibold text-white">
              Real-Time Insights
            </h3>
            <p className="mt-2 text-sm text-gray-400">
              Track success rates, retries, latency, and failures through
              live dashboards built for product and engineering teams.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
