export default function Portfolio() {
    const projects = [
        {
            name: "Robill",
            type: "Website",
            image: "/images/robill.png",
            url: "https://robill.ro",
        },
        {
            name: "Staiinfata",
            type: "Website",
            image: "/images/staiinfata.png",
            url: "https://staiinfata.ro",
        },
    ];

    return (
        <section
            id="portfolio"
            className="relative w-full bg-white pt-[120px] pb-[120px] overflow-hidden"
        >

            {/* grid background */}
            <img
                src="/images/Grid.png"
                className="absolute left-[120px] top-[120px] w-[1200px] opacity-30 z-0 pointer-events-none"
            />

            {/* stars */}
            <img
                src="/icons/STAR.svg"
                className="absolute right-[620px] top-[130px] w-[38px]"
            />

            <img
                src="/icons/STAR.svg"
                className="absolute right-[600px] top-[150px] w-[28px]"
            />

            <div className="max-w-[1200px] mx-auto px-6">

                {/* title */}
                <h2 className="text-[64px] font-bold text-center mb-[80px]">
                    Proiectele noastre
                </h2>

                {/* cards */}
                <div className="flex gap-[40px]">

                    {projects.map((project, index) => (
                        <a
                            key={index}
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block bg-white rounded-[12px] overflow-hidden w-[360px] hover:shadow-xl transition"
                        >
                            {/* image */}
                            <div className="overflow-hidden">
                                <img
                                    src={project.image}
                                    className="w-full object-cover"
                                />
                            </div>

                            {/* info */}
                            <div className="p-6 border border-black rounded-b-[12px]">
                                <h3 className="text-[22px] font-semibold mb-1">
                                    {project.name}
                                </h3>

                                <p className="text-[18px] text-black">
                                    {project.type}
                                </p>
                            </div>
                        </a>
                    ))}

                </div>

            </div>
        </section>
    );
}