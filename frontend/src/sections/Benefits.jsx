export default function Benefits() {
  return (
    <section className="relative bg-[#0A0B0D] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Why CheckoutIQ
          </h2>
          <p className="mt-4 text-gray-400">
            Built to solve real payment problems that directly impact
            revenue, reliability, and user experience.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Benefit 1 */}
          <div className="bg-[#121316] border border-white/10 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-white">
              Higher Success Rates
            </h3>
            <p className="mt-3 text-gray-400 text-sm leading-relaxed">
              Intelligent retry logic and failure-aware routing reduce
              false declines and improve overall authorization success.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="bg-[#121316] border border-white/10 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-white">
              Full Failure Visibility
            </h3>
            <p className="mt-3 text-gray-400 text-sm leading-relaxed">
              Understand exactly why transactions fail across issuers,
              networks, and payment methods.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="bg-[#121316] border border-white/10 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-white">
              Latency Optimization
            </h3>
            <p className="mt-3 text-gray-400 text-sm leading-relaxed">
              Track p95 latency and identify slow issuers or PSPs
              before they impact conversions.
            </p>
          </div>

          {/* Benefit 4 */}
          <div className="bg-[#121316] border border-white/10 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-white">
              Product-Driven Decisions
            </h3>
            <p className="mt-3 text-gray-400 text-sm leading-relaxed">
              Metrics like success rate, retry uplift, and failure
              distribution guide backlog prioritization.
            </p>
          </div>

          {/* Benefit 5 */}
          <div className="bg-[#121316] border border-white/10 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-white">
              Scalable Architecture
            </h3>
            <p className="mt-3 text-gray-400 text-sm leading-relaxed">
              Modular services make it easy to add new payment
              methods, issuers, or analytics.
            </p>
          </div>

          {/* Benefit 6 */}
          <div className="bg-[#121316] border border-white/10 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-white">
              Built for FinTech Teams
            </h3>
            <p className="mt-3 text-gray-400 text-sm leading-relaxed">
              Designed with real-world payment flows, edge cases,
              and operational needs in mind.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
