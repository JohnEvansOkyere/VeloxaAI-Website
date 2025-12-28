"use client";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Post Your Job",
      description: "Create a job description in minutes. Set interview mode (text or voice) and define your ideal candidate criteria.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Candidates Apply",
      description: "Candidates submit CVs through a clean, LinkedIn-style application form. AI instantly screens and ranks all applications.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "AI Screening",
      description: "Our AI analyzes CVs across 20+ criteria including skills match, experience, format quality, and ATS compatibility. Get instant rankings.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      number: "04",
      title: "AI Interviews",
      description: "Qualified candidates receive interview tickets. AI conducts standardized interviews via voice or text, evaluating 17+ dimensions.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      ),
    },
    {
      number: "05",
      title: "Review Reports",
      description: "Access detailed interview reports with scores, transcripts, sentiment analysis, behavioral insights, and AI hiring recommendations.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      number: "06",
      title: "Make Decisions",
      description: "Use candidate leaderboards and detailed analytics to make data-driven hiring decisions. Schedule interviews and send offers.",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-br from-neutral-offwhite to-primary-turquoise/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-neutral-dark mb-4">
            How <span className="gradient-text">VeloxaRecruit</span> Works
          </h2>
          <p className="text-xl text-neutral-dark/70 max-w-3xl mx-auto">
            From job posting to hiring decision in 6 simple steps. AI handles the heavy lifting at every stage.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-accent-yellow to-accent-gold rounded-full flex items-center justify-center shadow-lg">
                <span className="font-display font-bold text-white text-lg">
                  {step.number}
                </span>
              </div>

              {/* Icon */}
              <div className="w-20 h-20 bg-gradient-to-br from-primary-turquoise/10 to-primary-teal/10 rounded-xl flex items-center justify-center text-primary-turquoise mb-6 group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>

              {/* Content */}
              <h3 className="font-display font-bold text-2xl text-neutral-dark mb-3">
                {step.title}
              </h3>
              <p className="text-neutral-dark/70">
                {step.description}
              </p>

              {/* Connector Line (hidden on last items) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary-turquoise to-transparent"></div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-neutral-dark/70 mb-6">
            Ready to transform your hiring process?
          </p>
          <a
            href="#cta"
            className="inline-block bg-gradient-to-r from-primary-turquoise to-primary-teal text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Start Your Free Trial
          </a>
        </div>
      </div>
    </section>
  );
}
