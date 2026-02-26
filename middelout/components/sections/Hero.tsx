import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden pt-20">
      {/* Decorative stars */}
      <div className="absolute top-52 left-48 w-8 h-8 animate-pulse">
        <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-200 rounded-full blur-sm"></div>
      </div>
      <div className="absolute top-96 right-52 w-6 h-6 animate-pulse delay-200">
        <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-200 rounded-full blur-sm"></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-20 text-center relative z-10">
        <h1 className="text-6xl md:text-7xl font-bold text-black mb-8 leading-tight">
          Dezvoltăm website-uri puternice care <br />
          aduc rezultate remarcabile
        </h1>

        <p className="text-2xl md:text-3xl text-black mb-12 max-w-4xl mx-auto leading-relaxed">
          Revoluționează-ți afacerea cu soluții web personalizate, care îmbină
          un design impresionant cu o funcționalitate robustă și rezultate
          deosebite!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-[47px] font-medium text-xl hover:bg-gray-800 transition-all transform hover:scale-105"
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

          <Link
            href="#services"
            className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-[47px] font-medium text-xl border border-gray-200 hover:border-black transition-all"
          >
            Vezi serviciile oferite
          </Link>
        </div>
      </div>

      {/* Background grid pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 opacity-10">
        <div className="w-full h-full bg-gradient-to-t from-blue-100 to-transparent"></div>
      </div>
    </section>
  );
}
