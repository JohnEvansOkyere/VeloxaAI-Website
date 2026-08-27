"use client";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20 bg-[#020617]">
      {/* World-Class Background: Mesh Glow + Grid */}
      <div className="absolute inset-0 z-0">
        {/* Subtle Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.15]" 
          style={{ 
            backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
            backgroundSize: '40px 40px' 
          }}
        />
        
        {/* Radial Mesh Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary-cyan/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary-blue/20 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Linear Gradient Fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/50 to-[#020617]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="flex flex-col items-center text-center">
          {/* Elite Badge */}
          <div className="inline-flex items-center space-x-3 bg-white/5 backdrop-blur-xl px-4 py-1.5 rounded-full border border-white/10 mb-10 animate-fade-in hover:bg-white/10 transition-colors cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-cyan"></span>
            </span>
            <span className="text-[11px] font-bold text-white/80 tracking-[0.2em] uppercase">
              Software engineering &amp; applied AI &middot; Accra, Ghana
            </span>
          </div>

          {/* Precision Typography Heading */}
          <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl xl:text-9xl text-white mb-8 leading-[0.9] tracking-tighter animate-slide-up">
            Run your business <br />
            <span className="gradient-text drop-shadow-[0_0_30px_rgba(0,251,255,0.3)]">like it&apos;s twice the size.</span>
          </h1>

          {/* Refined Subheading */}
          <p className="text-lg sm:text-xl text-white/60 max-w-2xl mb-14 leading-relaxed font-medium animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Veloxa is a software engineering company. We build the operations platforms, internal systems and AI agents
            behind Africa&apos;s fastest-moving teams &mdash; so you ship the output of a thirty-person team with the
            agility of five.
          </p>

          {/* Premium CTA Logic */}
          <div className="flex flex-col sm:flex-row gap-6 items-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <a
              href="#cta"
              className="group relative inline-flex items-center justify-center bg-white text-navy-950 px-10 py-5 rounded-full font-black text-lg overflow-hidden transition-all hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-0 bg-primary-cyan translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative z-10 flex items-center gap-2">
                Book a working demo
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>

            <a
              href="#proof"
              className="group text-white/70 hover:text-white font-bold text-lg flex items-center gap-2 transition-colors"
            >
              Read a real case study
              <span className="w-8 h-[1px] bg-white/20 group-hover:w-12 group-hover:bg-primary-cyan transition-all" />
            </a>
          </div>

          {/* World-Class Logoscape */}
          <div className="mt-24 pt-12 border-t border-white/5 w-full flex flex-wrap justify-center gap-x-16 gap-y-8 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
            {['VeloxaRecruit', 'SmartMatch', 'LeadGen AI', 'Telegram Booking', 'WhatsApp Food', 'DemoForge'].map((product) => (
              <span key={product} className="font-display font-black text-xl tracking-tighter text-white uppercase italic">
                {product}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
