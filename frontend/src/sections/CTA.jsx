import { useNavigate } from "react-router-dom";
import { Sparkle, ArrowRight, Shield, TrendingUp } from "lucide-react";

export default function CTA() {
  const navigate = useNavigate();

  return (
    <section className="relative bg-[#0A0B0D] py-40 overflow-hidden">

      {/* Premium background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0D0E10]/50 to-transparent" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-[#fbbf24]/5 via-transparent to-blue-500/5 blur-[120px] animate-pulse" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-tl from-[#fbbf24]/3 via-transparent to-purple-500/5 blur-[100px]" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.015)_1px,transparent_1px)] bg-[size:60px_60px] opacity-10" />
      
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l border-t border-[#fbbf24]/10" />
      <div className="absolute top-0 right-0 w-32 h-32 border-r border-t border-[#fbbf24]/10" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l border-b border-[#fbbf24]/10" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r border-b border-[#fbbf24]/10" />

      <div className="relative max-w-5xl mx-auto px-6 text-center">

        {/* Premium header with sparkle accents */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#fbbf24]/40" />
          <div className="flex items-center gap-2">
            {/* <Sparkle className="w-4 h-4 text-[#fbbf24]" fill="#fbbf24" /> */}
            <span className="text-sm font-medium tracking-[0.2em] uppercase text-[#fbbf24]">
              Ready to Transform
            </span>
            {/* <Sparkle className="w-4 h-4 text-[#fbbf24]" fill="#fbbf24" /> */}
          </div>
          <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#fbbf24]/40" />
        </div>

        {/* Main headline with gradient */}
        <h2 className="text-5xl md:text-6xl font-light text-white leading-tight tracking-tight">
          Turn Payment Failures
          <span className="block mt-3 font-medium bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
            Into Revenue Opportunities
          </span>
        </h2>

        {/* Description with icons */}
        <div className="mt-10 max-w-3xl mx-auto">
          <p className="text-xl text-gray-400/90 leading-relaxed">
            Explore real-time payment intelligence, smart retry orchestration, 
            and actionable insights powered by our production-grade platform.
          </p>
          
          {/* Feature badges */}
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/5">
              <TrendingUp className="w-4 h-4 text-[#fbbf24]" />
              <span className="text-sm text-gray-300">+15-30% Recovery</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/5">
              <Shield className="w-4 h-4 text-[#fbbf24]" />
              <span className="text-sm text-gray-300">Enterprise-Grade</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/5">
              <div className="w-2 h-2 rounded-full bg-[#fbbf24] animate-pulse" />
              <span className="text-sm text-gray-300">Real-Time Insights</span>
            </div>
          </div>
        </div>

        {/* Premium CTA buttons */}
        <div className="mt-16 flex flex-col sm:flex-row justify-center items-center gap-5">
          {/* Primary button */}
          <button
            onClick={() => navigate("/dashboard")}
            className="group relative px-12 py-5 rounded-xl overflow-hidden"
          >
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#fbbf24] via-[#E8D29D] to-[#F4E4B5] blur opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Button content */}
            <div className="relative bg-gradient-to-br from-[#fbbf24] to-[#B8943C] text-black font-semibold rounded-xl px-12 py-4 flex items-center gap-3 transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(214,180,106,0.4)] group-hover:translate-y-[-2px]">
              <span className="text-lg">Open Dashboard</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </div>
          </button>

          {/* Secondary button */}
          <button className="group relative px-12 py-5 rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-white/5 border border-white/10 rounded-xl backdrop-blur-sm" />
            <div className="relative flex items-center gap-3 text-white font-medium px-12 py-4">
              <span>View Architecture</span>
              <ArrowRight className="w-5 h-5 opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
            </div>
            
            {/* Hover effect */}
            <div className="absolute inset-0 border border-[#fbbf24]/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>
        </div>

    
        

        {/* Bottom accent */}
        <div className="mt-20 mx-auto w-48 h-px bg-gradient-to-r from-transparent via-[#fbbf24]/30 to-transparent" />
      </div>
    </section>
  );
}