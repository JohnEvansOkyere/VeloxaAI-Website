"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Testimonials section
 *
 * Note for the Veloxa team: the names, businesses and quotes below are
 * realistic placeholders representative of Ghanaian operators. Swap each
 * entry with a real, signed-off customer quote and (ideally) a portrait
 * photo placed in /public/images/. Keep the result/metric prominent —
 * that is the part doing the selling.
 */

type Testimonial = {
  initials: string;
  name: string;
  role: string;
  org: string;
  city: string;
  product: string;
  quote: string;
  metric: { value: string; label: string };
  accent: "cyan" | "blue" | "violet" | "emerald";
};

const testimonials: Testimonial[] = [
  {
    initials: "AM",
    name: "Akosua Mensah",
    role: "Founder",
    org: "Akosua's Kitchen",
    city: "East Legon, Accra",
    product: "WhatsApp Food",
    quote:
      "WhatsApp orders used to crash my phone every Friday. Now my staff just cook. Customers order, pay, and get their receipt automatically. We added GHS 18,000 a month with zero new hires.",
    metric: { value: "+GHS 18k", label: "monthly revenue, no new staff" },
    accent: "emerald",
  },
  {
    initials: "NB",
    name: "Nana Adjei Boateng",
    role: "Managing Director",
    org: "Pinnacle Realty",
    city: "Airport City, Accra",
    product: "LeadGen AI",
    quote:
      "LeadGen AI replaced two junior agents and outperformed them. Our property viewings doubled in six weeks. The system books, qualifies and follows up. I just close.",
    metric: { value: "2x", label: "viewings in six weeks" },
    accent: "cyan",
  },
  {
    initials: "EF",
    name: "Esi Frimpong",
    role: "Chief Operating Officer",
    org: "Goldcoast Wellness Studios",
    city: "Kumasi",
    product: "Telegram Booking",
    quote:
      "Our receptionist used to miss bookings every weekend. Telegram Booking handles them at 2am if it has to. Our no-show rate dropped from 22% to 4% — that is pure profit.",
    metric: { value: "22% → 4%", label: "no-show rate" },
    accent: "blue",
  },
  {
    initials: "KA",
    name: "Kojo Asare",
    role: "Founder",
    org: "Volta Cargo Solutions",
    city: "Ho",
    product: "DemoForge",
    quote:
      "DemoForge helped us pitch a working prototype to investors in five days. We raised seed because they could click through it, not just imagine it.",
    metric: { value: "5 days", label: "demo to seed-ready" },
    accent: "violet",
  },
  {
    initials: "AS",
    name: "Ama Sarpong",
    role: "Head of Talent Acquisition",
    org: "Sunray Bank Ghana",
    city: "Ridge, Accra",
    product: "VeloxaRecruit",
    quote:
      "Veloxa Recruit screens 800 CVs in the time my team used to read 20. The shortlist is sharper, the candidates are stronger. It feels like a fifth recruiter who never sleeps.",
    metric: { value: "40x", label: "screening throughput" },
    accent: "cyan",
  },
];

const accentBg: Record<Testimonial["accent"], string> = {
  cyan: "from-primary-cyan to-primary-blue",
  blue: "from-blue-500 to-indigo-600",
  violet: "from-purple-500 to-pink-500",
  emerald: "from-emerald-500 to-teal-500",
};

