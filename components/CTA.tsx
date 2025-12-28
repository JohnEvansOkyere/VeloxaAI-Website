"use client";

import { useState } from "react";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (integrate with your backend/email service)
    console.log("Email submitted:", email);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
    }, 3000);
  };

  return (
    <section id="cta" className="section-padding bg-gradient-to-br from-primary-turquoise to-primary-teal relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30 mb-8">
          <span className="w-2 h-2 bg-accent-yellow rounded-full animate-pulse"></span>
          <span className="text-sm font-medium text-white">
            Limited Time Offer
          </span>
        </div>

        {/* Heading */}
        <h2 className="heading-xl text-white mb-4">
          Ready to Transform Your Hiring?
        </h2>
        <p className="body-lg text-white/90 mb-12 max-w-2xl mx-auto">
          Join innovative companies already saving 60-80% on time-to-hire with AI-powered recruitment.
        </p>

        {/* Social Proof Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-4xl font-bold text-white mb-2">60-80%</div>
            <div className="text-white/80 font-medium">Faster hiring process</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-4xl font-bold text-white mb-2">100%</div>
            <div className="text-white/80 font-medium">Unbiased assessments</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-white/80 font-medium">Automated interviews</div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="max-w-3xl mx-auto mb-12 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <div className="flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-accent-yellow" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg className="w-8 h-8 text-accent-yellow" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg className="w-8 h-8 text-accent-yellow" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg className="w-8 h-8 text-accent-yellow" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <svg className="w-8 h-8 text-accent-yellow" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <p className="text-white text-lg md:text-xl italic mb-4">
            "VeloxaRecruit cut our hiring time in half while improving candidate quality. The AI interviews are incredibly thorough and eliminate unconscious bias from our process."
          </p>
          <div className="text-white/90 font-semibold">Sarah Chen</div>
          <div className="text-white/70 text-sm">Head of Talent, TechCorp</div>
        </div>

        {/* Primary CTA Button */}
        <div className="mb-8">
          <a
            href="#cta-form"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('cta-form')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 bg-neutral-dark text-white px-10 py-5 rounded-xl font-semibold text-lg hover:bg-neutral-dark/90 hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Schedule Your Demo
          </a>
        </div>

        {/* CTA Form */}
        {!submitted ? (
          <form id="cta-form" onSubmit={handleSubmit} className="max-w-lg mx-auto mb-10">
            <p className="text-white/90 mb-4 font-medium">Or get started with a quick contact form</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your work email"
                required
                className="flex-1 px-6 py-4 rounded-xl text-neutral-dark placeholder-neutral-dark/50 focus:outline-none focus:ring-4 focus:ring-white/30 transition-all font-medium"
              />
              <button
                type="submit"
                className="bg-white text-primary-turquoise px-8 py-4 rounded-xl font-bold hover:bg-white/90 hover:shadow-2xl hover:scale-105 transition-all duration-300 whitespace-nowrap"
              >
                Get Started
              </button>
            </div>
          </form>
        ) : (
          <div id="cta-form" className="max-w-lg mx-auto mb-10 bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-xl px-6 py-5">
            <div className="flex items-center justify-center space-x-2 text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold text-lg">Thanks! We'll be in touch soon.</span>
            </div>
          </div>
        )}

        {/* Alternative Contact Methods */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/90 text-sm">
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>Call us: +1 (555) 123-4567</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <a href="mailto:hello@veloxaai.com" className="hover:underline">
              hello@veloxaai.com
            </a>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 pt-12 border-t border-white/20">
          <p className="text-white/70 text-sm mb-6">Trusted by innovative teams worldwide</p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-80">
            <div className="text-white font-semibold text-lg">Enterprise Security</div>
            <div className="w-px h-8 bg-white/30"></div>
            <div className="text-white font-semibold text-lg">GDPR Compliant</div>
            <div className="w-px h-8 bg-white/30"></div>
            <div className="text-white font-semibold text-lg">SOC 2 Ready</div>
            <div className="w-px h-8 bg-white/30"></div>
            <div className="text-white font-semibold text-lg">24/7 Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}
