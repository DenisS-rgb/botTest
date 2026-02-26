export default function Portfolio() {
  const projects = [
    {
      name: "Robill",
      type: "Website",
      image: "/images/project-robill-759615.png",
      gradient: "from-blue-100 to-blue-50",
    },
    {
      name: "Staiinfata",
      type: "Website",
      image: "/images/project-staiinfata.png",
      gradient: "from-purple-100 to-purple-50",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative stars */}
      <div className="absolute top-10 right-1/4 w-6 h-6 animate-pulse">
        <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-200 rounded-full blur-sm"></div>
      </div>
      <div className="absolute top-20 right-1/3 w-4 h-4 animate-pulse delay-300">
        <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-200 rounded-full blur-sm"></div>
      </div>

      <div className="max-w-6xl mx-auto px-8">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-6xl font-semibold text-black mb-8">
            Proiectele noastre
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white border border-black rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              {/* Image Container */}
              <div
                className={`relative h-64 bg-gradient-to-br ${project.gradient} overflow-hidden`}
              >
                {/* Placeholder for image */}
                <div className="w-full h-full flex items-center justify-center text-6xl font-bold text-gray-300">
                  {project.name[0]}
                </div>
              </div>

              {/* Info Container with blur effect */}
              <div className="relative bg-white/90 backdrop-blur-md border-t border-black p-6">
                <h3 className="text-2xl font-medium text-black mb-2">
                  {project.name}
                </h3>
                <p className="text-xl text-black">{project.type}</p>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
