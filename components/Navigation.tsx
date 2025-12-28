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
          ? "bg-white/95 dark:bg-neutral-dark/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-turquoise to-primary-teal rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">V</span>
              </div>
              <span className="font-display font-bold text-2xl text-neutral-dark dark:text-neutral-offwhite">
                Veloxa<span className="text-primary-turquoise dark:text-primary-light">AI</span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#product"
              className="text-neutral-dark dark:text-neutral-offwhite hover:text-primary-turquoise dark:hover:text-primary-light transition-colors font-medium"
            >
              Product
            </a>
            <a
              href="#features"
              className="text-neutral-dark dark:text-neutral-offwhite hover:text-primary-turquoise dark:hover:text-primary-light transition-colors font-medium"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-neutral-dark dark:text-neutral-offwhite hover:text-primary-turquoise dark:hover:text-primary-light transition-colors font-medium"
            >
              How It Works
            </a>
            <a
              href="#benefits"
              className="text-neutral-dark dark:text-neutral-offwhite hover:text-primary-turquoise dark:hover:text-primary-light transition-colors font-medium"
            >
              Benefits
            </a>
            <a
              href="#cta"
              className="bg-gradient-to-r from-primary-turquoise to-primary-teal text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Get Started
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
          <div className="md:hidden py-4 animate-slide-down">
            <div className="flex flex-col space-y-4">
              <a
                href="#product"
                className="text-neutral-dark dark:text-neutral-offwhite hover:text-primary-turquoise dark:hover:text-primary-light transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Product
              </a>
              <a
                href="#features"
                className="text-neutral-dark dark:text-neutral-offwhite hover:text-primary-turquoise dark:hover:text-primary-light transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-neutral-dark dark:text-neutral-offwhite hover:text-primary-turquoise dark:hover:text-primary-light transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                How It Works
              </a>
              <a
                href="#benefits"
                className="text-neutral-dark dark:text-neutral-offwhite hover:text-primary-turquoise dark:hover:text-primary-light transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Benefits
              </a>
              <a
                href="#cta"
                className="bg-gradient-to-r from-primary-turquoise to-primary-teal text-white px-6 py-2.5 rounded-lg font-semibold text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
