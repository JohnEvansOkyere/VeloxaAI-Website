# BRIEF — Veloxa home page (`/`)

**Interviewed.** John Evans Okyere answered four consolidated questions on
2026-08-27. His opening statement, verbatim:

> "I want you to make my main page scrolling engaging, it is too boring. make it
> interactive, dont change my colors, you can add some pictures, and designs to
> make it look more engaging, focus on trust. this is my compnay website, so
> make sure it is looking professinal"

This is the **second** scrollcraft build in this workspace. The first was the
case-study page at `/work/fabrication-ops-platform` (chaptered editorial, the
data spine). This build must clear the fingerprint gate against it.

---

## The interview answers

**1. What should the home page behave like as you scroll it?**
> **"A working instrument."** The page behaves like the software you build: a
> console/panel that responds, fills in, and computes as you scroll. Distinct
> scenes, no continuous camera flight.

**2. Which trust proof should the page lean on hardest?**
> **"Show the work running."** Real screens, real artifacts, the actual case
> study opened up. Trust from evidence.

**3. The one thing no other site does — the signature seed.**
> **"The page builds itself."** A live wiring diagram of a business follows you
> down the page: disconnected boxes at the top, and by the bottom every box is
> joined and one number flows through all of them.

**4. How far to go on new imagery.**
> **"4–5 new stills, no video."** *Not deliverable.* The kie.ai key had **10
> credits** at build time and a seedream still is priced at 28. Nothing was
> generated. The build uses the four stills already generated for the case-study
> page, the founder photograph, and authored SVG. See **Assets** below.

**Carried from the opening statement (not re-asked):**
- **Colours are locked.** Midnight Navy `#020617`, navy-900 `#0F172A`,
  neon cyan `#00FBFF`, supporting blue `#0EA5E9`. Not one value moves.
- **Vibe:** professional, trustworthy, engaging. A company website, not a demo
  reel.

---

## Grammar

**Live surface** (uniqueness.md §2.3). The page *is* the thing Veloxa builds:
an operations console with a wiring board at its centre, running a labelled
sample scenario on real logic.

Why the other seven lost:

- **Chaptered editorial** — taken. It is the case-study page's grammar, and
  reusing it would make the home page a re-skin of `/work/...`. Also wrong on
  its own terms: the home page's job is not to be read, it is to be believed.
- **Filmic one-shot** — the flagged default, carrying a burden of proof. It asks
  the visitor to be carried. A buyer evaluating a software firm wants to poke at
  something, not be swept along, and the interview answer was literally
  "a working instrument".
- **Continuous world** — no real geography, needs 4–6 generated clips, and the
  asset budget is zero. The expensive fragile one.
- **Typographic poster** — Veloxa's asset is a working system, not a sentence.
  A poster page would be the exact "all claim, no evidence" failure the trust
  brief exists to avoid.
- **Gallery / catalog** — the six products each already have their own page. A
  catalog home page answers "what are the options" when the visitor's actual
  question is "can these people build".
- **Split stage** — genuinely strong for the mess/fix contrast, and it was
  offered; the human chose the instrument instead. It also cages the method,
  guarantees and FAQ into a two-column frame they do not fit.
- **Rhythmic cutlist** — energy-brand grammar. Wrong register for a firm whose
  pitch is "we are careful".

**Nav / hero / close, per the grammar:**

- **Nav:** app chrome, not a marketing bar. A **fixed subsystem rail** down the
  left (six numbered subsystems, current one lit, each a real jump link) plus a
  **status bar** across the top carrying live console state that changes as you
  scroll: connected-system count, re-key count, and the sample record's id. The
  shared `<Navigation>` marketing bar is removed **from the home page only** and
  stays on every other route.
- **Hero:** the surface **already in a state**. No title card. The console is
  open, the board is showing six real systems that are not connected to each
  other, and every one of them is stamped `re-key: manual`. The company
  headline is set as the workspace's document title inside the chrome, at
  workspace scale, not as a 6rem display hero.
- **Close:** an **actual input**. A first-run step (`step 1 of 1 — open a
  thread`) with the real contact form wired to the existing `/api/contact` +
  Resend path, framed as the console's own new-engagement form. No magnetic
  button, no button island.

**Grammar bans observed:** no `scrub`, no `kinetic`, no `spotlight`, no `drift`
past two stops (this build drifts zero times and paints grounds per section
instead, because the acts are short enough that several are part-way through at
once — devices.md §10). No full-bleed photography. No scrims. No marketing
chrome.

