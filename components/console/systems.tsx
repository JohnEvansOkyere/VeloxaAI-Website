/**
 * The six systems on the board, the node markup, and the islands (hero) view.
 *
 * No "use client": this module is imported by both the server-rendered page
 * (for the ledger in §systems and the hero board) and by the client-side
 * WiringBoard, so the re-key figures on the page and the ones the board counts
 * down are the same numbers, not two copies that can drift apart.
 */

/* ------------------------------------------------------------- the systems */

export type Slot = "design" | "quoting" | "production" | "inventory" | "accounts" | "customer";

interface NodeSpec {
  slot: Slot;
  name: string;
  holds: string;
  /** Fields a person retypes into this system when it is not linked. */
  rekey: number;
  /** Mobile connector label: what arrives here, and from where. */
  feed?: string;
  icon: React.ReactNode;
}

const I = {
  design: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <path d="M3 3h18v18H3z" /><path d="M3 9h18M9 9v12" />
    </svg>
  ),
  crm: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <circle cx="9" cy="8" r="3.2" /><path d="M3.5 20a5.5 5.5 0 0 1 11 0M17 11.5a2.6 2.6 0 1 0 0-5.2M18 20a4.6 4.6 0 0 0-2.3-4" />
    </svg>
  ),
  factory: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <path d="M3 20V10l5 3.5V10l5 3.5V10l5 3.5V20z" /><path d="M3 20h18" />
    </svg>
  ),
  stock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <path d="M4 7l8-4 8 4v10l-8 4-8-4z" /><path d="M4 7l8 4 8-4M12 11v10" />
    </svg>
  ),
  book: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <path d="M5 3h14v18H5z" /><path d="M8.5 8h7M8.5 12h7M8.5 16h4" />
    </svg>
  ),
  chat: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <path d="M4 5h16v11H9l-5 4z" /><path d="M8 9h8M8 12.5h5" />
    </svg>
  ),
};

export const NODES: NodeSpec[] = [
  {
    slot: "design",
    name: "Design and spec",
    holds: "The drawing on the canvas. Sizes, finishes, hardware. The one place a number is entered.",
    rekey: 0,
    feed: "source · entered once",
    icon: I.design,
  },
  {
    slot: "quoting",
    name: "Quoting",
    holds: "Customer, price list, the quote that actually goes out the door.",
    rekey: 9,
    feed: "from design · dimensions and spec",
    icon: I.crm,
  },
  {
    slot: "production",
    name: "Factory floor",
    holds: "The cutting plan the saw runs, and the pack the fitters carry.",
    rekey: 11,
    feed: "from design · cutting list",
    icon: I.factory,
  },
  {
    slot: "inventory",
    name: "Stock and ERP",
    holds: "Profile, glass and hardware taken off stock against the job.",
    rekey: 8,
    feed: "from design · materials",
    icon: I.stock,
  },
  {
    slot: "accounts",
    name: "Accounting",
    holds: "The invoice, matched to the quote to the pesewa.",
    rekey: 7,
    feed: "from quoting · invoice line",
    icon: I.book,
  },
  {
    slot: "customer",
    name: "Customer, on WhatsApp",
    holds: "The order status the customer actually reads.",
    rekey: 7,
    feed: "from quoting · order status",
    icon: I.chat,
  },
];

export const TOTAL_REKEYS = NODES.reduce((n, s) => n + s.rekey, 0); // 42


/* ------------------------------------------------------------------- nodes */

export function SystemNode({
  spec,
  showStamp,
  outRef,
}: {
  spec: NodeSpec;
  showStamp: boolean;
  outRef?: (el: HTMLSpanElement | null) => void;
}) {
  return (
    <article className="vx-node" data-slot={spec.slot}>
      {!showStamp && spec.feed ? <span className="vx-node__feed">{spec.feed}</span> : null}
      <h3 className="vx-node__name">
        {spec.icon}
        {spec.name}
      </h3>
      <p className="vx-node__holds">{spec.holds}</p>
      {showStamp ? (
        <span className="vx-node__stamp">
          {spec.rekey === 0 ? "source" : `re-key: ${spec.rekey} fields`}
        </span>
      ) : (
        <span className="vx-node__out" ref={outRef} aria-live="off">
          &mdash;
        </span>
      )}
    </article>
  );
}

/* --------------------------------------------------- the hero, disconnected */

export function IslandBoard() {
  return (
    <div className="vx-panel">
      <div className="vx-panel__bar">
        <span>
          board <strong>six systems</strong>
        </span>
        <span>linked 0 of 5</span>
        <span style={{ color: "#FCA5A5" }}>{TOTAL_REKEYS} fields retyped per order</span>
      </div>
      <div className="vx-panel__body">
        <div className="vx-islands">
          {NODES.map((n) => (
            <SystemNode key={n.slot} spec={n} showStamp />
          ))}
        </div>
      </div>
    </div>
  );
}

