export default function About() {
  return (
      <section
          id="about"
          className="relative w-full bg-white pb-24 overflow-hidden"
      >
        <div
            className="absolute h-[25px] hidden lg:block"
            style={{
              right: "20%",
              top: "10%",
              background:
                  "linear-gradient(185deg, rgba(71,118,230,1) 35%, rgba(195,211,248,1) 88%)",
              borderRadius: "50%",
              filter: "drop-shadow(0px 0px 11.1px rgba(128,165,255,0.45))",
              clipPath:
                  "polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)"
            }}
        ></div>

        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-start">

            <div>

              <div className="flex items-center mb-6">

                <img
                    src="/images/about-header.png"
                    alt=""
                    className="w-[70px] mr-[36px]"
                />

                <h2 className="text-[36px] font-bold text-black">
                  Despre MIDDLEOUT
                </h2>

                <div className="flex ml-[26px]">
                  <img
                      src="/icons/STAR.svg"
                      alt=""
                      className="w-[45px] -translate-y-2"
                  />
                  <img
                      src="/icons/STAR.svg"
                      alt=""
                      className="w-[28px] translate-y-2"
                  />
                </div>

              </div>

              <p className="text-[24px] leading-[1.3] text-black max-w-[590px] mb-10">
                Middleout este o echipă de profesioniști în dezvoltare web care creează website-uri <br />
                rapide și eficiente. Punem accent pe soluții <br />
                bine gândite, puternice ce fac afacerea ta <br />
                vizibilă și accesibilă.
              </p>
              <div className="relative mt-6">

                <img
                    src="/images/Grid.png"
                    className="absolute left-0 -top-[125px] w-[664px] opacity-50 z-0"
                />

                <img
                    src="/images/Web, Without the Excuses..png"
                    alt="Web Without the Excuses"
                    className="relative w-[516px]"
                />

              </div>

              <div className="flex mt-[101px] gap-16">
                <div className="flex flex-col gap-2 border-b border-[#8FBCFF] pb-6">
                  <div className="text-[32px] font-bold text-[#0066FF]">
                    15+ ani
                  </div>
                  <div className="text-[16px] text-[#1C1C1C]">
                    de experiență
                  </div>
                </div>

                <div className="flex flex-col gap-2 border-b border-[#8FBCFF] pb-6">
                  <div className="text-[32px] font-bold text-[#0066FF]">
                    300+
                  </div>
                  <div className="text-[16px] text-[#1C1C1C]">
                    clienți deserviți
                  </div>
                </div>

                <div className="flex flex-col gap-2 border-b border-[#8FBCFF] pb-6">
                  <div className="text-[32px] font-bold text-[#0066FF]">
                    10+
                  </div>
                  <div className="text-[16px] text-[#1C1C1C]">
                    specialiști în echipă
                  </div>
                </div>
              </div>

            </div>

            <div className="flex flex-col gap-10 relative">

              <div className="flex gap-4 items-start">
                <div className="relative w-[50px] h-[50px] flex-shrink-0">
                  <div className="absolute top-[20px] left-0 w-[50px] h-[50px] bg-[#5A8DEE] rounded-full"></div>
                  <img
                      src="/images/rocket.png"
                      className="absolute w-[40px] top-[15px] left-[13px]"
                  />
                </div>

                <p className="text-[16px] leading-[1.4] text-black max-w-[420px] mt-[6px]">
                  Dezvoltare web axată pe rezultate concrete. Construim
                  website-uri care nu doar impresionează, ci și funcționează
                  impecabil, ajutându-te să atingi fiecare obiectiv de afaceri.
                </p>
              </div>

              <div className="flex gap-4 items-start">
                <div className="relative w-[50px] h-[50px] flex-shrink-0">
                  <div className="absolute top-[20px] left-0 w-[50px] h-[50px] bg-[#5A8DEE] rounded-full"></div>
                  <img
                      src="/images/lamp.png"
                      className="absolute w-[39px] top-[8px] left-[13px]"
                  />
                </div>

                <p className="text-[16px] leading-[1.4] text-black max-w-[420px] mt-[6px]">
                  Tehnologii de vârf și performanță maximă. Implementăm soluții
                  inovatoare pentru a asigura viteză, securitate și scalabilitate,
                  astfel încât site-ul tău să evolueze împreună cu afacerea ta.
                </p>
              </div>

              <div className="flex gap-4 items-start">
                <div className="relative w-[50px] h-[50px] flex-shrink-0">
                  <div className="absolute top-[20px] left-0 w-[50px] h-[50px] bg-[#5A8DEE] rounded-full"></div>
                  <img
                      src="/images/360.png"
                      className="absolute w-[47px] top-[22px] left-[13px]"
                  />
                </div>

                <p className="text-[16px] leading-[1.4] text-black max-w-[420px] mt-[6px]">
                  Proces transparent și comunicare eficientă. Lucrăm organizat,
                  cu pași clar definiți și feedback constant, pentru a livra
                  exact ce ai nevoie.
                </p>
              </div>

            </div>



          </div>
        </div>
      </section>
  );
}