**The honesty rule.** Every panel is real markup computing from real data in the
page. The wiring board derives its downstream values from one input object by
actual arithmetic, and changing the input recomputes them. The page states on
its face, in the board's own header, that the scenario is sample data:
`sample scenario · figures computed live`.
Nothing is a painted screenshot.

---

## Signature move

**The wiring.**

Six labelled system boxes — Design and spec, Quoting, Factory floor, Stock and
ERP, Accounting, Customer on WhatsApp — sit on a board that is present from the first screen and
persists to the last. At the top of the page they are **islands**: no cables,
each stamped `re-key: manual`, and a live counter of hand re-keyed fields.

Scrolling wires them. Cables are SVG paths whose `stroke-dashoffset` is driven
by the peak act's `--sc-p`, drawn in a fixed order. Each cable is labelled inside
the node it feeds with what travels down it. At the peak, one real order record is injected at the
source and **flows visibly along the cables**, and each downstream box computes
its value from that record by actual JavaScript: quantity → line total → cutting
list length → factory pack sheet count → invoice total. The re-key counter falls
to zero as the last cable lands.

Then the visitor can **operate it**: a quantity stepper and a unit-price field in
the source box, and every downstream number recomputes. It is the only thing on
the page that answers back.

**Why it is not the data spine** (build #1's signature move): the spine is a 1-D
hairline in the right *margin* that accretes nodes as chapters pass and fans into
branches once. The wiring is a 2-D board **centre stage**, made of boxes rather
than nodes, about **connection** rather than branching, present on every screen
rather than in the margin, and **operable** rather than observed.

---

## Fingerprint gate

Against the single existing row, `veloxa (2026-08-27)`:

| # | Dimension | Row 1 | This build | Differs |
|---|---|---|---|---|
| 1 | Grammar | Chaptered editorial | Live surface | **yes** |
| 2 | Nav treatment | Margin folio, chapter no. + title | Fixed subsystem rail + live status bar (app chrome) | **yes** |
| 3 | Hero device | Title page, set type on bare paper, no media | Surface already in a state: board live and disconnected, no title card | **yes** |
| 4 | Act-sequence shape | 7 sections, 4 `flow` chapters, ~8.1 vh, one dark ground | 9 sections, 4 pinned + 1 pan + 4 flow, 13.9 vh, grounds painted per section | **yes** |
| 5 | Close pattern | Colophon / masthead plate, CTA as running text | First-run step: a real input inside the console | **yes** |
| 6 | Signature move | The data spine (margin, 1-D, branching, observed) | The wiring (centre, 2-D, connecting, operable) | **yes** |

**6 of 6.** Gate cleared; 4 required.

Act-count band check: 9 sections at ~14 vh, outside the banned 6–7 acts @
13.6–13.8 vh band, and clear of row 1's own ~8 vh / 4-flow-chapter shape.

---

## The journey

```
1  Arrival      the console is already open, and six systems are not talking
2  Recognition  what each one holds, and who retypes it into the next
3  Respect      we ask for documents, not descriptions. a month on site
4  Clarity      PEAK: the board wires itself, one record flows, nothing re-keyed
5  Breadth      the modules we have already shipped, as a drawer you pull
6  Credibility  the published engagements, listed as records you can open
7  Reassurance  ownership and the boring guarantees, as a permissions panel
8  Answers      the questions a buyer actually asks
9  Commitment   one field, one action
```

## The feeling curve

```
1  Composure      an instrument already running, calm, nothing shouting; the
                  board sits there disconnected and stamped `re-key: manual`
2  Recognition    six systems named with what each one really holds; a live
                  count of the fields a person retypes between them
3  Respect        the quiet act. one column, one photograph, no counters, no
                  board motion. "we asked for a month inside the business first"
4  Clarity        PEAK. cables draw, one record flows, every downstream figure
                  computes from it, the re-key counter falls to zero — and then
                  the reader can change the input and watch it recompute
5  Breadth        six shipped modules pulled sideways out of a drawer
6  Credibility    the published engagements as an index of openable records;
                  the detail lives on each study's own page, where there is
                  room for it
7  Reassurance    ownership, gated approvals, integrity checks, audit trail —
                  shown as settings that are already on
8  Steadiness     plain answers, no motion, deliberately the flattest act
9  Trust          one field, Accra, a real address, a low bar to act
```

No two adjacent acts share a feeling. **Act 3 is the authored silence**: one
narrow column, one photograph, zero counters, and the board deliberately frozen.
The verification pass should read it as anticipation, not dead scroll.

## The peak

**Act 4, the wiring.** Largest span on the page by a visible margin (3.6 vh
against 0.9–1.6 elsewhere), the only ground inversion (navy-900 against the
navy-950 canvas), the only `count` cluster, the only operable control, and the
one act where the signature move resolves. Act 3 immediately before it is the
quietest act on the page by design.

## Tell-someone sentence

> It's the site where six systems sit there disconnected while you read, and
> then the page wires them together in front of you and pushes one order through
> all of them — and you can change the number yourself and watch every figure
> downstream redo itself.

## Authored silence

Act 3, "documents, not descriptions". One column at 58ch, one photograph
revealing up, no figures, no board motion beyond holding its disconnected state.

## Numbers used — all real, none invented

From `Stats`, `data/case-studies.ts` and the published case study:

- 10+ systems in production
- 5+ countries served
- 100+ professionals trained
- 1 month of discovery on site before code
- 4 disconnected tools replaced
- 7 roles modelled end to end
- 0 steps that re-key data by hand
- 6 shipped modules

**Dropped as invented:** the existing CTA's `98% Efficiency`, `100% Automation`
and `24/7 Support`. They are fabricated precision and they are a credibility
liability on a page whose entire job is trust.

The wiring board's own figures (order quantity, unit price, line total, cutting
list length, sheet count) are **computed live from a sample record that the
board labels as sample data**. They are not claims about Veloxa's business.

