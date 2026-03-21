"use client";

import Link from "next/link";
import { useState } from "react";

export default function Product() {
  const platforms = [
    {
      id: "recruit",
      name: "VeloxaRecruit",
      tagline: "Infrastructure",
      description: "A production-ready platform that revolutionizes how you find, assess, and hire top talent with automated CV screening and multi-modal interviews.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: "from-primary-cyan to-primary-blue",
    },
    {
      id: "match",
      name: "SmartMatch",
      tagline: "Candidate Experience",
      description: "Personalized recommendations and tailored CV generation.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: "from-blue-500 to-indigo-600",
    },
    {
      id: "leadgen",
      name: "LeadGen AI",
      tagline: "Growth",
      description: "Identify and qualify prospects with behavioral AI.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </svg>
      ),
      color: "from-emerald-500 to-teal-600",
    },
    {
      id: "telegram",
      name: "Telegram Booking",
      tagline: "Scheduling",
      description: "Telegram appointment system storing customer data in Google Sheets and logging times in Calendar.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      ),
      color: "from-cyan-500 to-blue-600",
    },
    {
      id: "whatsapp",
      name: "WhatsApp Food",
      tagline: "Commerce",
      description: "Restaurant system where agents take orders, share menu URLs, and send WhatsApp receipts.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: "from-green-500 to-emerald-600",
    },
    {
      id: "demoforge",
      name: "DemoForge",
      tagline: "Prototyping",
      description: "Powered by Claude, visualize and build a working demo of your idea before full production.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      color: "from-purple-500 to-pink-600",
    },
  ];

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  return (
    <section id="platforms" className="section-padding bg-[#020617] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="section-header mb-24">
          <h2 className="text-5xl md:text-7xl font-display font-black text-white tracking-tighter mb-6">
            Core <span className="gradient-text">Platforms</span>
          </h2>
          <p className="text-white/40 text-xl font-medium max-w-2xl mx-auto">
            A unified suite of AI primitives designed to automate the heavy lifting of modern business.
          </p>
        </div>

        {/* Numbered Flowing Platform Grid */}
        <div className="relative mt-12 min-h-[800px]">
          {/* Flowing Rope / Line connection background */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block z-0" preserveAspectRatio="none" viewBox="0 0 100 100">
            <path 
              d="M 16.66 25 L 83.33 25 Q 95 25 95 50 Q 95 75 83.33 75 L 16.66 75" 
              fill="none" 
              stroke="rgba(255,255,255,0.05)" 
              strokeWidth="0.5" 
            />
            {/* Animated flowing line */}
            <path 
              d="M 16.66 25 L 83.33 25 Q 95 25 95 50 Q 95 75 83.33 75 L 16.66 75" 
              fill="none" 
              stroke="url(#neonGradient)" 
              strokeWidth="0.75" 
              strokeDasharray="15 85"
              strokeLinecap="round"
            >
              <animate attributeName="stroke-dashoffset" from="100" to="0" dur="4s" repeatCount="indefinite" />
            </path>
            <defs>
              <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00f2fe" />
                <stop offset="50%" stopColor="#4facfe" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
          </svg>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {platforms.map((platform, index) => (
              <div
                key={platform.id}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
                }}
                className={`group relative bg-[#0a0f25] border border-white/10 rounded-[2.5rem] p-10 overflow-hidden transition-all duration-500 hover:border-white/20 hover:-translate-y-1 shadow-lg`}
              >
                {/* Large Background Number */}
                <div className="absolute top-4 right-6 text-[120px] font-black text-white/[0.02] z-0 pointer-events-none tracking-tighter transition-all duration-700 group-hover:text-white/[0.05]">
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Spotlight Effect */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"
                  style={{
                    background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.06), transparent 40%)`
                  }}
                />

                <div className="relative z-10 h-full flex flex-col">
                  <div className={`w-14 h-14 bg-gradient-to-br ${platform.color} rounded-2xl flex items-center justify-center text-navy-950 mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    {platform.icon}
                  </div>
                  
                  <div className="mt-auto">
                    <span className="text-primary-cyan text-[10px] font-black tracking-[0.3em] uppercase mb-3 block opacity-70">
                      {platform.tagline}
                    </span>
                    <h3 className={`text-3xl font-display font-black text-white mb-6 tracking-tighter`}>
                      {platform.name}
                    </h3>
                    <p className="text-white/50 text-base leading-relaxed mb-8 max-w-sm">
                      {platform.description}
                    </p>
                    
                    {platform.id === "recruit" ? (
                      <Link
                        href="/veloxarecruit"
                        className="inline-flex items-center gap-3 text-white font-bold text-sm uppercase tracking-widest group/link"
                      >
                        Explore
                        <div className="w-10 h-[1px] bg-white/20 group-hover/link:w-16 group-hover/link:bg-primary-cyan transition-all" />
                      </Link>
                    ) : platform.id === "match" ? (
                      <Link
                        href="/smartmatch"
                        className="inline-flex items-center gap-3 text-white font-bold text-sm uppercase tracking-widest group/link"
                      >
                        Explore
                        <div className="w-10 h-[1px] bg-white/20 group-hover/link:w-16 group-hover/link:bg-primary-cyan transition-all" />
                      </Link>
                    ) : platform.id === "leadgen" ? (
                      <Link
                        href="/leadgen"
                        className="inline-flex items-center gap-3 text-white font-bold text-sm uppercase tracking-widest group/link"
                      >
                        Explore
                        <div className="w-10 h-[1px] bg-white/20 group-hover/link:w-16 group-hover/link:bg-primary-cyan transition-all" />
                      </Link>
                    ) : platform.id === "telegram" ? (
                      <Link
                        href="/telegram"
                        className="inline-flex items-center gap-3 text-white font-bold text-sm uppercase tracking-widest group/link"
                      >
                        Explore
                        <div className="w-10 h-[1px] bg-white/20 group-hover/link:w-16 group-hover/link:bg-primary-cyan transition-all" />
                      </Link>
                    ) : platform.id === "whatsapp" ? (
                      <Link
                        href="/whatsapp"
                        className="inline-flex items-center gap-3 text-white font-bold text-sm uppercase tracking-widest group/link"
                      >
                        Explore
                        <div className="w-10 h-[1px] bg-white/20 group-hover/link:w-16 group-hover/link:bg-primary-cyan transition-all" />
                      </Link>
                    ) : platform.id === "demoforge" ? (
                      <Link
                        href="/demoforge"
                        className="inline-flex items-center gap-3 text-white font-bold text-sm uppercase tracking-widest group/link"
                      >
                        Explore
                        <div className="w-10 h-[1px] bg-white/20 group-hover/link:w-16 group-hover/link:bg-primary-cyan transition-all" />
                      </Link>
                    ) : (
                      <a
                        href="#cta"
                        className="inline-flex items-center gap-3 text-white font-bold text-sm uppercase tracking-widest group/link"
                      >
                        Explore
                        <div className="w-10 h-[1px] bg-white/20 group-hover/link:w-16 group-hover/link:bg-primary-cyan transition-all" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Aesthetic Corner Gradient */}
                <div className={`absolute -bottom-24 -left-24 w-64 h-64 bg-gradient-to-br ${platform.color} opacity-[0.03] group-hover:opacity-[0.1] blur-3xl transition-opacity duration-500 flex flex-shrink-0`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
