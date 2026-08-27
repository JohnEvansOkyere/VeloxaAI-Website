# Fingerprints

Every site you build with **scrollcraft** gets one row here, appended after it
ships. The registry exists so your next build can prove it is a different page
rather than a re-skin of one you already made.

This file is **yours**. It starts empty on purpose: the gate is about not
repeating *yourself*, so it has nothing to say until you have built something.

The rules and the gate live in the skill's
`references/uniqueness.md`. Short version:

**A new build must differ from EVERY row below on at least 4 of the 6
dimensions.** Four against each row individually, not four on average across the
table. If a planned build fails, change the plan. Never edit a row to make room
for it.

The six dimensions are: **grammar**, **nav treatment**, **hero device**,
**act-sequence shape**, **close pattern**, **signature move**.

Dimension 6 is free, because a signature move is unique by definition. So the
gate really asks for three more out of the remaining five, and a build that
changes only grammar and world will fail it.

---

## The registry

| Build | Grammar | Nav treatment | Hero device | Act-sequence shape | Close pattern | Signature move | World | Port |
|---|---|---|---|---|---|---|---|---|
| veloxa (2026-08-27) | Chaptered editorial | Fixed vertical margin folio (chapter no. + title, updates on pass; wordmark set into the title-page composition; no bar) | Title page: set type on bare paper, no media, `data-sc-in` line-stagger on the name, data spine seeded dim in the margin | title page → 4 `flow` chapters (reveal / reveal / reveal+count / reveal) → plain FAQ flow → colophon; 7 sections; ~8.1 vh desktop; one dark ground (chapter 3 = the peak) | Colophon / masthead plate: 3 columns of small type, CTA as running text beside an inline contact form, margin chrome fades out, spine resolved to a full diagram above it | **The data spine** — a fixed hairline down the right margin; passing a chapter stamps a labelled node onto it, and at the peak it fans into four branches (Extraction / Quotation / Cutting plan / Factory pack), so one source is seen ramifying into every downstream artifact as you read; doubles as the table of contents | Fully generated, Architectural (world #6): 4 photoreal graphite stills, one warm brass accent each, no video | Next.js 16 App Router (`app/page.tsx`); engine loaded from `/public/scrollcraft.js`, mounted post-hydration by a client `Enhance` component |

*From the second build onward, a new build must differ from every row above on
at least 4 of the 6 dimensions.*

---

## What is taken

Add a bullet here whenever a build claims something a later build should avoid
reusing: a grammar, a nav treatment, a close pattern, a signature move, an
act-count-and-length band. The shared columns are what the next build inherits
as a constraint, so writing them down is the whole point.

- **Grammar: chaptered editorial** — full-stop intertitles, folio nav, title
  page hero, colophon close, hard cuts between chapter grounds.
- **Signature move: the data spine** — a persistent margin rail that accretes
  labelled nodes as chapters pass and branches at the peak. Any future
  "trace / rail / accumulating record" idea has to be visibly different from
  this one.
- **Act-sequence band:** ~8 vh across 4 `flow` chapters plus a title and a
  colophon, exactly one ground inversion carrying the peak. A later build that
  also lands "4–5 flow acts, ~8 vh, one dark peak" is repeating this shape.
- **Close pattern:** colophon plate with the CTA as running text over an inline
  form, margin chrome fading away on arrival.

---

## Appending a row

After shipping, add one line to the table and one bullet to **What is taken** if
the build claimed something new. Fill every column. Say what the build shares
with existing rows.

Rows are append-only. A build that has been superseded stays in the table,
because the space it occupies is still occupied.

---

## Worked example

The skill's author kept a registry of twelve builds across eight page grammars.
If you want to see what a filled-in table looks like, and which shapes tend to
collide, read `EXAMPLES.md` in the scrollcraft repository. Treat it as
illustration only: those rows are somebody else's builds and they do **not**
constrain yours.

---

## Row 2

| Build | Grammar | Nav treatment | Hero device | Act-sequence shape | Close pattern | Signature move | World | Port |
|---|---|---|---|---|---|---|---|---|
| veloxa-home (2026-08-27) | Live surface | App chrome: fixed top status bar carrying live console state (systems / linked n-of-5 / manual re-keys, written by the board itself as you scroll) plus a fixed left subsystem rail of nine jump links, current one lit; the rail steps aside for the pan act; no marketing bar on this route | The surface already in a state: an islands board of six real systems, unconnected, each stamped `re-key: N fields`, beside a workspace-scale title. No title card, no media, no display hero | title-state `pin` (1.4) → `flow` receipts+ledger → `flow` method (reveal+parallax) → **`pin` 3.9 PEAK** → `pan` module rail (2.2, 1597px travel) → `flow` work index (reveal) → `pin` controls (1.3) → `flow` FAQ → `pin` close (1.2); 9 sections, 4 pinned + 1 pan + 4 flow; **13.9 vh** desktop / 17.2 vh mobile; one ground inversion (navy-900) on the peak, every other section painted navy-950, zero drift | First-run step: the console's own new-engagement form. An actual input the visitor puts a cursor in, beside the founder, Accra and a one-business-day promise. No button island, no magnet | **The wiring** — six system boxes sit unconnected from the first screen; the peak act draws five labelled SVG cables between them from `--sc-p`, pushes one order record visibly down each in turn, computes every downstream figure from it by real arithmetic (quote total, cutting list, panes, invoice), drops manual re-keys 42 → 0, and then hands the visitor a quantity stepper and a price field so the whole board recomputes under their hand | No generated assets (kie.ai balance was 10 credits against a 28-credit still). Authored SVG and CSS, plus the four case-study stills reused small and cooled with a filter, and the founder photograph | Next.js 16 App Router (`app/page.tsx`); engine from `/public/scrollcraft.js`, mounted post-hydration by `components/console/HomeEnhance.tsx`; board logic in `components/console/WiringBoard.tsx` |

### What row 2 takes

- **Grammar: live surface** — app chrome as navigation, a surface already in a
  state as the hero, an actual input as the close.
- **Signature move: the wiring** — a centre-stage 2-D board of labelled boxes
  that connects itself as you scroll, pushes one record through, and is
  operable. Any future "diagram that assembles" idea has to be visibly
  different from this **and** from row 1's data spine.
- **Nav treatment: live status bar + subsystem rail.** A later build that
  writes running state into fixed chrome is repeating this.
- **Act-sequence band:** 9 sections at ~13.9 vh with a 3.9 vh pinned peak and a
  single pan act. Row 1 holds ~8 vh / 7 sections. Both bands are now taken.
- **Close pattern: first-run step**, a real form framed as the product's own
  onboarding.

### Shared with row 1

Only the brand palette (navy-950 / navy-900 / cyan / supporting blue) and the
Outfit + Inter type pairing, both of which are the client's and are fixed. All
six fingerprint dimensions differ.
