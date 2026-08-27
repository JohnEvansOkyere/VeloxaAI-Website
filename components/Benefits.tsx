"use client";

import { useEffect, useRef, useState } from "react";

export default function Benefits() {
  const [hoursVisible, setHoursVisible] = useState(false);
  const [hoursCount, setHoursCount] = useState(0);
  const heroCardRef = useRef<HTMLDivElement>(null);
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hoursVisible) {
            setHoursVisible(true);
          }
        });
      },
      { threshold: 0.4 }
    );
    if (heroCardRef.current) observer.observe(heroCardRef.current);
    return () => observer.disconnect();
  }, [hoursVisible]);

  useEffect(() => {
    if (!hoursVisible) return;
    const target = 32;
    const duration = 1800;
    const steps = 60;
    let current = 0;
    const interval = setInterval(() => {
      current++;
      setHoursCount(Math.floor((target * current) / steps));
      if (current >= steps) {
        setHoursCount(target);
        clearInterval(interval);
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [hoursVisible]);

  return (
    <section id="benefits" className="section-padding bg-navy-950 relative overflow-hidden">
      {/* Ambient backdrop */}
      <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] bg-primary-cyan/[0.04] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary-blue/[0.04] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="section-header">
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/10 mb-6">
            <span className="w-1.5 h-1.5 bg-primary-cyan rounded-full animate-pulse" />
            <span className="text-[11px] font-bold text-white/70 tracking-[0.25em] uppercase">
              Why teams switch to Veloxa
            </span>
          </div>
          <h2 className="section-title tracking-tighter">
            Less doing. <span className="gradient-text">More winning.</span>
          </h2>
          <p className="section-description">
            Veloxa is not another tool to learn. It is a workforce that joins your team on day one
            and starts paying for itself before the month closes.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-[auto_auto] gap-6">
          {/* CARD A — Large hero with animated counter */}
          <div
            ref={heroCardRef}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              setSpotlight({ x: e.clientX - rect.left, y: e.clientY - rect.top });
            }}
            className="md:col-span-7 md:row-span-1 relative group bg-gradient-to-br from-navy-900 via-navy-900/90 to-navy-950 border border-white/10 rounded-3xl p-10 lg:p-12 overflow-hidden hover:border-primary-cyan/30 transition-all duration-500 min-h-[360px] flex flex-col justify-between"
          >
            {/* Cursor spotlight */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: `radial-gradient(500px circle at ${spotlight.x}px ${spotlight.y}px, rgba(0,251,255,0.08), transparent 40%)`,
              }}
            />
            {/* Subtle grid backdrop */}
            <div
              className="absolute inset-0 opacity-[0.07] pointer-events-none"
              style={{
                backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
                backgroundSize: "32px 32px",
                maskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
              }}
            />

            <div className="relative z-10">
              <span className="text-[10px] font-black tracking-[0.3em] uppercase text-primary-cyan/80 mb-6 block">
                The big one
              </span>
              <div className="flex items-end gap-4 mb-4">
                <div className="font-display font-black text-7xl md:text-8xl gradient-text leading-none tracking-tighter drop-shadow-[0_0_20px_rgba(0,251,255,0.4)]">
                  {hoursCount}
                </div>
                <div className="pb-3">
                  <div className="text-2xl font-display font-black text-white">+ hours</div>
                  <div className="text-xs text-white/50 uppercase tracking-widest">reclaimed weekly</div>
                </div>
              </div>
              <p className="text-white/70 text-lg leading-relaxed max-w-md">
                Stop paying senior people to chase CVs, follow up leads, and send WhatsApp receipts.
                Veloxa hands those nights and weekends back to your team.
              </p>
            </div>

            <div className="relative z-10 flex items-center gap-3 pt-8 mt-6 border-t border-white/5">
              <span className="flex h-2 w-2 rounded-full bg-primary-cyan animate-pulse" />
              <span className="text-xs text-white/50 tracking-wider">
                Running in production for Ghanaian operators today
              </span>
            </div>
          </div>

          {/* CARD B — Quote-style card with cyan gradient accent */}
          <div className="md:col-span-5 md:row-span-1 relative group bg-gradient-to-br from-primary-cyan/[0.08] via-navy-900 to-primary-blue/[0.08] border border-primary-cyan/20 rounded-3xl p-10 overflow-hidden hover:border-primary-cyan/40 transition-all duration-500 min-h-[360px] flex flex-col justify-between">
            <svg
              className="absolute -top-2 -left-2 w-32 h-32 text-primary-cyan/10 group-hover:text-primary-cyan/20 transition-colors duration-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9.583 17.321C8.553 16.227 8 15 8 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C18.553 16.227 18 15 18 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
            </svg>

            <div className="relative z-10">
              <p className="text-white text-xl md:text-2xl font-display font-bold leading-snug tracking-tight mb-6">
                If the project is a sliding window, everything in the configurator should be of benefit to a sliding window.
              </p>
              <p className="text-white/60 text-sm leading-relaxed">
                Real feedback from a first demo &mdash; logged verbatim, mapped to an implementation, and shipped the
                following day.
              </p>
            </div>

            <div className="relative z-10 pt-6 border-t border-white/10">
              <div className="text-[10px] font-bold text-primary-cyan tracking-[0.2em] uppercase mb-1">
                Client feedback, first demo
              </div>
              <div className="text-xs text-white/40 mb-4">
                Glass &amp; aluminium fabricator &middot; Accra
              </div>
              <a
                href="/work/fabrication-ops-platform"
                className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-primary-cyan transition-colors"
              >
                Read the engagement
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* CARD C — Metric card with mini bar chart */}
          <div className="md:col-span-4 relative group bg-navy-900/40 border border-white/5 rounded-3xl p-8 overflow-hidden hover:border-primary-cyan/30 transition-all duration-500">
            <div className="flex items-end justify-between mb-6">
              <span className="text-[10px] font-black tracking-[0.3em] uppercase text-white/40">
                Cost
              </span>
              <span className="text-[10px] font-bold text-primary-cyan">vs. headcount</span>
            </div>

            <div className="font-display font-black text-6xl text-white tracking-tighter mb-3 leading-none">
              70<span className="gradient-text">%</span>
            </div>
            <p className="text-white/70 font-semibold mb-1">Lower hiring costs.</p>
            <p className="text-white/40 text-sm leading-relaxed mb-8">
              The same screening output that used to need a four-person desk.
            </p>

            {/* Mini bars */}
            <div className="flex items-end gap-2 h-16">
              <div className="flex-1 flex flex-col items-center gap-1">
                <div className="w-full bg-white/10 rounded-sm transition-all duration-1000 group-hover:bg-white/20" style={{ height: "85%" }} />
                <span className="text-[9px] text-white/30 uppercase tracking-wider">Before</span>
              </div>
              <div className="flex-1 flex flex-col items-center gap-1">
                <div className="w-full bg-gradient-to-t from-primary-cyan to-primary-blue rounded-sm shadow-[0_0_15px_rgba(0,251,255,0.4)] transition-all duration-1000" style={{ height: "26%" }} />
                <span className="text-[9px] text-primary-cyan font-bold uppercase tracking-wider">With Veloxa</span>
              </div>
            </div>
          </div>

          {/* CARD D — Built-in-Ghana trust card with map accent */}
          <div className="md:col-span-4 relative group bg-navy-900/40 border border-white/5 rounded-3xl p-8 overflow-hidden hover:border-primary-cyan/30 transition-all duration-500">
            {/* Africa silhouette accent */}
            <svg
              className="absolute -right-10 -bottom-10 w-56 h-56 text-primary-cyan/5 group-hover:text-primary-cyan/15 transition-colors duration-700"
              viewBox="0 0 100 120"
              fill="currentColor"
            >
              <path d="M50 10 C 65 12, 72 22, 75 35 C 78 48, 82 55, 78 68 C 75 80, 70 92, 60 100 C 52 108, 45 110, 40 105 C 35 100, 30 92, 28 82 C 25 70, 22 60, 25 48 C 28 35, 32 22, 40 14 C 44 11, 47 10, 50 10 Z" />
            </svg>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="w-1.5 h-4 bg-red-500 rounded-sm" />
                <span className="w-1.5 h-4 bg-yellow-400 rounded-sm" />
                <span className="w-1.5 h-4 bg-green-500 rounded-sm" />
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-white/50 ml-1">
                  Built in Accra
                </span>
              </div>

              <h3 className="font-display font-black text-2xl text-white mb-3 tracking-tight leading-tight">
                Battle-tested for the way we actually do business.
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                MTN. WhatsApp. Telegram. Mobile money. Sketchy networks. Our systems are designed for
                Ghanaian reality &mdash; not a Silicon Valley demo.
              </p>
            </div>
          </div>

          {/* CARD E — Security / data sovereignty card with lock motif */}
          <div className="md:col-span-4 relative group bg-gradient-to-br from-navy-900 to-navy-950 border border-white/5 rounded-3xl p-8 overflow-hidden hover:border-primary-cyan/30 transition-all duration-500">
            <div className="relative z-10 h-full flex flex-col">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-primary-cyan/10 group-hover:border-primary-cyan/30 transition-all duration-500">
                <svg className="w-7 h-7 text-primary-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>

              <h3 className="font-display font-black text-2xl text-white mb-3 tracking-tight">
                Your data stays your data.
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Isolated environments. Encrypted at rest and in transit. We do not train on your business.
                Ever.
              </p>

              <div className="mt-auto pt-6 border-t border-white/5 flex items-center gap-4">
                <span className="text-[10px] font-bold tracking-widest uppercase text-white/40">Posture</span>
                <div className="flex gap-2">
                  <span className="px-2 py-0.5 rounded-md bg-white/5 text-[10px] font-bold text-white/70">SOC-aligned</span>
                  <span className="px-2 py-0.5 rounded-md bg-white/5 text-[10px] font-bold text-white/70">GDPR-ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
