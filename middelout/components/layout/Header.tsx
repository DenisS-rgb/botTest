"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-bold text-black">MIDDLEOUT</div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <Link
              href="#about"
              className="text-lg font-medium text-black hover:text-primary transition-colors"
            >
              Despre noi
            </Link>
            <Link
              href="#services"
              className="text-lg font-medium text-black hover:text-primary transition-colors"
            >
              Serviciile oferite
            </Link>
            <Link
              href="#portfolio"
              className="text-lg font-medium text-black hover:text-primary transition-colors"
            >
              Portofoliu
            </Link>
            <Link
              href="#contact"
              className="text-lg font-medium text-black hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-[47px] font-medium text-xl hover:bg-gray-800 transition-colors"
            >
              Contactează-ne
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              {isMenuOpen ? (
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

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-3">
            <Link
              href="#about"
              className="block text-lg font-medium text-black hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Despre noi
            </Link>
            <Link
              href="#services"
              className="block text-lg font-medium text-black hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Serviciile oferite
            </Link>
            <Link
              href="#portfolio"
              className="block text-lg font-medium text-black hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Portofoliu
            </Link>
            <Link
              href="#contact"
              className="block text-lg font-medium text-black hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
