export default function Services() {
  const services = [
    {
      title: "Dezvoltare aplicații web la cheie",
      description:
        "Creăm aplicații web funcționale, scalabile și sigure, gata de utilizare. Ne specializăm în arhitectură, dezvoltare și implementare, oferind soluții stabile și eficiente, fără a ne ocupa de design.",
      icon: "💻",
    },
    {
      title: "Hosting & infrastructură",
      description:
        "Furnizăm configurarea infrastructurii necesare pentru funcționarea optimă a aplicațiilor, gestionând serverele, securitatea, mentenanța și asigurând o disponibilitate constantă.",
      icon: "🖥️",
    },
    {
      title: "Consultanță IT & machine learning",
      description:
        "Oferim consultanță IT pentru facilitarea deciziilor informate și dezvoltăm modele de machine learning personalizate, de la analiza datelor până la implementarea practică în aplicații.",
      icon: "🧠",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative stars */}
      <div className="absolute top-20 left-32 w-4 h-4 animate-pulse">
        <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-200 rounded-full blur-sm"></div>
      </div>
      <div className="absolute top-40 right-20 w-7 h-7 animate-pulse delay-200">
        <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-200 rounded-full blur-sm"></div>
      </div>
      <div className="absolute bottom-32 left-1/2 w-4 h-4 animate-pulse delay-500">
        <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-200 rounded-full blur-sm"></div>
      </div>

      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-2xl font-semibold text-black tracking-widest uppercase mb-6">
            Ce facem
          </div>
          <h2 className="text-6xl font-semibold text-black mb-6 uppercase">
            Oferim servicii de înaltă calitate care generează rezultate
            tangibile.
          </h2>
          <p className="text-lg text-black max-w-2xl mx-auto">
            Ajutăm clienții să-și dezvolte proiectele prin soluții eficiente,
            expertiză de calitate și un proces de lucru clar și structurat.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white border border-gray-300 rounded-xl p-8 hover:shadow-2xl transition-all duration-300"
            >
              {/* Icon */}
              <div className="text-6xl mb-6">{service.icon}</div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-black mb-4 uppercase leading-tight">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>

              {/* Hover effect glow */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-100 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
