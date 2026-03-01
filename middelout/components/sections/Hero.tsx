import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full mx-auto bg-white flex flex-col items-center justify-center overflow-hidden px-0">
      {/* Decorative stars - responsive positioned */}
      <div
        className="absolute w-[30px] h-[31px] opacity-100 hidden lg:block"
        style={{
          left: "12.7%", // ~183/1440
          top: "28%",
          background:
            "linear-gradient(185deg, rgba(71, 118, 230, 1) 35%, rgba(195, 211, 248, 1) 88%)",
          borderRadius: "50%",
          filter: "drop-shadow(0px 0px 11.1px rgba(128, 165, 255, 0.45))",
          clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
        }}
      ></div>
      <div
        className="absolute w-[26px] h-[28px] opacity-100 hidden lg:block"
        style={{
          right: "14.3%", // ~206/1440
          top: "50%",
          background:
            "linear-gradient(185deg, rgba(71, 118, 230, 1) 35%, rgba(195, 211, 248, 1) 88%)",
          borderRadius: "50%",
          filter: "drop-shadow(0px 0px 11.1px rgba(128, 165, 255, 0.45))",
          clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
        }}
      ></div>

      <div className="w-full max-w-[1200px] mx-auto px-4 md:px-8 text-center relative z-10">
        {/* Main Heading */}
        <h1 className="font-inter font-bold text-[clamp(36px,4vw,56px)] leading-[1.21] text-[#1C1C1C] mb-8">
          Dezvoltăm website-uri puternice care <br className="hidden md:block" />
          aduc rezultate remarcabile
        </h1>

        {/* Subtitle */}
        <p className="font-inter font-normal text-[clamp(18px,2vw,28px)] leading-[1.21] text-[#1C1C1C] mb-12 max-w-[985px] mx-auto">
          Revoluționează-ți afacerea cu soluții web personalizate, care îmbină
          un design impresionant cu o funcționalitate robustă și rezultate
          deosebite!
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          {/* Button 1 - Filled */}
          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-black text-white font-inter font-medium text-[20px] leading-[1.21] px-8 py-4 rounded-[47px] hover:bg-gray-800 transition-all transform hover:scale-105"
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

          {/* Button 2 - Outline Only */}
          <Link
            href="#services"
            className="inline-flex items-center justify-center gap-2 bg-transparent text-black font-inter font-medium text-[20px] leading-[1.21] px-8 py-4 rounded-[47px] border border-[#E5E5E5] hover:border-black transition-all"
          >
            Vezi serviciile oferite
          </Link>
        </div>
      </div>

      {/* Background grid - positioned at bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-64 bg-gradient-to-t from-blue-50/30 to-transparent opacity-20 hidden md:block"></div>
    </section>
  );
}
