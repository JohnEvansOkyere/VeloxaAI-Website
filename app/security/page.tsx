import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Security | Veloxa Technology",
  description: "How Veloxa Technology approaches security for this website, and how to report a vulnerability.",
};

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-navy-950">
      <Navigation />

      <section className="pt-28 md:pt-36 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight mb-4">
            Security
          </h1>
          <p className="text-sm text-white/40 mb-12">Last updated: July 15, 2026</p>

          <div className="space-y-10 text-white/60 leading-relaxed">
            <section>
              <h2 className="font-display font-bold text-xl text-white mb-3">
                Transport security
              </h2>
              <p>
                This website is served exclusively over HTTPS, encrypting all traffic
                between your browser and our servers, including anything submitted
                through the contact form.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-white mb-3">
                No accounts or passwords on this site
              </h2>
              <p>
                This marketing site does not have user accounts, logins, or stored
                passwords. The only data it handles is what you voluntarily submit
                through the contact form (name, email, company, and message), which is
                delivered directly to our team via our email provider, Resend, and is
                not stored in a database on this site.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-white mb-3">
                Product-level security
              </h2>
              <p>
                Individual Veloxa products with their own accounts and data — such as
                VeloxaRecruit — maintain their own security practices, separate from
                this marketing site.
              </p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-white mb-3">
                Reporting a vulnerability
              </h2>
              <p>
                If you believe you&apos;ve found a security issue affecting this
                website or any Veloxa product, please report it to{" "}
                <a
                  href="mailto:hello@veloxarecruit.com"
                  className="text-primary-cyan hover:text-white transition-colors"
                >
                  hello@veloxarecruit.com
                </a>{" "}
                with details to reproduce it. We ask that you give us reasonable time
                to investigate and address the issue before disclosing it publicly, and
                that you avoid accessing or modifying data that isn&apos;t yours while
                testing.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
