import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Veloxa Technology",
  description:
    "How Veloxa Technology collects, uses, and protects information submitted through our website.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-navy-950">
      <Navigation />

      <section className="pt-28 md:pt-36 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-white/40 mb-12">Last updated: July 15, 2026</p>

          <div className="space-y-10 text-white/60 leading-relaxed">
            <section>
              <h2 className="font-display font-bold text-xl text-white mb-3">
                1. Who we are
              </h2>
              <p>
                Veloxa Technology (&quot;Veloxa,&quot; &quot;we,&quot; &quot;us,&quot; or
                &quot;our&quot;) is headquartered in Accra, Ghana, and builds AI
                infrastructure and automation products, including VeloxaRecruit,
                SmartMatch, LeadGen AI, and SmartSupport. This policy explains how we
                handle information collected through this website
                (veloxatechnology.com and its subdomains).
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-white mb-3">
                2. Information we collect
              </h2>
              <p className="mb-3">
                We only collect information you choose to give us. When you submit our
                contact form, we collect:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Your full name</li>
                <li>Your work email address</li>
                <li>Your company name (optional)</li>
                <li>The project details or message you provide</li>
              </ul>
              <p className="mt-3">
                We do not currently use cookies, analytics, or advertising trackers on
                this website. If that changes, this policy will be updated to reflect
                what is collected and why.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-white mb-3">
                3. How we use your information
              </h2>
              <p>
                Contact form submissions are used solely to respond to your inquiry —
                to understand your needs, follow up by email, and evaluate a potential
                engagement. We do not sell, rent, or share your information with third
                parties for marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-white mb-3">
                4. How your information is processed
              </h2>
              <p>
                Contact form submissions are delivered to our team via{" "}
                <a
                  href="https://resend.com"
                  className="text-primary-cyan hover:text-white transition-colors"
                >
                  Resend
                </a>
                , our transactional email provider, which processes the message on our
                behalf and is bound by its own data protection obligations. We do not
                use any other third-party processor for data submitted through this
                site.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-white mb-3">
                5. Data retention
              </h2>
              <p>
                We retain contact form submissions for as long as needed to respond to
                your inquiry and maintain a record of business communications, after
                which they are deleted or anonymized unless you become a customer, in
                which case standard business record-keeping applies.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-white mb-3">
                6. Your rights
              </h2>
              <p>
                You may ask us to access, correct, or delete the information you&apos;ve
                submitted to us at any time by emailing{" "}
                <a
                  href="mailto:hello@veloxarecruit.com"
                  className="text-primary-cyan hover:text-white transition-colors"
                >
                  hello@veloxarecruit.com
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-white mb-3">
                7. Changes to this policy
              </h2>
              <p>
                We may update this policy as our website and products evolve. Material
                changes will be reflected by updating the &quot;last updated&quot; date
                above.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-white mb-3">
                8. Contact us
              </h2>
              <p>
                Questions about this policy or how we handle your data can be sent to{" "}
                <a
                  href="mailto:hello@veloxarecruit.com"
                  className="text-primary-cyan hover:text-white transition-colors"
                >
                  hello@veloxarecruit.com
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
