export default function Portfolio() {
  const projects = [
    {
      name: "Robill",
      type: "Website",
      image: "/images/project-robill-759615.png",
    },
    {
      name: "Staiinfata",
      type: "Website",
      image: "/images/project-staiinfata.png",
    },
  ];

  return (
    <section
      id="portfolio"
      className="relative w-full max-w-[1440px] mx-auto bg-white py-20 px-4 md:px-8 lg:px-16 overflow-hidden"
    >
      {/* Decorative stars */}
      <div
        className="absolute w-[23px] h-[25px] opacity-100 hidden lg:block"
        style={{
          right: "25%",
          top: "10%",
          background:
            "linear-gradient(185deg, rgba(71, 118, 230, 1) 35%, rgba(195, 211, 248, 1) 88%)",
          borderRadius: "50%",
          filter: "drop-shadow(0px 0px 11.1px rgba(128, 165, 255, 0.45))",
          clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
        }}
      ></div>
      <div
        className="absolute w-[14px] h-[15px] opacity-100 hidden lg:block"
        style={{
          right: "23%",
          top: "14%",
          background:
            "linear-gradient(185deg, rgba(71, 118, 230, 1) 35%, rgba(195, 211, 248, 1) 88%)",
          borderRadius: "50%",
          filter: "drop-shadow(0px 0px 11.1px rgba(128, 165, 255, 0.45))",
          clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
        }}
      ></div>

      <div className="max-w-[936px] mx-auto">
        {/* Title */}
        <h2 className="font-inter font-semibold text-[clamp(40px,4vw,62px)] leading-[1.21] text-black mb-16 text-center lg:text-left">
          Proiectele noastre
        </h2>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white border border-black rounded-[12px] overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative w-full h-[270px] bg-gray-100 rounded-t-[12px] overflow-hidden">
                {/* Placeholder for image */}
                <div className="w-full h-full flex items-center justify-center text-6xl font-bold text-gray-300">
                  {project.name[0]}
                </div>
              </div>

              {/* Info Container with blur effect */}
              <div className="relative bg-white/90 backdrop-blur-md border-t border-black p-6">
                <h3 className="font-inter font-medium text-[24px] leading-[1.21] text-black mb-2">
                  {project.name}
                </h3>
                <p className="font-inter font-normal text-[20px] leading-[1.21] text-black">
                  {project.type}
                </p>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-[12px]"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
