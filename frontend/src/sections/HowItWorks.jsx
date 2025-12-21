import {
  CreditCard,
  RefreshCcw,
  BarChart3,
  ChevronRight
} from "lucide-react";

import heroPic from '../assets/heroPic.jpg';

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Intelligent Checkout",
      description: "Each payment begins with structured validation and context capture — method, issuer, latency signals, and metadata are recorded before authorization.",
      icon: CreditCard,
      accent: "from-[#fbbf24] to-[#F4E4B5]"
    },
    {
      step: "02",
      title: "Smart Retry Orchestration",
      description: "Failures are classified in real time. Only retryable errors are retried, using adaptive logic based on issuer behavior and previous attempts.",
      icon: RefreshCcw,
      accent: "from-[#fbbf24] via-[#E8D29D] to-[#F4E4B5]"
    },
    {
      step: "03",
      title: "Live Intelligence & Insights",
      description: "Every state transition emits metrics. Teams gain immediate visibility into success rate, retries, failures, and latency patterns.",
      icon: BarChart3,
      accent: "from-[#F4E4B5] to-[#fbbf24]"
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      
      {/* Dynamic gradient background that matches the image */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0D0E15] via-[#0C0D13] to-[#0A0B10]" />
      
      {/* Subtle gradient overlay to match Instagram aesthetic */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#1E1F2A]/30 via-transparent to-[#2A2B3A]/10" />
      
      {/* Soft glow effect where image will blend */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[800px] bg-gradient-to-l from-[#fbbf24]/5 via-transparent to-transparent blur-[120px] opacity-40" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Clean header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#fbbf24]/50" />
            <span className="text-sm font-medium tracking-[0.2em] uppercase text-[#fbbf24]">
              How It Works
            </span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#fbbf24]/50" />
          </div>

          <h2 className="text-4xl md:text-5xl font-light text-white">
            Payments as
            <span className="block mt-3 font-medium text-white">
              Intelligent Systems
            </span>
          </h2>
          
          <p className="mt-6 text-lg text-gray-300/80 leading-relaxed">
            Citadel Flow introduces an intelligence layer around your checkout — 
            capturing signals, handling failures deliberately, and exposing 
            real-time insights.
          </p>
        </div>

        {/* Clean layout with floating image effect */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Steps - Left 2 columns */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {steps.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="group bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-[#fbbf24]/30 transition-all duration-500 hover:translate-x-2"
                  >
                    
                    {/* Step header */}
                    <div className="flex items-start gap-6 mb-6">
                      <div className="relative shrink-0">
                        <div className="absolute -inset-3 bg-gradient-to-r from-[#fbbf24] to-[#F4E4B5] rounded-xl blur-lg opacity-20" />
                        <div className="relative w-16 h-16 rounded-xl bg-gradient-to-br from-[#121316] to-[#0D0E10] border border-white/10 flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-xs text-gray-400">Step</div>
                            <div className="text-xl font-bold text-[#fbbf24]">{item.step}</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#fbbf24]/10 to-[#fbbf24]/5 border border-[#fbbf24]/10 flex items-center justify-center">
                            <Icon className="text-[#fbbf24]" size={22} />
                          </div>
                          <h3 className="text-2xl font-semibold text-white">
                            {item.title}
                          </h3>
                        </div>

                        {/* Description */}
                        <p className="text-gray-300/80 leading-relaxed mb-6">
                          {item.description}
                        </p>

                        {/* Simple CTA */}
                        <div className="flex items-center gap-2 text-sm text-[#fbbf24]/80 group-hover:text-[#fbbf24] transition-colors">
                          <span className="font-medium">Learn more</span>
                          <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Floating Image Container - Right column */}
          <div className="relative lg:col-span-1">
            <div className="sticky top-32">
              
              {/* Main image with seamless blend effect */}
              <div className="relative">
                {/* Image container with gradient borders for seamless blend */}
                <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#0D0E15] to-[#0A0B10] border border-white/[0.08] shadow-2xl shadow-black/40">
                  
                  {/* Floating hand effect container */}
                  <div className="relative aspect-[3/4] overflow-hidden">
                    {/* The main image - will blend with background */}
                    <img 
                      src={heroPic}
                      alt="Payment Intelligence Interface"
                      className="w-full h-full object-cover object-center"
                    />
                    
                    {/* Overlay gradients for seamless blend */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10" />
                    
                    {/* Subtle floating effect elements */}
                    <div className="absolute top-6 left-6">
                      <div className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20">
                        <div className="flex items-center gap-2">
                    
                          <span className="text-xs font-medium text-white">Transparancy</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content overlay at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                    <h3 className="text-xl font-semibold text-white mb-2">Payment Intelligence</h3>
                    <p className="text-sm text-gray-300">
                      Real-time monitoring and intelligent insights for payment performance
                    </p>
                  </div>
                </div>
                
                {/* Floating UI elements around the image */}
                <div className="absolute -top-3 -right-3 w-16 h-16 rounded-full bg-gradient-to-br from-[#fbbf24] to-[#F4E4B5] flex items-center justify-center shadow-lg shadow-[#fbbf24]/20">
                  <div className="text-black text-sm font-bold">↑23%</div>
                </div>
                
                <div className="absolute -bottom-2 -left-2 w-12 h-12 rounded-full bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
              </div>
              
              {/* Stats card that appears to float */}
              <div className="mt-8 bg-gradient-to-br from-white/10 to-white/[0.05] backdrop-blur-sm border border-white/10 rounded-2xl p-6 transform -translate-x-4">
                <h4 className="font-medium text-white mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#fbbf24]" />
                  Performance Metrics
                </h4>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-3 rounded-lg bg-white/5">
                    <div className="text-2xl font-bold text-white">98.7%</div>
                    <div className="text-xs text-gray-300 mt-1">Success Rate</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-white/5">
                    <div className="text-2xl font-bold text-white">23%</div>
                    <div className="text-xs text-gray-300 mt-1">Recovery Uplift</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-white/5">
                    <div className="text-2xl font-bold text-white">≤200ms</div>
                    <div className="text-xs text-gray-300 mt-1">Avg Latency</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Clean bottom statement */}
        <div className="mt-24 max-w-3xl mx-auto text-center">
          <div className="pt-8 border-t border-white/10">
            <p className="text-lg text-gray-300/90 leading-relaxed">
              Instead of reacting after failures happen, Citadel Flow continuously 
              observes, learns, and improves payment outcomes — giving teams 
              <span className="font-medium text-white"> confidence, clarity, and control</span>.
            </p>
            
            <div className="flex items-center justify-center gap-4 mt-8">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#fbbf24]/30" />
              <span className="text-sm font-medium tracking-wider text-[#fbbf24]">
                ENTERPRISE-GRADE INTELLIGENCE
              </span>
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#fbbf24]/30" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}