import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
      <footer className="bg-black text-white rounded-t-[45px] px-10 pt-12 pb-8">
        <div className=" mx-auto">

          {/* Top Row */}
          <div className="flex items-start justify-between mb-10">

            {/* Logo */}
            <Link href="/">
              <Image
                  src="/icons/logo.svg"
                  alt="Middleout logo"
                  width={150}
                  height={30}
                  className="brightness-0 invert"
              />
            </Link>

            {/* Navigation */}
            <nav className="flex gap-10 text-[14px] underline underline-offset-4">
              <Link href="#about">Despre noi</Link>
              <Link href="#services">Serviciile oferite</Link>
              <Link href="#portfolio">Portofoliu</Link>
              <Link href="#contact">Contact</Link>
            </nav>

            {/* Social */}
            <div className="flex gap-4">

              <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-white rounded-full flex items-center justify-center"
              >
                <Image
                    src="/icons/linkedin.svg"
                    alt="LinkedIn"
                    width={30}
                    height={30}
                />
              </a>

              <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-white rounded-full flex items-center justify-center"
              >
                <Image
                    src="/icons/facebook.svg"
                    alt="Facebook"
                    width={30}
                    height={30}
                />
              </a>

              <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-white rounded-full flex items-center justify-center"
              >
                <Image
                    src="/icons/X(twitter).svg"
                    alt="X"
                    width={30}
                    height={30}
                />
              </a>

            </div>

          </div>

          {/* Contact Section */}
          <div className="mb-10">

            <a
                href="#contact"
                className="inline-block bg-[#1E6BFF] px-3 py-1 text-[13px] rounded mb-6 hover:bg-[#1557cc] transition"
            >
              Contactează-ne
            </a>

            <div className="space-y-2 text-[14px] text-white/80">
              <div>Email: office@middleout.com</div>
              <div>Phone: +40 729 818 463</div>
              <div>RO, București</div>
            </div>

          </div>

          {/* Divider */}
          <div className="border-t border-white/20 my-8"></div>

          {/* Bottom */}
          <div className="flex justify-between text-[13px] text-white/70">
            <div>© 2025 Middleout. Toate drepturile rezervate.</div>

            <div>
              Created by{" "}
              <span className="underline underline-offset-4">
              Quant-Apps
            </span>
            </div>
          </div>

        </div>
      </footer>
  );
}