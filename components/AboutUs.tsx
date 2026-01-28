"use client";

import Image from "next/image";

export default function AboutUs() {
  const team = [
    {
      name: "John Evans Okyere",
      position: "Co-Founder",
      role: "AI/ML Engineer",
      company: "Punch Group",
      image: "/images/john-evans-profile.jpg",
      linkedin: "https://www.linkedin.com/in/john-evans-okyere/",
      github: "https://github.com/JohnEvansOkyere",
      twitter: "https://x.com/VexaAISolutions",
    },
    {
      name: "Adeola Deborah",
      position: "Co-Founder",
      role: "Data Analyst",
      company: "Company Name",
      image: "/images/placeholder-profile.jpg",
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
    {
      name: "Kelvin Awuku Boateng",
      position: "Co-Founder",
      role: "Data Engineer",
      company: "Bosonit",
      image: "/images/placeholder-profile.jpg",
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
    {
      name: "Team Member 4",
      position: "Position Title",
      role: "Role Title",
      company: "Company Name",
      image: "/images/placeholder-profile.jpg",
      linkedin: "#",
      github: "#",
      twitter: "#",
    },
  ];

  // Duplicate team array for infinite loop effect
  const duplicatedTeam = [...team, ...team, ...team];

  return (
    <section id="about" className="section-padding bg-navy-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary-cyan/10 px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-primary-cyan rounded-full animate-pulse shadow-[0_0_8px_#00FBFF]"></span>
            <span className="text-sm font-medium text-primary-cyan">
              About Veloxa
            </span>
          </div>
          <h2 className="heading-xl text-white mb-6">
            Pioneering the AI Frontier
          </h2>
          <p className="body-lg text-white/70 max-w-3xl mx-auto">
            Veloxa Technology is an AI-first engineering firm dedicated to building the infrastructure of the future. 
            We specialize in embedding advanced intelligence into existing ecosystems, empowering businesses with 
            autonomous agents and predictive platforms that define the next generation of industry standards.
          </p>
        </div>

        {/* Infinite Scrolling Team Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex gap-8 animate-infinite-scroll hover:pause-animation">
              {duplicatedTeam.map((member, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-80"
                >
                  <div className="bg-navy-900/50 rounded-2xl p-6 border border-white/5 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                    {/* Profile Image */}
                    <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-br from-primary-cyan to-primary-blue ring-4 ring-primary-cyan/20">
                      {member.image.includes("placeholder") ? (
                        <div className="w-full h-full flex items-center justify-center text-navy-950 text-4xl font-bold">
                          {member.name.charAt(0)}
                        </div>
                      ) : (
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      )}
                    </div>

                    {/* Profile Info */}
                    <div className="text-center mb-4">
                      <h3 className="font-display font-bold text-xl text-white mb-2">
                        {member.name}
                      </h3>
                      <p className="text-primary-cyan font-semibold mb-1">
                        {member.position}
                      </p>
                      <p className="text-white/60 text-sm mb-1">
                        {member.role}
                      </p>
                      <p className="text-white/40 text-sm">
                        {member.company}
                      </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center justify-center space-x-4">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white/5 hover:bg-primary-cyan rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                        aria-label="LinkedIn"
                      >
                        <svg
                          className="w-5 h-5 text-white group-hover:text-navy-950"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white/5 hover:bg-primary-cyan rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                        aria-label="GitHub"
                      >
                        <svg
                          className="w-5 h-5 text-white group-hover:text-navy-950"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                      <a
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white/5 hover:bg-primary-cyan rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                        aria-label="X (Twitter)"
                      >
                        <svg
                          className="w-5 h-5 text-white group-hover:text-navy-950"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gradient Overlays for fade effect */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-navy-950 to-transparent pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-navy-950 to-transparent pointer-events-none"></div>
        </div>

        {/* Company Mission */}
        <div className="mt-16 bg-gradient-to-r from-primary-cyan to-primary-blue rounded-3xl p-8 md:p-12 text-center shadow-[0_0_50px_rgba(0,251,255,0.2)]">
          <h3 className="font-display font-bold text-4xl text-navy-950 mb-6">
            Our Mission
          </h3>
          <p className="text-navy-900 text-xl font-medium max-w-4xl mx-auto leading-relaxed">
            To architect the autonomous future. We believe that by embedding intelligence into every business process, 
            we can unlock unprecedented levels of human creativity and industrial efficiency. Veloxa is here to 
            bridge the gap between current operational constraints and the limitless potential of AI.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes infinite-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-33.33%);
          }
        }

        .animate-infinite-scroll {
          animation: infinite-scroll 5s linear infinite;
        }

        .pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
