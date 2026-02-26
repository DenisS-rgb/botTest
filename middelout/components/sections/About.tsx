export default function About() {
  const features = [
    {
      title: "Rezultate concrete",
      description:
        "Dezvoltare web axată pe rezultate concrete. Constuim website-uri care nu doar impresionează, ci și funcționează impecabil, ajutându-te să atingi fiecare obiectiv de afaceri!",
    },
    {
      title: "Tehnologii de vârf",
      description:
        "Tehnologii de vârf și performanță maximă! Implementăm soluții inovatoare pentru a asigura viteză, securitate și scalabilitate, astfel încât site-ul tău să evolueze împreună cu afacerea ta!",
    },
    {
      title: "Comunicare eficientă",
      description:
        "Proces transparent și comunicare eficientă. Lucrăm organizat, cu pași clar definiți și feedback constant, pentru a livra exact ce ai nevoie.",
    },
  ];

  const stats = [
    { value: "15+ ani", label: "de experiență" },
    { value: "10+", label: "specialiști în echipă" },
    { value: "300+", label: "clienți deserviți" },
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative stars */}
      <div className="absolute top-10 right-48 w-6 h-6 animate-pulse">
        <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-200 rounded-full blur-sm"></div>
      </div>
      <div className="absolute bottom-20 left-1/4 w-5 h-5 animate-pulse delay-300">
        <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-200 rounded-full blur-sm"></div>
      </div>

      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-16 h-3 bg-black rounded-full"></div>
            </div>
            <h2 className="text-5xl font-bold text-black mb-8">
              Despre MIDDLEOUT
            </h2>
          </div>

          <p className="text-3xl text-black max-w-3xl mx-auto mb-12 leading-relaxed">
            Middleout este o echipă de profesioniști în dezvoltare web care
            creează website-uri rapide și eficiente. Punem accent pe soluții
            bine gândite, puternice ce fac afacerea ta vizibilă și accesibilă.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="relative">
              {/* Blue circle decoration */}
              <div className="absolute -top-2 right-0 w-14 h-14 bg-blue-500 opacity-60 rounded-full blur-md"></div>

              <div className="relative bg-white p-6 rounded-lg">
                {/* Icon placeholder */}
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-300 rounded-lg mb-6"></div>

                <p className="text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mt-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="border-b-2 border-blue-400 pb-6 min-w-[200px]"
            >
              <div className="text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-lg text-black">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
