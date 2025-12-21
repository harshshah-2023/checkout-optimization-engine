import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setShowModal(true);
  }

  return (
    <section className="min-h-screen bg-[#0A0B0D] text-white flex items-center justify-center px-6">

      {/* LOGIN CARD */}
      <div className="relative w-full max-w-md bg-[#121316] border border-white/10 rounded-2xl p-10 shadow-2xl">

        {/* BRAND */}
        <h1 className="text-2xl font-semibold text-center">
          Citadel<span className="text-yellow-400">Flow</span>
        </h1>
        <p className="mt-2 text-sm text-gray-400 text-center">
          Sign in to your dashboard
        </p>

        {/* FORM */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="text-sm text-gray-400">Email</label>
            <input
              type="email"
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-2 w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400"
            />
          </div>

          <div>
            <label className="text-sm text-gray-400">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-2 w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-6 py-3 rounded-lg bg-yellow-400 text-black font-semibold shadow-[0_0_30px_rgba(234,179,8,0.35)] hover:scale-[1.02] transition"
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-xs text-gray-500 text-center">
          This login is part of a prototype system.
        </p>
      </div>

      {/* PROTOTYPE MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-[#121316] border border-white/10 rounded-xl p-8 max-w-sm w-full text-center">

            <h2 className="text-lg font-semibold">
              Prototype Mode
            </h2>

            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              Authentication is intentionally disabled in this prototype.
              The focus of Citadel Flow is payment flows, retries,
              settlement, and real-time analytics.
            </p>

            <button
              onClick={() => {
                setShowModal(false);
                navigate("/dashboard");
              }}
              className="mt-6 w-full py-2 rounded-lg bg-yellow-400 text-black font-semibold hover:scale-[1.02] transition"
            >
              Continue to Dashboard
            </button>

            <button
              onClick={() => setShowModal(false)}
              className="mt-3 w-full py-2 text-sm text-gray-400 hover:text-white transition"
            >
              Cancel
            </button>

          </div>
        </div>
      )}

    </section>
  );
}
