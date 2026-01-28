import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function SmartMatchPage() {
  return (
    <main className="min-h-screen bg-navy-950">
      <Navigation />

      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-16 bg-navy-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 mb-6">
            <span className="w-2 h-2 bg-primary-cyan rounded-full animate-pulse" />
            <span className="text-xs font-semibold text-white/70 tracking-[0.2em] uppercase">
              SmartMatch
            </span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tight mb-6">
            AI Job Matching & Tailored CVs
          </h1>
          <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto">
            SmartMatch helps candidates discover the right roles and instantly generate CVs tailored
            to each opportunity—whether it&apos;s on your platform or anywhere on the web.
          </p>
        </div>
      </section>

      {/* How it helps candidates */}
      <section className="section-padding bg-navy-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6">
              <div className="text-sm font-semibold text-primary-cyan tracking-[0.2em] uppercase mb-2">
                Discovery
              </div>
              <div className="text-3xl font-display font-bold text-white mb-2">
                Relevant roles, not noise
              </div>
              <p className="text-sm text-white/60">
                SmartMatch analyses a candidate&apos;s profile and surfaces roles that actually fit
                their skills, experience, and goals.
              </p>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6">
              <div className="text-sm font-semibold text-primary-cyan tracking-[0.2em] uppercase mb-2">
                Presentation
              </div>
              <div className="text-3xl font-display font-bold text-white mb-2">
                Tailored CVs in seconds
              </div>
              <p className="text-sm text-white/60">
                For any job description or link, SmartMatch restructures and rewrites the CV to
                highlight what that employer cares about most.
              </p>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6">
              <div className="text-sm font-semibold text-primary-cyan tracking-[0.2em] uppercase mb-2">
                Confidence
              </div>
              <div className="text-3xl font-display font-bold text-white mb-2">
                Clear next steps
              </div>
              <p className="text-sm text-white/60">
                Candidates know which roles to prioritise, how well they match, and how to present
                themselves for each one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Flow overview */}
      <section className="section-padding bg-navy-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-header">
            <h2 className="section-title">
              How <span className="gradient-text">SmartMatch</span> works
            </h2>
            <p className="section-description">
              A simple, candidate-first flow that can live inside your own product or run as a
              standalone experience.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6">
              <h3 className="font-display font-semibold text-xl text-white mb-3">
                1. Profile & Preferences
              </h3>
              <p className="text-sm text-white/60">
                Candidates provide their existing CV, skills, experience level, and preferences like
                location, salary range, and role type.
              </p>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6">
              <h3 className="font-display font-semibold text-xl text-white mb-3">
                2. Smart Job Matching
              </h3>
              <p className="text-sm text-white/60">
                SmartMatch ranks available roles and suggests the best fits, explaining why each job
                is a match and what gaps might exist.
              </p>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6">
              <h3 className="font-display font-semibold text-xl text-white mb-3">
                3. Tailored CV Generation
              </h3>
              <p className="text-sm text-white/60">
                With a single click on a job card—or by pasting any external job link—candidates get
                a CV tailored to that specific opportunity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For partners / platforms */}
      <section className="section-padding bg-navy-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-header">
            <h2 className="section-title">
              Designed to plug into{" "}
              <span className="gradient-text">your ecosystem</span>
            </h2>
            <p className="section-description">
              SmartMatch can power your own candidate portal or operate as a white-labelled
              experience under your brand.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6">
              <h3 className="font-display font-semibold text-xl text-white mb-3">
                White-label candidate portals
              </h3>
              <p className="text-sm text-white/60 mb-4">
                Offer a premium job search experience to your community or customers without
                building everything from scratch.
              </p>
              <ul className="space-y-2 text-sm text-white/60">
                <li>• Branded domains, colours, and messaging.</li>
                <li>• Configurable job sources and markets.</li>
                <li>• Analytics on candidate engagement and outcomes.</li>
              </ul>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6">
              <h3 className="font-display font-semibold text-xl text-white mb-3">
                APIs & integrations
              </h3>
              <p className="text-sm text-white/60 mb-4">
                Embed SmartMatch capabilities into existing products, career sites, or learning
                platforms.
              </p>
              <ul className="space-y-2 text-sm text-white/60">
                <li>• Job matching and scoring APIs.</li>
                <li>• CV tailoring endpoints for external job URLs.</li>
                <li>• Webhooks and exports into your ATS or CRM.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA back to main contact */}
      <section className="pb-20 bg-navy-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
            Bring SmartMatch to your users
          </h2>
          <p className="text-white/60 mb-8">
            Whether you run a talent community, a learning platform, or a recruitment business, we
            can layer SmartMatch into your experience.
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

