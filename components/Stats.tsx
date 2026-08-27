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
      value: 10,
      label: "Systems In Production",
      description: "Shipped and running in real businesses, not demos",
      suffix: "+",
      isRange: false,
    },
    {
      value: 5,
      label: "Countries Served",
      description: "Clients across Africa and abroad, async-first",
      suffix: "+",
      isRange: false,
    },
    {
      value: 100,
      label: "Professionals Trained",
      description: "Through our hands-on AI and automation workshops",
      suffix: "+",
      isRange: false,
    },
    {
      value: 1,
      label: "Month Of Discovery",
      description: "Spent on the factory floor before writing any code",
      suffix: "",
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
    <section ref={sectionRef} className="py-20 bg-navy-950 border-y border-white/5 relative overflow-hidden">
      {/* Subtle accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-primary-cyan/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <span className="text-[11px] font-bold text-primary-cyan tracking-[0.3em] uppercase">
            The receipts
          </span>
          <p className="mt-3 text-white/50 text-sm md:text-base max-w-xl mx-auto">
            Numbers we can point at, from work we have actually delivered.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative text-center md:px-6 md:border-r md:border-white/5 last:border-r-0 transition-all"
            >
              <div className="font-display font-black text-5xl md:text-6xl gradient-text mb-3 drop-shadow-[0_0_15px_rgba(0,251,255,0.35)] tracking-tighter group-hover:scale-105 transition-transform duration-500 origin-center">
                {stat.isRange && 'startRange' in stat && 'endRange' in stat
                  ? `${stat.startRange}-${stat.endRange}${stat.suffix}`
                  : `${counts[index]}${stat.suffix}`
                }
              </div>
              <div className="font-bold text-base md:text-lg text-white mb-1.5">
                {stat.label}
              </div>
              <div className="text-xs md:text-sm text-white/40 leading-relaxed">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
