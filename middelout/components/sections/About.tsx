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

  const stats = [
    { value: "15+", label: "ani", sublabel: "de experiență" },
    { value: "300+", label: "clienți deserviți", sublabel: "" },
    { value: "10+", label: "specialiști în echipă", sublabel: "" },
  ];

  return (
    <section id="despre" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-0.5 bg-gray-300"></div>
              <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-3">
                Despre MIDDLEOUT
                <span className="text-primary text-2xl">✦</span>
              </h2>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              Middleout este o echipă de profesioniști în dezvoltare web care
              creează website-uri rapide și eficiente. Punem accent pe soluții bine
              gândite, puternice ce fac afacerea ta vizibilă și accesibilă.
            </p>

            <div className="py-6">
              <p className="text-3xl font-medium text-primary italic">
                Web, without the Excuses.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-4">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-1">
                  <div className="text-4xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                    {stat.sublabel && (
                      <div className="text-xs">{stat.sublabel}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-primary"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
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
