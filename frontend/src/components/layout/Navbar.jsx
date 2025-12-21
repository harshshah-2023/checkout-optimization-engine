import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="fixed top-0 z-50 w-full bg-black/60 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LEFT: BRAND */}
        <Link
          to="/"
          className="flex items-center gap-1 text-xl font-semibold tracking-tight"
        >
          <span className="text-white">Citadel</span>
          <span className="text-yellow-400">Flow</span>
        </Link>

        {/* CENTER: NAV LINKS */}
        <div className="hidden md:flex items-center gap-10 text-sm">
          <NavItem
  to="/HowItWorks"
  label="How it Works"
  active={location.pathname === "/HowItWorks"}
/>

<NavItem
  to="/benefits"
  label="Benefits"
  active={location.pathname === "/benefits"}
/>

<NavItem
  to="/dashboard"
  label="Dashboard"
  active={location.pathname === "/dashboard"}
/>

        </div>

        {/* RIGHT: ACTIONS */}
        <div className="flex items-center gap-4">
         <Link to="/login" className="text-sm text-gray-300 hover:text-white transition">
  Log in
</Link>

          <button className="px-5 py-2 rounded-lg bg-yellow-400 text-black text-sm font-semibold shadow-[0_0_30px_rgba(234,179,8,0.35)] hover:scale-[1.03] transition">
          <Link to="/contact" className="text-sm text-gray-500 hover:text-white transition">
          Contact 
          </Link>
          </button>
        </div>

      </div> 
    </nav>
  );
}

/* ---------- Helper Component ---------- */

function NavItem({ to, label, active }) {
  return (
    <Link
      to={to}
      className={`relative text-gray-300 hover:text-white transition
        ${active ? "text-white" : ""}`}
    >
      {label}

      {active && (
        <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-yellow-400 rounded-full" />
      )}
    </Link>
  );
}
