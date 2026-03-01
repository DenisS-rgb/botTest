"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
      <header className="fixed top-0 left-0 right-0 z-50 px-15 bg-white">
          <div className="flex items-center justify-between h-[72px]">

            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                  src="/icons/logo.svg"
                  alt="Middleout logo"
                  width={130}
                  height={28}
                  className="h-7 w-auto"
                  priority
              />
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link href="#about" className="text-[15px] font-light text-black">
                Despre noi
              </Link>
              <Link href="#services" className="text-[15px] font-light text-black">
                Serviciile oferite
              </Link>
              <Link href="#portfolio" className="text-[15px] font-light text-black">
                Portofoliu
              </Link>
              <Link href="#contact" className="text-[15px] font-light text-black">
                Contact
              </Link>
            </nav>

            {/* CTA */}
            <Link
                href="#contact"
                className="hidden md:inline-flex items-center gap-2
                        text-white bg-black
                       px-5 py-2.5
                       rounded-full
                       text-[15px] font-medium
                       hover:bg-gray-800 transition"
            >
              Contactează-ne
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
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
      </header>
  );
}