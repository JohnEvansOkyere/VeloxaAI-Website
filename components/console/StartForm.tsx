"use client";

/**
 * The close. Live-surface grammar ends on an actual input, not a button island,
 * so the CTA here is the console's own first-run step. It posts to the same
 * /api/contact + Resend route the rest of the site already uses; the field
 * names are that route's existing contract and are unchanged.
 */

import { useState } from "react";

type FormState = {
  fullName: string;
  email: string;
  company: string;
  message: string;
  website: string;
};

const EMPTY: FormState = { fullName: "", email: "", company: "", message: "", website: "" };

export default function StartForm() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const change = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!form.fullName || !form.email || !form.message) {
      setError("Name, email and a note about the work are all needed to open a thread.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong. Please try again.");
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="vx-ok">
        <span className="vx-mono" style={{ color: "var(--sc-accent)" }}>
          thread opened
        </span>
        <p className="vx-body" style={{ color: "var(--sc-ink)" }}>
          It is with us. A person reads every one of these, and you will hear back inside one
          business day with either questions or a proposed first call.
        </p>
      </div>
    );
  }

  return (
    <form className="vx-panel" onSubmit={submit} noValidate>
      <div className="vx-panel__bar">
        <span>
          new engagement <strong>step 1 of 1</strong>
        </span>
        <span style={{ marginInlineStart: "auto" }}>accra, gh &middot; async-first</span>
      </div>
      <div className="vx-panel__body" style={{ display: "grid", gap: "0.85rem", padding: "1.1rem" }}>
        <input
          type="text"
          name="website"
          value={form.website}
          onChange={change}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="vx-hp"
        />

        <div className="vx-grid2">
          <div className="vx-field">
            <label htmlFor="vx-name">your name</label>
            <input
              id="vx-name"
              name="fullName"
              type="text"
              autoComplete="name"
              value={form.fullName}
              onChange={change}
              placeholder="Ama Mensah"
              required
            />
          </div>
          <div className="vx-field">
            <label htmlFor="vx-email">work email</label>
            <input
              id="vx-email"
              name="email"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={change}
              placeholder="you@company.com"
              required
            />
          </div>
        </div>

        <div className="vx-field">
          <label htmlFor="vx-company">company (optional)</label>
          <input
            id="vx-company"
            name="company"
            type="text"
            autoComplete="organization"
            value={form.company}
            onChange={change}
            placeholder="Where you work"
          />
        </div>

        <div className="vx-field">
          <label htmlFor="vx-message">what is not working right now</label>
          <textarea
            id="vx-message"
            name="message"
            rows={5}
            value={form.message}
            onChange={change}
            placeholder="The systems you run, where the numbers get retyped, and what you would want to stop doing by hand."
            required
          />
        </div>

        {error && <p className="vx-error">{error}</p>}

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "0.75rem 1rem",
            marginBlockStart: "0.2rem",
          }}
        >
          <button type="submit" className="vx-btn" disabled={submitting}>
            {submitting ? "Opening thread…" : "Open a thread"}
          </button>
          <span className="vx-mono" style={{ color: "var(--sc-ink-faint)" }}>
            reply inside one business day
          </span>
        </div>
      </div>
    </form>
  );
}
