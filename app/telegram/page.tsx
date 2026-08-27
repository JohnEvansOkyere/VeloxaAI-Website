import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Telegram Booking — Frictionless Appointment Scheduling",
  description:
    "Let customers book appointments directly through Telegram. Customer data is stored securely in Google Sheets and dates are logged automatically in Google Calendar.",
  alternates: { canonical: "/telegram" },
  openGraph: {
    type: "website",
    title: "Telegram Booking — Frictionless Appointment Scheduling",
    description:
      "A Telegram appointment system that stores customer data in Google Sheets and logs times in Calendar.",
    url: "/telegram",
    images: ["/opengraph-image"],
  },
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Telegram Booking",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Telegram appointment booking system with Google Sheets storage and Google Calendar logging.",
  provider: { "@type": "Organization", name: "Veloxa Technology Ltd" },
};

export default function TelegramBookingPage() {
  return (
    <main className="min-h-screen bg-navy-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <Navigation />

      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-16 bg-navy-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 mb-6">
            <span className="w-2 h-2 bg-primary-cyan rounded-full animate-pulse shadow-[0_0_8px_#00FBFF]" />
            <span className="text-xs font-semibold text-white/70 tracking-[0.2em] uppercase">
              Telegram Booking System
            </span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-5xl md:text-7xl text-white tracking-tight leading-[0.9] mb-6">
            Frictionless Appointment <br />
            <span className="gradient-text drop-shadow-[0_0_30px_rgba(0,251,255,0.3)]">Scheduling on Telegram</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto font-medium">
            Allow your customers to book appointments directly through Telegram. The system automatically stores customer data securely in Google Sheets and logs dates seamlessly in Google Calendar.
          </p>
        </div>
      </section>

      {/* Key Outcomes */}
      <section className="section-padding bg-navy-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 hover:border-primary-cyan/30 transition-all duration-300">
              <div className="text-sm font-black text-primary-cyan tracking-[0.2em] uppercase mb-4">
                Reach
              </div>
              <div className="text-3xl font-display font-bold text-white mb-3 leading-tight">
                Meet clients where they are
              </div>
              <p className="text-sm text-white/60 leading-relaxed">
                Leverage a chat app they already use daily. Zero friction to schedule, cancel, or modify bookings natively.
              </p>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 hover:border-primary-cyan/30 transition-all duration-300">
              <div className="text-sm font-black text-primary-cyan tracking-[0.2em] uppercase mb-4">
                Efficiency
              </div>
              <div className="text-3xl font-display font-bold text-white mb-3 leading-tight">
                Zero admin work
              </div>
              <p className="text-sm text-white/60 leading-relaxed">
                Eliminate back-and-forth emails. Autonomous AI agents handle your entire booking lifecycle instantly.
              </p>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 hover:border-primary-cyan/30 transition-all duration-300">
              <div className="text-sm font-black text-primary-cyan tracking-[0.2em] uppercase mb-4">
                Organization
              </div>
              <div className="text-3xl font-display font-bold text-white mb-3 leading-tight">
                Directly Synced
              </div>
              <p className="text-sm text-white/60 leading-relaxed">
                Every booking instantly appears in Google Calendar and cleanly populates your Google Sheets CRM in real-time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-padding bg-navy-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-header mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-black text-white tracking-tighter mb-4">
              Complete autonomous{" "}
              <span className="gradient-text inline-block">scheduling infrastructure</span>
            </h2>
            <p className="text-lg text-white/50 max-w-2xl">
              Our Telegram agent operates exactly like a premium human assistant, but infinitely scalable and permanently available for your business.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 hover:bg-white/[0.05] transition-colors">
              <h3 className="font-display font-bold text-2xl text-white mb-4">
                Natural Language Booking
              </h3>
              <p className="text-base text-white/60 leading-relaxed">
                Customers can simply message "I need an appointment tomorrow at 10 AM," and the AI understands, confirms, negotiates alternatives, and books it seamlessly.
              </p>
            </div>

            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 hover:bg-white/[0.05] transition-colors">
              <h3 className="font-display font-bold text-2xl text-white mb-4">
                Real-Time Calendar Sync
              </h3>
              <p className="text-base text-white/60 leading-relaxed">
                Full two-way synchronization with Google Calendar strictly prevents double-bookings. The agent knows exactly when you're available instantly and blocks out time slots.
              </p>
            </div>

            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 hover:bg-white/[0.05] transition-colors">
              <h3 className="font-display font-bold text-2xl text-white mb-4">
                Automated CRM Logging
              </h3>
              <p className="text-base text-white/60 leading-relaxed">
                All client details—names, verified contact methods, and appointment context—are cleanly pushed into structured Google Sheets rows matching your existing formats.
              </p>
            </div>

            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 hover:bg-white/[0.05] transition-colors">
              <h3 className="font-display font-bold text-2xl text-white mb-4">
                24/7 Availability
              </h3>
              <p className="text-base text-white/60 leading-relaxed">
                Your business never sleeps. Clients can confidently book outside of business hours at their peak convenience, driving dramatically higher appointment volume.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA back to main contact */}
      <section className="pb-32 bg-navy-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-white/[0.02] border border-white/10 p-16 rounded-[3rem]">
          <h2 className="font-display font-black text-3xl md:text-5xl text-white mb-6 tracking-tighter">
            Ready to streamline your scheduling?
          </h2>
          <p className="text-white/60 mb-10 text-lg">
            Let's configure a bespoke Telegram booking agent perfectly tailored for your specialized operations.
          </p>
          <a
            href="/#cta"
            className="inline-flex items-center gap-2 bg-primary-cyan text-navy-950 px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:shadow-[0_0_30px_rgba(0,251,255,0.4)] hover:scale-105 transition-all"
          >
            Deploy Your Agent
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
