import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | Veloxa Technology",
  description: "The terms that govern your use of the Veloxa Technology website.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-navy-950">
      <Navigation />

      <section className="pt-28 md:pt-36 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight mb-4">
            Terms of Service
          </h1>
          <p className="text-sm text-white/40 mb-12">Last updated: July 15, 2026</p>

          <div className="space-y-10 text-white/60 leading-relaxed">
            <section>
              <h2 className="font-display font-bold text-xl text-white mb-3">
                1. Acceptance of terms
              </h2>
              <p>
                By accessing or using this website (the &quot;Site&quot;), you agree to
                be bound by these Terms of Service. If you do not agree, please do not
                use the Site.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-white mb-3">
                2. About this site
              </h2>
              <p>
                This Site is operated by Veloxa Technology, headquartered in Accra,
                Ghana. It describes our AI infrastructure and automation products —
                including VeloxaRecruit, SmartMatch, LeadGen AI, and SmartSupport — and
                provides a way to contact us about a potential engagement. Use of any
                individual Veloxa product (for example, an active VeloxaRecruit
                account) may be governed by additional, product-specific terms.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-white mb-3">
                3. Acceptable use
              </h2>
              <p className="mb-3">When using this Site, you agree not to:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Submit false, misleading, or fraudulent information through our forms</li>
                <li>Attempt to disrupt, overload, or gain unauthorized access to the Site or its infrastructure</li>
                <li>Use automated means to scrape, spam, or abuse the contact form</li>
                <li>Use the Site for any unlawful purpose</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-white mb-3">
                4. Intellectual property
              </h2>
              <p>
                All content on this Site — including text, graphics, logos, and product
                names — is the property of Veloxa Technology or its licensors and is
                protected by applicable intellectual property laws. You may not
                reproduce, distribute, or create derivative works from this content
                without our prior written consent.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-white mb-3">
                5. No warranties
              </h2>
              <p>
                This Site and its content are provided &quot;as is&quot; without
                warranties of any kind, express or implied. We do not guarantee that
                the Site will be uninterrupted, error-free, or secure at all times.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-white mb-3">
                6. Limitation of liability
              </h2>
              <p>
                To the fullest extent permitted by law, Veloxa Technology shall not be
                liable for any indirect, incidental, or consequential damages arising
                from your use of, or inability to use, this Site.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-white mb-3">
                7. Changes to these terms
              </h2>
              <p>
                We may revise these terms from time to time. Continued use of the Site
                after changes are posted constitutes acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-white mb-3">
                8. Governing law
              </h2>
              <p>
                These terms are governed by the laws of the Republic of Ghana, without
                regard to conflict-of-law principles.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-white mb-3">
                9. Contact us
              </h2>
              <p>
                Questions about these terms can be sent to{" "}
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
