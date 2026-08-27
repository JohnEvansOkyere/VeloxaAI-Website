import Link from "next/link";

import "./scrollcraft.css";
import "./console.css";

import Footer from "@/components/Footer";
import HomeEnhance from "@/components/console/HomeEnhance";
import StartForm from "@/components/console/StartForm";
import { WiringBoard } from "@/components/console/WiringBoard";
import { IslandBoard, NODES, TOTAL_REKEYS } from "@/components/console/systems";
import { caseStudies } from "@/data/case-studies";

/* -------------------------------------------------------------------- data */

const SECTIONS = [
  { id: "surface", label: "surface" },
  { id: "systems", label: "systems" },
  { id: "method", label: "method" },
  { id: "wiring", label: "wiring" },
  { id: "modules", label: "modules" },
  { id: "proof", label: "proof" },
  { id: "guarantees", label: "guarantees" },
  { id: "faq", label: "questions" },
  { id: "start", label: "start" },
];

const RECEIPTS = [
  {
    from: 0,
    to: 10,
    suffix: "+",
    label: "Systems in production",
    note: "Shipped and running inside real businesses, not demos.",
  },
  {
    from: 0,
    to: 5,
    suffix: "+",
    label: "Countries served",
    note: "Clients across Africa and abroad, async-first.",
  },
  {
    from: 0,
    to: 100,
    suffix: "+",
    label: "Professionals trained",
    note: "Through hands-on AI and automation workshops.",
  },
  {
    from: 0,
    to: 1,
    suffix: "",
    label: "Month of discovery",
    note: "Spent on the factory floor before any code was written.",
  },
];

const MODULES = [
  {
    href: "/veloxarecruit",
    kind: "Hiring infrastructure",
    name: "VeloxaRecruit",
    desc: "Automated CV screening and multi-modal interviews, running end to end.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <circle cx="9" cy="8" r="3.2" />
        <path d="M3.5 20a5.5 5.5 0 0 1 11 0M16.5 11.5h5M19 9v5" />
      </svg>
    ),
  },
  {
    href: "/smartmatch",
    kind: "Candidate experience",
    name: "SmartMatch",
    desc: "Role recommendations and tailored CV generation for the person applying.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <path d="M12 3l2.6 5.6L20.5 9.4l-4.3 4 1.1 5.9L12 16.5 6.7 19.3l1.1-5.9-4.3-4 5.9-.8z" />
      </svg>
    ),
  },
  {
    href: "/leadgen",
    kind: "Growth",
    name: "LeadGen AI",
    desc: "Prospect identification and qualification driven by behaviour, not lists.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <path d="M3 17l5-6 4 4 5-7 4 5" />
        <path d="M3 21h18" />
      </svg>
    ),
  },
  {
    href: "/telegram",
    kind: "Scheduling",
    name: "Telegram Booking",
    desc: "Appointments taken in chat, written straight into Sheets and Calendar.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M3 10h18M8 3v4M16 3v4" />
      </svg>
    ),
  },
  {
    href: "/whatsapp",
    kind: "Commerce",
    name: "WhatsApp Food",
    desc: "Orders taken by an agent, menu links sent, receipts returned in the thread.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <path d="M4 5h16v11H9l-5 4z" />
        <path d="M8 9h8M8 12.5h5" />
      </svg>
    ),
  },
  {
    href: "/demoforge",
    kind: "Prototyping",
    name: "DemoForge",
    desc: "A working demo of your idea, built before anyone commits to production.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <path d="M8 3h8l-1 2v5.2a2 2 0 0 0 .6 1.4l4.4 4.4A2 2 0 0 1 18.6 19H5.4a2 2 0 0 1-1.4-3l4.4-4.4A2 2 0 0 0 9 10.2V5z" />
      </svg>
    ),
  },
];

const GUARANTEES = [
  {
    t: "You own the code, the data and the infrastructure",
    d: "Repositories, cloud accounts, databases and documentation are yours from day one, handed over with training for the people who use the system daily. There is no lock-in to us.",
    state: "on since day one",
  },
  {
    t: "Approvals are gated, not assumed",
    d: "Only the current revision of a drawing can be approved, and only an approved revision can reach production. The system refuses the wrong version rather than trusting somebody to notice.",
    state: "enforced in software",
  },
  {
    t: "Every artifact carries an integrity check",
    d: "Files are checksummed when they are produced and verified when they are used, so a quietly corrupted or swapped document is caught before it costs a production run.",
    state: "sha-256, every file",
  },
  {
    t: "Superseded work stays visible, and stamped",
    d: "Old revisions are never silently deleted. They stay in the record, clearly marked, so the history of a decision survives the person who made it.",
    state: "audit trail retained",
  },
];

