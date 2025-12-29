import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Product from "@/components/Product";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import AboutUs from "@/components/AboutUs";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-offwhite">
      <Navigation />
      <Hero />
      <Stats />
      <Product />
      <Features />
      <HowItWorks />
      <Benefits />
      <AboutUs />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
