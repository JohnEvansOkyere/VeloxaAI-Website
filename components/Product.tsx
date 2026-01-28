"use client";

export default function Product() {
  const platforms = [
    {
      id: "recruit",
      name: "VeloxaRecruit",
      tagline: "AI Hiring Infrastructure",
      description: "A production-ready platform that revolutionizes how you find, assess, and hire top talent with automated CV screening and multi-modal interviews.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: "from-primary-cyan to-primary-blue",
    },
    {
      id: "match",
      name: "VelxoSmartMatch",
      tagline: "AI Candidate Platform",
      description: "Personalized job recommendations and instant tailored CV generation. Paste any job link and get a perfect match for your profile.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: "from-primary-blue to-navy-700",
    },
    {
      id: "leadgen",
      name: "VeloxaLeadGen",
      tagline: "Smart Lead Acquisition",
      description: "Automated lead generation tools that identify and qualify prospects using advanced AI pattern recognition and behavioral analysis.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </svg>
      ),
      color: "from-navy-700 to-navy-800",
    },
    {
      id: "support",
      name: "VeloxaSupport",
      tagline: "Omnichannel AI Agents",
      description: "Autonomous customer support agents deployed on WhatsApp and embedded on your website to handle inquiries 24/7.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
      color: "from-primary-cyan to-navy-900",
    },
  ];

  return (
    <section id="platforms" className="section-padding bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            Our Core <span className="gradient-text">Platforms</span>
          </h2>
          <p className="section-description">
            Veloxa Technology provides a suite of AI-driven solutions designed to scale your business and automate complex workflows.
          </p>
        </div>

        {/* Platforms Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {platforms.map((platform) => (
            <div
              key={platform.id}
              className="group relative bg-navy-900/50 rounded-3xl p-8 border border-white/5 hover:border-primary-cyan/30 transition-all duration-500 overflow-hidden"
            >
              {/* Background Gradient Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${platform.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className={`w-16 h-16 bg-gradient-to-br ${platform.color} rounded-2xl flex items-center justify-center text-navy-950 mb-8 shadow-[0_0_20px_rgba(0,0,0,0.3)] group-hover:scale-110 transition-transform duration-500`}>
                  {platform.icon}
                </div>
                
                <div className="mb-6">
                  <span className="text-primary-cyan text-sm font-bold tracking-widest uppercase mb-2 block">
                    {platform.tagline}
                  </span>
                  <h3 className="text-3xl font-display font-bold text-white mb-4">
                    {platform.name}
                  </h3>
                  <p className="text-white/60 text-lg leading-relaxed">
                    {platform.description}
                  </p>
                </div>
                
                <a
                  href={`#${platform.id}`}
                  className="inline-flex items-center gap-2 text-white font-bold hover:text-primary-cyan transition-colors group/link"
                >
                  Learn more
                  <svg className="w-5 h-5 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
