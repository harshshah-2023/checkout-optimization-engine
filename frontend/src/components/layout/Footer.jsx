import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative bg-[#0A0B0D] border-t border-white/10">

      {/* Soft top gradient */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/40 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 py-16">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* BRAND */}
          <div>
            <h3 className="text-xl font-semibold tracking-tight text-white">
              Citadel<span className="text-yellow-400"> Flow</span>
            </h3>

            <p className="mt-4 text-sm text-gray-400 leading-relaxed max-w-sm">
              A production-grade checkout intelligence platform designed
              to analyze failures, optimize retries, and maximize payment
              success rates across modern FinTech systems.
            </p>
          </div>

          {/* PRODUCT */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide">
              Product
            </h4>

            <ul className="mt-5 space-y-3 text-sm text-gray-400">
              <FooterLink label="How It Works" />
              <FooterLink label="Benefits" />
              <FooterLink label="Contact Us" />
              <FooterLink label="System Architecture" />
            </ul>
          </div>

          {/* BUILT FOR */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide">
              Built For
            </h4>

            <ul className="mt-5 space-y-3 text-sm text-gray-400">
              <li>Payment Teams</li>
              <li>Product Managers</li>
              <li>FinTech Engineers</li>
              <li>System Architects</li>
            </ul>
          </div>

          {/* PLATFORM STATUS */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wide">
              Platform Status
            </h4>

            <div className="mt-5 bg-[#121316] border border-white/10 rounded-lg px-4 py-3 flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>

              <span className="text-sm text-gray-300">
                All systems operational
              </span>
            </div>

            <p className="mt-3 text-xs text-gray-500">
              Payments, retries, metrics, and settlement pipelines
              running normally.
            </p>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-xs text-gray-500">
            © 2025 Citadel Flow · Built as a production-grade FinTech system
          </p>

          <div className="flex gap-6 text-xs text-gray-400">
            <Link to="/privacy" className="hover:text-white transition">
              Privacy
            </Link>
            <Link to="/Terms" className="hover:text-white transition">
              Terms
            </Link>
            <Link to="/Contact" className="hover:text-white transition">
              Contact
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}

/* ---------- Helper ---------- */

function FooterLink({ label }) {
  return (
    <li className="hover:text-white transition cursor-pointer">
      {label}
    </li>
  );
}
