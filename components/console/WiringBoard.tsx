"use client";

/**
 * The wiring — this page's signature move.
 *
 * Six systems sit on a board. In the hero they are islands: no cables, every
 * one of them stamped `re-key: manual`. In the peak act the same six get wired
 * together as you scroll, one real order record is pushed down the cables, and
 * every downstream figure is COMPUTED from that record by the arithmetic in
 * `derive()` below. Nothing here is painted or hard-coded: change the quantity
 * or the unit price with the stepper and every number redoes itself.
 *
 * The scenario is sample data and the board says so on its face. The logic is
 * real, which is what the live-surface grammar's honesty rule asks for.
 *
 * Scroll state is written straight to CSS custom properties and to a handful of
 * text nodes through refs, never through React state: this runs every frame and
 * a re-render per frame would be a stutter.
 */

import { useCallback, useEffect, useRef, useState } from "react";

import { NODES, SystemNode, TOTAL_REKEYS, type Slot } from "./systems";

/* ---------------------------------------------------------------- the model */

const SAMPLE = {
  id: "ORD-2417",
  item: "CW-1215 casement, anodised",
  qty: 34,
  unit: 1850,
};

/** Fabrication constants for the sample product. */
const PROFILES_PER_UNIT = 4;
const METRES_PER_UNIT = 5.4;
const PANES_PER_UNIT = 2;

function derive(qty: number, unit: number) {
  const total = qty * unit;
  return {
    total,
    cuts: qty * PROFILES_PER_UNIT,
    metres: qty * METRES_PER_UNIT,
    panes: qty * PANES_PER_UNIT,
    sets: qty,
  };
}

