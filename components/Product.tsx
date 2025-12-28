"use client";

export default function Product() {
  return (
    <section id="product" className="section-padding bg-gradient-to-br from-neutral-offwhite to-primary-turquoise/5 dark:from-neutral-dark dark:to-primary-turquoise/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            Meet <span className="gradient-text">VeloxaRecruit</span>
          </h2>
          <p className="section-description">
            The production-ready AI recruitment platform that revolutionizes how you find, assess, and hire top talent.
          </p>
        </div>

        {/* Product Overview */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="inline-block bg-primary-turquoise/10 dark:bg-primary-turquoise/20 text-primary-turquoise dark:text-primary-light px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Production-Ready Platform
            </div>
            <h3 className="heading-lg text-neutral-dark dark:text-neutral-offwhite drop-shadow-sm mb-6">
              AI-Powered End-to-End Recruitment
            </h3>
            <p className="body-md text-neutral-dark/80 dark:text-neutral-offwhite/80 mb-6">
              VeloxaRecruit combines cutting-edge AI technology with intuitive design to transform your entire hiring workflow. From CV screening to voice interviews to candidate analytics, everything you need is in one platform.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-primary-turquoise flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <span className="font-semibold text-neutral-dark dark:text-neutral-offwhite">Automated CV Screening:</span>
                  <span className="text-neutral-dark/80 dark:text-neutral-offwhite/80"> AI analyzes resumes across 20+ criteria with intelligent job-candidate matching</span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-primary-turquoise flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <span className="font-semibold text-neutral-dark dark:text-neutral-offwhite">Multi-Modal Interviews:</span>
                  <span className="text-neutral-dark/80 dark:text-neutral-offwhite/80"> Conduct AI-powered interviews via text or voice with real-time transcription</span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-primary-turquoise flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <span className="font-semibold text-neutral-dark dark:text-neutral-offwhite">Comprehensive Analysis:</span>
                  <span className="text-neutral-dark/80 dark:text-neutral-offwhite/80"> Evaluate candidates across 17+ dimensions including soft skills, technical depth, and culture fit</span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-primary-turquoise flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <span className="font-semibold text-neutral-dark dark:text-neutral-offwhite">Smart Dashboard:</span>
                  <span className="text-neutral-dark/80 dark:text-neutral-offwhite/80"> Centralized management with candidate rankings, interview reports, and hiring recommendations</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-primary-turquoise to-primary-teal rounded-2xl p-8 shadow-2xl">
              <div className="bg-white rounded-xl p-6 space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-neutral-medium">
                  <span className="font-semibold text-neutral-dark">Interview Analysis</span>
                  <span className="text-xs bg-primary-turquoise/10 text-primary-turquoise px-3 py-1 rounded-full">AI-Powered</span>
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-neutral-dark/70">Technical Depth</span>
                      <span className="font-semibold text-primary-turquoise">92/100</span>
                    </div>
                    <div className="h-2 bg-neutral-light rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary-turquoise to-primary-teal" style={{ width: "92%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-neutral-dark/70">Communication</span>
                      <span className="font-semibold text-primary-turquoise">88/100</span>
                    </div>
                    <div className="h-2 bg-neutral-light rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary-turquoise to-primary-teal" style={{ width: "88%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-neutral-dark/70">Culture Fit</span>
                      <span className="font-semibold text-primary-turquoise">95/100</span>
                    </div>
                    <div className="h-2 bg-neutral-light rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary-turquoise to-primary-teal" style={{ width: "95%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-neutral-dark/70">Problem Solving</span>
                      <span className="font-semibold text-primary-turquoise">90/100</span>
                    </div>
                    <div className="h-2 bg-neutral-light rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary-turquoise to-primary-teal" style={{ width: "90%" }}></div>
                    </div>
                  </div>
                </div>
                <div className="pt-4 border-t border-neutral-medium">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-neutral-dark">Overall Score</span>
                    <span className="text-2xl font-bold gradient-text">91/100</span>
                  </div>
                  <div className="mt-3 bg-accent-yellow/10 text-accent-gold px-4 py-2 rounded-lg text-sm font-medium">
                    ✓ Highly Recommended for Hire
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-yellow/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-turquoise/20 rounded-full blur-2xl"></div>
          </div>
        </div>

        {/* Key Capabilities */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 - Intelligent CV Screening */}
          <div className="group relative bg-gradient-to-br from-neutral-dark/5 to-primary-turquoise/5 dark:from-white/5 dark:to-primary-turquoise/10 rounded-2xl p-8 border border-neutral-medium/20 dark:border-white/10 hover:border-primary-turquoise/50 dark:hover:border-primary-light/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:-translate-y-1 overflow-hidden">
            {/* Animated background gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-turquoise/0 to-primary-teal/0 group-hover:from-primary-turquoise/10 group-hover:to-primary-teal/10 transition-all duration-300 rounded-2xl"></div>

            {/* Glow effect */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary-turquoise/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative z-10">
              <div className="w-14 h-14 bg-gradient-to-br from-primary-turquoise to-primary-teal rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h4 className="heading-md text-neutral-dark dark:text-neutral-offwhite mb-4 group-hover:text-primary-turquoise dark:group-hover:text-primary-light transition-colors duration-300">
                Intelligent CV Screening
              </h4>
              <p className="body-sm text-neutral-dark/70 dark:text-neutral-offwhite/70 leading-relaxed">
                AI-powered analysis across 20+ categories including ATS compatibility, skills matching, and experience verification. Get instant candidate rankings.
              </p>

              {/* Decorative corner accent */}
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-accent-yellow/10 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Card 2 - Voice & Text Interviews */}
          <div className="group relative bg-gradient-to-br from-neutral-dark/5 to-accent-yellow/5 dark:from-white/5 dark:to-accent-yellow/10 rounded-2xl p-8 border border-neutral-medium/20 dark:border-white/10 hover:border-accent-gold/50 dark:hover:border-accent-light/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:-translate-y-1 overflow-hidden">
            {/* Animated background gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-yellow/0 to-accent-gold/0 group-hover:from-accent-yellow/10 group-hover:to-accent-gold/10 transition-all duration-300 rounded-2xl"></div>

            {/* Glow effect */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent-yellow/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative z-10">
              <div className="w-14 h-14 bg-gradient-to-br from-accent-yellow to-accent-gold rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <h4 className="heading-md text-neutral-dark dark:text-neutral-offwhite mb-4 group-hover:text-accent-gold dark:group-hover:text-accent-light transition-colors duration-300">
                Voice & Text Interviews
              </h4>
              <p className="body-sm text-neutral-dark/70 dark:text-neutral-offwhite/70 leading-relaxed">
                Conduct interviews via professional AI voice or text. Real-time transcription, adaptive questioning, and comprehensive behavioral analysis.
              </p>

              {/* Decorative corner accent */}
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-primary-turquoise/10 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Card 3 - Advanced Analytics */}
          <div className="group relative bg-gradient-to-br from-neutral-dark/5 to-primary-teal/5 dark:from-white/5 dark:to-primary-teal/10 rounded-2xl p-8 border border-neutral-medium/20 dark:border-white/10 hover:border-primary-teal/50 dark:hover:border-primary-light/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:-translate-y-1 overflow-hidden">
            {/* Animated background gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-teal/0 to-primary-turquoise/0 group-hover:from-primary-teal/10 group-hover:to-primary-turquoise/10 transition-all duration-300 rounded-2xl"></div>

            {/* Glow effect */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary-teal/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative z-10">
              <div className="w-14 h-14 bg-gradient-to-br from-primary-teal to-primary-turquoise rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h4 className="heading-md text-neutral-dark dark:text-neutral-offwhite mb-4 group-hover:text-primary-teal dark:group-hover:text-primary-light transition-colors duration-300">
                Advanced Analytics
              </h4>
              <p className="body-sm text-neutral-dark/70 dark:text-neutral-offwhite/70 leading-relaxed">
                Data-driven insights with detailed scoring across technical skills, soft skills, communication, and culture fit. AI-powered hiring recommendations.
              </p>

              {/* Decorative corner accent */}
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-accent-yellow/10 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
