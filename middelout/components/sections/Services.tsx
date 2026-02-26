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
    <section
      id="services"
      className="relative w-full max-w-[1440px] mx-auto bg-white py-20 px-4 md:px-8 lg:px-16 overflow-hidden"
    >
      {/* Decorative stars */}
      <div
        className="absolute w-[14px] h-[15px] opacity-100 hidden lg:block"
        style={{
          left: "23%",
          top: "15%",
          background:
            "linear-gradient(185deg, rgba(71, 118, 230, 1) 35%, rgba(195, 211, 248, 1) 88%)",
          borderRadius: "50%",
          filter: "drop-shadow(0px 0px 11.1px rgba(128, 165, 255, 0.45))",
          clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
        }}
      ></div>
      <div
        className="absolute w-[25px] h-[27px] opacity-100 hidden lg:block"
        style={{
          right: "20%",
          top: "18%",
          background:
            "linear-gradient(185deg, rgba(71, 118, 230, 1) 35%, rgba(195, 211, 248, 1) 88%)",
          borderRadius: "50%",
          filter: "drop-shadow(0px 0px 11.1px rgba(128, 165, 255, 0.45))",
          clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
        }}
      ></div>
      <div
        className="absolute w-[13px] h-[14px] opacity-100 hidden lg:block"
        style={{
          left: "57%",
          top: "5%",
          background:
            "linear-gradient(185deg, rgba(71, 118, 230, 1) 35%, rgba(195, 211, 248, 1) 88%)",
          borderRadius: "50%",
          filter: "drop-shadow(0px 0px 11.1px rgba(128, 165, 255, 0.45))",
          clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
        }}
      ></div>

      <div className="max-w-[1200px] mx-auto">
        {/* Small heading */}
        <div className="text-center mb-6">
          <h3 className="font-inter font-semibold text-[23px] leading-[1.2] tracking-[0.15em] uppercase text-black">
            Ce facem
          </h3>
        </div>

        {/* Main title */}
        <h2 className="font-inter font-semibold text-[clamp(32px,4vw,57px)] leading-[1.18] uppercase text-center text-black mb-8 max-w-[926px] mx-auto">
          Oferim servicii de înaltă calitate care generează rezultate
          tangibile.
        </h2>

        {/* Subtitle */}
        <p className="font-inter font-normal text-[18px] leading-[1.53] text-center text-black mb-16 max-w-[348px] mx-auto">
          Ajutăm clienții să-și dezvolte proiectele prin soluții eficiente,
          expertiză de calitate și un proces de lucru clar și structurat.
        </p>

        {/* Service cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-transparent border-[1.5px] border-[#3A384F] rounded-[10px] p-6 hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center min-h-[279px]"
              style={{
                boxShadow: "0px 0px 15.2px rgba(115, 112, 142, 0.33)",
              }}
            >
              {/* Icon */}
              <div className="text-[50px] mb-4">{service.icon}</div>

              {/* Title */}
              <h3 className="font-inter font-bold text-[19px] leading-[1.18] tracking-[0.04em] uppercase text-black mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="font-urbanist font-normal text-[15px] leading-[1.53] text-[#464646]">
                {service.description}
              </p>

              {/* Hover effect glow */}
              <div className="absolute inset-0 rounded-[10px] bg-gradient-to-br from-blue-100 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
