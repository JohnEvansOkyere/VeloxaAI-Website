"use client";

import { useEffect, useRef, useState } from "react";

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const sectionRef = useRef<HTMLElement>(null);

  const stats: Array<
    | { value: number; label: string; description: string; suffix: string; isRange: false }
    | { startRange: number; endRange: number; label: string; description: string; suffix: string; isRange: true }
  > = [
    {
      value: 98,
      label: "AI Accuracy",
      description: "In complex decision-making",
      suffix: "%",
      isRange: false,
    },
    {
      value: 10,
      label: "Efficiency Boost",
      description: "Compared to manual workflows",
      suffix: "x",
      isRange: false,
    },
    {
      value: 24,
      label: "Uptime",
      description: "Autonomous agent availability",
      suffix: "/7",
      isRange: false,
    },
    {
      value: 5,
      label: "Platforms",
      description: "Across industries",
      suffix: "+",
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

      setCounts(stats.map((stat) => {
        if (stat.isRange && 'startRange' in stat && 'endRange' in stat) {
          return Math.floor(stat.startRange + (stat.endRange - stat.startRange) * progress);
        } else if (!stat.isRange && 'value' in stat) {
          return Math.floor(stat.value * progress);
        }
        return 0;
      }));

      if (currentStep >= steps) {
        clearInterval(interval);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-20 bg-navy-950 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center"
            >
              <div className="font-display font-bold text-4xl md:text-6xl gradient-text mb-2 drop-shadow-[0_0_10px_rgba(0,251,255,0.3)]">
                {stat.isRange && 'startRange' in stat && 'endRange' in stat
                  ? `${stat.startRange}-${stat.endRange}${stat.suffix}`
                  : `${counts[index]}${stat.suffix}`
                }
              </div>
              <div className="font-semibold text-lg text-white mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-white/40">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
