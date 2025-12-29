"use client";

import { useEffect, useRef, useState } from "react";

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const sectionRef = useRef<HTMLElement>(null);

  const stats = [
    {
      startRange: 60,
      endRange: 80,
      label: "Faster Hiring",
      description: "From 42 days to 8-17 days",
      suffix: "%",
      isRange: true,
    },
    {
      startRange: 50,
      endRange: 70,
      label: "Cost Reduction",
      description: "In recruitment expenses",
      suffix: "%",
      isRange: true,
    },
    {
      value: 40,
      label: "Better Fit",
      description: "Candidate-job accuracy",
      suffix: "%",
      isRange: false,
    },
    {
      value: 0,
      label: "Bias",
      description: "Standardized AI assessment",
      suffix: "%",
      isRange: false,
    },
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts(stats.map((stat, index) => {
        if (stat.isRange) {
          return Math.floor(stat.startRange + (stat.endRange - stat.startRange) * progress);
        } else {
          return Math.floor(stat.value * progress);
        }
      }));

      if (currentStep >= steps) {
        clearInterval(interval);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-20 bg-white dark:bg-neutral-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="font-display font-bold text-4xl md:text-5xl gradient-text mb-2">
                {stat.isRange
                  ? `${counts[index]}-${stat.endRange}${stat.suffix}`
                  : `${counts[index]}${stat.suffix}`
                }
              </div>
              <div className="font-semibold text-lg text-neutral-dark dark:text-neutral-offwhite mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-neutral-dark/60 dark:text-neutral-offwhite/60">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
