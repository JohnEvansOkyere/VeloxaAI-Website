"use client";

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-neutral-dark mb-4">
            Why Teams Choose <span className="gradient-text">VeloxaRecruit</span>
          </h2>
          <p className="text-xl text-neutral-dark/70 max-w-3xl mx-auto">
            Join innovative companies transforming their recruitment process with AI-powered intelligence.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* For Employers */}
          <div className="bg-gradient-to-br from-primary-turquoise/5 to-primary-teal/5 rounded-2xl p-8 border border-primary-turquoise/20">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-turquoise to-primary-teal rounded-lg flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-2xl text-neutral-dark">
                For Employers
              </h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-primary-turquoise flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <span className="font-semibold text-neutral-dark">Massive Time Savings:</span>
                  <span className="text-neutral-dark/70"> Reduce time-to-hire from 42 days to 8-17 days (60-80% faster)</span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-primary-turquoise flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <span className="font-semibold text-neutral-dark">Lower Costs:</span>
                  <span className="text-neutral-dark/70"> Save 50-70% on recruitment expenses by automating screening and interviews</span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-primary-turquoise flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <span className="font-semibold text-neutral-dark">Better Quality Hires:</span>
                  <span className="text-neutral-dark/70"> 40% improvement in candidate-job fit accuracy through AI matching</span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-primary-turquoise flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <span className="font-semibold text-neutral-dark">Zero Unconscious Bias:</span>
                  <span className="text-neutral-dark/70"> Standardized AI evaluation ensures fair, consistent assessment of all candidates</span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-primary-turquoise flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <span className="font-semibold text-neutral-dark">Scale Effortlessly:</span>
                  <span className="text-neutral-dark/70"> Handle 10 or 10,000 candidates without proportional cost or time increases</span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-primary-turquoise flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <span className="font-semibold text-neutral-dark">Data-Driven Decisions:</span>
                  <span className="text-neutral-dark/70"> Comprehensive analytics and AI recommendations replace gut-feeling hiring</span>
                </div>
              </li>
            </ul>
          </div>

          {/* For Candidates */}
          <div className="bg-gradient-to-br from-accent-yellow/5 to-accent-gold/5 rounded-2xl p-8 border border-accent-yellow/20">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-accent-yellow to-accent-gold rounded-lg flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-2xl text-neutral-dark">
                For Candidates
              </h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-accent-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <span className="font-semibold text-neutral-dark">Instant Feedback:</span>
                  <span className="text-neutral-dark/70"> Get immediate CV screening results and know where you stand</span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-accent-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <span className="font-semibold text-neutral-dark">Flexible Scheduling:</span>
                  <span className="text-neutral-dark/70"> Interview 24/7 on your schedule—no need to coordinate with recruiters</span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-accent-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <span className="font-semibold text-neutral-dark">Fair Assessment:</span>
                  <span className="text-neutral-dark/70"> Everyone evaluated with the same rigor—skills matter, not bias</span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-accent-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <span className="font-semibold text-neutral-dark">Transparent Process:</span>
                  <span className="text-neutral-dark/70"> Clear scoring criteria and feedback—no black-box rejections</span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-accent-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <span className="font-semibold text-neutral-dark">Professional Experience:</span>
                  <span className="text-neutral-dark/70"> Clean, modern interface with professional AI voices—no awkward phone screens</span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-accent-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <span className="font-semibold text-neutral-dark">No Ghosting:</span>
                  <span className="text-neutral-dark/70"> Automated communications keep you informed at every stage</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Market Opportunity */}
        <div className="bg-gradient-to-br from-neutral-dark to-neutral-dark/90 rounded-2xl p-12 text-white">
          <div className="text-center mb-10">
            <h3 className="font-display font-bold text-3xl mb-4">
              Massive Market Opportunity
            </h3>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Join the AI recruitment revolution transforming a $200B+ global industry
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="font-display font-bold text-4xl text-accent-yellow mb-2">
                $200B+
              </div>
              <div className="text-white/70">
                Global recruitment market size
              </div>
            </div>
            <div className="text-center">
              <div className="font-display font-bold text-4xl text-accent-yellow mb-2">
                15%
              </div>
              <div className="text-white/70">
                Annual growth rate (CAGR)
              </div>
            </div>
            <div className="text-center">
              <div className="font-display font-bold text-4xl text-accent-yellow mb-2">
                $5B+
              </div>
              <div className="text-white/70">
                AI recruiting technology TAM
              </div>
            </div>
            <div className="text-center">
              <div className="font-display font-bold text-4xl text-accent-yellow mb-2">
                90%
              </div>
              <div className="text-white/70">
                Feature completion status
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
