"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-neutral-offwhite dark:bg-neutral-dark">
      {/* Simplified Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-offwhite via-primary-turquoise/5 to-accent-yellow/5 dark:from-neutral-dark dark:via-primary-turquoise/10 dark:to-accent-yellow/10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary-turquoise/10 dark:bg-primary-turquoise/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-yellow/10 dark:bg-accent-yellow/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Split Layout: Content Left, Video Right */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Content */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/80 dark:bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-primary-turquoise/30 dark:border-primary-turquoise/40 mb-6 animate-slide-down">
              <span className="w-2 h-2 bg-primary-turquoise rounded-full animate-pulse"></span>
              <span className="text-sm font-semibold text-neutral-dark dark:text-neutral-offwhite">
                Production-Ready AI Recruitment
              </span>
            </div>

            {/* Main Heading - Reduced size for better balance */}
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-neutral-dark dark:text-neutral-offwhite mb-6 leading-tight animate-slide-up">
              Transform Hiring with{" "}
              <span className="gradient-text">AI Intelligence</span>
            </h1>

            {/* Subheading - More concise */}
            <p className="text-lg sm:text-xl text-neutral-dark/70 dark:text-neutral-offwhite/80 max-w-xl mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: "0.1s" }}>
              VeloxaRecruit eliminates resume screening bottlenecks and standardizes interviews at scale.
            </p>

            {/* Key Stats Badges */}
            <div className="flex flex-wrap gap-3 mb-10 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="bg-white/80 dark:bg-white/5 backdrop-blur-sm px-4 py-2 rounded-lg border border-primary-turquoise/20">
                <span className="text-2xl font-bold text-primary-turquoise dark:text-primary-light">60-80%</span>
                <span className="text-sm text-neutral-dark/70 dark:text-neutral-offwhite/70 ml-2">faster hiring</span>
              </div>
              <div className="bg-white/80 dark:bg-white/5 backdrop-blur-sm px-4 py-2 rounded-lg border border-primary-turquoise/20">
                <span className="text-2xl font-bold text-primary-turquoise dark:text-primary-light">100%</span>
                <span className="text-sm text-neutral-dark/70 dark:text-neutral-offwhite/70 ml-2">unbiased</span>
              </div>
            </div>

            {/* CTA Buttons - Enhanced */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10 animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <a
                href="#cta-form"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('cta-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary-turquoise to-primary-teal text-white px-10 py-5 rounded-xl font-semibold text-base hover:shadow-2xl hover:shadow-primary-turquoise/20 hover:scale-[1.02] transition-all duration-300"
              >
                <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Schedule Demo
              </a>
              <a
                href="#product"
                className="inline-flex items-center justify-center gap-2 bg-white dark:bg-white/10 text-neutral-dark dark:text-neutral-offwhite px-10 py-5 rounded-xl font-semibold text-base border-2 border-neutral-medium/40 dark:border-white/20 hover:border-primary-turquoise dark:hover:border-primary-light hover:shadow-lg transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Learn More
              </a>
            </div>

            {/* Trust Indicators - Cleaner design */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-neutral-dark/60 dark:text-neutral-offwhite/70 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-turquoise dark:text-primary-light flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Enterprise Security</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-turquoise dark:text-primary-light flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">GDPR Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-turquoise dark:text-primary-light flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="font-medium">24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Right Video - The star of the show */}
          <div className="order-1 lg:order-2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative group">
              {/* Video Container with modern styling */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary-turquoise/20 to-primary-teal/20 p-1">
                <div className="relative pb-[56.25%] bg-neutral-dark rounded-2xl overflow-hidden">
                  <iframe
                    src="https://www.youtube.com/embed/kg52RdNPbCo?si=djuoKPmCN7T2jYDX"
                    title="VeloxaRecruit Demo - See AI Recruitment in Action"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                  ></iframe>
                </div>
              </div>

              {/* Ambient glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-turquoise/20 via-primary-teal/20 to-accent-yellow/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 -z-10"></div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent-yellow/30 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-turquoise/30 rounded-full blur-2xl"></div>
            </div>

            {/* Video caption */}
            <p className="text-center mt-6 text-sm font-medium text-neutral-dark/60 dark:text-neutral-offwhite/70">
              Watch VeloxaRecruit streamline your hiring in 2 minutes
            </p>
          </div>
        </div>
      </div>

      {/* Simplified Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-neutral-dark/40 dark:text-neutral-offwhite/40">
          <span className="text-xs font-medium">Scroll to explore</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
