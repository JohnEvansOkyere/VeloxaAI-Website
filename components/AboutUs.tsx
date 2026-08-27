const principles = [
  {
    title: "We learn the business before we build for it.",
    detail:
      "On our most recent manufacturing engagement that meant a month on site — following the work, collecting real documents instead of descriptions — before a line of code was written.",
  },
  {
    title: "You own everything we build.",
    detail:
      "Repositories, cloud accounts, databases and documentation are yours from day one, handed over with training for the people who use the system daily. No lock-in to us.",
  },
  {
    title: "We build the boring guarantees.",
    detail:
      "Gated approvals, versioned revisions, integrity checks and audit trails — the unglamorous engineering that makes the expensive mistake structurally impossible.",
  },
];

export default function AboutUs() {
  return (
    <section id="about" className="section-padding bg-navy-950 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary-cyan/10 px-4 py-2 rounded-full mb-6 border border-primary-cyan/20">
            <span className="w-2 h-2 bg-primary-cyan rounded-full animate-pulse shadow-[0_0_8px_#00FBFF]" />
            <span className="text-[11px] font-bold text-primary-cyan tracking-[0.2em] uppercase">
              About Veloxa
            </span>
          </div>
          <h2 className="heading-xl text-white mb-6 text-balance">
            A software engineering company, built in Accra.
          </h2>
          <p className="body-lg text-white/60 leading-relaxed">
            Veloxa designs and builds the software businesses run on &mdash; operations
            platforms, internal systems, integrations and customer-facing products &mdash; with AI
            embedded where it genuinely earns its place. We work with manufacturers, service
            businesses and founders across Africa and abroad, and we take on the problems that
            off-the-shelf software cannot bend far enough to solve.
          </p>
        </div>

        {/* Principles */}
        <div className="grid gap-px sm:grid-cols-3 rounded-3xl overflow-hidden border border-white/5 bg-white/5 mb-16">
          {principles.map((principle) => (
            <div
              key={principle.title}
              className="group bg-navy-950 p-8 md:p-10 hover:bg-navy-900/60 transition-colors duration-300"
            >
              <div className="w-8 h-px bg-primary-cyan mb-6 group-hover:w-14 transition-all duration-500" />
              <h3 className="font-display font-bold text-lg md:text-xl text-white mb-4 leading-snug text-balance">
                {principle.title}
              </h3>
              <p className="text-sm md:text-base text-white/50 leading-relaxed">
                {principle.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Company Mission */}
        <div className="bg-gradient-to-r from-primary-cyan to-primary-blue rounded-3xl p-8 md:p-12 text-center shadow-[0_0_50px_rgba(0,251,255,0.2)]">
          <h3 className="font-display font-bold text-4xl text-navy-950 mb-6">
            Our Mission
          </h3>
          <p className="text-navy-900 text-xl font-medium max-w-4xl mx-auto leading-relaxed">
            We build software and automation for Africa&mdash;technology that removes friction from
            everyday work and gives people back time to think, create, and lead. Veloxa exists so
            African businesses don&apos;t just adapt to the future, but shape it on their own terms.
          </p>
        </div>
      </div>
    </section>
  );
}