## Assets

**Generated this build: none.** kie.ai balance was 10 credits against a 28-credit
still. Reported to the human rather than worked around.

Used:
- `public/veloxa/02-floor.webp` — factory floor, act 3 (the method).
- `public/veloxa/03-spine.webp` — machined extrusion macro, act 4 (the peak).
- `public/veloxa/01-tools.webp`, `public/veloxa/04-guarantee.webp` — act 6
  (proof) as inspected artifacts inside the evidence record, and act 7.
- `public/images/john-evans-profile.jpg` — act 9, the close.

All four stills carry a warm brass accent from the case-study build. On this page
they are cooled with a CSS filter and sit inside console framing at panel scale,
never full-bleed, so the page holds one accent (cyan) as taste.md requires.
Everything else on the page is authored SVG and CSS.

## Score table

| # | Beat | Section | Device | Why this one | Span |
|---|---|---|---|---|---|
| 1 | Arrival | `#surface` console open, board disconnected | `pin` + bespoke islands board | The surface has to be *in a state* on the landing screen, and pinning is what lets state advance without the frame moving | 1.4 |
| 2 | Recognition | `#systems` six systems, what each holds | `flow` + `in` + `count` | An inventory is a list, and a list wants document flow, not a pin. The counter is the only motion it needs | ~0.9 |
| 3 | Respect | `#method` documents not descriptions | `reveal` + `parallax` | A wipe is a change of state and this act is the turn. Parallax in the media column only, never under the prose | ~1.0 |
| 4 | **Clarity (PEAK)** | `#wiring` the board wires itself | `pin` + bespoke `--sc-p` | The surface must hold absolutely still while its state advances — that is the whole grammar, and this is the act it exists for | 3.9 |
| 5 | Breadth | `#modules` six shipped products | `pan` | Lateral travel reads as range; vertical would read as ranking them | 2.2 |
| 6 | Credibility | `#proof` the work index | `reveal` | A record plate wiping in reads as a file being opened. Rows come from `caseStudies`, so the section grows with the practice | ~1.2 |
| 7 | Reassurance | `#guarantees` ownership and controls | `pin` + `--sc-p` toggles | Four controls switching themselves on inside one held settings panel, in the surface's own idiom | 1.3 |
| 8 | Steadiness | `#faq` plain answers | `flow` | The flattest act on the page, on purpose. Motion here would be noise | ~0.9 |
| 9 | Trust | `#start` first-run step | `pin` + hold cue | The close holds; the last screen resolves on the field rather than fading | 1.2 |

Checks:
- Grammar bans hold: no `scrub`, no `kinetic`, no `spotlight`, no `drift`.
- Device families used: `pin`, `flow`+`in`, `reveal`, `pan`, `count`,
  `parallax`, pointer, plus the bespoke board. **Eight**, against a floor of four.