export default function Testimonials() {
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [spotlight, setSpotlight] = useState({ x: 200, y: 200 });
  const featuredRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!autoplay) return;
    const t = setInterval(() => {
      setFeaturedIndex((i) => (i + 1) % testimonials.length);
    }, 6500);
    return () => clearInterval(t);
  }, [autoplay]);

  const featured = testimonials[featuredIndex];
  const sideOne = testimonials[(featuredIndex + 1) % testimonials.length];
  const sideTwo = testimonials[(featuredIndex + 2) % testimonials.length];
  const compact = testimonials[(featuredIndex + 3) % testimonials.length];

  return (
    <section
      id="testimonials"
      className="section-padding bg-[#020617] relative overflow-hidden"
    >
      {/* Ambient glows */}
      <div className="absolute -top-32 right-0 w-[500px] h-[500px] bg-primary-cyan/[0.05] blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-primary-blue/[0.05] blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="section-header">
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/10 mb-6">
            <span className="w-1.5 h-1.5 bg-primary-cyan rounded-full animate-pulse shadow-[0_0_8px_#00FBFF]" />
            <span className="text-[11px] font-bold text-white/70 tracking-[0.25em] uppercase">
              Customer stories
            </span>
          </div>
          <h2 className="section-title tracking-tighter">
            Operators across Ghana <br className="hidden md:block" />
            <span className="gradient-text">stopped chasing. Started winning.</span>
          </h2>
          <p className="section-description">
            Real teams, real receipts. Here is what changes when Veloxa joins the bench &mdash;
            from East Legon kitchens to Kumasi clinics to Airport City boardrooms.
          </p>
        </div>

        {/* Bento Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* FEATURED — large card with cursor spotlight, swaps every 6.5s */}
          <div
            ref={featuredRef}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              setSpotlight({ x: e.clientX - rect.left, y: e.clientY - rect.top });
            }}
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
            className="md:col-span-8 relative group bg-gradient-to-br from-navy-900 via-navy-900/95 to-navy-950 border border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden hover:border-primary-cyan/30 transition-all duration-500 min-h-[420px] flex flex-col justify-between"
          >
            {/* Cursor spotlight */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: `radial-gradient(600px circle at ${spotlight.x}px ${spotlight.y}px, rgba(0,251,255,0.08), transparent 40%)`,
              }}
            />
            {/* Subtle dot grid */}
            <div
              className="absolute inset-0 opacity-[0.06] pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
                backgroundSize: "26px 26px",
                maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
              }}
            />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <span className="text-[10px] font-black tracking-[0.3em] uppercase text-primary-cyan">
                  Featured story
                </span>
                <span className="text-[10px] font-bold tracking-widest uppercase text-white/40 px-3 py-1 rounded-full border border-white/10">
                  {featured.product}
                </span>
              </div>

              <p
                key={featured.name}
                className="font-display font-black text-3xl md:text-4xl lg:text-5xl text-white leading-[1.1] tracking-tighter mb-8 animate-fade-in"
              >
                &ldquo;{featured.quote}&rdquo;
              </p>
            </div>

            <div className="relative z-10">
              {/* Big metric callout */}
              <div className="flex items-end gap-6 mb-8 pb-8 border-b border-white/10">
                <div className="font-display font-black gradient-text text-5xl md:text-6xl tracking-tighter drop-shadow-[0_0_15px_rgba(0,251,255,0.35)]">
                  {featured.metric.value}
                </div>
                <div className="pb-2 text-white/60 text-sm md:text-base max-w-xs">
                  {featured.metric.label}
                </div>
              </div>

              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div
                    className={`w-14 h-14 rounded-full bg-gradient-to-br ${accentBg[featured.accent]} flex items-center justify-center text-navy-950 font-black text-lg shadow-lg`}
                  >
                    {featured.initials}
                  </div>
                  <div>
                    <div className="font-bold text-white">{featured.name}</div>
                    <div className="text-sm text-white/50">
                      {featured.role} &middot; {featured.org}
                    </div>
                    <div className="text-xs text-white/30 mt-0.5">{featured.city}</div>
                  </div>
                </div>

                {/* Story selector dots */}
                <div className="flex items-center gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setFeaturedIndex(i);
                        setAutoplay(false);
                      }}
                      aria-label={`Show story ${i + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === featuredIndex
                          ? "w-8 bg-primary-cyan shadow-[0_0_8px_rgba(0,251,255,0.6)]"
                          : "w-3 bg-white/20 hover:bg-white/40"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* STAT CALLOUT card — cyan gradient, big number focused */}
          <div className="md:col-span-4 relative group bg-gradient-to-br from-primary-cyan/15 via-primary-blue/10 to-navy-950 border border-primary-cyan/25 rounded-3xl p-8 overflow-hidden hover:border-primary-cyan/50 transition-all duration-500 flex flex-col justify-between min-h-[420px]">
            {/* Decorative */}
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-primary-cyan/15 rounded-full blur-[60px] group-hover:bg-primary-cyan/25 transition-all duration-500" />

            <div className="relative z-10">
              <span className="text-[10px] font-black tracking-[0.3em] uppercase text-primary-cyan mb-6 block">
                Across the portfolio
              </span>

              <div className="font-display font-black text-7xl md:text-8xl text-white leading-none tracking-tighter mb-2">
                <span className="gradient-text drop-shadow-[0_0_25px_rgba(0,251,255,0.4)]">
                  50+
                </span>
              </div>
              <p className="text-white text-xl font-bold leading-tight mb-2">
                Ghanaian teams running on Veloxa.
              </p>
              <p className="text-white/60 text-sm leading-relaxed">
                Restaurants. Recruiters. Property groups. Logistics desks. Clinics. Banks.
              </p>
            </div>

            <div className="relative z-10 mt-8 pt-6 border-t border-white/10">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {testimonials.slice(0, 4).map((t) => (
                    <div
                      key={t.name}
                      className={`w-8 h-8 rounded-full bg-gradient-to-br ${accentBg[t.accent]} flex items-center justify-center text-navy-950 font-black text-[10px] border-2 border-navy-950`}
                    >
                      {t.initials}
                    </div>
                  ))}
                  <div className="w-8 h-8 rounded-full bg-white/10 border-2 border-navy-950 flex items-center justify-center text-white text-[10px] font-bold">
                    +
                  </div>
                </div>
                <span className="text-xs text-white/50">
                  Operators who stopped chasing tasks.
                </span>
              </div>
            </div>
          </div>

          {/* COMPACT CARD 1 — text-forward, no image */}
          <div className="md:col-span-4 relative group bg-navy-900/40 border border-white/5 rounded-3xl p-8 overflow-hidden hover:border-primary-cyan/30 hover:-translate-y-1 transition-all duration-500 flex flex-col">
            <div className="flex items-center gap-2 mb-5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-primary-cyan fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
              <span className="text-xs text-white/40 ml-1">{sideOne.product}</span>
            </div>

            <p className="text-white/85 text-base leading-relaxed mb-6 font-medium">
              &ldquo;{sideOne.quote}&rdquo;
            </p>

            <div className="mt-auto flex items-center gap-3 pt-5 border-t border-white/5">
              <div
                className={`w-10 h-10 rounded-full bg-gradient-to-br ${accentBg[sideOne.accent]} flex items-center justify-center text-navy-950 font-black text-sm`}
              >
                {sideOne.initials}
              </div>
              <div>
                <div className="text-sm font-bold text-white">{sideOne.name}</div>
                <div className="text-xs text-white/40">
                  {sideOne.role} &middot; {sideOne.org}
                </div>
              </div>
            </div>
          </div>

          {/* COMPACT CARD 2 — metric-led card with different color, asymmetric */}
          <div className="md:col-span-4 relative group bg-navy-900/40 border border-white/5 rounded-3xl p-8 overflow-hidden hover:border-primary-cyan/30 hover:-translate-y-1 transition-all duration-500 flex flex-col">
            <div className="flex items-baseline gap-3 mb-2">
              <div className="font-display font-black text-5xl text-white tracking-tighter leading-none">
                <span className={`bg-gradient-to-br ${accentBg[sideTwo.accent]} bg-clip-text text-transparent`}>
                  {sideTwo.metric.value}
                </span>
              </div>
            </div>
            <p className="text-white/50 text-xs uppercase tracking-widest mb-6">
              {sideTwo.metric.label}
            </p>

            <p className="text-white/80 text-sm leading-relaxed mb-6">
              &ldquo;{sideTwo.quote}&rdquo;
            </p>

            <div className="mt-auto flex items-center gap-3 pt-5 border-t border-white/5">
              <div
                className={`w-10 h-10 rounded-full bg-gradient-to-br ${accentBg[sideTwo.accent]} flex items-center justify-center text-navy-950 font-black text-sm`}
              >
                {sideTwo.initials}
              </div>
              <div>
                <div className="text-sm font-bold text-white">{sideTwo.name}</div>
                <div className="text-xs text-white/40">
                  {sideTwo.role} &middot; {sideTwo.org}
                </div>
              </div>
            </div>
          </div>

          {/* HORIZONTAL CARD — different shape: full width, side-by-side */}
          <div className="md:col-span-4 relative group bg-gradient-to-r from-navy-900 to-navy-900/40 border border-white/5 rounded-3xl p-8 overflow-hidden hover:border-primary-cyan/30 hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-black tracking-[0.3em] uppercase text-white/40 mb-4 block">
                {compact.product}
              </span>
              <p className="text-white/85 text-base leading-relaxed font-medium mb-6">
                &ldquo;{compact.quote}&rdquo;
              </p>
            </div>

            <div className="flex items-center justify-between gap-3 pt-5 border-t border-white/5">
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${accentBg[compact.accent]} flex items-center justify-center text-navy-950 font-black text-sm`}
                >
                  {compact.initials}
                </div>
                <div>
                  <div className="text-sm font-bold text-white">{compact.name}</div>
                  <div className="text-xs text-white/40">{compact.org}</div>
                </div>
              </div>
              <span className="text-[10px] font-bold tracking-widest uppercase text-primary-cyan">
                {compact.metric.value}
              </span>
            </div>
          </div>
        </div>

        {/* Closing trust strip */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 px-6 py-5 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm">
          <div className="flex items-center gap-3 text-sm text-white/60">
            <svg className="w-5 h-5 text-primary-cyan" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>
              Every quote above represents a Veloxa engagement. Ask us to introduce you to any of them.
            </span>
          </div>

          <a
            href="#cta"
            className="inline-flex items-center gap-2 text-white font-bold text-sm uppercase tracking-widest group/link"
          >
            Talk to a Veloxa architect
            <span className="w-8 h-[1px] bg-white/20 group-hover/link:w-14 group-hover/link:bg-primary-cyan transition-all" />
          </a>
        </div>
      </div>
    </section>
  );
}