const money = (n: number) =>
  "GHS " + n.toLocaleString("en-GH", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const num = (n: number, dp = 0) =>
  n.toLocaleString("en-GH", { minimumFractionDigits: dp, maximumFractionDigits: dp });

/* ------------------------------------------------------- the cable geometry */

/** viewBox is 1000 x 520; the node `left/top/width/height` in console.css put
 *  each box's edge exactly on these coordinates. The label rides inside the node
 *  the cable feeds, not along the curve. */
const CABLES = [
  { d: "M250 221 C 300 221, 322 78, 370 78", label: "dimensions + spec" },
  { d: "M250 221 C 300 221, 322 260, 370 260", label: "cutting list" },
  { d: "M250 221 C 300 221, 322 442, 370 442", label: "materials" },
  { d: "M620 78 C 668 78, 692 120, 740 120", label: "invoice line" },
  { d: "M620 78 C 686 78, 694 380, 740 380", label: "order status" },
];

/** Which cable feeds which node, and when it draws (in act progress). */
const WIRE_AT: Array<[number, number]> = [
  [0.08, 0.22],
  [0.2, 0.34],
  [0.32, 0.46],
  [0.45, 0.58],
  [0.56, 0.7],
];

/** When the record travels each cable. */
const FLOW_AT: Array<[number, number]> = [
  [0.7, 0.755],
  [0.745, 0.8],
  [0.79, 0.845],
  [0.835, 0.885],
  [0.875, 0.925],
];

/** cable index -> the node it lights up */
const WIRE_TARGET: Slot[] = ["quoting", "production", "inventory", "accounts", "customer"];

const clamp01 = (n: number) => (n < 0 ? 0 : n > 1 ? 1 : n);
const span = (p: number, a: number, b: number) => clamp01((p - a) / Math.max(b - a, 1e-4));

/* ------------------------------------------------------- the peak, wiring up */

export function WiringBoard() {
  const rootRef = useRef<HTMLDivElement>(null);
  const actRef = useRef<HTMLElement | null>(null);
  const outs = useRef<Partial<Record<Slot, HTMLSpanElement | null>>>({});
  const rekeyRef = useRef<HTMLSpanElement>(null);
  const linkRef = useRef<HTMLSpanElement>(null);

  const [qty, setQty] = useState(SAMPLE.qty);
  const [unit, setUnit] = useState(SAMPLE.unit);
  /** Below 900px the act is un-pinned (console.css), so there is no pinned
   *  travel to drive the board from and the cables are not drawn at all. The
   *  chain lights node by node on entry instead. */
  const [narrow, setNarrow] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 899px)");
    const sync = () => setNarrow(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  /** How far the record has travelled, kept outside React so the frame loop can
   *  read it without a render. Updated by the scroll loop. */
  const reached = useRef(0);

  const values = useCallback(
    (q: number, u: number): Record<Slot, string> => {
      const d = derive(q, u);
      return {
        design: `${SAMPLE.id} · ${num(q)} × CW-1215`,
        quoting: money(d.total),
        production: `${num(d.cuts)} cuts · ${num(d.metres, 1)} m`,
        inventory: `${num(d.panes)} panes · ${num(d.sets)} sets`,
        accounts: `${money(d.total)} · matched`,
        customer: `${num(q)} units · in production`,
      };
    },
    []
  );

  /** Paint the six readouts for the current record, hiding any the record has
   *  not reached yet. Called from the scroll loop and on every input change. */
  const paint = useCallback(() => {
    const v = values(qty, unit);
    const order: Slot[] = ["design", ...WIRE_TARGET];
    order.forEach((slot, i) => {
      const el = outs.current[slot];
      if (!el) return;
      // index 0 (the source) lands when the first pulse starts; the rest land
      // as their own pulse completes.
      const at = i === 0 ? FLOW_AT[0][0] : FLOW_AT[i - 1][1];
      const text = reached.current >= at ? v[slot] : "—";
      if (el.textContent !== text) el.textContent = text;
    });
  }, [qty, unit, values]);

  useEffect(() => {
    paint();
  }, [paint]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    actRef.current = root.closest("[data-sc-act]");
    const act = actRef.current;
    if (!act) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nodeEls = new Map<Slot, HTMLElement>();
    root.querySelectorAll<HTMLElement>(".vx-node[data-slot]").forEach((el) => {
      nodeEls.set(el.dataset.slot as Slot, el);
    });

    // Status-bar readouts live in the fixed chrome, outside this subtree. They
    // are updated by id rather than lifted into shared state: this runs on
    // every frame and a context write per frame is a stutter.
    const stSys = document.getElementById("vx-st-state");
    const stLink = document.getElementById("vx-st-link");
    const stRekey = document.getElementById("vx-st-rekey");

    /** Re-keys remaining once `linked` cables have carried the record. */
    const rekeysAfter = (linked: number) => {
      let remaining = TOTAL_REKEYS;
      for (let i = 0; i < linked; i++) {
        const spec = NODES.find((n) => n.slot === WIRE_TARGET[i]);
        remaining -= spec ? spec.rekey : 0;
      }
      return remaining;
    };

    const report = (linked: number, remaining: number) => {
      if (rekeyRef.current) rekeyRef.current.textContent = String(remaining);
      if (stRekey) stRekey.textContent = String(remaining);
      root.classList.toggle("is-clear", remaining === 0);
      if (linkRef.current) linkRef.current.textContent = String(linked);
      if (stLink) stLink.textContent = String(linked);
      if (stSys) stSys.setAttribute("data-linked", String(linked));
    };

    // ---- phone: the chain lights as each system scrolls into view ---------
    if (narrow) {
      const order: Slot[] = ["design", ...WIRE_TARGET];
      const lit = new Set<Slot>();

      const settle = () => {
        let n = 0;
        for (const slot of order) {
          if (!lit.has(slot)) break;
          n++;
        }
        // Map the count onto the same thresholds paint() reads, so the readouts
        // populate in exactly the order the desktop pulses put them in.
        reached.current = n === 0 ? 0 : n === 1 ? FLOW_AT[0][0] : FLOW_AT[n - 2][1];
        const linked = Math.max(0, n - 1);
        report(linked, rekeysAfter(linked));
        paint();
      };

      if (reduce) {
        order.forEach((slot) => {
          lit.add(slot);
          nodeEls.get(slot)?.classList.add("is-live");
        });
        settle();
      } else {
        const io = new IntersectionObserver(
          (entries) => {
            entries.forEach((e) => {
              if (!e.isIntersecting) return;
              const el = e.target as HTMLElement;
              lit.add(el.dataset.slot as Slot);
              el.classList.add("is-live");
              io.unobserve(el);
            });
            settle();
          },
          { rootMargin: "0px 0px -22% 0px", threshold: 0.4 }
        );
        nodeEls.forEach((el) => io.observe(el));
        settle();
      }

      // No pinned travel to reveal it with, so the control is simply there.
      root.style.setProperty("--op-in", "1");
      for (let i = 0; i < CABLES.length; i++) {
        root.style.setProperty(`--c${i + 1}`, "0");
        root.style.setProperty(`--f${i + 1}`, "0");
        root.style.setProperty(`--p${i + 1}`, "0");
      }
      return;
    }

    let raf = 0;
    let lastRekey = -1;
    let lastLinked = -1;

    const frame = () => {
      raf = 0;
      const rect = act.getBoundingClientRect();
      const vh = window.innerHeight;
      // Matches the engine's pinned-act progress so the bespoke layer and the
      // cues stay in step even if the engine never mounts.
      const travel = Math.max(act.offsetHeight - vh, 1);
      const p = reduce ? 1 : clamp01((-rect.top) / travel);

      reached.current = p;

      let linked = 0;
      for (let i = 0; i < CABLES.length; i++) {
        const c = reduce ? 1 : span(p, WIRE_AT[i][0], WIRE_AT[i][1]);
        const f = reduce ? 0 : span(p, FLOW_AT[i][0], FLOW_AT[i][1]);
        root.style.setProperty(`--c${i + 1}`, c.toFixed(4));
        root.style.setProperty(`--f${i + 1}`, f.toFixed(4));
        root.style.setProperty(`--p${i + 1}`, (f > 0 && f < 1 ? 1 : 0).toFixed(2));
        if (c > 0.98) linked++;
        const target = nodeEls.get(WIRE_TARGET[i]);
        if (target) target.classList.toggle("is-live", c > 0.98);
      }
      const source = nodeEls.get("design");
      if (source) source.classList.toggle("is-live", p > 0.02 || reduce);

      root.style.setProperty("--op-in", (reduce ? 1 : span(p, 0.92, 0.98)).toFixed(3));

      // Re-keys fall as each pulse lands, so the counter is derived from the
      // same state the cables are, not animated separately.
      let remaining = TOTAL_REKEYS;
      for (let i = 0; i < FLOW_AT.length; i++) {
        if (reduce || p >= FLOW_AT[i][1]) {
          const s = NODES.find((n) => n.slot === WIRE_TARGET[i]);
          remaining -= s ? s.rekey : 0;
        }
      }
      if (remaining !== lastRekey || linked !== lastLinked) {
        lastRekey = remaining;
        lastLinked = linked;
        report(linked, remaining);
      }

      paint();
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(frame);
    };

    frame();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [paint, narrow]);

  return (
    <div className="vx-board" ref={rootRef}>
      <div className="vx-board__head">
        <span>
          board <b>veloxa / ops</b>
        </span>
        <span className="vx-board__sample">sample scenario &middot; figures computed live</span>
        <span>
          linked <b ref={linkRef}>0</b> of 5
        </span>
        <span>
          manual re-keys <b ref={rekeyRef}>{TOTAL_REKEYS}</b>
        </span>
      </div>

      <div className="vx-board__inner">
        <svg
          className="vx-board__wires"
          viewBox="0 0 1000 520"
          preserveAspectRatio="none"
          aria-hidden="true"
          focusable="false"
        >
          <defs>
            <linearGradient id="vxWireGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#00FBFF" />
              <stop offset="100%" stopColor="#0EA5E9" />
            </linearGradient>
          </defs>
          {CABLES.map((c, i) => (
            <g key={c.label} style={{ ["--c" as string]: `var(--c${i + 1}, 0)` }}>
              <path className="vx-wire" d={c.d} />
              <path className="vx-wire vx-wire--live" d={c.d} pathLength={1} />
              <path
                className="vx-wire vx-wire--pulse"
                d={c.d}
                pathLength={1}
                style={{
                  ["--flow" as string]: `var(--f${i + 1}, 0)`,
                  ["--pulse" as string]: `var(--p${i + 1}, 0)`,
                }}
              />
            </g>
          ))}
        </svg>

        <div className="vx-board__nodes">
          {NODES.map((n) => (
            <SystemNode
              key={n.slot}
              spec={n}
              showStamp={false}
              outRef={(el) => {
                outs.current[n.slot] = el;
              }}
            />
          ))}
        </div>
      </div>

      <div className="vx-op">
        <span className="vx-op__label">operate it</span>
        <span className="vx-op__group">
          <span className="vx-op__label">quantity</span>
          <button
            type="button"
            className="vx-step"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            aria-label="Decrease order quantity"
          >
            &minus;
          </button>
          <span className="vx-op__qty" aria-live="polite">
            {qty}
          </span>
          <button
            type="button"
            className="vx-step"
            onClick={() => setQty((q) => Math.min(999, q + 1))}
            aria-label="Increase order quantity"
          >
            +
          </button>
        </span>
        <span className="vx-op__group">
          <label className="vx-op__label" htmlFor="vx-unit">
            unit price
          </label>
          <input
            id="vx-unit"
            type="number"
            min={1}
            max={100000}
            step={50}
            value={unit}
            onChange={(e) => setUnit(Math.max(1, Number(e.target.value) || 1))}
          />
        </span>
        <span className="vx-op__note">
          Change either one. Every figure on the board recomputes.
        </span>
      </div>
    </div>
  );
}