- No family twice in a row: pin, flow, reveal, pin, pan, reveal, pin, flow, pin.
- `scrub` acts: zero (grammar ban), against a cap of two.
- No two adjacent acts share a feeling.
- One peak, largest span by 1.77x over the next-largest act (`pan`, 2.2) and by
  3x over every other act.
- **Total as built: 13.9 vh** desktop, outside the banned 13.6–13.8 band and
  under the 14 vh ceiling. 17.2 vh on a 390x844 phone.

---

## Change made during the build, at the human's request

Mid-build the human said, verbatim:

> "the case study shouldnt be part of the main page, it should sit inside case
> study, beauce there will be more case studies, we cant add all of them to the
> main page. bsdies, most of the projects also have more details."

Act 6 was originally the fabrication engagement opened up on the home page:
thesis, two large plates, a metadata grid and its stat row. That was replaced
with a **work index**: one compact row per published study, rendered by mapping
over `caseStudies` in `data/case-studies.ts`, so adding a study to the data file
adds a row here with no home-page edit. An optional `cardImage` field was added
to the `CaseStudy` interface; a study without one renders without a plate rather
than breaking the row. The detail stays on `/work/<slug>` where there is room
for it.

The act keeps its `reveal` device (the row's plate wipes in), so the score table
and the device-variety rule are unaffected. The feeling shifts from
*conviction* (one story told well) to *credibility* (a practice with a
published record), which is the more honest note for a firm that intends to
publish more of them.

The (unfinished) trailing clause of that message, "so lets", was not acted on:
it is flagged in the handover rather than guessed at.

## Feel check (run cold on the contact sheet, then diffed against the curve)

| Act | Intended | Felt (one word, cold) | Verdict |
|---|---|---|---|
| 1 surface | composure | composed, capable | match |
| 2 systems | recognition | recognition | match |
| 3 method | respect (the quiet act) | respect | match — one column, one photograph, no figures, board frozen |
| 4 wiring | clarity (PEAK) | clarity | match — largest span, only ground inversion, only operable control |
| 5 modules | breadth | breadth | match |
| 6 proof | credibility (revised) | credibility | match |
| 7 guarantees | reassurance | reassurance | match |
| 8 faq | steadiness | steadiness | match — deliberately the flattest act |
| 9 start | trust | trust, low bar to act | match |

- **Peak reads as peak:** yes. `#wiring` is 3.9 vh against 1.2–2.2 elsewhere,
  the only navy-900 ground, and on the contact sheet it is unmistakably the
  largest visual change on the page.
- **Silence before the peak:** yes. Act 3 is one 58ch column and one photograph,
  no counters, no board.
- **End resolves:** yes. The close holds on the form, the founder, and Accra;
  nothing fades to nothing.

### Two defects the feel check caught, and what changed

1. **The guarantees panel reserved empty space.** The four controls were cued in
   one at a time, so for most of the act the panel showed one row and a large
   empty box, which reads as a page that failed to load. The cues were removed:
   the rows are now always present and readable, and what advances with scroll
   is the **switch** — each toggle slides from off to on, driven from `--sc-p`
   in CSS. The panel bar's readout was changed from a static "4 of 4 enabled"
   (which contradicted the visibly-off switches) to four pips driven off the
   same progress, so the readout cannot disagree with the rows.
2. **The cable labels collided with the boxes.** Set along the curves, the five
   labels overlapped both the cables and the nodes at either end. They moved
   **inside the node each cable feeds** ("from design · cutting list"), which
   removes the collision, reads better, and is the same treatment the mobile
   chain already used — so desktop and mobile now say the same thing.

Two further fixes came from the first screenshot pass, before the feel check:
the board's absolute-position coordinate grid was leaking onto the hero's
islands board (unscoped `[data-slot]` rules) and scattering it; and the fixed
subsystem rail sat on top of the hero headline and, during the pan act, on top
of the travelling cards. The grid is now scoped to `.vx-board__nodes`, the
content column clears the rail above 1180px, and the rail steps aside for the
pan act.

## Verified with screenshots (scrollcraft `shoot.mjs`, installed Chrome)

All three runs: **no dead scroll**, **no console errors**, **no failed
requests**, **all cues clear 4.5:1 at their worst frame**.

- **Desktop 1440x900**, 55 samples: 13.9 viewport-heights,
  `pin > flow > flow > pin > pan > flow > pin > flow > pin`. Counters resolve to
  10+/5+/100+/1. The board wires all five cables, the record flows, every
  downstream figure computes, and manual re-keys falls 42 → 0. The operate-it
  control appears at the end of the act and holds.
- **Rail travel measured by hand** (devices.md warns the harness does not catch
  a rail that is narrower than the viewport): the modules rail travels
  **1597px**, well over half a viewport, so the pan act is real movement rather
  than a held still.
- **Mobile 390x844**: 17.2 vh, no dead scroll. The rail and the cable SVG are
  suppressed; the board becomes a vertical chain whose nodes each carry their
  own feed label, so the "one source, everything derived" reading survives
  without the cables. The hero board keeps system names and re-key stamps and
  drops the descriptions, which are a screen below in the ledger.
- **Reduced motion**: the board renders fully wired and fully computed, every
  control shows its real state rather than sliding into it, the rail becomes a
  native scroll region, and the page is completely legible with no motion.
- **Other routes unaffected**: `/`, `/work/fabrication-ops-platform`,
  `/veloxarecruit` and `/privacy` all return 200. The shared `<Navigation>` bar
  is untouched and still renders on all eleven non-home routes.

## Mobile pass (asked for after the first ship, and it found real defects)

The harness had reported mobile clean — no dead scroll, contrast passing — and
it was right about both, but neither question is "is this usable on a phone".
A separate audit (`mobile-audit.mjs` in this folder, run at 320 / 360 / 390 /
430 / 768 with touch emulation) checked horizontal overflow, tap-target size and
rendered type size. Three defects, one of them serious:

1. **Every tall pinned act clipped its own content.** A pinned stage is one
   `overflow: clip` screen. On a 390x844 phone the wiring board, the controls
   panel and the contact form are all taller than that, so their last rows were
   simply cut off and unreachable: the board's sixth system and its stepper, the
   fourth guarantee, and — worst — **the contact form's submit button**. The
   close was unusable on a phone. Below 900px every pinned act now un-pins and
   its content flows. The hero un-pins too: it fitted on a 844px screen with
   25px to spare, which is not a margin, and it does not fit a 667px iPhone SE.
2. **The board had no honest phone behaviour.** With the act un-pinned there is
   no pinned travel to drive it from, and the cables are not drawn below 900px
   anyway. The chain now lights **node by node as each scrolls into view**, via
   IntersectionObserver, mapped onto the same thresholds the desktop pulses use,
   so the readouts populate in the same order and the re-key counter still falls
   to zero. "It builds itself" survives the translation instead of being
   switched off. The stepper is simply present rather than revealed.
3. **22 tap targets under 40px and type down to 9.6px.** The quantity stepper —
   the one control the page asks a visitor to use — was 30x30. Under
   `pointer: coarse` the stepper is 44x44, fields are 46px, links and the footer's
   link lists get a 40-44px hit area, and the status bar grows to 52px so its
   action can reach 40px. Below 900px the uppercase mono label family is floored
   at 12px.

**After the fixes**, at 320 / 360 / 390 / 430 / 768:

- **No horizontal overflow at any width.** Zero elements poking past the
  viewport outside a deliberate scroll region.
- **Tap targets under 40px: 22 → 1**, and the one left is the shared footer's
  "FAQ" link at 31px wide (40px tall) — narrow because the word is three
  letters. It clears the 24x24 minimum and is pre-existing footer markup.
- **Smallest rendered type: 9.6px → 12px.**
- **Mobile page length: 17.4 vh → 14.6 vh**, because un-pinning removed several
  screens of empty pinned travel.
- Harness re-run clean on all three profiles; desktop unchanged at 13.9 vh.

## Not verified

- **A real iOS or Android device.** Chrome with touch emulation is not a phone:
  it cannot reproduce iOS momentum scrolling, the dynamic URL bar's effect on
  `100svh`, or Safari's handling of a `position: fixed` bar during a rubber-band
  scroll. This build ships **no video**, which removes the usual mobile failure
  mode, and every pinned act is now un-pinned below 900px, which removes the
  other one. Still worth one pass on a real handset.
- **The contact form actually delivering mail.** `StartForm` posts to the
  existing, already-working `/api/contact` + Resend route with the same field
  contract; the route itself was not exercised.
- **`color-mix()` in older Safari.** The guarantee switches interpolate their
  colour with `color-mix`. It is supported in Safari 16.2+; below that the
  switch renders in its fallback colour and the row text, which carries the
  meaning, is unaffected.
