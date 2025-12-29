"use client";

import { useState } from "react";

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("annual");

  const plans = [
    {
      name: "Starter",
      tagline: "For teams testing AI recruitment",
      priceMonthly: 0,
      priceAnnual: 0,
      description: "Start hiring smarter with core tools",
      outcome: "Cut manual screening time by 50%",
      features: [
        "Unlimited job postings",
        "Up to 100 candidates/month",
        "Basic applicant tracking",
        "Email notifications",
        "Standard support",
      ],
      addOns: [],
      cta: "Start Free",
      ctaSubtext: "No credit card required",
      highlighted: false,
    },
    {
      name: "Growth",
      tagline: "Most popular for scaling teams",
      priceMonthly: 149,
      priceAnnual: 1490,
      description: "AI screening + smart candidate ranking",
      outcome: "Hire 60% faster with better matches",
      features: [
        "Everything in Starter",
        "AI-powered CV screening",
        "Up to 500 candidates/month",
        "Automated candidate ranking",
        "Interview question generator",
        "Priority email support",
      ],
      addOns: [
        { name: "Extra 100 candidates", price: "$20/month" },
        { name: "Advanced analytics", price: "$30/month" },
      ],
      cta: "Start 14-Day Trial",
      ctaSubtext: "Cancel anytime",
      highlighted: true,
      badge: "Most Popular",
      savingsPercent: 17,
    },
    {
      name: "Professional",
      tagline: "Full automation for HR teams",
      priceMonthly: 399,
      priceAnnual: 3990,
      description: "Complete AI recruitment platform",
      outcome: "Fully automated hiring pipeline",
      features: [
        "Everything in Growth",
        "Unlimited candidates",
        "AI voice & text interviews",
        "Automated email workflows",
        "Calendar integration",
        "Branded communications",
        "Advanced analytics dashboard",
        "Dedicated success manager",
      ],
      addOns: [
        { name: "Custom integrations", price: "From $100/month" },
        { name: "White-label branding", price: "$150/month" },
      ],
      cta: "Schedule Demo",
      ctaSubtext: "See it in action",
      highlighted: false,
    },
  ];

  const usageBasedPricing = [
    { metric: "AI Interviews (Voice/Text)", price: "$2 per interview", plan: "Growth & Pro" },
    { metric: "Advanced CV Screening", price: "$0.50 per candidate", plan: "All plans" },
    { metric: "Bulk candidate processing", price: "Volume discounts available", plan: "Professional" },
  ];

  return (
    <section id="pricing" className="section-padding bg-gradient-to-br from-neutral-dark via-neutral-dark to-neutral-dark/95 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-turquoise/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-yellow/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
            Pricing That <span className="gradient-text">Scales With You</span>
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-3">
            Start free. Upgrade when ready. Pay only for what you use.
          </p>
          <p className="text-sm text-white/60 max-w-2xl mx-auto">
            No lock-in contracts • Cancel anytime • Designed for African startups & enterprises
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex flex-col items-center justify-center mb-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-full p-1 inline-flex border border-white/10 mb-3">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                billingCycle === "monthly"
                  ? "bg-gradient-to-r from-primary-turquoise to-primary-teal text-white shadow-lg"
                  : "text-white/70 hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("annual")}
              className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 relative ${
                billingCycle === "annual"
                  ? "bg-gradient-to-r from-primary-turquoise to-primary-teal text-white shadow-lg"
                  : "text-white/70 hover:text-white"
              }`}
            >
              Annual
              <span className="absolute -top-2 -right-3 bg-accent-yellow text-neutral-dark text-xs px-2 py-0.5 rounded-full font-bold">
                Save 17%
              </span>
            </button>
          </div>
          <p className="text-xs text-white/50">Save 2 months with annual billing</p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                plan.highlighted
                  ? "bg-gradient-to-br from-primary-turquoise/20 to-primary-teal/20 border-2 border-primary-turquoise shadow-2xl shadow-primary-turquoise/20 scale-105"
                  : "bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary-turquoise/50 hover:shadow-xl"
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-accent-yellow to-accent-gold text-neutral-dark px-4 py-1.5 rounded-full text-xs font-bold shadow-lg">
                    {plan.badge}
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-6">
                <h3 className="font-display font-bold text-2xl text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-white/60 mb-3">
                  {plan.tagline}
                </p>
                <div className="bg-primary-turquoise/10 border border-primary-turquoise/20 rounded-lg px-3 py-2">
                  <p className="text-xs text-primary-light font-medium">
                    ✓ {plan.outcome}
                  </p>
                </div>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline mb-2">
                  {plan.priceMonthly === 0 ? (
                    <span className="text-5xl font-bold text-white">Free</span>
                  ) : (
                    <>
                      <span className="text-lg text-white/60 mr-1">$</span>
                      <span className="text-5xl font-bold text-white">
                        {billingCycle === "monthly" ? plan.priceMonthly : Math.floor(plan.priceAnnual / 12)}
                      </span>
                      <span className="ml-2 text-white/60">/month</span>
                    </>
                  )}
                </div>
                {billingCycle === "annual" && plan.priceAnnual > 0 && (
                  <p className="text-sm text-white/50 mb-2">
                    ${plan.priceAnnual} billed annually
                  </p>
                )}
                <p className="text-sm text-white/70">
                  {plan.description}
                </p>
              </div>

              {/* CTA Button */}
              <a
                href="#cta-form"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('cta-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`block w-full text-center py-4 rounded-xl font-bold mb-2 transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-gradient-to-r from-primary-turquoise to-primary-teal text-white hover:shadow-2xl hover:shadow-primary-turquoise/40 hover:scale-105"
                    : "bg-white/10 text-white border border-white/20 hover:bg-white/15 hover:border-primary-turquoise/50 hover:scale-105"
                }`}
              >
                {plan.cta}
              </a>
              <p className="text-xs text-center text-white/50 mb-6">{plan.ctaSubtext}</p>

              {/* Features List */}
              <div className="space-y-3 mb-6">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 flex-shrink-0 mt-0.5 text-primary-light"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-white/80">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Add-ons */}
              {plan.addOns.length > 0 && (
                <div className="pt-4 border-t border-white/10">
                  <p className="text-xs font-semibold text-white/60 mb-2 uppercase tracking-wide">Optional Add-ons</p>
                  <div className="space-y-2">
                    {plan.addOns.map((addon, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <span className="text-xs text-white/70">{addon.name}</span>
                        <span className="text-xs font-semibold text-primary-light">{addon.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Usage-Based Pricing */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <div className="text-center mb-6">
              <h3 className="font-display font-bold text-2xl text-white mb-2">
                Pay-As-You-Go Add-Ons
              </h3>
              <p className="text-white/60 text-sm">
                Use only what you need. No wastage, complete flexibility.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {usageBasedPricing.map((item, idx) => (
                <div key={idx} className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <p className="font-semibold text-white mb-1 text-sm">{item.metric}</p>
                  <p className="text-primary-light font-bold mb-2">{item.price}</p>
                  <p className="text-xs text-white/50">{item.plan}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust Signals */}
        <div className="text-center mb-12">
          <div className="flex flex-wrap items-center justify-center gap-8 mb-8">
            <div className="flex items-center gap-2 text-white/70">
              <svg className="w-5 h-5 text-primary-light" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">No setup fees</span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <svg className="w-5 h-5 text-primary-light" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <svg className="w-5 h-5 text-primary-light" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">14-day free trial</span>
            </div>
            <div className="flex items-center gap-2 text-white/70">
              <svg className="w-5 h-5 text-primary-light" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">Upgrade/downgrade anytime</span>
            </div>
          </div>
        </div>

        {/* Enterprise CTA */}
        <div className="max-w-3xl mx-auto text-center bg-gradient-to-r from-primary-turquoise/10 to-primary-teal/10 border border-primary-turquoise/20 rounded-2xl p-8">
          <h3 className="font-display font-bold text-2xl text-white mb-2">
            Need Something Custom?
          </h3>
          <p className="text-white/70 mb-6">
            Large teams, unique workflows, or volume discounts? Let's build a plan that fits your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#cta-form"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('cta-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-turquoise to-primary-teal text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Talk to Sales
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <span className="text-sm text-white/60">
              Response within 24 hours
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
