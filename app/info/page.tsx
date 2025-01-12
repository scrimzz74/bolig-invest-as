"use client";

import Head from 'next/head';
import { useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Info = () => {
    // Scroll animations
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-fade-in');
                    }
                });
            },
            { threshold: 0.2 }
        );

        const elements = document.querySelectorAll('.fade-in');
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <Head>
                <title>Bolig Invest AS</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div className="relative h-screen overflow-hidden snap-start bg-gradient-to-b from-[#2D98EA] to-[#1A65B0]">
                <iframe
                    src="https://www.youtube.com/embed/OSwxm9IlImI?autoplay=1&mute=1&loop=1&playlist=OSwxm9IlImI"
                    className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
                    allow="autoplay; encrypted-media; fullscreen"
                    frameBorder="0"
                    title="Background Video"
                ></iframe>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10">
                    <h1 className="text-6xl md:text-8xl font-extrabold mb-6 text-shadow-lg fade-in">
                        BOLIG INVEST AS
                    </h1>
                    <p className="text-2xl md:text-3xl max-w-4xl mb-6 fade-in">
                        Din partner for trygge og lønnsomme investeringer i eiendom.
                    </p>
                </div>
            </div>

            <section className="bg-gradient-to-b from-[#2D98EA] to-[#1A65B0] text-white py-20 snap-start fade-in">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-extrabold text-center mb-12 text-white fade-in">Våre Tjenester</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                        <div className="flex flex-col items-center p-8 bg-white text-gray-800 rounded-xl shadow-xl hover:scale-105 transform transition duration-300 ease-in-out">
                            <h3 className="text-2xl font-semibold mb-4">Kjøp og salg av eiendom</h3>
                            <p className="text-lg text-center">
                                Vi hjelper deg med kjøp og salg av eiendom, enten du er førstegangskjøper eller erfaren investor.
                            </p>
                        </div>
                        <div className="flex flex-col items-center p-8 bg-white text-gray-800 rounded-xl shadow-xl hover:scale-105 transform transition duration-300 ease-in-out">
                            <h3 className="text-2xl font-semibold mb-4">Utleie og eiendomsforvaltning</h3>
                            <p className="text-lg text-center">
                                Vår ekspertise innen utleie og forvaltning sikrer deg pålitelig og profesjonell service gjennom hele prosessen.
                            </p>
                        </div>
                        <div className="flex flex-col items-center p-8 bg-white text-gray-800 rounded-xl shadow-xl hover:scale-105 transform transition duration-300 ease-in-out">
                            <h3 className="text-2xl font-semibold mb-4">Investering og rådgivning</h3>
                            <p className="text-lg text-center">
                                Vi gir grundig rådgivning og veiledning for investeringer i eiendom, slik at du kan gjøre informerte valg.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative py-20 snap-start fade-in">
                <div className="absolute inset-0 bg-gradient-to-b from-[#8B8C8C] to-[#2D98EA] z-0"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <h2 className="text-6xl font-bold mb-10 text-center text-white fade-in">Vårt Team</h2>
                    <Carousel className="w-full">
                        <CarouselContent>
                            {['Prosjektleder', 'Byggeleder', 'Arkitekt', 'Ingeniør', 'Kundesupport'].map((role, index) => (
                                <CarouselItem key={index}>
                                    <div className="flex justify-center p-6">
                                        <div className="flex flex-col items-center bg-white rounded-xl shadow-lg overflow-hidden w-[700px] h-[750px] transform hover:scale-105 transition duration-300 ease-in-out">
                                            <h3 className="text-4xl font-semibold bg-black text-white w-full text-center py-8">
                                                {role}
                                            </h3>
                                            <div className="flex-grow flex items-center justify-center bg-gray-200 w-full">
                                                <span className="text-gray-500">Bilde kommer snart</span>
                                            </div>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </section>

            <style jsx global>{`
                html {
                    scroll-behavior: smooth;
                }
                .snap-start {
                    scroll-snap-align: start;
                }
                .fade-in {
                    opacity: 0;
                    transform: translateY(20px);
                    transition: opacity 0.5s ease-out, transform 0.5s ease-out;
                }
                .animate-fade-in {
                    opacity: 1;
                    transform: translateY(0);
                }
                .text-shadow-lg {
                    text-shadow: 0px 4px 6px rgba(0, 0, 0, 0.4);
                }
                .carousel {
                    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
                }
            `}</style>
        </>
    );
};

export default Info;
