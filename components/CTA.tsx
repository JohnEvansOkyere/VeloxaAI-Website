"use client";

import { useEffect, useRef, useState } from "react";

type ContactFormState = {
  fullName: string;
  email: string;
  company: string;
  message: string;
};

export default function CTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0]);
  const statsRef = useRef<HTMLDivElement>(null);

  const [form, setForm] = useState<ContactFormState>({
    fullName: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const ctaStats = [
    { value: 98, suffix: "%", label: "Efficiency" },
    { value: 100, suffix: "%", label: "Automation" },
    { value: 24, suffix: "/7", label: "Support" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts(ctaStats.map((stat) => Math.floor(stat.value * progress)));

      if (currentStep >= steps) {
        clearInterval(interval);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [isVisible]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!form.fullName || !form.email || !form.message) {
      setError("Please fill in your name, email, and project details.");
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

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="cta" className="section-padding bg-navy-950 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-cyan/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-blue/5 rounded-full blur-[100px]" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 mb-6">
            <span className="w-2 h-2 bg-primary-cyan rounded-full animate-pulse shadow-[0_0_8px_#00FBFF]" />
            <span className="text-sm font-medium text-white/80">
              Work With Veloxa
            </span>
          </div>
          <h2 className="heading-xl text-white mb-4">
            Let&apos;s Architect What&apos;s Next
          </h2>
          <p className="body-lg text-white/60 max-w-2xl mx-auto">
            Share a bit about your team, your challenges, and how you imagine AI
            transforming your operations. Our experts will respond within one
            business day.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: Trust & Stats */}
          <div className="space-y-8">
            <div
              ref={statsRef}
              className="grid grid-cols-2 sm:grid-cols-3 gap-4 bg-navy-900/60 border border-white/10 rounded-2xl p-6"
            >
              {ctaStats.map((stat, idx) => (
                <div key={stat.label} className="text-left">
                  <div className="text-2xl font-bold text-white">
                    {counts[idx]}
                    {stat.suffix}
                  </div>
                  <div className="text-primary-cyan text-xs font-semibold tracking-widest uppercase mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-navy-900/60 border border-white/10 rounded-2xl p-6">
              <h3 className="font-display font-bold text-lg text-white mb-3">
                Enterprise-Grade Engagement
              </h3>
              <ul className="space-y-3 text-sm text-white/60">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-cyan" />
                  <span>Dedicated solution architects for every engagement.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-cyan" />
                  <span>Security, privacy, and compliance as first-class citizens.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary-cyan" />
                  <span>Flexible pilot programs to validate value before scaling.</span>
                </li>
              </ul>
            </div>

            <div className="text-sm text-white/40 space-y-1">
              <p>
                Prefer email? Reach us directly at{" "}
                <a
                  href="mailto:hello@veloxarecruit.com"
                  className="text-primary-cyan hover:text-white transition-colors"
                >
                  hello@veloxarecruit.com
                </a>
                .
              </p>
              <p>Global HQ: Accra, Ghana – serving clients worldwide.</p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-navy-900/70 border border-white/10 rounded-2xl p-6 sm:p-8 shadow-[0_18px_60px_rgba(0,0,0,0.6)]">
            {submitted ? (
              <div className="flex flex-col items-center text-center space-y-4 py-8">
                <div className="w-14 h-14 rounded-full bg-primary-cyan/10 flex items-center justify-center border border-primary-cyan/40">
                  <svg
                    className="w-7 h-7 text-primary-cyan"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-2xl text-white">
                  Message Received
                </h3>
                <p className="text-white/60 max-w-md">
                  Thank you for reaching out. Our team will review your request and
                  respond with next steps shortly.
                </p>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="text-left">
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-semibold text-white/60 uppercase tracking-widest mb-2"
                    >
                      Full Name<span className="text-primary-cyan">*</span>
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      autoComplete="name"
                      value={form.fullName}
                      onChange={handleChange}
                      className="w-full rounded-lg bg-navy-950/60 border border-white/10 px-3 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-primary-cyan focus:border-primary-cyan transition"
                      placeholder="Jane Doe"
                      required
                    />
                  </div>
                  <div className="text-left">
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold text-white/60 uppercase tracking-widest mb-2"
                    >
                      Work Email<span className="text-primary-cyan">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full rounded-lg bg-navy-950/60 border border-white/10 px-3 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-primary-cyan focus:border-primary-cyan transition"
                      placeholder="you@company.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="text-left">
                    <label
                      htmlFor="company"
                      className="block text-xs font-semibold text-white/60 uppercase tracking-widest mb-2"
                    >
                      Company (optional)
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={form.company}
                      onChange={handleChange}
                      className="w-full rounded-lg bg-navy-950/60 border border-white/10 px-3 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-primary-cyan focus:border-primary-cyan transition"
                      placeholder="Your organization"
                    />
                  </div>
                </div>

                <div className="text-left">
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold text-white/60 uppercase tracking-widest mb-2"
                  >
                    Project Details<span className="text-primary-cyan">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full rounded-lg bg-navy-950/60 border border-white/10 px-3 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-primary-cyan focus:border-primary-cyan transition resize-none"
                    placeholder="Tell us about your current challenges, timelines, and what success would look like."
                    required
                  />
                </div>

                {error && (
                  <p className="text-xs text-red-400 text-left">
                    {error}
                  </p>
                )}

                <div className="flex items-center justify-between gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center gap-2 bg-primary-cyan text-navy-950 px-8 py-3 rounded-lg font-semibold text-sm uppercase tracking-widest hover:shadow-[0_0_25px_rgba(0,251,255,0.4)] hover:scale-[1.03] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? "Sending..." : "Send Message"}
                    {!submitting && (
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    )}
                  </button>
                  <p className="text-[11px] text-white/30">
                    Typical response time: under 24 hours.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
