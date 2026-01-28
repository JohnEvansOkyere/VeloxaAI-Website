"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-navy-950">
      {/* Simplified Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,251,255,0.05),transparent_50%)]">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary-cyan/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-blue/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: "1.5s" }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 mb-8 animate-slide-down">
            <span className="w-2 h-2 bg-primary-cyan rounded-full animate-pulse shadow-[0_0_8px_#00FBFF]"></span>
            <span className="text-sm font-semibold text-white/90 tracking-wide uppercase">
              Pioneering the Future of AI & Automation
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-8xl text-white mb-8 leading-[1.1] animate-slide-up">
            Next-Generation <br />
            <span className="gradient-text">AI Infrastructure</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-white/70 max-w-3xl mb-12 leading-relaxed animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Veloxa Technology embeds advanced intelligence into business ecosystems, 
            driving efficiency through autonomous agents and predictive platforms.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <a
              href="#platforms"
              className="group inline-flex items-center justify-center gap-3 bg-primary-cyan text-navy-950 px-10 py-5 rounded-xl font-bold text-lg hover:shadow-[0_0_30px_rgba(0,251,255,0.4)] hover:scale-[1.05] transition-all duration-300"
            >
              Explore Our Platforms
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 bg-white/5 text-white px-10 py-5 rounded-xl font-bold text-lg border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              Company Mission
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-20 pt-10 border-t border-white/5 w-full max-w-4xl flex flex-wrap justify-center gap-12 text-white/40 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <span className="font-display font-bold text-lg tracking-widest uppercase">VeloxaRecruit</span>
            <span className="font-display font-bold text-lg tracking-widest uppercase">SmartMatch</span>
            <span className="font-display font-bold text-lg tracking-widest uppercase">LeadGen AI</span>
            <span className="font-display font-bold text-lg tracking-widest uppercase">SmartSupport</span>
          </div>
        </div>
      </div>
    </section>
  );
}
