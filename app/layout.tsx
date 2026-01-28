import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Veloxa Technology - Next-Generation AI Infrastructure",
  description: "Architecting the autonomous future. Veloxa Technology embeds advanced intelligence into business ecosystems through predictive platforms and autonomous agents.",
  keywords: ["AI infrastructure", "business automation", "autonomous agents", "predictive analytics", "Veloxa Technology"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
