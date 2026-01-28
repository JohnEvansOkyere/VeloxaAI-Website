import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Product from "@/components/Product";
import Features from "@/components/Features";
import Benefits from "@/components/Benefits";
import AboutUs from "@/components/AboutUs";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-navy-950">
      <Navigation />
      <Hero />
      <Stats />
      <Product />
      <Features />
      <Benefits />
      <AboutUs />
      <CTA />
      <Footer />
    </main>
  );
}
