export default function Services() {
  const services = [
    {
      title: "Dezvoltare Aplicații Web La Cheie",
      description:
        "Creăm aplicații web funcționale, scalabile și sigure, gata de utilizare. Ne specializăm în arhitectura dezvoltare și implementare, oferind soluții personalizate până și ocupa de design.",
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
    },
    {
      title: "Hosting & Infrastructură",
      description:
        "Furnizăm configurarea infrastructurii necesare pentru funcționarea optimă a aplicației, gestionând serverele, securitatea, mentenanța și asigurând disponibilitate constantă.",
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
          <line x1="6" y1="6" x2="6.01" y2="6" />
          <line x1="6" y1="18" x2="6.01" y2="18" />
        </svg>
      ),
    },
    {
      title: "Consultanță IT & Machine Learning",
      description:
        "Oferim consultanță IT pentru facilitarea deciziilor informate, de la alegerea platformei de machine learning personalizate, de la analiza datelor până la implementarea practică în aplicații.",
      icon: (
        <svg
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      ),
    },
  ];

  return (
    <section id="servicii" className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Oferim Servicii De Înaltă Calitate
            <br />
            Care Generează Rezultate
            <br />
            Tangibile.
            <span className="text-primary ml-2">✦</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ajutăm clienții să-și dezvolte proiectele prin soluții eficiente,
            expertiză de calitate și un proces de lucru clar și structurat.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 rounded-3xl p-8 hover:border-primary transition-all duration-300 hover:shadow-lg"
            >
              <div className="space-y-6">
                <div className="w-16 h-16 flex items-center justify-center">
                  {service.icon}
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
