import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function LeadGenPage() {
  return (
    <main className="min-h-screen bg-navy-950">
      <Navigation />

      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-16 bg-navy-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 mb-6">
            <span className="w-2 h-2 bg-primary-cyan rounded-full animate-pulse" />
            <span className="text-xs font-semibold text-white/70 tracking-[0.2em] uppercase">
              LeadGen AI
            </span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tight mb-6">
            Always-On Lead Generation
          </h1>
          <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto">
            LeadGen AI finds local businesses, learns who they are, and sends personalised outreach
            on your behalf—so your team wakes up to warm conversations instead of cold spreadsheets.
          </p>
        </div>
      </section>

      {/* Outcomes */}
      <section className="section-padding bg-navy-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6">
              <div className="text-sm font-semibold text-primary-cyan tracking-[0.2em] uppercase mb-2">
                Pipeline
              </div>
              <div className="text-3xl font-display font-bold text-white mb-2">
                Consistent new leads
              </div>
              <p className="text-sm text-white/60">
                Turn prospecting into a background process. LeadGen AI keeps your calendar full
                without manual research.
              </p>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6">
              <div className="text-sm font-semibold text-primary-cyan tracking-[0.2em] uppercase mb-2">
                Quality
              </div>
              <div className="text-3xl font-display font-bold text-white mb-2">
                Emails that feel human
              </div>
              <p className="text-sm text-white/60">
                Outreach references each business by name, category, and context—so it reads like a
                crafted message, not spam.
              </p>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6">
              <div className="text-sm font-semibold text-primary-cyan tracking-[0.2em] uppercase mb-2">
                Cost
              </div>
              <div className="text-3xl font-display font-bold text-white mb-2">
                Lower CAC
              </div>
              <p className="text-sm text-white/60">
                Replace hours of manual Google Maps searches, copying emails, and writing first
                drafts with one automated system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding bg-navy-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-header">
            <h2 className="section-title">
              How <span className="gradient-text">LeadGen AI</span> works
            </h2>
            <p className="section-description">
              From raw business listings to scheduled, personalised outreach—without adding more
              people to your sales team.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6">
              <h3 className="font-display font-semibold text-xl text-white mb-3">
                1. Discover local businesses
              </h3>
              <p className="text-sm text-white/60">
                We surface companies in your target market—pulling key data points like name, email,
                phone, website, address, and category.
              </p>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6">
              <h3 className="font-display font-semibold text-xl text-white mb-3">
                2. Craft tailored outreach
              </h3>
              <p className="text-sm text-white/60">
                LeadGen AI turns those details into tailored emails that speak directly to the
                business&apos;s context and likely pain points.
              </p>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6">
              <h3 className="font-display font-semibold text-xl text-white mb-3">
                3. Send on a schedule
              </h3>
              <p className="text-sm text-white/60">
                Outreach is sent automatically on the cadence you define, so new conversations land
                in your inbox every week.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For sales & growth teams */}
      <section className="section-padding bg-navy-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-header">
            <h2 className="section-title">
              Built for{" "}
              <span className="gradient-text">modern sales teams</span>
            </h2>
            <p className="section-description">
              Whether you&apos;re a founder-led team or a dedicated sales organisation, LeadGen AI
              gives you leverage without extra headcount.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6">
              <h3 className="font-display font-semibold text-xl text-white mb-3">
                Founder & small teams
              </h3>
              <p className="text-sm text-white/60 mb-4">
                Keep your calendar busy while you focus on product and operations. LeadGen AI works
                like a virtual SDR that never gets tired.
              </p>
              <ul className="space-y-2 text-sm text-white/60">
                <li>• No need to learn complex sales tools.</li>
                <li>• Clear view of who was contacted and when.</li>
                <li>• Easy to pause, adjust markets, or change messaging.</li>
              </ul>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-6">
              <h3 className="font-display font-semibold text-xl text-white mb-3">
                Established sales teams
              </h3>
              <p className="text-sm text-white/60 mb-4">
                Let your reps spend their time on calls and demos, not manual prospecting. LeadGen
                AI feeds your team ready-to-engage leads.
              </p>
              <ul className="space-y-2 text-sm text-white/60">
                <li>• Consistent messaging that still feels personalised.</li>
                <li>• Campaigns aligned with territories or verticals.</li>
                <li>• Data export into your CRM for full tracking.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA back to main contact */}
      <section className="pb-20 bg-navy-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
            Turn prospecting into a background process
          </h2>
          <p className="text-white/60 mb-8">
            Tell us about your ideal customers and current outreach process, and we&apos;ll show you
            how LeadGen AI can plug into your workflow.
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
