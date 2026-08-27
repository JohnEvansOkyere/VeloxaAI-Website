import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Product from "@/components/Product";
import Features from "@/components/Features";
import Benefits from "@/components/Benefits";
import CaseStudySpotlight from "@/components/CaseStudySpotlight";
import Process from "@/components/Process";
import AboutUs from "@/components/AboutUs";
import FAQ from "@/components/FAQ";
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
      <CaseStudySpotlight />
      <Process />
      <AboutUs />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
