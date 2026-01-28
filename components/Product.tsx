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
      size: "md",
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
      size: "sm",
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
      size: "sm",
      color: "from-emerald-500 to-teal-600",
    },
    {
      id: "support",
      name: "SmartSupport",
      tagline: "Automation",
      description: "Autonomous agents deployed on WhatsApp and web to handle inquiries 24/7.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
      size: "md",
      color: "from-orange-500 to-pink-600",
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

        {/* World-Class Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 min-h-[800px]">
          {platforms.map((platform) => (
            <div
              key={platform.id}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
              }}
              className={`group relative bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-10 overflow-hidden transition-all duration-500 hover:border-white/20 
                ${platform.size === 'lg' ? 'md:col-span-2 md:row-span-2' : ''}
                ${platform.size === 'md' ? 'md:col-span-1 md:row-span-1' : ''}
              `}
            >
              {/* Spotlight Effect */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.06), transparent 40%)`
                }}
              />

              <div className="relative z-10 h-full flex flex-col">
                <div className={`w-12 h-12 bg-gradient-to-br ${platform.color} rounded-2xl flex items-center justify-center text-navy-950 mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  {platform.icon}
                </div>
                
                <div className="mt-auto">
                  <span className="text-primary-cyan text-[10px] font-black tracking-[0.3em] uppercase mb-3 block opacity-70">
                    {platform.tagline}
                  </span>
                  <h3 className={`${platform.size === 'lg' ? 'text-5xl' : 'text-3xl'} font-display font-black text-white mb-6 tracking-tighter`}>
                    {platform.name}
                  </h3>
                  <p className="text-white/50 text-lg leading-relaxed mb-8 max-w-sm">
                    {platform.description}
                  </p>
                  
                  {platform.id === "recruit" ? (
                    <Link
                      href="/veloxarecruit"
                      className="inline-flex items-center gap-3 text-white font-bold text-sm uppercase tracking-widest group/link"
                    >
                      Learn More
                      <div className="w-10 h-[1px] bg-white/20 group-hover/link:w-16 group-hover/link:bg-primary-cyan transition-all" />
                    </Link>
                  ) : platform.id === "match" ? (
                    <Link
                      href="/smartmatch"
                      className="inline-flex items-center gap-3 text-white font-bold text-sm uppercase tracking-widest group/link"
                    >
                      Learn More
                      <div className="w-10 h-[1px] bg-white/20 group-hover/link:w-16 group-hover/link:bg-primary-cyan transition-all" />
                    </Link>
                  ) : platform.id === "leadgen" ? (
                    <Link
                      href="/leadgen"
                      className="inline-flex items-center gap-3 text-white font-bold text-sm uppercase tracking-widest group/link"
                    >
                      Learn More
                      <div className="w-10 h-[1px] bg-white/20 group-hover/link:w-16 group-hover/link:bg-primary-cyan transition-all" />
                    </Link>
                  ) : (
                    <a
                      href="#cta"
                      className="inline-flex items-center gap-3 text-white font-bold text-sm uppercase tracking-widest group/link"
                    >
                      Learn More
                      <div className="w-10 h-[1px] bg-white/20 group-hover/link:w-16 group-hover/link:bg-primary-cyan transition-all" />
                    </a>
                  )}
                </div>
              </div>

              {/* Aesthetic Corner Gradient */}
              <div className={`absolute -bottom-24 -right-24 w-64 h-64 bg-gradient-to-br ${platform.color} opacity-[0.03] group-hover:opacity-[0.1] blur-3xl transition-opacity duration-500`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
