import type { Metadata } from "next";
import "../../scrollcraft.css";
import "../../home.css";
import Enhance from "@/components/Enhance";
import ColophonForm from "@/components/ColophonForm";
import { getCaseStudy } from "@/data/case-studies";

const study = getCaseStudy("fabrication-ops-platform");

export const metadata: Metadata = {
  title: study?.title ?? "Case study",
  description: study?.metaDescription,
  alternates: { canonical: "/work/fabrication-ops-platform" },
  openGraph: {
    type: "article",
    title: study?.title,
    description: study?.metaDescription,
    url: "/work/fabrication-ops-platform",
    images: ["/opengraph-image"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: study?.title,
  description: study?.metaDescription,
  about: "Operations platform for a glass and aluminium fabricator",
  author: { "@type": "Organization", name: "Veloxa Technology Ltd" },
  publisher: { "@type": "Organization", name: "Veloxa Technology Ltd" },
};

export default function FieldReport() {
  const year = new Date().getFullYear();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <noscript>
        <style>{`[data-sc-in],[data-sc-stagger]>*,[data-sc-cue]{opacity:1!important;transform:none!important}[data-sc-reveal]{clip-path:none!important}`}</style>
      </noscript>

      <div className="sc-grain" aria-hidden="true" />

      <nav id="vx-folio" className="vx-folio" aria-label="Reading position">
        <div className="vx-folio__inner">
          <span className="vx-folio__num">00</span>
          <span className="vx-folio__rule" aria-hidden="true" />
          <span className="vx-folio__title">Field report</span>
        </div>
      </nav>

      <aside id="vx-spine" className="vx-spine" aria-hidden="true">
        <span className="vx-spine__cap">The data spine</span>
        <span className="vx-spine__track" />
        <span className="vx-spine__fill" />
        <span className="vx-spine__node" data-i="0"><span className="vx-spine__label">Intake</span><span className="vx-spine__dot" /></span>
        <span className="vx-spine__node" data-i="1"><span className="vx-spine__label">Discovery</span><span className="vx-spine__dot" /></span>
        <span className="vx-spine__node" data-i="2"><span className="vx-spine__label">One source</span><span className="vx-spine__dot" /></span>
        <span className="vx-spine__node" data-i="3"><span className="vx-spine__label">Release gate</span><span className="vx-spine__dot" /></span>
        <span className="vx-spine__branch">
          <span className="vx-spine__twig">Extraction</span>
          <span className="vx-spine__twig">Quotation</span>
          <span className="vx-spine__twig">Cutting plan</span>
          <span className="vx-spine__twig">Factory pack</span>
        </span>
      </aside>

      <main id="sc-root">
        {/* ============================================ title page ========= */}
        <header id="vx-title" className="vx-title">
          <div className="vx-title__top">
            <a href="/" className="vx-title__mark vx-link" style={{ textDecoration: "none" }}>
              Veloxa
            </a>
            <span className="vx-kicker">Field report</span>
            <span className="vx-kicker">Manufacturing &middot; Accra</span>
          </div>

          <div className="vx-title__body">
            <h1 className="vx-title__h sc-display" data-sc-in data-sc-stagger="90">
              <span>One month on</span>
              <span>the factory floor</span>
              <span>before a line of code.</span>
            </h1>
            <p className="vx-title__sub">
              A glass and aluminium fabricator was one signature away from buying a
              foreign ERP. We asked for a month inside the business first. This is
              what that month changed.
            </p>
          </div>

          <div className="vx-title__meta">
            <span>How we run an engagement</span>
            <span>Four chapters</span>
            <span>Read start to finish</span>
          </div>
        </header>

        {/* ============================================ chapter 1 ========= */}
        <section
          id="ch1"
          className="vx-chapter"
          data-sc-act="flow"
          data-chapter="1"
          data-title="The situation"
        >
          <div className="vx-chapter__head sc-wrap">
            <span className="vx-kicker">Chapter 01</span>
            <h2 className="vx-intertitle sc-display">
              The situation<span className="vx-stop">.</span>
            </h2>
          </div>

          <div className="vx-spread sc-wrap">
            <div className="vx-col vx-col--text vx-prose" data-sc-in data-sc-stagger="70">
              <p className="vx-lede">A precise business, running on imprecise tools.</p>
              <p>
                The company fabricates and installs windows, doors, frameless
                glass, curtain walls and balustrades. The engineering is exact: a
                sash cut two millimetres wrong is scrap. The systems around that
                engineering were not.
              </p>
              <p>
                Work arrived by phone, WhatsApp and walk-in, with nothing
                recording the lead. Measurements were taken by hand on site and
                re-entered in the office, sometimes twice. Quotes were built in
                spreadsheets, one estimator at a time. Drawings lived in AutoCAD,
                frameless jobs in a separate desktop package, and cutting was
                planned in a standalone optimiser that knew about none of it.
              </p>
              <p>
                <strong>
                  Every handoff between those four tools was a person retyping
                  numbers.
                </strong>{" "}
                They had already found a foreign cloud ERP for window fabricators
                and were close to buying it.
              </p>

              <ul className="vx-marks">
                <li><span className="vx-marks__k">Intake</span><span className="vx-marks__v">Phone, WhatsApp, walk-in. Nothing captured the lead.</span></li>
                <li><span className="vx-marks__k">Quoting</span><span className="vx-marks__v">Spreadsheets and manual calculation, per estimator.</span></li>
                <li><span className="vx-marks__k">Drawing</span><span className="vx-marks__v">AutoCAD, plus a second package for frameless work.</span></li>
                <li><span className="vx-marks__k">Cutting</span><span className="vx-marks__v">A desktop optimiser, fed by hand, disconnected from the quote.</span></li>
              </ul>
            </div>

            <figure
              className="vx-media vx-col--media"
              data-sc-reveal="up"
              data-sc-reveal-at="0 0.2"
            >
              <img
                src="/veloxa/01-tools.webp"
                srcSet="/veloxa/01-tools-m.webp 820w, /veloxa/01-tools.webp 1600w"
                sizes="(max-width: 1100px) 92vw, 44vw"
                width={1600}
                height={889}
                alt="A long aisle of stacked aluminium extrusion profiles inside a fabrication workshop at dawn."
                loading="lazy"
                decoding="async"
              />
              <figcaption className="vx-cap">
                <b>Profile stock at the fabricator.</b> Four systems on site, none
                of them talking to each other.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* ============================================ chapter 2 (quiet) = */}
        <section
          id="ch2"
          className="vx-chapter vx-chapter--quiet"
          data-sc-act="flow"
          data-chapter="2"
          data-title="The method"
        >
          <div className="vx-chapter__head sc-wrap">
            <span className="vx-kicker">Chapter 02</span>
            <h2 className="vx-intertitle sc-display">The method<span className="vx-stop">.</span></h2>
          </div>

          <div className="vx-spread sc-wrap">
            <div className="vx-col vx-col--text vx-prose" data-sc-in data-sc-stagger="80">
              <p className="vx-lede">We asked for a month inside the business first.</p>
              <p>
                Not a kickoff workshop. A month on site, in the office and on the
                factory floor, watching the work happen before proposing
                anything.
              </p>
              <p>
                The rule for that month: ask for documents, not descriptions. A
                description gives you the process people believe they follow. A
                photo of a supplier invoice, one paper cutting list, one
                completed job file gives you the one they actually follow, and it
                answers ten questions at once.
              </p>
              <p>
                We left with the supplier price list per profile system, real
                invoices, a completed frame job, a completed frameless pack,
                recent quotations, and the staff list with roles. Those documents
                became the system defaults instead of our assumptions.
              </p>

              <blockquote className="vx-pull">
                <p>Ask for documents, not descriptions.</p>
                <cite>The rule we run discovery on</cite>
              </blockquote>
            </div>

            <figure
              className="vx-media vx-col--media"
              data-sc-reveal="left"
              data-sc-reveal-at="0 0.2"
            >
              <div className="vx-media__px" data-sc-parallax="0.4">
                <img
                  src="/veloxa/02-floor.webp"
                  srcSet="/veloxa/02-floor-m.webp 820w, /veloxa/02-floor.webp 1600w"
                  sizes="(max-width: 1100px) 92vw, 40vw"
                  width={1600}
                  height={889}
                  alt="A quiet fabrication floor seen from a mezzanine, one worker crossing a shaft of daylight."
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <figcaption className="vx-cap">
                <b>The floor, mid-shift.</b> A month here decides whether the
                software fits the business or the business bends to the software.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* ============================================ chapter 3 — PEAK == */}
        <section
          id="ch3"
          className="vx-chapter band--dark"
          data-sc-act="flow"
          data-chapter="3"
          data-title="The build"
        >
          <div className="vx-chapter__head sc-wrap">
            <span className="vx-kicker">Chapter 03</span>
            <h2 className="vx-intertitle sc-display">The build<span className="vx-stop">.</span></h2>
          </div>

          <div className="sc-wrap">
            <p className="vx-peak__thesis sc-display">
              The design on the canvas is the single source of truth. Everything
              else <em>derives from it</em>.
            </p>

            <div className="vx-peak__grid">
              <div className="vx-col--text vx-prose" data-sc-in data-sc-stagger="70">
                <p>
                  A project is one workspace holding many openings, each with its
                  own dimensions, glass and opening type, added in place.
                  Twenty-two windows, twenty-two measurements, one combined
                  quotation at the end.
                </p>
                <p><strong>From that one model the platform does the rest. Nothing is typed twice.</strong></p>

                <p className="vx-stem__src">Design on canvas</p>
                <ul className="vx-stem">
                  <li>
                    <span className="vx-stem__k">Extraction &amp; BOM</span>
                    <span className="vx-stem__v">Every glass, hardware and accessory item with quantities. Generated, manual or hybrid per product family.</span>
                  </li>
                  <li>
                    <span className="vx-stem__k">Quotation</span>
                    <span className="vx-stem__v">Priced in GHS from the approved extraction, sent to the client, gated on payment.</span>
                  </li>
                  <li>
                    <span className="vx-stem__k">Cutting plan</span>
                    <span className="vx-stem__v">Kerf-aware nesting against real stock bar lengths. Bar-by-bar plan and waste percentage.</span>
                  </li>
                  <li>
                    <span className="vx-stem__k">Factory pack</span>
                    <span className="vx-stem__v">Client overview drawing, plus per-side factory breakdowns with cutting and material lists.</span>
                  </li>
                </ul>
              </div>

              <figure className="vx-media vx-col--media" data-sc-reveal="left" data-sc-reveal-at="0 0.26">
                <img
                  src="/veloxa/03-spine.webp"
                  srcSet="/veloxa/03-spine-m.webp 820w, /veloxa/03-spine.webp 1600w"
                  sizes="(max-width: 1100px) 92vw, 44vw"
                  width={1600}
                  height={889}
                  alt="A long steel layout table receding to a vanishing point, a single aluminium bar and a rule laid on the centreline."
                  loading="lazy"
                  decoding="async"
                />
                <figcaption className="vx-cap">
                  <b>One bar, one rule, one table.</b> The whole system reads from
                  a single model.
                </figcaption>
              </figure>
            </div>

            <div className="vx-count" data-sc-in data-sc-stagger="60">
              <div>
                <div className="vx-count__n" data-sc-count="0 1" data-sc-count-at="0.1 0.5">1</div>
                <div className="vx-count__l">month embedded before a line of code</div>
              </div>
              <div>
                <div className="vx-count__n" data-sc-count="0 4" data-sc-count-at="0.14 0.55">4</div>
                <div className="vx-count__l">disconnected tools replaced</div>
              </div>
              <div>
                <div className="vx-count__n" data-sc-count="0 7" data-sc-count-at="0.18 0.6">7</div>
                <div className="vx-count__l">roles modelled end to end</div>
              </div>
              <div>
                <div className="vx-count__n">0</div>
                <div className="vx-count__l">steps that re-key data by hand</div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================ chapter 4 ========= */}
        <section
          id="ch4"
          className="vx-chapter vx-chapter--reverse"
          data-sc-act="flow"
          data-chapter="4"
          data-title="The guarantees"
        >
          <div className="vx-chapter__head sc-wrap">
            <span className="vx-kicker">Chapter 04</span>
            <h2 className="vx-intertitle sc-display">The guarantees<span className="vx-stop">.</span></h2>
          </div>

          <div className="vx-spread sc-wrap">
            <div className="vx-col vx-col--text vx-prose" data-sc-in data-sc-stagger="70">
              <p className="vx-lede">Built so the wrong revision cannot reach the saw.</p>
              <p>
                In a fabrication business the expensive failure is not downtime.
                It is producing yesterday&apos;s approved drawing. Most of the
                work since the first demo has gone into making that structurally
                impossible.
              </p>
              <p>
                This is the unglamorous half of engineering, and it is the half
                that protects the invoice.
              </p>

              <ul className="vx-marks">
                <li><span className="vx-marks__k">Revisions</span><span className="vx-marks__v">Only the latest extraction revision can be approved. A new one stamps its predecessor superseded and invalidates every path that depended on it.</span></li>
                <li><span className="vx-marks__k">Integrity</span><span className="vx-marks__v">Drawing files carry SHA-256 checksums. Approved or superseded revisions reject further uploads.</span></li>
                <li><span className="vx-marks__k">Release</span><span className="vx-marks__v">Every factory release freezes its own numbers: extraction revision, quotation, drawing revision, file manifest.</span></li>
                <li><span className="vx-marks__k">Visibility</span><span className="vx-marks__v">Superseded releases are never deleted. They stay on the floor, marked Do Not Produce.</span></li>
              </ul>
            </div>

            <figure
              className="vx-media vx-col--media"
              data-sc-reveal="right"
              data-sc-reveal-at="0 0.2"
            >
              <div className="vx-media__px" data-sc-parallax="0.35">
                <img
                  src="/veloxa/04-guarantee.webp"
                  srcSet="/veloxa/04-guarantee-m.webp 820w, /veloxa/04-guarantee.webp 1600w"
                  sizes="(max-width: 1100px) 92vw, 40vw"
                  width={1600}
                  height={889}
                  alt="A heavy steel door set into a concrete wall, standing slightly ajar with cold light through the gap."
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <figcaption className="vx-cap">
                <b>A gate is only a gate if it cannot be walked around.</b> So we
                build the ones that cannot.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* ============================================ colophon ========== */}
        <footer id="vx-colophon" className="vx-colophon">
          <div className="sc-wrap">
            <p className="vx-colophon__mark">Veloxa</p>
            <p className="vx-colophon__line">
              That is how we run an engagement. This is one of them, written up in
              full.
            </p>

            <div className="vx-colophon__grid">
              <div>
                <h3>The engagement</h3>
                <p>
                  One month of on-site discovery, then a fixed-scope build
                  shipping in weekly increments. In production use today.
                </p>
              </div>
              <div>
                <h3>Confidentiality</h3>
                <p>
                  A client under an active engagement is described by sector, not
                  name. We publish a name only with written permission.
                </p>
              </div>
              <div>
                <h3>What you own</h3>
                <p>
                  The repositories, the cloud accounts, the databases, the
                  documentation. Yours from day one, with training for the people
                  who use it.
                </p>
              </div>
            </div>

            <ColophonForm />

            <div className="vx-legal">
              <span>&copy; {year} Veloxa</span>
              <a href="/">Home</a>
              <a href="/privacy">Privacy</a>
              <a href="/terms">Terms</a>
              <a href="/security">Security</a>
            </div>
          </div>
        </footer>
      </main>

      <Enhance />
    </>
  );
}
