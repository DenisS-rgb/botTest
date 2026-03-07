export default function Services() {
    const services = [
        {
            title: "Dezvoltare Aplicații Web La Cheie",
            description:
                "Creăm aplicații web funcționale, scalabile și sigure, gata de utilizare. Ne specializăm în arhitectură, dezvoltare și implementare, oferind soluții stabile și eficiente, fără a ne ocupa de design.",
            icon: "/icons/service1.svg",
        },
        {
            title: "Hosting & Infrastructură",
            description:
                "Furnizăm configurarea infrastructurii necesare pentru funcționarea optimă a aplicațiilor, gestionând serverele, securitatea, mentenanța și asigurând o disponibilitate constantă.",
            icon: "/icons/service2.svg",
        },
        {
            title: "Consultanță IT & Machine Learning",
            description:
                "Oferim consultanță IT pentru facilitarea deciziilor informate și dezvoltăm modele de machine learning personalizate, de la analiza datelor până la implementarea practică în aplicații.",
            icon: "/icons/service3.svg",
        },
    ];

    return (
        <section
            id="services"
            className="relative w-full bg-white pt-[120px] pb-[0px] overflow-hidden"
        >
            <div className="max-w-[1400px] mx-auto px-6">

                <div className="flex items-center justify-center gap-2 mb-[50px]">

                    <h3 className="text-[20px] tracking-[0.25em] uppercase font-semibold">
                        CE FACEM
                    </h3>

                    <img
                        src="/icons/STAR.svg"
                        className="w-[28px] -translate-y-[8px]"
                    />

                </div>

                <h2 className="text-[64px] leading-[1.22] font-bold text-center mb-[18px] mx-auto">
                    Oferim Servicii De Înaltă Calitate <br />
                    Care Generează Rezultate <br />
                    Tangibile.
                </h2>

                <img
                    src="/icons/STAR.svg"
                    className="w-[30px] -translate-y-[90px] translate-x-[230px]"
                />

                <img
                    src="/icons/STAR.svg"
                    className="w-[38px] -translate-y-[120px] translate-x-[930px] -rotate-[20deg]"
                />

                <p className="text-[18px] leading-[1.6] text-center mx-auto mb-[110px]">
                    Ajutăm clienții să-și dezvolte proiectele <br /> prin soluții eficiente,
                    expertiză de <br /> calitate și un proces de lucru clar și <br /> structurat.
                </p>

                <div className="flex justify-center items-start gap-[87px] mt-[60px]">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`bg-white border border-[#3A384F] rounded-[12px] px-8 py-10 flex flex-col items-center text-center w-[342px]
${index === 1 ? "-translate-y-[40px]" : ""}`}
                            style={{
                                boxShadow: "0px 0px 15px rgba(115,112,142,0.25)",
                            }}
                        >
                            <img src={service.icon} className="mb-4" />

                            <h3 className="text-[18px] font-bold tracking-[0.05em] mb-4">
                                {service.title}
                            </h3>

                            <p className="text-[15px] leading-[1.6] text-[#464646]">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}