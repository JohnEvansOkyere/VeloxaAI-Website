import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "WhatsApp Food Ordering — Your Digital Restaurant",
  description:
    "Automate takeout and delivery orders natively on WhatsApp. AI agents handle customer inquiries, share menu URLs, and dispatch instant receipts without human intervention.",
  alternates: { canonical: "/whatsapp" },
  openGraph: {
    type: "website",
    title: "WhatsApp Food Ordering — Your Digital Restaurant",
    description:
      "Transform WhatsApp into your digital restaurant with AI agents that take orders and send receipts.",
    url: "/whatsapp",
    images: ["/opengraph-image"],
  },
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "WhatsApp Food Ordering",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Restaurant ordering system on WhatsApp where AI agents take orders, share menu URLs, and send receipts.",
  provider: { "@type": "Organization", name: "Veloxa Technology Ltd" },
};

export default function WhatsAppFoodPage() {
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
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_#10B981]" />
            <span className="text-xs font-semibold text-white/70 tracking-[0.2em] uppercase">
              WhatsApp Food Ordering
            </span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-5xl md:text-7xl text-white tracking-tight leading-[0.9] mb-6">
            Transform WhatsApp into <br />
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text drop-shadow-[0_0_30px_rgba(16,185,129,0.3)]">Your Digital Restaurant</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto font-medium">
            Automate takeout and delivery orders natively on WhatsApp. Our AI agents handle customer inquiries, selectively drop URLs for meal visualization, and dispatch instant receipts without human intervention.
          </p>
        </div>
      </section>

      {/* Key Outcomes */}
      <section className="section-padding bg-navy-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 hover:border-emerald-500/30 transition-all duration-300">
              <div className="text-sm font-black text-emerald-500 tracking-[0.2em] uppercase mb-4">
                Sales
              </div>
              <div className="text-3xl font-display font-bold text-white mb-3 leading-tight">
                Higher Conversions
              </div>
              <p className="text-sm text-white/60 leading-relaxed">
                Customers prefer simple chat. Capture spontaneous cravings instantly without forcing them to download dedicated ecosystem apps.
              </p>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 hover:border-emerald-500/30 transition-all duration-300">
              <div className="text-sm font-black text-emerald-500 tracking-[0.2em] uppercase mb-4">
                Experience
              </div>
              <div className="text-3xl font-display font-bold text-white mb-3 leading-tight">
                Zero Wait Times
              </div>
              <p className="text-sm text-white/60 leading-relaxed">
                Nobody likes being placed on hold. Your AI ordering agent effortlessly handles 1,000 parallel customer queries perfectly within seconds.
              </p>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 hover:border-emerald-500/30 transition-all duration-300">
              <div className="text-sm font-black text-emerald-500 tracking-[0.2em] uppercase mb-4">
                Operations
              </div>
              <div className="text-3xl font-display font-bold text-white mb-3 leading-tight">
                Streamlined Kitchen
              </div>
              <p className="text-sm text-white/60 leading-relaxed">
                Complex customized orders are structurally formatted and directly channeled into your kitchen display system completely error-free.
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
              <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">checkout flow</span>
            </h2>
            <p className="text-lg text-white/50 max-w-2xl">
              Elevate your restaurant's digital presence and dramatically increase order throughput with frictionless UX.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 hover:bg-white/[0.05] transition-colors">
              <h3 className="font-display font-bold text-2xl text-white mb-4">
                Conversational AI Ordering
              </h3>
              <p className="text-base text-white/60 leading-relaxed">
                Cruises through complex requests like "No onions, extra spicy, sauce on the side" flawlessly. Masterfully understands natural contextual cues to upsell complementary drinks and sides conversationally.
              </p>
            </div>

            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 hover:bg-white/[0.05] transition-colors">
              <h3 className="font-display font-bold text-2xl text-white mb-4">
                Instant Web-Menu Linking
              </h3>
              <p className="text-base text-white/60 leading-relaxed">
                If indecisive customers prefer visual gallery selection, the agent dynamically generates and drops a time-sensitive, personalized URL to view high-resolution imagery of favorites instantly.
              </p>
            </div>

            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 hover:bg-white/[0.05] transition-colors">
              <h3 className="font-display font-bold text-2xl text-white mb-4">
                Automated WhatsApp Receipts
              </h3>
              <p className="text-base text-white/60 leading-relaxed">
                Secure payments and rapid checkout are processed natively via payment link integrations, instantly returning professional, itemized PDF receipts directly back to the user within WhatsApp.
              </p>
            </div>

            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 hover:bg-white/[0.05] transition-colors">
              <h3 className="font-display font-bold text-2xl text-white mb-4">
                Seamless Agent Handoffs
              </h3>
              <p className="text-base text-white/60 leading-relaxed">
                When highly unusual catering complexities or customer service complaints arise, the AI intelligently escalates the chat directly to your human staff with full unbroken conversation context.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA back to main contact */}
      <section className="pb-32 bg-navy-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-white/[0.02] border border-white/10 p-16 rounded-[3rem]">
          <h2 className="font-display font-black text-3xl md:text-5xl text-white mb-6 tracking-tighter">
            See the ordering AI in action
          </h2>
          <p className="text-white/60 mb-10 text-lg">
            Run a sandbox simulation powered by your restaurant's exact menu today and watch your order throughput skyrocket.
          </p>
          <a
            href="/#cta"
            className="inline-flex items-center gap-2 bg-emerald-500 text-navy-950 px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:scale-105 transition-all"
          >
            Launch Your Agent
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
