import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Veloxa Technologies Ltd. - AI-Powered Recruitment Platform",
  description: "Transform your hiring process with VeloxaRecruit. Get 60-80% faster hiring with zero unconscious bias through AI-powered interviews and CV screening.",
  keywords: ["AI recruitment", "automated interviews", "CV screening", "hiring platform", "talent acquisition"],
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
