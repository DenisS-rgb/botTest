export default function About() {
  return (
    <section
      id="about"
      className="relative w-full mx-auto bg-white md:px-8 lg:px-16 overflow-hidden"
    >
      {/* Decorative stars */}
      <div
        className="absolute w-[23px] h-[25px] opacity-100 hidden lg:block"
        style={{
          right: "20%",
          top: "10%",
          background:
            "linear-gradient(185deg, rgba(71, 118, 230, 1) 35%, rgba(195, 211, 248, 1) 88%)",
          borderRadius: "50%",
          filter: "drop-shadow(0px 0px 11.1px rgba(128, 165, 255, 0.45))",
          clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
        }}
      ></div>

      <div className="max-w-[1282px] mx-auto">
        {/* Header section */}
        <div className="mb-12">
          {/* Decorative line above title */}
          <div className="w-[71px] h-[2px] bg-black mb-4"></div>
          
          {/* Title */}
          <h2 className="text-[clamp(28px,2.5vw,36px)] font-inter font-bold text-black mb-8">
            Despre MIDDLEOUT
          </h2>

          {/* Description */}
          <p className="text-[clamp(20px,2vw,28px)] font-inter font-normal text-black leading-[1.21] max-w-[591px]">
            Middleout este o echipă de profesioniști în dezvoltare web care
            creează website-uri rapide și eficiente. Punem accent pe soluții
            bine gândite, puternice ce fac afacerea ta vizibilă și accesibilă.
          </p>
        </div>

        {/* Features section */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16 relative">
          {/* Blue circles decoration - positioned relative to grid */}
          <div
            className="hidden lg:block absolute w-[51px] h-[51px] rounded-full bg-[rgba(0,102,255,0.6)]"
            style={{ right: "0%", top: "5%" }}
          ></div>
          <div
            className="hidden lg:block absolute w-[51px] h-[51px] rounded-full bg-[rgba(0,102,255,0.6)]"
            style={{ right: "0%", top: "40%" }}
          ></div>
          <div
            className="hidden lg:block absolute w-[51px] h-[51px] rounded-full bg-[rgba(0,102,255,0.6)]"
            style={{ right: "0%", top: "75%" }}
          ></div>

          {/* Feature 1 */}
          <div className="flex gap-4 items-start pr-8">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#FFB600] to-[#FEC536] flex-shrink-0"></div>
            <p className="text-[16px] font-inter font-normal text-black leading-[1.21]">
              Dezvoltare web axată pe rezultate concrete. Constuim website-uri
              care nu doar impresionează, ci și funcționează impecabil,
              ajutându-te să atingi fiecare obiectiv de afaceri!
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex gap-4 items-start pr-8">
            <div className="w-10 h-12 rounded-lg bg-gradient-to-br from-[#FEC536] to-[#FFB600] flex-shrink-0"></div>
            <p className="text-[16px] font-inter font-normal text-black leading-[1.21]">
              Tehnologii de vârf și performanță maximă! Implementăm soluții
              inovatoare pentru a asigura viteză, securitate și scalabilitate,
              astfel încât site-ul tău să evolueze împreună cu afacerea ta!
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex gap-4 items-start pr-8">
            <div className="w-12 h-6 rounded-lg bg-[#E5E5E5] flex-shrink-0"></div>
            <p className="text-[16px] font-inter font-normal text-black leading-[1.21]">
              Proces transparent și comunicare eficientă. Lucrăm organizat, cu
              pași clar definiți și feedback constant, pentru a livra exact ce
              ai nevoie.
            </p>
          </div>
        </div>

        {/* Stats section */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-8">
          <div className="flex flex-col gap-2 pb-6 border-b border-[#8FBCFF] min-w-[160px]">
            <div className="text-[32px] font-inter font-bold text-[#0066FF] leading-[1.21]">
              15+ ani
            </div>
            <div className="text-[16px] font-inter font-normal text-[#1C1C1C] leading-[1.21]">
              de experiență
            </div>
          </div>

          <div className="flex flex-col gap-2 pb-6 border-b border-[#8FBCFF] min-w-[160px]">
            <div className="text-[32px] font-inter font-bold text-[#0066FF] leading-[1.21]">
              300+
            </div>
            <div className="text-[16px] font-inter font-normal text-[#1C1C1C] leading-[1.21]">
              clienți deserviți
            </div>
          </div>

          <div className="flex flex-col gap-2 pb-6 border-b border-[#8FBCFF] min-w-[160px]">
            <div className="text-[32px] font-inter font-bold text-[#0066FF] leading-[1.21]">
              10+
            </div>
            <div className="text-[16px] font-inter font-normal text-[#1C1C1C] leading-[1.21]">
              specialiști în echipă
            </div>
          </div>
        </div>

        {/* Background grid decoration */}
        <div className="hidden lg:block absolute left-0 top-1/3 w-[664px] h-[470px] opacity-10 bg-gradient-to-t from-[#8FBCFF]/20 to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
}
