"use client";

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
            Why Partner with <span className="gradient-text">Veloxa</span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            We deliver enterprise-grade AI infrastructure that transforms operational bottlenecks into competitive advantages.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Benefit 1 */}
          <div className="group bg-navy-900/40 p-10 rounded-3xl border border-white/5 hover:border-primary-cyan/30 transition-all duration-500">
            <div className="w-16 h-16 bg-primary-cyan/10 rounded-2xl flex items-center justify-center text-primary-cyan mb-8 group-hover:scale-110 transition-transform duration-500">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-display font-bold text-white mb-4">Accelerated Innovation</h3>
            <p className="text-white/60 text-lg leading-relaxed">
              We don't just provide tools; we embed intelligence. Our solutions are designed to be deployed rapidly, 
              allowing your business to leverage cutting-edge AI months ahead of the competition.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="group bg-navy-900/40 p-10 rounded-3xl border border-white/5 hover:border-primary-cyan/30 transition-all duration-500">
            <div className="w-16 h-16 bg-primary-cyan/10 rounded-2xl flex items-center justify-center text-primary-cyan mb-8 group-hover:scale-110 transition-transform duration-500">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-2xl font-display font-bold text-white mb-4">Enterprise Reliability</h3>
            <p className="text-white/60 text-lg leading-relaxed">
              Built for high-stakes environments. Our platforms feature bank-grade security, 
              redundant architectures, and 24/7 autonomous monitoring to ensure mission-critical performance.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="group bg-navy-900/40 p-10 rounded-3xl border border-white/5 hover:border-primary-cyan/30 transition-all duration-500">
            <div className="w-16 h-16 bg-primary-cyan/10 rounded-2xl flex items-center justify-center text-primary-cyan mb-8 group-hover:scale-110 transition-transform duration-500">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-display font-bold text-white mb-4">Cost Efficiency</h3>
            <p className="text-white/60 text-lg leading-relaxed">
              Our autonomous agents handle complex workflows at a fraction of traditional operational costs, 
              delivering a rapid ROI and allowing you to scale without proportional headcount increases.
            </p>
          </div>

          {/* Benefit 4 */}
          <div className="group bg-navy-900/40 p-10 rounded-3xl border border-white/5 hover:border-primary-cyan/30 transition-all duration-500">
            <div className="w-16 h-16 bg-primary-cyan/10 rounded-2xl flex items-center justify-center text-primary-cyan mb-8 group-hover:scale-110 transition-transform duration-500">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
            </div>
            <h3 className="text-2xl font-display font-bold text-white mb-4">Custom Fit</h3>
            <p className="text-white/60 text-lg leading-relaxed">
              Every business is unique. We tailor our AI embedding strategies to match your specific industry 
              requirements, ensuring a seamless fit into your existing digital ecosystem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
