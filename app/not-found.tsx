import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-navy-950 flex flex-col">
      <Navigation />

      <section className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center max-w-lg">
          <div className="font-display font-black text-7xl sm:text-8xl text-transparent bg-clip-text bg-gradient-to-br from-primary-cyan to-primary-blue mb-6">
            404
          </div>
          <h1 className="font-display font-bold text-2xl sm:text-3xl text-white mb-4">
            This page doesn&apos;t exist
          </h1>
          <p className="text-white/60 mb-10">
            The page you&apos;re looking for may have been moved or never existed.
            Let&apos;s get you back on track.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-primary-cyan text-navy-950 px-8 py-3 rounded-lg font-semibold text-sm uppercase tracking-widest hover:shadow-[0_0_25px_rgba(0,251,255,0.4)] hover:scale-[1.03] transition-all duration-300"
          >
            Back to Home
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
