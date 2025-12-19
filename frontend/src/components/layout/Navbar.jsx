import { Link } from "react-router-dom";

export default function Navbar() {
  return (
   <nav className="w-full bg-bg/70 backdrop-blur border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-primary">
          CheckoutIQ
        </Link>

        <div className="hidden md:flex gap-8 text-sm text-textMuted">
          <Link to="/#how">How it Works</Link>
          <Link to="/#benefits">Benefits</Link>
          <Link to="/dashboard">Dashboard</Link>
        </div>

        <div className="flex gap-3">
          <button className="text-sm text-textMuted">Log in</button>
          <button className="px-4 py-2 rounded-md bg-primary text-bg text-sm font-semibold shadow-glow">
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
}
