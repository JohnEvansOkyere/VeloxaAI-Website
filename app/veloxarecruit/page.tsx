import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function VeloxaRecruitPage() {
  return (
    <main className="min-h-screen bg-navy-950">
      <Navigation />

      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-16 bg-navy-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 mb-6">
            <span className="w-2 h-2 bg-primary-cyan rounded-full animate-pulse" />
            <span className="text-xs font-semibold text-white/70 tracking-[0.2em] uppercase">
              VeloxaRecruit
            </span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tight mb-6">
            AI-Powered Hiring Infrastructure
          </h1>
          <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto">
            VeloxaRecruit automates screening, interviewing, and evaluation so your team can focus
            on decisions, not admin work. Faster hiring, better fits, less bias.
          </p>
        </div>
      </section>

      {/* Key Outcomes */}
      <section className="section-padding bg-navy-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6">
              <div className="text-sm font-semibold text-primary-cyan tracking-[0.2em] uppercase mb-2">
                Speed
              </div>
              <div className="text-3xl font-display font-bold text-white mb-2">
                60–80% faster hiring
              </div>
              <p className="text-sm text-white/60">
                Compress time-to-hire from weeks to days with automated CV screening and
                always-on interviews.
              </p>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6">
              <div className="text-sm font-semibold text-primary-cyan tracking-[0.2em] uppercase mb-2">
                Quality
              </div>
              <div className="text-3xl font-display font-bold text-white mb-2">
                Better candidate fit
              </div>
              <p className="text-sm text-white/60">
                Multi-dimensional scoring across skills, communication, and culture fit—standardised
                for every candidate.
              </p>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6">
              <div className="text-sm font-semibold text-primary-cyan tracking-[0.2em] uppercase mb-2">
                Fairness
              </div>
              <div className="text-3xl font-display font-bold text-white mb-2">
                Consistent decisions
              </div>
              <p className="text-sm text-white/60">
                Structured interviews and scoring rubrics reduce bias and make your hiring process
                auditable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-padding bg-navy-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-header">
            <h2 className="section-title">
              Everything you need to{" "}
              <span className="gradient-text">run AI-native hiring</span>
            </h2>
            <p className="section-description">
              VeloxaRecruit is designed as infrastructure: modular, secure, and ready to integrate
              into your existing tools.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6">
              <h3 className="font-display font-semibold text-xl text-white mb-3">
                Intelligent CV Screening
              </h3>
              <p className="text-sm text-white/60 mb-4">
                Parse and evaluate hundreds of CVs in minutes. Custom scoring models match your
                role requirements, not generic templates.
              </p>
              <ul className="space-y-2 text-sm text-white/60">
                <li>• Multi-criteria scoring (skills, experience, industry, recency).</li>
                <li>• Automatic flagging of must-have and deal-breaker conditions.</li>
                <li>• Shortlists generated instantly for human review.</li>
              </ul>
            </div>

            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6">
              <h3 className="font-display font-semibold text-xl text-white mb-3">
                AI Interviews (Voice & Text)
              </h3>
              <p className="text-sm text-white/60 mb-4">
                Candidates can interview on their own schedule via AI voice or chat. You receive
                structured transcripts and scores.
              </p>
              <ul className="space-y-2 text-sm text-white/60">
                <li>• Question sets aligned to each role and seniority level.</li>
                <li>• Follow-up questions based on candidate responses.</li>
                <li>• Consistent evaluation rubric across every single interview.</li>
              </ul>
            </div>

            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6">
              <h3 className="font-display font-semibold text-xl text-white mb-3">
                Deep Candidate Analytics
              </h3>
              <p className="text-sm text-white/60 mb-4">
                Replace gut feeling with transparent, explainable data. See how each candidate
                performs across dimensions.
              </p>
              <ul className="space-y-2 text-sm text-white/60">
                <li>• Role-specific composite scores with clear breakdowns.</li>
                <li>• Side-by-side candidate comparisons.</li>
                <li>• Exportable reports for hiring panels and leadership.</li>
              </ul>
            </div>

            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6">
              <h3 className="font-display font-semibold text-xl text-white mb-3">
                Built for African Teams
              </h3>
              <p className="text-sm text-white/60 mb-4">
                Designed with African hiring realities in mind—from connectivity constraints to
                talent markets across regions.
              </p>
              <ul className="space-y-2 text-sm text-white/60">
                <li>• Works for fast-growing startups and established enterprises.</li>
                <li>• Local context baked into scoring and evaluation.</li>
                <li>• Support and onboarding tailored to your team.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA back to main contact */}
      <section className="pb-20 bg-navy-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
            See VeloxaRecruit in action
          </h2>
          <p className="text-white/60 mb-8">
            Share your hiring challenges and we&apos;ll show you how VeloxaRecruit can fit into
            your current stack.
          </p>
          <a
            href="/#cta"
            className="inline-flex items-center gap-2 bg-primary-cyan text-navy-950 px-10 py-3 rounded-full font-semibold text-sm uppercase tracking-widest hover:shadow-[0_0_25px_rgba(0,251,255,0.4)] hover:scale-105 transition-all"
          >
            Talk to our team
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}

