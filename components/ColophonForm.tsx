"use client";

import { useState } from "react";

type FormState = {
  fullName: string;
  email: string;
  company: string;
  message: string;
  website: string;
};

const empty: FormState = { fullName: "", email: "", company: "", message: "", website: "" };

export default function ColophonForm() {
  const [form, setForm] = useState<FormState>(empty);
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "err">("idle");
  const [note, setNote] = useState<string>("");

  const update = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setNote("");

    if (!form.fullName || !form.email || !form.message) {
      setStatus("err");
      setNote("Add your name, an email, and a line about the work.");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong. Try again.");
      setStatus("ok");
      setNote("Received. We answer within one business day.");
      setForm(empty);
    } catch (err) {
      setStatus("err");
      setNote(err instanceof Error ? err.message : "Something went wrong. Try again.");
    }
  };

  return (
    <form className="vx-form" onSubmit={submit} noValidate>
      <p className="vx-form__ask">
        If any of this sounds like your operation, write to us about it. One
        business day for a reply, a call before anything is scoped.
      </p>

      <input
        type="text"
        name="website"
        value={form.website}
        onChange={update}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
      />

      <div className="vx-form__row">
        <div className="vx-field">
          <label htmlFor="cf-name">Name</label>
          <input id="cf-name" name="fullName" type="text" autoComplete="name" value={form.fullName} onChange={update} required />
        </div>
        <div className="vx-field">
          <label htmlFor="cf-email">Email</label>
          <input id="cf-email" name="email" type="email" autoComplete="email" value={form.email} onChange={update} required />
        </div>
      </div>

      <div className="vx-field" style={{ marginBottom: "0.75rem" }}>
        <label htmlFor="cf-company">Company (optional)</label>
        <input id="cf-company" name="company" type="text" autoComplete="organization" value={form.company} onChange={update} />
      </div>

      <div className="vx-field" style={{ marginBottom: "0.75rem" }}>
        <label htmlFor="cf-message">What are you trying to fix?</label>
        <textarea id="cf-message" name="message" rows={3} value={form.message} onChange={update} required />
      </div>

      <div className="vx-form__foot">
        <button className="vx-btn" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending" : "Send it"}
        </button>
        <span className="vx-form__note">Or email hello@veloxarecruit.com</span>
      </div>

      {note && (
        <p className="vx-form__msg" data-kind={status === "ok" ? "ok" : "err"} role="status">
          {note}
        </p>
      )}
    </form>
  );
}
