import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://veloxatechnology.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Veloxa Technology — Software engineering & applied AI, built in Accra",
    template: "%s | Veloxa Technology",
  },
  description:
    "Veloxa Technology Ltd designs and builds the software businesses run on — operations platforms, internal systems, integrations and customer-facing products — with AI embedded where it earns its place.",
  keywords: [
    "software engineering Ghana",
    "custom software development Accra",
    "operations platform",
    "systems integration",
    "AI infrastructure",
    "business automation",
    "Veloxa Technology",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Veloxa Technology",
    url: siteUrl,
    title: "Veloxa Technology — Software engineering & applied AI, built in Accra",
    description:
      "We build the operations platforms, internal systems and AI agents behind Africa's fastest-moving teams.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@VexaAISolutions",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Veloxa Technology Ltd",
  url: siteUrl,
  description:
    "Software engineering company building operations platforms, internal systems, integrations and AI agents for businesses in Africa and abroad.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Accra",
    addressCountry: "GH",
  },
  sameAs: [
    "https://www.linkedin.com/company/veloxatech",
    "https://x.com/VexaAISolutions",
    "https://github.com/VeloxaTech",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
