# BRIEF — Veloxa Technology

**Self-authored, not interviewed.** The human (Veloxa's founder, John Evans Okyere)
was asked the eight interview questions and answered: "I have no much idea about
your questions, can you do and select what is more needful here for me?" What
follows is written in the brand's voice from the existing site, the published
case study, and the founder's stated goals: *more responsive, build trust, look
professional, show longevity and credibility, be engaging — the current site is
boring, no animation, no scroll, no images.*

---

## The eight answers (self-authored)

**1. Vibe — 3 to 5 words + references.**
Engineered, plain-spoken, quietly established. Like a published field report.
References: a Dieter Rams product manual; the plate on the cornerstone of an old
bank; the print layout of *MIT Technology Review* circa 2015 — folios, wide
margins, one column of argument, figures with captions.

**2. The scroll journey, section by section.**
- Title page: the company name set like a cornerstone plaque, no image, one line
  of what they do, the folio and the data-spine already visible in the margin.
- Chapter 1 — *The situation*: a precise business running on imprecise tools.
  Four disconnected systems, every handoff a person retyping numbers. The
  reader's own operational mess, named plainly.
- Chapter 2 — *The method*: "we asked for a month inside the business first."
  Ask for documents, not descriptions. The contrarian, deliberate move.
- Chapter 3 — *The build* (PEAK): one data spine. The design on the canvas is
  the single source of truth; extraction, quotation, cutting plan and factory
  pack all derive from it. Nothing typed twice. The spine in the margin
  completes itself here.
- Chapter 4 — *The guarantees*: the unglamorous engineering — gated approvals,
  SHA-256 integrity checks, superseded revisions kept visible and stamped Do Not
  Produce — that makes the expensive mistake structurally impossible.
- Colophon: who we are, where we are (Accra), what you own (everything, from day
  one), and one line to start a conversation, set as running text with a quiet
  contact form.

**3. The energy curve.**
Calm open (a plaque, not a bang). Low steady tension through Chapter 1 as the
cost is named. A deliberate drop to quiet at Chapter 2 — the method is stated
softly, on paper, almost understated. Chapter 3 is the one lift on the page: the
spine resolving is the loudest moment, and it is loud by clarity, not by volume.
Chapters 4 and the colophon settle back down to a firm, level close. No section
is shouting. An established firm does not shout.

**4. How should someone feel, stage by stage — and the ONE moment.**
- Title: composure. "These people are serious and have been doing this a while."
- Ch.1: recognition, mild discomfort. "That is us. That is our Tuesday."
- Ch.2: respect, slight surprise. "They turned down the sale to go learn the
  business first. Who does that."
- Ch.3: clarity — the peak. Relief that something finally fits together.
- Ch.4: reassurance. "They have thought about the failure I am scared of."
- Colophon: trust, and a low bar to act. "I could just email them."

**The one moment to remember and repeat to a colleague:**
> "There's a single line running down the whole page, and as you read, every
> part of the system grows out of it — one source, and the quote, the cut list
> and the factory drawings all branch off the same line."

**5. One thing this site does that no site they have seen does.**
The **data spine**: a persistent hairline down the full page. Passing a chapter
stamps a labelled node onto it and draws a connector to that chapter's artifact
(Extraction → Quotation → Cutting plan → Factory pack). By the colophon the
margin holds a complete, legible diagram of how Veloxa builds, assembled from
the act of reading. It is also the table of contents: each node is a jump link.
Hand-coded from `--sc-p` and a scroll listener; the engine is untouched.

**6. How far from premium-minimal.**
**Editorial**, per uniqueness.md §5. Paper ground, folios, a real measure,
restraint. Not premium-minimal (that is the quiet-dark-one-accent costume the
skill warns is a non-decision), not maximalist. Substance-forward.

**7. One unbroken world, or distinct scenes.**
**Distinct chapters with hard cuts.** Chaptered-editorial grammar. Each chapter
lands on its own ground and stays there. No continuous camera flight, no
crossfades — those would read as spectacle, and the brief is credibility.

**8. Assets already owned.**
A wordmark (text "Veloxa Technology Ltd", cyan "V" tile — being retired in this
build in favour of a set wordmark). One founder headshot. No photography, no
footage, no brand photo library. → 4 photoreal architectural stills generated
via kie.ai (seedream), used small, in captioned media columns. No video.

---

## Grammar

**Chaptered editorial** (uniqueness.md §2.2).

Why the other seven lost:
- **Filmic one-shot**: it is the flagged default; the brief is credibility, not
  "carry me through a launch". Carries a burden of proof it does not meet here.
- **Live surface**: Veloxa is a services firm with ~6 products, not one product
  whose demo is the argument; the honesty rule would require real computing
  panels for a composite pitch that has no single surface.
- **Continuous world**: no real geography to travel; the expensive, fragile one.
- **Typographic poster**: their credibility rests on a documented *method* and a
  *narrative*, which is prose, not one sentence at 40vw.
- **Gallery / catalog**: the visitor's question is "should I believe you", not
  "what are the options". The products already have their own pages.
- **Split stage**: a strong fit for the Ch.1→Ch.3 contrast alone, but not for a
  whole page that also has method, guarantees and terms; it would force those
  into a two-column cage they do not fit.
- **Rhythmic cutlist**: energy-brand grammar. The opposite of "quietly
  established".

Nav / hero / close, per the grammar:
- **Nav**: no fixed marketing bar. A folio in the left margin — chapter number
  and title — updating as chapters pass. The wordmark sits at composition scale
  on the title page, and small in the colophon.
- **Hero**: a **title page**. Type on the paper ground, no media above the fold.
  The first image appears in Chapter 1.
- **Close**: a **colophon / masthead plate**. Small type. The CTA is a line of
  running text ("Write to us about it") beside a quiet form, not a button
  island. No magnetic CTA (grammar ban), no spotlight (grammar ban).

## Signature move

The **data spine** (see answer 5). Merged with the tell-someone sentence — they
point at the same moment (Chapter 3, the peak). Not in the kit, not a parameter
change: a fixed `<svg>` in the margin whose node positions and connector
`stroke-dashoffset` are driven by page scroll in the page's own JS.

## Fingerprint gate

Registry `../../FINGERPRINTS.md` is empty. First build — nothing to clear. Row
appended after ship. Recorded dimensions:
1. Grammar: chaptered editorial
2. Nav: margin folio, chapter no. + title, updates on pass; wordmark set into
   the title-page composition
3. Hero device: title page — set type on paper, no media, `kinetic` lines on the
   name, spine seeded in margin
4. Act-sequence shape (AS BUILT): title page → 4 `flow` chapters → plain FAQ
   flow → colophon; 7 sections, 4 acts; ~8.1 vh desktop / ~11 vh mobile;
   devices per chapter: reveal+parallax / reveal / reveal+count / reveal+parallax,
   with the bespoke spine spanning all four; one dark ground (chapter 3).
   Outside the 6–7 acts @ 13.6–13.8 vh band.
5. Close pattern: colophon plate, CTA as running text beside an inline form,
   spine resolves to a complete diagram above it
6. Signature move: the data spine — one source ramifying into every downstream
   artifact as you read, doubling as the table of contents

## Feeling curve

```
1  Composure     the name set like a cornerstone plaque on bare paper; the spine
                 and folio already in the margin, waiting
2  Recognition   the four disconnected tools named one by one; the retyping
                 between them drawn as a broken chain (reveal + parallax)
3  Respect       "we asked for a month inside the business first"; stated quiet
                 and plain, the calmest act on the page
4  Clarity       PEAK: the design-on-canvas source, and Extraction / Quotation /
                 Cutting plan / Factory pack each branching off the one spine;
                 real figures count up (1 month, 4 tools, 7 roles, 0 re-keyed)
5  Reassurance   the guarantees as museum labels: only-latest-revision approvable,
                 SHA-256 checksums, superseded kept visible and stamped
6  Trust         colophon: you own the code, the data, the infrastructure, from
                 day one; Accra; one plain line to start, and the form
```

No two adjacent acts share a feeling. Act 3 (Respect, quiet) is the authored
silence in front of the peak — it is the least busy act on the page by design,
so Chapter 4 has something to be a change from.

## The peak

**Chapter 3 — The build.** Gets the largest span on the page (~3.6vh vs ~1.6–1.8
elsewhere), the two best generated stills, the `count` figures, and the moment
the margin spine finishes drawing and its four nodes connect. The act before it
(Chapter 2) is deliberately the quietest: one column of prose, one small image,
no counters, no spine motion beyond a single dormant node.

## Tell-someone sentence

> It's the site where a single line runs down the page and every part of the
> system — the quote, the cut list, the factory drawings — grows out of it while
> you read.

## Authored silence

Chapter 2 ("The method") is intentionally sparse: a near-empty paper ground, one
short column, one small captioned image, no motion in the spine except one node
appearing dim. The verification pass should read this as anticipation, not dead
scroll.

## Numbers used (all already published by Veloxa; none invented here)

From the live case study page (`/work/fabrication-ops-platform`) and `Stats`:
- 1 month embedded before building
- 4 disconnected tools replaced
- 7 roles modelled end to end
- 0 steps that re-key data by hand

No other counters. No invented precision (no "4.1×", "98%", etc. — the existing
CTA's "98% efficiency / 100% automation" invented stats are dropped in this build).

---

## Feel check (run cold, after Step 5, then diffed against the curve above)

| Act | Intended | Felt (one word, cold) | Verdict |
|---|---|---|---|
| Title | composure | composed | match |
| Ch.1 situation | recognition | recognition | match |
| Ch.2 method | respect (the quiet act) | restraint / respect | match — sparsest act on the page, as designed |
| Ch.3 build | clarity (PEAK) | clarity | match — dark ground = largest visual change on the contact sheet, most scroll room |
| Ch.4 guarantees | reassurance | reassurance | match |
| Colophon | trust | trust, low bar to act | match |

- Peak reads as peak: yes. Chapter 3 is the only dark ground and the tallest
  chapter; on the contact sheet it is unmistakably the biggest change.
- Silence before the peak: yes. Chapter 2 is a single narrow column, one image,
  no counters, no spine motion beyond one dim node.
- End resolves: yes. The colophon holds with the masthead, the form and the
  legal line on screen; the margin chrome fades rather than the content.
- Nothing changed after the diff — the built curve matched the intended one.

## Verified with screenshots (scrollcraft `shoot.mjs`, installed Chrome)

- Desktop 1440→2000px, 6 samples/act: no dead scroll, no console errors, no
  failed requests, all counters resolve, reveals wipe and settle.
- Mobile 390×844: no dead scroll; folio + spine correctly suppressed below
  1180px; single column; Chapter 3's inline stem carries the "one source, four
  outputs" meaning without the spine.
- Reduced motion: every reveal shows settled content, counters show their target,
  page fully legible, meaning intact.

## Not verified

- A real iOS / Android device (headless Chrome cannot reproduce the mobile
  video decoder or touch scroll — but this build ships no video, which removes
  the usual mobile failure mode).
- The live contact form delivering mail (reuses the existing, already-working
  `/api/contact` + Resend path unchanged).
