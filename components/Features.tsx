"use client";

import { useEffect, useRef, useState } from "react";

export default function Features() {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const [showAll, setShowAll] = useState(false);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setVisibleCards((prev) => new Set(prev).add(index));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, [showAll]);

  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Lightning Fast Screening",
      description: "AI analyzes hundreds of CVs in seconds across 20+ criteria including format, skills, experience, and ATS compatibility.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Smart Interview AI",
      description: "Adaptive AI interviewer that asks contextual follow-up questions and evaluates responses across 17+ dimensions.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      title: "Voice or Text Interviews",
      description: "Flexible interview modes with professional AI voices (ElevenLabs) or text chat. Real-time transcription and audio recording.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Zero Bias Assessment",
      description: "Standardized evaluation eliminates unconscious bias. Every candidate is assessed with the same criteria and rigor.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      ),
      title: "Candidate Leaderboards",
      description: "Automated rankings based on CV screening scores, interview performance, and job-candidate matching. Sort by any criteria.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "Calendar Integration",
      description: "Seamless Google Calendar sync with automated scheduling, meeting links, and timezone-aware interview coordination.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Automated Communications",
      description: "Branded email templates with company letterhead. Automated interview tickets, status updates, and follow-ups.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Enterprise Security",
      description: "Row-level security, encrypted data storage, audit logs, GDPR compliance, and SOC 2 Type II ready infrastructure.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Detailed Analytics",
      description: "Comprehensive interview reports with soft skills, technical depth, communication scores, sentiment analysis, and hiring recommendations.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: "Scalable Architecture",
      description: "Handle unlimited candidates without proportional cost increases. Built on Next.js, FastAPI, and enterprise-grade cloud infrastructure.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
      title: "Customizable Workflows",
      description: "Configure interview types per job, customize scoring weights, set qualification thresholds, and tailor the candidate experience.",
    },
  ];

  return (
    <section id="features" className="section-padding bg-white dark:bg-neutral-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            Everything You Need to <span className="gradient-text">Hire Smarter</span>
          </h2>
          <p className="section-description">
            A complete recruitment platform with AI-powered features that eliminate bottlenecks and improve hiring quality.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.slice(0, showAll ? features.length : 6).map((feature, index) => {
            const isVisible = visibleCards.has(index);
            const delay = (index % 3) * 100; // Stagger animation based on column

            return (
              <div
                key={index}
                ref={(el) => { cardRefs.current[index] = el; }}
                data-index={index}
                className={`group relative bg-gradient-to-br from-neutral-offwhite to-neutral-light dark:from-neutral-dark/80 dark:to-neutral-dark rounded-2xl p-8 border border-neutral-medium/20 dark:border-white/10 hover:border-primary-turquoise/50 dark:hover:border-primary-light/50 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 overflow-hidden ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-12'
                }`}
                style={{
                  transitionDelay: isVisible ? `${delay}ms` : '0ms',
                  transitionProperty: 'opacity, transform, box-shadow, border-color',
                }}
              >
                {/* Animated background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/0 dark:from-white/0 dark:via-white/0 dark:to-white/0 group-hover:from-white/40 group-hover:via-white/20 group-hover:to-white/40 dark:group-hover:from-white/5 dark:group-hover:via-white/3 dark:group-hover:to-white/5 transition-all duration-500 rounded-2xl"></div>

                {/* Glow orb effect */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/30 dark:bg-white/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-turquoise to-primary-teal rounded-xl flex items-center justify-center text-white mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                    {feature.icon}
                  </div>
                  <h3 className="font-display font-bold text-xl text-neutral-dark dark:text-neutral-offwhite mb-3 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-dark/70 dark:text-neutral-offwhite/70 leading-relaxed text-sm">
                    {feature.description}
                  </p>

                  {/* Decorative corner accent */}
                  <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-accent-yellow/10 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Animated border shimmer */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-primary-turquoise/20 to-transparent animate-pulse"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Show More/Less Button */}
        {features.length > 6 && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-turquoise to-primary-teal text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              {showAll ? (
                <>
                  Show Less
                  <svg className="w-5 h-5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                </>
              ) : (
                <>
                  Show All {features.length} Features
                  <svg className="w-5 h-5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
