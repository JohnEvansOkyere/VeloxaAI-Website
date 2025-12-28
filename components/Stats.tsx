"use client";

export default function Stats() {
  const stats = [
    {
      value: "60-80%",
      label: "Faster Hiring",
      description: "From 42 days to 8-17 days",
    },
    {
      value: "50-70%",
      label: "Cost Reduction",
      description: "In recruitment expenses",
    },
    {
      value: "40%",
      label: "Better Fit",
      description: "Candidate-job accuracy",
    },
    {
      value: "0%",
      label: "Bias",
      description: "Standardized AI assessment",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="font-display font-bold text-4xl md:text-5xl gradient-text mb-2">
                {stat.value}
              </div>
              <div className="font-semibold text-lg text-neutral-dark mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-neutral-dark/60">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
