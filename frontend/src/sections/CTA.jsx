import { useNavigate } from "react-router-dom";

export default function CTA() {
  const navigate = useNavigate();

  return (
    <section className="relative bg-[#0A0B0D] py-28">
      {/* Soft background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a1a1a] to-transparent" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">
          Turn Payment Failures Into Revenue
        </h2>

        <p className="mt-5 text-gray-300 text-lg">
          Explore real-time payment intelligence, retry uplift,
          and failure insights powered by a production-grade backend.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button
            onClick={() => navigate("/dashboard")}
            className="px-8 py-3 bg-[#D6B46A] text-black font-semibold rounded-md shadow-[0_0_60px_rgba(214,180,106,0.35)]"
          >
            Open Dashboard
          </button>

          <button className="px-8 py-3 border border-white/20 text-white rounded-md hover:bg-white/5">
            View Architecture
          </button>
        </div>
      </div>
    </section>
  );
}
