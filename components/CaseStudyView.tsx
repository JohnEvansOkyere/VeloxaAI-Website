import Link from "next/link";
import type { CaseStudy } from "@/data/case-studies";

export default function CaseStudyView({ study }: { study: CaseStudy }) {
  const meta = [
    { label: "Client", value: study.client ?? study.clientDescriptor },
    { label: "Sector", value: study.sector },
    { label: "Location", value: study.location },
    { label: "Engagement", value: study.engagement },
    { label: "Duration", value: study.duration },
    { label: "Veloxa's role", value: study.role },
    { label: "Year", value: study.year },
    { label: "Status", value: study.status },
  ];

  return (
    <article className="bg-navy-950">
      {/* ── Hero ── */}
      <header className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />
          <div className="absolute top-[-20%] left-[-10%] w-[55%] h-[55%] bg-primary-cyan/15 blur-[130px] rounded-full" />
          <div className="absolute bottom-[-30%] right-[-10%] w-[50%] h-[50%] bg-primary-blue/15 blur-[130px] rounded-full" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-950/60 to-navy-950" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/#proof"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-white/50 hover:text-primary-cyan transition-colors mb-10"
          >
            <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Back to Veloxa
          </Link>

          <div className="inline-flex items-center space-x-2 bg-primary-cyan/10 px-4 py-2 rounded-full mb-8 border border-primary-cyan/20">
            <span className="w-2 h-2 bg-primary-cyan rounded-full animate-pulse shadow-[0_0_8px_#00FBFF]" />
            <span className="text-[11px] font-bold text-primary-cyan tracking-[0.2em] uppercase">
              Case study · {study.sector}
            </span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tighter text-balance mb-6">
            {study.title}
          </h1>

          <p className="body-lg text-white/60 max-w-3xl leading-relaxed">
            {study.subtitle}
          </p>

          {/* Thesis */}
          <div className="mt-12 border-l-2 border-primary-cyan pl-6 md:pl-8">
            <p className="font-display font-semibold text-xl md:text-2xl text-white/90 leading-snug max-w-3xl">
              {study.thesis}
            </p>
          </div>
        </div>
      </header>

      {/* ── Fact sheet ── */}
      <section className="border-y border-white/5 bg-navy-900/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8">
            {meta.map((item) => (
              <div key={item.label}>
                <dt className="text-[10px] font-bold text-primary-cyan/70 tracking-[0.2em] uppercase mb-2">
                  {item.label}
                </dt>
                <dd className="text-sm text-white/80 leading-relaxed">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Headline stats ── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {study.stats.map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <div className="font-display font-black text-5xl md:text-6xl gradient-text tracking-tighter drop-shadow-[0_0_15px_rgba(0,251,255,0.3)] mb-3">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-white/50 leading-relaxed">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Chapters ── */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        {study.chapters.map((chapter) => (
          <section
            key={chapter.number}
            className="py-12 md:py-16 border-t border-white/5"
          >
            <div className="md:grid md:grid-cols-[100px_1fr] md:gap-10">
              {/* Marker */}
              <div className="mb-6 md:mb-0">
                <div className="font-display font-black text-5xl text-white/10 leading-none tracking-tighter">
                  {chapter.number}
                </div>
                <div className="mt-2 text-[10px] font-bold text-primary-cyan tracking-[0.2em] uppercase">
                  {chapter.kicker}
                </div>
              </div>

              <div>
                <h2 className="font-display font-bold text-2xl md:text-4xl text-white leading-tight tracking-tight text-balance mb-6">
                  {chapter.title}
                </h2>

                <div className="space-y-5">
                  {chapter.body.map((paragraph, i) => (
                    <p
                      key={i}
                      className="text-base md:text-lg text-white/60 leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {chapter.points && (
                  <ul className="mt-10 space-y-px rounded-2xl overflow-hidden border border-white/5">
                    {chapter.points.map((point) => (
                      <li
                        key={point.label}
                        className="bg-navy-900/40 p-5 md:p-6 md:grid md:grid-cols-[220px_1fr] md:gap-6 hover:bg-navy-900/70 transition-colors"
                      >
                        <span className="block font-display font-bold text-white text-sm md:text-base mb-2 md:mb-0">
                          {point.label}
                        </span>
                        <span className="block text-sm md:text-base text-white/55 leading-relaxed">
                          {point.detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}

                {chapter.quote && (
                  <figure className="mt-10 rounded-2xl bg-gradient-to-br from-primary-cyan/10 to-primary-blue/5 border border-primary-cyan/20 p-6 md:p-10">
                    <blockquote className="font-display font-semibold text-lg md:text-2xl text-white leading-snug">
                      &ldquo;{chapter.quote.text}&rdquo;
                    </blockquote>
                    <figcaption className="mt-5 text-xs font-bold text-primary-cyan tracking-[0.15em] uppercase">
                      {chapter.quote.attribution}
                    </figcaption>
                  </figure>
                )}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* ── System flow ── */}
      {study.systemFlow && (
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 border-t border-white/5">
          <div className="text-[10px] font-bold text-primary-cyan tracking-[0.2em] uppercase mb-4">
            The architecture in one picture
          </div>
          <h2 className="font-display font-bold text-2xl md:text-4xl text-white tracking-tight mb-10">
            One source of truth. Four generated outputs.
          </h2>

          {/* Source node */}
          <div className="rounded-2xl bg-gradient-to-r from-primary-cyan to-primary-blue p-[1px] shadow-[0_0_40px_rgba(0,251,255,0.15)]">
            <div className="rounded-2xl bg-navy-950 px-6 py-6 md:px-10 md:py-8 text-center">
              <span className="font-display font-bold text-lg md:text-2xl text-white">
                {study.systemFlow.source}
              </span>
            </div>
          </div>

          {/* Connector */}
          <div className="flex justify-center" aria-hidden="true">
            <div className="w-px h-10 bg-gradient-to-b from-primary-cyan to-primary-cyan/20" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {study.systemFlow.outputs.map((output) => (
              <div
                key={output.title}
                className="rounded-2xl bg-navy-900/50 border border-white/5 p-6 hover:border-primary-cyan/30 transition-colors"
              >
                <div className="w-8 h-px bg-primary-cyan mb-5" />
                <h3 className="font-display font-bold text-base text-white mb-3">
                  {output.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  {output.detail}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── Stack ── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 border-t border-white/5">
        <div className="text-[10px] font-bold text-primary-cyan tracking-[0.2em] uppercase mb-8">
          What it is built on
        </div>
        <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {study.stack.map((group) => (
            <div key={group.group}>
              <h3 className="font-display font-bold text-sm text-white/80 mb-4">
                {group.group}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-xs font-medium text-white/60 bg-white/5 border border-white/5 rounded-lg px-3 py-1.5"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── Takeaway + CTA ── */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 md:pb-28">
        <div className="rounded-3xl bg-gradient-to-r from-primary-cyan to-primary-blue p-8 md:p-12 shadow-[0_0_50px_rgba(0,251,255,0.2)]">
          <p className="font-display font-bold text-xl md:text-3xl text-navy-950 leading-snug max-w-3xl">
            {study.takeaway}
          </p>
          <Link
            href="/#cta"
            className="group mt-8 inline-flex items-center gap-2 bg-navy-950 text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform"
          >
            Start with a discovery call
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </article>
  );
}
