const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "No pitch decks. We learn how your business actually runs — on site where it matters, asking for documents rather than descriptions, because a real invoice answers ten questions truthfully.",
  },
  {
    number: "02",
    title: "Scoping & proposal",
    description:
      "We define exactly what gets built, the architecture, the timeline and the deliverables — in writing, before anyone commits. Fixed scope, no surprise invoices.",
  },
  {
    number: "03",
    title: "Build & ship in iterations",
    description:
      "Tight weekly cycles with real output: working software you can open and use, deployed as it is built. You see progress, not status reports.",
  },
  {
    number: "04",
    title: "Handoff & support",
    description:
      "You own the code, the data and the infrastructure outright. Documentation and team training come with it, and we stay on for support if you want us to.",
  },
];

export default function Process() {
  return (
    <section id="process" className="section-padding bg-navy-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary-cyan/10 px-4 py-2 rounded-full mb-6 border border-primary-cyan/20">
            <span className="w-2 h-2 bg-primary-cyan rounded-full animate-pulse shadow-[0_0_8px_#00FBFF]" />
            <span className="text-[11px] font-bold text-primary-cyan tracking-[0.2em] uppercase">
              How we work
            </span>
          </div>
          <h2 className="heading-xl text-white mb-6 text-balance">
            Clear from the first call to the final handoff.
          </h2>
          <p className="body-lg text-white/60 leading-relaxed">
            We work as an extension of your team, with short feedback loops, visible progress,
            and ownership that ends up entirely with you &mdash; from architecture to deployment.
          </p>
        </div>

        {/* Steps */}
        <ol className="grid gap-px sm:grid-cols-2 lg:grid-cols-4 rounded-3xl overflow-hidden border border-white/5 bg-white/5">
          {steps.map((step) => (
            <li
              key={step.number}
              className="group relative bg-navy-950 p-8 md:p-10 hover:bg-navy-900/60 transition-colors duration-300"
            >
              {/* Top accent that fills on hover */}
              <span className="absolute inset-x-0 top-0 h-px bg-primary-cyan scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

              <div className="flex items-center gap-4 mb-6">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary-cyan/30 bg-primary-cyan/10 font-display font-black text-xs text-primary-cyan">
                  {step.number}
                </span>
                <span className="h-px flex-1 bg-white/5" />
              </div>

              <h3 className="font-display font-bold text-xl text-white mb-4">
                {step.title}
              </h3>
              <p className="text-sm md:text-base text-white/50 leading-relaxed">
                {step.description}
              </p>
            </li>
          ))}
        </ol>

        {/* Pull-quote: the discovery principle */}
        <figure className="mt-12 rounded-3xl bg-gradient-to-br from-primary-cyan/10 to-primary-blue/5 border border-primary-cyan/20 p-8 md:p-12">
          <blockquote className="font-display font-semibold text-xl md:text-3xl text-white leading-snug max-w-4xl text-balance">
            &ldquo;Ask for documents, not descriptions. Descriptions give you the process people
            believe they follow. Documents give you the one they actually follow.&rdquo;
          </blockquote>
          <figcaption className="mt-6 text-[11px] font-bold text-primary-cyan tracking-[0.2em] uppercase">
            The rule we run discovery on
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
