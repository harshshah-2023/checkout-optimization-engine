import { 
  TrendingUp, 
  Eye, 
  Gauge, 
  BarChart, 
  Cpu, 
  Users,
  ChevronRight
} from "lucide-react";

export default function Benefits() {
  const benefits = [
    {
      title: "Higher Success Rates",
      description: "Intelligent retry logic reduces false declines and improves authorization success.",
      icon: TrendingUp,
      stat: "+15-30%"
    },
    {
      title: "Full Failure Visibility",
      description: "Granular diagnostics across issuers, networks, and payment methods.",
      icon: Eye,
      stat: "100%"
    },
    {
      title: "Latency Optimization",
      description: "Track p95 latency to identify performance bottlenecks before they impact conversions.",
      icon: Gauge,
      stat: "≤200ms"
    },
    {
      title: "Data-Driven Decisions",
      description: "Actionable metrics guide backlog prioritization and product strategy.",
      icon: BarChart,
      stat: "Data-First"
    },
    {
      title: "Scalable Architecture",
      description: "Modular services enable seamless addition of payment methods and analytics.",
      icon: Cpu,
      stat: "99.99%"
    },
    {
      title: "Built for FinTech",
      description: "Designed with real-world payment flows and operational needs in mind.",
      icon: Users,
      stat: "Enterprise"
    }
  ];

  return (
    <section className="relative bg-[#0A0B0D] py-32">

      {/* Subtle background accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#fbbf24]/5 via-transparent to-transparent blur-[100px]" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Clean header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#fbbf24]/40" />
            <span className="text-sm font-medium tracking-widest text-[#fbbf24]">
              STRATEGIC ADVANTAGES
            </span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#fbbf24]/40" />
          </div>

          <h2 className="text-4xl md:text-5xl font-light text-white">
            Built for payments at
            <span className="block mt-3 font-medium text-white">enterprise scale</span>
          </h2>
          
          <p className="mt-6 text-lg text-gray-400/80">
            Engineered to solve mission-critical payment problems that impact
            revenue, reliability, and user experience.
          </p>
        </div>

        {/* Elegant grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-b from-[#121316] to-[#0D0E10] border border-white/10 rounded-xl p-8 hover:border-[#fbbf24]/20 transition-all duration-300"
              >
                
                {/* Icon with subtle effect */}
                <div className="relative inline-flex mb-6">
                  <div className="absolute inset-0 bg-[#fbbf24]/10 blur-md rounded-xl" />
                  <div className="relative w-14 h-14 rounded-xl bg-[#0D0E10] border border-white/5 flex items-center justify-center">
                    <Icon className="text-[#fbbf24]" size={24} />
                  </div>
                </div>

                {/* Stat badge */}
                <div className="mb-4">
                  <span className="text-3xl font-bold text-white">
                    {benefit.stat}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {benefit.title}
                </h3>

                {/* Clean description */}
                <p className="text-gray-400/80 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Subtle hover indicator */}
                <div className="mt-6 flex items-center gap-2 text-sm text-[#fbbf24]/60 group-hover:text-[#fbbf24] transition-colors">
                  <span>Learn more</span>
                  <ChevronRight className="w-4 h-4" />
                </div>

                {/* Bottom accent line */}
                <div className="mt-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-[#fbbf24]/30 transition-all duration-300" />
              </div>
            );
          })}
        </div>

        {/* Professional statement */}
        <div className="mt-24 max-w-3xl mx-auto text-center">
          <div className="relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-[#fbbf24]/30 to-transparent" />
            
            <p className="text-lg text-gray-300/90 leading-relaxed">
              Each feature delivers measurable impact on payment performance,
              backed by real-world implementation data and enterprise-grade reliability.
            </p>
            
            <div className="flex items-center justify-center gap-4 mt-8">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#fbbf24]/20" />
              <span className="text-sm font-medium tracking-wider text-[#fbbf24]/60">
                ENTERPRISE READY
              </span>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#fbbf24]/20" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}