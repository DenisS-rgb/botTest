import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white rounded-t-[45px] mt-20">
      <div className="max-w-7xl mx-auto px-12 py-14">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 gap-16 mb-12">
          {/* Left - Navigation and Logo */}
          <div className="space-y-8">
            {/* Logo */}
            <div className="text-2xl font-bold">MIDDLEOUT</div>

            {/* Navigation */}
            <nav className="flex flex-wrap gap-10">
              <Link
                href="#about"
                className="text-lg font-medium hover:text-gray-300 transition-colors"
              >
                Despre noi
              </Link>
              <Link
                href="#services"
                className="text-lg font-medium hover:text-gray-300 transition-colors"
              >
                Serviciile oferite
              </Link>
              <Link
                href="#portfolio"
                className="text-lg font-medium hover:text-gray-300 transition-colors"
              >
                Portofoliu
              </Link>
              <Link
                href="#contact"
                className="text-lg font-medium hover:text-gray-300 transition-colors"
              >
                Contact
              </Link>
            </nav>

            {/* Social Icons */}
            <div className="flex gap-5">
              <a
                href="#"
                className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-colors"
              >
                <span className="sr-only">Facebook</span>
                f
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-colors"
              >
                <span className="sr-only">Twitter</span>
                𝕏
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                in
              </a>
            </div>
          </div>

          {/* Right - Contact Info */}
          <div>
            <div className="inline-block bg-accent-green px-4 py-2 rounded-lg text-black font-medium mb-6">
              Contactează-ne
            </div>

            <div className="space-y-5 text-lg">
              <div>Email: office@middleout.com</div>
              <div>Phone: +40 729 818 463</div>
              <div>RO, București</div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-12"></div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-lg">
          <div>© 2025 Middleout. Toate drepturile rezervate.</div>
          <div>
            Created by{" "}
            <a
              href="#"
              className="hover:text-gray-300 transition-colors underline"
            >
              Quant-Apps
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
