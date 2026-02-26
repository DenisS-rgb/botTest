import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 px-6 overflow-hidden bg-white">
      <div className="container mx-auto max-w-4xl">
        {/* Decorative Stars */}
        <div className="absolute top-32 left-20 w-6 h-6 text-primary opacity-60">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
          </svg>
        </div>
        <div className="absolute bottom-20 right-32 w-5 h-5 text-primary opacity-60">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
          </svg>
        </div>

        {/* Main Content */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            Dezvoltăm website-uri puternice care{" "}
            <span className="block">aduc rezultate remarcabile</span>
          </h1>

          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Revoluționează-ți afacerea cu soluții web personalizate, care îmbină un
            design impresionant cu o funcționalitate robustă și rezultate deosebite!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Link
              href="#contact"
              className="flex items-center gap-2 bg-black text-white px-7 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition-all"
            >
              Contactează-ne
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.33334 8H12.6667M12.6667 8L8.00001 3.33334M12.6667 8L8.00001 12.6667"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
            <Link
              href="#servicii"
              className="text-black px-7 py-3 rounded-full text-sm font-medium hover:text-gray-600 transition-all underline"
            >
              Vezi serviciile oferite
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
