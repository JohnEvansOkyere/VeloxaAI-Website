import Link from "next/link";
import { caseStudies } from "@/data/case-studies";

export default function CaseStudySpotlight() {
  const study = caseStudies[0];

  if (!study) return null;

  return (
    <section id="proof" className="section-padding bg-navy-950 border-t border-white/5 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/3 right-[-15%] w-[45%] h-[45%] bg-primary-blue/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center space-x-2 bg-primary-cyan/10 px-4 py-2 rounded-full mb-6 border border-primary-cyan/20">
            <span className="w-2 h-2 bg-primary-cyan rounded-full animate-pulse shadow-[0_0_8px_#00FBFF]" />
            <span className="text-[11px] font-bold text-primary-cyan tracking-[0.2em] uppercase">
              Proof of work
            </span>
          </div>
          <h2 className="heading-xl text-white mb-6 text-balance">
            Read exactly how we build, on a real engagement.
          </h2>
          <p className="body-lg text-white/60 leading-relaxed">
            Not a logo wall. One engagement documented end to end &mdash; what we found, what we
            got wrong, what the client pushed back on, and how the software was built so the
            expensive mistake cannot happen.
          </p>
        </div>

        {/* Case study card */}
        <Link
          href={`/work/${study.slug}`}
          className="group block rounded-3xl bg-navy-900/40 border border-white/5 overflow-hidden hover:border-primary-cyan/30 transition-all duration-500 hover:shadow-[0_0_60px_rgba(0,251,255,0.08)]"
        >
          <div className="lg:grid lg:grid-cols-[1.4fr_1fr]">
            {/* Left: the story */}
            <div className="p-8 md:p-12">
              <div className="flex flex-wrap items-center gap-3 mb-8">
                <span className="text-[10px] font-bold text-primary-cyan tracking-[0.2em] uppercase">
                  {study.sector}
                </span>
                <span className="w-1 h-1 rounded-full bg-white/20" />
                <span className="text-[10px] font-bold text-white/40 tracking-[0.2em] uppercase">
                  {study.location}
                </span>
                <span className="ml-auto inline-flex items-center gap-2 text-[10px] font-bold text-emerald-400 tracking-[0.15em] uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {study.status}
                </span>
              </div>

              <h3 className="font-display font-bold text-2xl md:text-4xl text-white leading-tight tracking-tight text-balance mb-6 group-hover:text-primary-cyan transition-colors">
                {study.title}
              </h3>

              <p className="text-base md:text-lg text-white/55 leading-relaxed mb-8">
                {study.cardSummary}
              </p>

              <span className="inline-flex items-center gap-2 font-bold text-white group-hover:text-primary-cyan transition-colors">
                Read the full case study
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>

            {/* Right: the numbers */}
            <div className="border-t lg:border-t-0 lg:border-l border-white/5 bg-navy-950/40 p-8 md:p-12 flex flex-col justify-center">
              <div className="grid grid-cols-2 gap-x-6 gap-y-10">
                {study.stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="font-display font-black text-4xl md:text-5xl gradient-text tracking-tighter mb-2">
                      {stat.value}
                    </div>
                    <div className="text-[11px] md:text-xs text-white/40 leading-snug">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Link>

        {/* Confidentiality note — this is a trust signal, not a disclaimer */}
        <p className="mt-8 text-sm text-white/35 max-w-3xl leading-relaxed">
          Clients under an active engagement are described by sector rather than name. We publish
          a client&apos;s name only with their written permission &mdash; the same discretion we
          extend to your business.
        </p>
      </div>
    </section>
  );
}
