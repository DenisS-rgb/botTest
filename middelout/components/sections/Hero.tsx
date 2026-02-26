import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        {/* Decorative Stars */}
        <div className="absolute top-40 left-10 w-8 h-8 text-primary animate-pulse">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
          </svg>
        </div>
        <div className="absolute top-96 right-20 w-6 h-6 text-primary animate-pulse delay-75">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
          </svg>
        </div>

        {/* Main Content */}
        <div className="text-center space-y-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            Dezvoltăm website-uri puternice care{" "}
            <span className="block">aduc rezultate remarcabile</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Revoluționează-ți afacerea cu soluții web personalizate, care îmbină un
            design impresionant cu o funcționalitate robustă și rezultate deosebite!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="#contact"
              className="flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full text-base font-medium hover:bg-gray-800 transition-all hover:scale-105"
            >
              Contactează-ne
              <svg
                width="20"
                height="20"
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
              className="flex items-center gap-2 border-2 border-gray-200 text-black px-8 py-4 rounded-full text-base font-medium hover:border-gray-300 transition-all hover:scale-105"
            >
              Vezi serviciile oferite
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
