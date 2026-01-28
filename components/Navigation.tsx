"use client";

import { useState, useEffect } from "react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-navy-950/90 backdrop-blur-md shadow-lg border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-cyan to-primary-blue rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(0,251,255,0.5)]">
                <span className="text-navy-950 font-bold text-xl">V</span>
              </div>
              <span className="font-display font-bold text-2xl text-white">
                Veloxa <span className="text-primary-cyan">Technology</span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className="text-white/80 hover:text-primary-cyan transition-colors font-medium"
            >
              Home
            </a>
            <a
              href="#platforms"
              className="text-white/80 hover:text-primary-cyan transition-colors font-medium"
            >
              Platforms
            </a>
            <a
              href="#features"
              className="text-white/80 hover:text-primary-cyan transition-colors font-medium"
            >
              Capabilities
            </a>
            <a
              href="#benefits"
              className="text-white/80 hover:text-primary-cyan transition-colors font-medium"
            >
              Benefits
            </a>
            <a
              href="#about"
              className="text-white/80 hover:text-primary-cyan transition-colors font-medium"
            >
              Company
            </a>
            <a
              href="#cta"
              className="bg-primary-cyan text-navy-950 px-6 py-2.5 rounded-lg font-bold hover:shadow-[0_0_20px_rgba(0,251,255,0.4)] hover:scale-105 transition-all duration-300"
            >
              Work With Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-neutral-dark dark:text-neutral-offwhite hover:text-primary-turquoise dark:hover:text-primary-light transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 animate-slide-down bg-navy-950 border-t border-white/5">
            <div className="flex flex-col space-y-4">
              <a
                href="/"
                className="text-white/80 hover:text-primary-cyan transition-colors font-medium px-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#platforms"
                className="text-white/80 hover:text-primary-cyan transition-colors font-medium px-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Platforms
              </a>
              <a
                href="#features"
                className="text-white/80 hover:text-primary-cyan transition-colors font-medium px-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Capabilities
              </a>
              <a
                href="#benefits"
                className="text-white/80 hover:text-primary-cyan transition-colors font-medium px-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Benefits
              </a>
              <a
                href="#about"
                className="text-white/80 hover:text-primary-cyan transition-colors font-medium px-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Company
              </a>
              <a
                href="#cta"
                className="bg-primary-cyan text-navy-950 px-6 py-2.5 rounded-lg font-bold text-center mx-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Work With Us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
