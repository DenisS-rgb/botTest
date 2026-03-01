import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
      <footer className="bg-black text-white rounded-t-[45px] mt-20">
        <div className="max-w-7xl mx-auto px-6 py-16">

          {/* Top Section */}
          <div className="grid md:grid-cols-2 gap-16 mb-14">

            {/* Left */}
            <div className="space-y-8">

              {/* Logo */}
              <Link href="/" className="inline-block">
                <Image
                    src="/icons/logo.svg"
                    alt="Middleout logo"
                    width={140}
                    height={30}
                    className="h-8 w-auto brightness-0 invert"
                />
              </Link>

              {/* Navigation */}
              <nav className="flex flex-wrap gap-8 text-[15px] font-medium">
                <Link href="#about" className="hover:text-gray-300 transition">
                  Despre noi
                </Link>
                <Link href="#services" className="hover:text-gray-300 transition">
                  Serviciile oferite
                </Link>
                <Link href="#portfolio" className="hover:text-gray-300 transition">
                  Portofoliu
                </Link>
                <Link href="#contact" className="hover:text-gray-300 transition">
                  Contact
                </Link>
              </nav>

              {/* Social */}
              <div className="flex gap-4">
                <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition"
                >
                  f
                </a>

                <a
                    href="https://x.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition"
                >
                  𝕏
                </a>

                <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition"
                >
                  in
                </a>
              </div>
            </div>

            {/* Right */}
            <div>
              <div className="inline-block bg-white text-black px-4 py-2 rounded-md text-sm font-medium mb-6">
                Contactează-ne
              </div>

              <div className="space-y-4 text-[15px] text-white/80">
                <div>
                  Email:{" "}
                  <a
                      href="mailto:office@middleout.com"
                      className="hover:text-white transition"
                  >
                    office@middleout.com
                  </a>
                </div>

                <div>
                  Phone:{" "}
                  <a
                      href="tel:+40729818463"
                      className="hover:text-white transition"
                  >
                    +40 729 818 463
                  </a>
                </div>

                <div>București, România</div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/20 my-10" />

          {/* Bottom */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/70">
            <div>
              © {new Date().getFullYear()} MIDDLEOUT. Toate drepturile rezervate.
            </div>

            <div>
              Created by{" "}
              <a
                  href="https://quant-apps.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-white transition"
              >
                Quant-Apps
              </a>
            </div>
          </div>

        </div>
      </footer>
  );
}