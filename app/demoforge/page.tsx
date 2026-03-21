import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function DemoForgePage() {
  return (
    <main className="min-h-screen bg-navy-950">
      <Navigation />

      {/* Hero */}
      <section className="pt-28 md:pt-36 pb-16 bg-navy-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 mb-6">
            <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse shadow-[0_0_8px_#A855F7]" />
            <span className="text-xs font-semibold text-white/70 tracking-[0.2em] uppercase">
              DemoForge
            </span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-5xl md:text-7xl text-white tracking-tight leading-[0.9] mb-6">
            From Idea to Production-Ready <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text drop-shadow-[0_0_30px_rgba(168,85,247,0.3)]">Demo in Minutes</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto font-medium">
            A bleeding-edge prototyping platform heavily powered by Claude. Founders naturally describe what they want to build, and DemoForge visualizes and generates a fully functional demo they can securely share or extract instantly before committing.
          </p>
        </div>
      </section>

      {/* Key Outcomes */}
      <section className="section-padding bg-navy-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 hover:border-purple-500/30 transition-all duration-300">
              <div className="text-sm font-black text-purple-500 tracking-[0.2em] uppercase mb-4">
                Validation
              </div>
              <div className="text-3xl font-display font-bold text-white mb-3 leading-tight">
                Pre-build Validation
              </div>
              <p className="text-sm text-white/60 leading-relaxed">
                Stop wasting months building the wrong components. Validate all core interaction loops physically with critical investors entirely risk-free.
              </p>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 hover:border-purple-500/30 transition-all duration-300">
              <div className="text-sm font-black text-purple-500 tracking-[0.2em] uppercase mb-4">
                Speed
              </div>
              <div className="text-3xl font-display font-bold text-white mb-3 leading-tight">
                Rapid Iteration
              </div>
              <p className="text-sm text-white/60 leading-relaxed">
                Found a logic flaw? Simply modify the prompt text to cleanly adjust mechanics and watch the sandbox brilliantly rebuild the whole UI real-time.
              </p>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 hover:border-purple-500/30 transition-all duration-300">
              <div className="text-sm font-black text-purple-500 tracking-[0.2em] uppercase mb-4">
                Scale
              </div>
              <div className="text-3xl font-display font-bold text-white mb-3 leading-tight">
                Shareable Vision
              </div>
              <p className="text-sm text-white/60 leading-relaxed">
                Yields fully interactive web links seamlessly documenting the tactile user journey to systematically communicate project vision to backend developers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-padding bg-navy-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-header mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-black text-white tracking-tighter mb-4">
              Instantly compile your{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text inline-block">imagination</span>
            </h2>
            <p className="text-lg text-white/50 max-w-2xl">
              DemoForge miraculously transforms basic natural language directly into cleanly structured deployable frontend architecture.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 hover:bg-white/[0.05] transition-colors">
              <h3 className="font-display font-bold text-2xl text-white mb-4">
                Claude-Powered Source Generation
              </h3>
              <p className="text-base text-white/60 leading-relaxed">
                Effectively leverages Anthropic's state-of-the-art AI coding cognition to synthesize exceptionally beautiful, React-compliant architectures cleanly mapped from your text.
              </p>
            </div>

            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 hover:bg-white/[0.05] transition-colors">
              <h3 className="font-display font-bold text-2xl text-white mb-4">
                Functional Sandbox Previews
              </h3>
              <p className="text-base text-white/60 leading-relaxed">
                Execute and physically interact with the logic immediately via a secure, fully isolated zero-latency sandbox. Flawlessly validates component state management natively.
              </p>
            </div>

            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 hover:bg-white/[0.05] transition-colors">
              <h3 className="font-display font-bold text-2xl text-white mb-4">
                Serverless Shareable Links
              </h3>
              <p className="text-base text-white/60 leading-relaxed">
                Produce live artifact URLs instantly encapsulating the deployed components alongside all dependent styling context to securely impress external third-parties easily.
              </p>
            </div>

            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 hover:bg-white/[0.05] transition-colors">
              <h3 className="font-display font-bold text-2xl text-white mb-4">
                Downloadable Build Zip Files
              </h3>
              <p className="text-base text-white/60 leading-relaxed">
                Once visual validation finishes perfectly, export your functional codebase immediately identically bundled as a .zip standard to effortlessly kickstart enterprise development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA back to main contact */}
      <section className="pb-32 bg-navy-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-white/[0.02] border border-white/10 p-16 rounded-[3rem]">
          <h2 className="font-display font-black text-3xl md:text-5xl text-white mb-6 tracking-tighter">
            Visualize your startup idea today
          </h2>
          <p className="text-white/60 mb-10 text-lg">
            Simply describe what UI you desire to see built and observe Claude instantaneously render your imagination into reality.
          </p>
          <a
            href="/#cta"
            className="inline-flex items-center gap-2 bg-purple-500 text-navy-950 px-10 py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:scale-105 transition-all"
          >
            Start Forging
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
