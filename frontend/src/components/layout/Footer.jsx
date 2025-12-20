export default function Footer() {
  return (
    <footer className="relative bg-[#0A0B0D] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <h3 className="text-xl font-semibold text-white">
            CheckoutIQ
          </h3>
          <p className="mt-4 text-gray-400 text-sm leading-relaxed max-w-sm">
            Checkout intelligence platform built to analyze failures,
            optimize retries, and improve payment success rates
            for modern FinTech systems.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wide">
            Product
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-gray-400">
            <li>How It Works</li>
            <li>Benefits</li>
            <li>Dashboard</li>
            <li>Architecture</li>
          </ul>
        </div>

        {/* Meta */}
        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-wide">
            Built For
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-gray-400">
            <li>Payment Teams</li>
            <li>Product Managers</li>
            <li>FinTech Engineers</li>
            <li>System Designers</li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-6 text-center text-sm text-gray-500">
        © 2025 CheckoutIQ · Built as a production-grade FinTech system
      </div>
    </footer>
  );
}
