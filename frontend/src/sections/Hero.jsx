import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0B0D] via-[#151515] to-[#3B3322]" />

      {/* Soft gold glow */}
      <div className="absolute right-[-20%] top-[10%] w-[600px] h-[600px] bg-[#fbbf24]/20 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight text-white">
            Fast And Simple <br />
            <span className="text-[#fbbf24] font-bold">Digital Payment</span> <br />
            Solution
          </h1>

          {/* Description */}
          <p className="mt-6 text-[17px] leading-relaxed text-gray-300 max-w-xl">
            Increase checkout success with intelligent retries, real-time
            failure insights, and latency-aware payment flows —
            designed for modern FinTech products.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap gap-4">
            <button className="px-6 py-3 cursor-pointer bg-[#fbbf24] text-black font-semibold rounded-md shadow-[0_0_60px_rgba(214,180,106,0.35)]">
            <Link to="/dashboard" className="text-sm text-black hover:text-white transition">
            Get started
          </Link>
             
            </button>

            <button className="px-6 py-3 cursor-pointer border border-white/20 text-white rounded-md hover:bg-white/5">
              Learn More
            </button>
          </div>

          {/* Highlights */}
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-xl">
            <div>
              <p className="text-[#fbbf24] text-xl font-bold">01</p>
              <p className="mt-1 text-sm text-gray-400">
                Smart Retry Engine
              </p>
            </div>
            <div>
              <p className="text-[#fbbf24] text-xl font-bold">02</p>
              <p className="mt-1 text-sm text-gray-400">
                Failure Analytics
              </p>
            </div>
            <div>
              <p className="text-[#fbbf24] text-xl font-bold">03</p>
              <p className="mt-1 text-sm text-gray-400">
                Latency Insights
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative flex justify-center">
          {/* Floating card */}
          <div className="relative bg-[#121316] border border-white/10 rounded-2xl p-8 w-[320px] shadow-2xl">
            <p className="text-sm text-gray-400">Checkout Success Rate</p>
            <p className="mt-2 text-4xl font-bold text-[#fbbf24]">92.4%</p>

            <div className="mt-6 space-y-4 text-sm">
              <div className="flex justify-between text-gray-400">
                <span>Retries Applied</span>
                <span className="text-white">Smart</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Avg Latency</span>
                <span className="text-white">480ms</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Failure Visibility</span>
                <span className="text-white">Real-time</span>
              </div>
            </div>
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-6 -right-6 bg-[#fbbf24] text-black text-sm font-semibold px-4 py-2 rounded-lg shadow-[0_0_60px_rgba(214,180,106,0.35)]">
            Seamless Transactions
          </div>
        </div>
      </div>
    </section>
  );
}
