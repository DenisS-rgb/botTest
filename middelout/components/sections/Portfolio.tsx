import Image from "next/image";

export default function Portfolio() {
  const projects = [
    {
      title: "Robill",
      type: "Website",
      description: "E-Factura processing system",
      image: "/images/robill-preview.jpg",
    },
    {
      title: "Staiinfata",
      type: "Website",
      description: "Grilling services website",
      image: "/images/staiinfata-preview.jpg",
    },
  ];

  return (
    <section id="portofoliu" className="py-16 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold inline-flex items-center gap-2">
            Proiectele noastre
            <span className="text-primary text-xl">✦</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group border-2 border-gray-200 rounded-3xl overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-xl"
            >
              {/* Project Image */}
              <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                  <svg
                    width="80"
                    height="80"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                  </svg>
                </div>
                {/* Placeholder for actual images */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-gray-600">{project.type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