const FAQS = [
  {
    q: "Do you only build AI, or software in general?",
    a: "We are a software engineering company. We design and build full production systems: operations platforms, internal tools, customer-facing products, integrations, data pipelines. We put AI inside them where it genuinely earns its place. A configurator, a quoting engine or a gated factory pipeline is not an AI problem, and we will tell you so rather than sell you a model you do not need.",
  },
  {
    q: "Do you only work with large companies?",
    a: "No. We work with startups, SMEs and established manufacturers and service businesses across Africa and globally. What matters is that you have a real problem and the budget to solve it properly, not the size of your org chart.",
  },
  {
    q: "What does an engagement typically look like?",
    a: "Most start with a discovery call, then a fixed-scope build or an ongoing retainer. Smaller builds run two to six weeks; platform work runs longer and ships in weekly increments you can use as they land. Deliverables are defined upfront in writing, so there is no scope creep and no surprise invoices.",
  },
  {
    q: "Can you work with the systems we already have?",
    a: "Yes, and most of our work is exactly that. Integrating with an existing ERP, accounting package, CRM or WhatsApp channel is usually the point. We would rather extend what your team already knows than force a migration nobody asked for.",
  },
  {
    q: "Who owns the code, the data and the infrastructure?",
    a: "You do, outright, from day one. Repositories, cloud accounts and databases are yours, handed over with documentation and team training at the end of the engagement. You are never locked into us to keep your own system running.",
  },
  {
    q: "How do you approach a workflow you have never seen before?",
    a: "We learn it before we build for it. On a recent manufacturing engagement that meant a month on site: following the work, collecting real documents instead of descriptions, and only then proposing a system. It is why the software fits the business instead of the business bending to the software. The full account is on our case study page.",
  },
  {
    q: "Do you train our team as well?",
    a: "Yes. Every handoff includes documentation and hands-on training for the people who will use the system daily. We also run practical AI and automation workshops for business teams in Ghana and remotely, built around your actual tools rather than a generic curriculum.",
  },
  {
    q: "Where are you based, and can you work with us remotely?",
    a: "Veloxa is based in Accra, Ghana, and we work with clients internationally, async-first. For engagements where being physically present changes the outcome, such as factory floors, warehouses and clinics, we show up in person.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

/* -------------------------------------------------------------------- page */

export default function Home() {
  return (
    <div className="vx-console">
      {/* App chrome replaces the marketing bar. It is the navigation, and it
          carries live console state that the board writes into as you scroll. */}
      <div className="vx-status">
        <a className="vx-status__brand" href="#surface">
          Veloxa <span>ops console</span>
        </a>
        <div className="vx-status__state" id="vx-st-state" data-linked="0">
          <span>
            <i className="vx-status__dot" aria-hidden="true" />
            <span id="vx-st-section">surface</span>
          </span>
          <span>
            systems <b>6</b>
          </span>
          <span>
            linked <b id="vx-st-link">0</b>/5
          </span>
          <span>
            manual re-keys <b id="vx-st-rekey">{TOTAL_REKEYS}</b>
          </span>
        </div>
        <a className="vx-status__action" href="#start">
          Start a thread
        </a>
      </div>

      <nav className="vx-rail" id="vx-rail" aria-label="Sections">
        <ol>
          {SECTIONS.map((s, i) => (
            <li key={s.id} data-for={s.id} data-label={s.label} className={i === 0 ? "is-on" : ""}>
              <a href={`#${s.id}`}>{s.label}</a>
            </li>
          ))}
        </ol>
      </nav>

      <main id="sc-root">
        {/* ---------------------------------------------------- 1 · surface */}
        <section id="surface" data-sc-act="pin" data-sc-span="1.4">
          <div data-sc-stage>
            <div className="vx-wrap">
              <div className="vx-hero">
                <div data-sc-cue="0 0.96 0 0.35">
                  <p className="vx-mono" style={{ color: "var(--sc-ink-faint)", margin: 0 }}>
                    Veloxa Technology Ltd &middot; Accra, Ghana &middot; software engineering
                  </p>
                  <h1 className="vx-hero__title">
                    Run your business like it&rsquo;s <em>twice the size.</em>
                  </h1>
                  <p className="vx-hero__sub">
                    We build the operations platforms, internal systems and AI agents behind
                    Africa&rsquo;s fastest-moving teams. Here is what that actually means, running.
                  </p>
                  <div className="vx-hero__acts">
                    <a className="vx-btn" href="#start">
                      Start a thread
                    </a>
                    <a className="vx-link" href="#wiring">
                      Watch it wire itself
                    </a>
                  </div>
                </div>

                <div>
                  <IslandBoard />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------- 2 · systems */}
        <section
          id="systems"
          className="vx-section vx-section--tight"
          data-sc-act="flow"
          aria-labelledby="systems-h"
        >
          <div className="vx-wrap">
            <div className="vx-receipts" data-sc-in data-sc-stagger="60">
              {RECEIPTS.map((r) => (
                <div className="vx-receipt" key={r.label}>
                  <span className="vx-receipt__v">
                    <span data-sc-count={`${r.from} ${r.to}`} data-sc-count-at="0.14 0.44">
                      {r.from}
                    </span>
                    {r.suffix}
                  </span>
                  <span className="vx-receipt__l">{r.label}</span>
                  <span className="vx-receipt__d">{r.note}</span>
                </div>
              ))}
            </div>

            <div style={{ marginBlockStart: "clamp(3rem, 6vw, 5rem)" }} data-sc-in data-sc-stagger="70">
              <span className="vx-eyebrow">The state most businesses are in</span>
              <h2 className="vx-h" id="systems-h" style={{ marginBlockStart: "1rem" }}>
                Six systems. One business. None of them talking.
              </h2>
              <p className="vx-body" style={{ marginBlockStart: "1.1rem" }}>
                Nothing here is broken. Every one of these tools does its own job well. The cost is
                in the gaps between them, where a person reads a number off one screen and types it
                into the next, and where the same order quietly becomes six slightly different
                versions of itself.
              </p>
            </div>

            <div
              className="vx-panel vx-ledger--scroll"
              style={{ marginBlockStart: "2rem" }}
              data-sc-in
            >
              <table className="vx-ledger">
                <caption className="vx-mono" style={{ padding: "0.85rem 0.9rem 0" }}>
                  Sample scenario &middot; a fabrication order moving through six systems
                </caption>
                <thead>
                  <tr>
                    <th scope="col">System</th>
                    <th scope="col">What it holds</th>
                    <th scope="col">Fed by hand</th>
                  </tr>
                </thead>
                <tbody>
                  {NODES.map((n) => (
                    <tr key={n.slot}>
                      <th scope="row">{n.name}</th>
                      <td>{n.holds}</td>
                      <td className="vx-rk">
                        {n.rekey === 0 ? "source" : `${n.rekey} fields`}
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <th scope="row">Total, per order</th>
                    <td>Read off one screen, typed into the next.</td>
                    <td className="vx-rk">{TOTAL_REKEYS} fields</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------- 3 · method */}
        <section id="method" className="vx-section" data-sc-act="flow" aria-labelledby="method-h">
          <div className="vx-wrap">
            <div className="vx-two">
              <div data-sc-in data-sc-stagger="70">
                <span className="vx-eyebrow">Before anything is built</span>
                <h2 className="vx-h" id="method-h" style={{ marginBlockStart: "1rem" }}>
                  We learn the business before we build for it.
                </h2>
                <p className="vx-body" style={{ marginBlockStart: "1.1rem", maxWidth: "58ch" }}>
                  On our most recent manufacturing engagement that meant a month on site, following
                  the work: watching a quote get written, watching a cutting list get carried to the
                  saw, watching the same dimensions get typed a fourth time.
                </p>
                <p className="vx-body" style={{ marginBlockStart: "1rem", maxWidth: "58ch" }}>
                  We ask for documents rather than descriptions, because a real invoice answers ten
                  questions truthfully and a meeting about invoices answers none of them. Only then
                  do we propose a system, in writing, with the scope fixed before anyone commits.
                </p>
              </div>

              <figure className="vx-fig" data-sc-reveal="up" data-sc-reveal-at="0.16 0.52">
                <div className="vx-plate vx-plate--par">
                  <img
                    src="/veloxa/02-floor.webp"
                    srcSet="/veloxa/02-floor-m.webp 800w, /veloxa/02-floor.webp 1600w"
                    sizes="(min-width: 900px) 40vw, 90vw"
                    width={1600}
                    height={889}
                    alt="A fabrication floor seen from a high walkway: cutting benches, sheet racks and swept concrete."
                    data-sc-parallax="0.6"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <figcaption>
                  Discovery, on site &middot; the fabrication engagement, 2026
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* ------------------------------------------- 4 · wiring — THE PEAK */}
        <section id="wiring" data-sc-act="pin" data-sc-span="3.9" aria-labelledby="wiring-h">
          <div data-sc-stage>
            <div className="vx-wrap">
              <div className="vx-peak-head">
                <h2 className="vx-h" id="wiring-h">
                  One source. Everything else derived.
                </h2>
                <p className="vx-body">
                  Keep scrolling. The six systems wire together, one order is pushed through, and
                  every figure below is worked out from it. Nothing is typed twice.
                </p>
              </div>
              <WiringBoard />
            </div>
          </div>
        </section>

        {/* ---------------------------------------------------- 5 · modules */}
        <section id="modules" data-sc-act="pan" data-sc-span="2.2" aria-labelledby="modules-h">
          <div data-sc-stage>
            <div className="vx-rail-track" data-sc-pan="0.06">
              <div className="vx-rail-lead" style={{ ["--i" as string]: 0 }}>
                <span className="vx-eyebrow">Already shipped</span>
                <h2 className="vx-h" id="modules-h">
                  Six things we have already built and run.
                </h2>
                <p className="vx-body" style={{ fontSize: "0.92rem" }}>
                  Each one started as somebody&rsquo;s manual process. Each one has its own page.
                </p>
              </div>

              {MODULES.map((m, i) => (
                <Link
                  key={m.href}
                  href={m.href}
                  className="vx-module"
                  style={{ ["--i" as string]: i + 1 }}
                >
                  <span className="vx-module__icon">{m.icon}</span>
                  <span className="vx-module__kind">{m.kind}</span>
                  <h3 className="vx-module__name">{m.name}</h3>
                  <p className="vx-module__desc">{m.desc}</p>
                  <span className="vx-module__go">Open &rarr;</span>
                </Link>
              ))}

              <div className="vx-rail-tail" style={{ ["--i" as string]: MODULES.length + 1 }}>
                <h3 className="vx-h vx-h--sm">And the ones that are yours alone.</h3>
                <p className="vx-body" style={{ fontSize: "0.92rem" }}>
                  Most of our work never becomes a product. It is the platform one business runs on,
                  built for how that business actually works.
                </p>
                <a className="vx-link" href="#start">
                  Talk about yours
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------ 6 · proof */}
        {/* A work index, not a case study. Rows come from `caseStudies`, so a
            new engagement appears here by being added to the data file, and the
            detail stays on its own page where there is room for it. */}
        <section id="proof" className="vx-section" data-sc-act="flow" aria-labelledby="proof-h">
          <div className="vx-wrap">
            <div data-sc-in data-sc-stagger="70">
              <span className="vx-eyebrow">Work you can inspect</span>
              <h2 className="vx-h" id="proof-h" style={{ marginBlockStart: "1rem" }}>
                Engagements, written up in full.
              </h2>
              <p className="vx-body" style={{ marginBlockStart: "1.1rem" }}>
                Each one is a complete account of what we found, what we decided and what we built,
                including the parts that were harder than expected. Open one and read it end to end.
              </p>
            </div>

            <div className="vx-records" style={{ marginBlockStart: "2rem" }}>
              <div className="vx-panel__bar">
                <span>
                  records <strong>/work</strong>
                </span>
                <span style={{ marginInlineStart: "auto" }}>
                  {caseStudies.length} published
                </span>
              </div>

              {caseStudies.map((c, i) => (
                <article className="vx-rec" key={c.slug}>
                  {c.cardImage ? (
                    <figure
                      className="vx-rec__plate vx-plate"
                      data-sc-reveal={i % 2 === 0 ? "left" : "right"}
                      data-sc-reveal-at="0.34 0.6"
                    >
                      <img
                        src={c.cardImage}
                        width={1600}
                        height={889}
                        alt=""
                        loading="lazy"
                        decoding="async"
                      />
                    </figure>
                  ) : null}

                  <div className="vx-rec__body">
                    <p className="vx-rec__meta">
                      {c.sector} &middot; {c.location} &middot; {c.year}
                    </p>
                    <h3 className="vx-h vx-h--sm">
                      <Link href={`/work/${c.slug}`}>{c.title}</Link>
                    </h3>
                    <p className="vx-body" style={{ fontSize: "0.92rem", marginBlockStart: "0.6rem" }}>
                      {c.cardSummary}
                    </p>
                    <p className="vx-rec__foot">
                      <span className="vx-mono">{c.engagement}</span>
                      <span className="vx-rec__status">{c.status}</span>
                    </p>
                  </div>

                  <Link className="vx-link vx-rec__go" href={`/work/${c.slug}`}>
                    Open record
                  </Link>
                </article>
              ))}

              <p className="vx-rec__note">
                Most of our work sits under an active engagement and is not published. We can talk
                through those in a call, and name references where the client has agreed to it.
              </p>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------- 7 · guarantees */}
        <section id="guarantees" data-sc-act="pin" data-sc-span="1.3" aria-labelledby="guarantees-h">
          <div data-sc-stage>
            <div className="vx-wrap">
              <div className="vx-panel">
                <div className="vx-panel__bar">
                  <span>
                    controls <strong>every engagement</strong>
                  </span>
                  <span className="vx-guard__pips" style={{ marginInlineStart: "auto" }}>
                    enabled
                    {GUARANTEES.map((g, i) => (
                      <i key={g.t} style={{ ["--gi" as string]: i }} aria-hidden="true" />
                    ))}
                  </span>
                </div>
                <div className="vx-panel__body vx-guard__panel" style={{ padding: "clamp(1rem, 2.5vw, 1.6rem)" }}>
                  <h2 className="vx-h vx-h--sm" id="guarantees-h" style={{ marginBlockEnd: "1.1rem" }}>
                    The unglamorous engineering, switched on by default.
                  </h2>
                  <div className="vx-guard">
                    {GUARANTEES.map((g, i) => (
                      <div className="vx-guard__row" key={g.t} style={{ ["--gi" as string]: i }}>
                        <span className="vx-guard__sw" aria-hidden="true" />
                        <div>
                          <p className="vx-guard__t">{g.t}</p>
                          <p className="vx-guard__d">{g.d}</p>
                          <span className="vx-guard__state">{g.state}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* -------------------------------------------------------- 8 · faq */}
        <section id="faq" className="vx-section vx-section--tight" data-sc-act="flow" aria-labelledby="faq-h">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
          <div className="vx-wrap">
            <div data-sc-in data-sc-stagger="60">
              <h2 className="vx-h" id="faq-h">
                The questions buyers actually ask.
              </h2>
              <div className="vx-faq" style={{ marginBlockStart: "1.6rem" }}>
                {FAQS.map((f) => (
                  <details key={f.q}>
                    <summary>{f.q}</summary>
                    <p>{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------ 9 · start */}
        <section id="start" data-sc-act="pin" data-sc-span="1.2" aria-labelledby="start-h">
          <div data-sc-stage>
            <div className="vx-wrap">
              <div className="vx-start">
                <div data-sc-cue="0.02">
                  <span className="vx-eyebrow">Open a thread</span>
                  <h2 className="vx-h" id="start-h" style={{ marginBlockStart: "1rem" }}>
                    Tell us what is being retyped.
                  </h2>
                  <p className="vx-body" style={{ marginBlockStart: "1.1rem", maxWidth: "46ch" }}>
                    That is usually enough to start. Name the systems you run and the step that
                    still happens by hand, and we will come back with what we would do about it.
                  </p>

                  <div className="vx-who">
                    <img
                      src="/images/john-evans-profile.jpg"
                      width={96}
                      height={96}
                      alt="John Evans Okyere, founder of Veloxa Technology."
                      loading="lazy"
                      decoding="async"
                    />
                    <div>
                      <p className="vx-who__n">John Evans Okyere</p>
                      <p className="vx-who__r">Founder &middot; Veloxa Technology Ltd, Accra</p>
                    </div>
                  </div>

                  <p className="vx-mono" style={{ color: "var(--sc-ink-faint)", marginBlockStart: "1.2rem" }}>
                    Accra, Ghana &middot; working async with clients worldwide
                  </p>
                </div>

                <StartForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <HomeEnhance />
    </div>
  );
}
