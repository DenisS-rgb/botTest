export default function About() {
  const features = [
    {
      title: "Dezvoltare web axată pe rezultate concrete.",
      description:
        "Construim website-uri care nu doar arată impresionează, ci și funcționează impecabil, ajutându-te să atingi fiecare obiectiv de afaceri!",
    },
    {
      title: "Tehnologii de vârf și performanță maximă!",
      description:
        "Implementăm soluții inovatoare pentru a asigura viteză, securitate și scalabilitate, astfel încât site-ul tău să evolueze împreună cu afacerea ta!",
    },
    {
      title: "Proces transparent și comunicare eficientă.",
      description:
        "Lucrăm organizat, cu pași clar definiți și feedback constant, pentru a livra exact ce ai nevoie.",
    },
  ];

  return (
    <section id="despre" className="py-16 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Header with line */}
            <div className="flex items-center gap-3">
              <div className="w-16 h-px bg-gray-300"></div>
              <h2 className="text-2xl font-bold whitespace-nowrap">
                Despre MIDDLEOUT
              </h2>
              <span className="text-primary text-xl">✦</span>
            </div>

            {/* Description */}
            <p className="text-base text-gray-700 leading-relaxed">
              Middleout este o echipă de profesioniști în dezvoltare web care
              creează website-uri rapide și eficiente. Punem accent pe soluții bine
              gândite, puternice ce fac afacerea ta vizibilă și accesibilă.
            </p>

            {/* Tagline */}
            <div className="py-4">
              <p className="text-2xl font-normal text-primary" style={{ fontFamily: 'cursive' }}>
                Web, without the Excuses.
              </p>
            </div>

            {/* Stats - Horizontal */}
            <div className="flex gap-8 items-start pt-2">
              <div>
                <div className="text-3xl font-bold text-primary mb-1">15+</div>
                <div className="text-xs text-gray-600">ani<br/>de experiență</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">300+</div>
                <div className="text-xs text-gray-600">clienți deserviți</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">10+</div>
                <div className="text-xs text-gray-600">specialiști în echipă</div>
              </div>
            </div>
          </div>

          {/* Right Column - Feature Cards with Icons */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4 items-start">
                {/* Blue Circle Icon */}
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-primary"></div>
                  </div>
                </div>
                {/* Text */}
                <div className="flex-1">
                  <h3 className="font-bold text-sm leading-tight mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
