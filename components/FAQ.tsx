const faqs = [
  {
    question: "Do you only build AI, or software in general?",
    answer:
      "We are a software engineering company. We design and build full production systems — operations platforms, internal tools, customer-facing products, integrations, data pipelines — and we put AI inside them where it genuinely earns its place. A configurator, a quoting engine or a gated factory pipeline is not an AI problem, and we will tell you so rather than sell you a model you do not need.",
  },
  {
    question: "Do you only work with large companies?",
    answer:
      "No. We work with startups, SMEs and established manufacturers and service businesses across Africa and globally. What matters is that you have a real problem and the budget to solve it properly, not the size of your org chart.",
  },
  {
    question: "What does an engagement typically look like?",
    answer:
      "Most start with a discovery call, then a fixed-scope build or an ongoing retainer. Smaller builds run two to six weeks; platform work runs longer and ships in weekly increments you can use as they land. Deliverables are defined upfront in writing — no scope creep, no surprise invoices.",
  },
  {
    question: "Can you work with the systems we already have?",
    answer:
      "Yes, and most of our work is exactly that. Integrating with an existing ERP, accounting package, CRM or WhatsApp channel is usually the point. We would rather extend what your team already knows than force a migration nobody asked for.",
  },
  {
    question: "Who owns the code, the data and the infrastructure?",
    answer:
      "You do — outright, from day one. Repositories, cloud accounts and databases are yours, handed over with documentation and team training at the end of the engagement. You are never locked into us to keep your own system running.",
  },
  {
    question: "How do you approach a workflow you have never seen before?",
    answer:
      "We learn it before we build for it. On a recent manufacturing engagement that meant a month on site — following the work, collecting real documents instead of descriptions, and only then proposing a system. It is why the software fits the business instead of the business bending to the software. The full account is on our case study page.",
  },
  {
    question: "Do you train our team as well?",
    answer:
      "Yes. Every handoff includes documentation and hands-on training for the people who will use the system daily. We also run practical AI and automation workshops for business teams in Ghana and remotely, built around your actual tools rather than a generic curriculum.",
  },
  {
    question: "Where are you based, and can you work with us remotely?",
    answer:
      "Veloxa Technology Ltd is based in Accra, Ghana, and we work with clients internationally, async-first. For engagements where being physically present changes the outcome — factory floors, warehouses, clinics — we show up in person.",
  },
];

export default function FAQ() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <section id="faq" className="section-padding bg-navy-950 border-t border-white/5">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-[380px_1fr] lg:gap-16">
          {/* Header rail */}
          <div className="mb-12 lg:mb-0">
            <div className="lg:sticky lg:top-28">
              <div className="inline-flex items-center space-x-2 bg-primary-cyan/10 px-4 py-2 rounded-full mb-6 border border-primary-cyan/20">
                <span className="w-2 h-2 bg-primary-cyan rounded-full animate-pulse shadow-[0_0_8px_#00FBFF]" />
                <span className="text-[11px] font-bold text-primary-cyan tracking-[0.2em] uppercase">
                  Questions
                </span>
              </div>
              <h2 className="heading-xl text-white mb-6 text-balance">
                The things clients ask before signing.
              </h2>
              <p className="body-md text-white/60 leading-relaxed mb-8">
                Answered plainly. If yours is not here, ask us directly &mdash; we would rather
                have the awkward conversation now than after a contract.
              </p>
              <a
                href="#cta"
                className="group inline-flex items-center gap-2 font-bold text-primary-cyan hover:text-white transition-colors"
              >
                Ask us anything
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Accordion — native <details>, works without JavaScript */}
          <div className="divide-y divide-white/5 border-y border-white/5">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-6">
                <summary className="flex cursor-pointer items-start justify-between gap-6 list-none [&::-webkit-details-marker]:hidden">
                  <h3 className="font-display font-bold text-lg md:text-xl text-white group-hover:text-primary-cyan transition-colors text-balance">
                    {faq.question}
                  </h3>
                  <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 text-primary-cyan transition-transform duration-300 [details[open]_&]:rotate-45">
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 max-w-2xl text-base text-white/55 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
