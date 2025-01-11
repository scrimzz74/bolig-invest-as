"use client";

import Head from 'next/head';
import { useEffect } from 'react';

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
            <div className="relative h-screen overflow-hidden snap-start">
                <iframe
                    src="https://www.youtube.com/embed/OSwxm9IlImI?autoplay=1&mute=1&loop=1&playlist=OSwxm9IlImI"
                    className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
                    allow="autoplay; loop; fullscreen"
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
            <section className="bg-gradient-to-b from-[#2D98EA] to-blue-700 text-white py-20 snap-start fade-in">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-10 text-center fade-in">
                        Våre Tjenester
                    </h2>
                    <div className="text-center mt-6">
                        <ul className="list-disc pl-8 text-lg text-left max-w-3xl mx-auto space-y-6 fade-in">
                            <li>Kjøp og salg av eiendom</li>
                            <li>Utleie og eiendomsforvaltning</li>
                            <li>Investering og rådgivning</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="bg-white py-20 snap-start fade-in">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-6xl font-bold mb-10 text-center fade-in">Vårt Team</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 fade-in">
                        {['Prosjektleder', 'Byggeleder', 'Arkitekt', 'Ingeniør', 'Kundesupport'].map((role) => (
                            <div
                                key={role}
                                className="flex flex-col items-center bg-gray-100 rounded-lg shadow-lg overflow-hidden w-72 h-72 transform hover:scale-105 transition duration-300"
                            >
                                <h3 className="text-xl font-semibold bg-black text-white w-full text-center py-4">
                                    {role}
                                </h3>
                                <div className="flex-grow flex items-center justify-center bg-gray-300 w-full">
                                    <span className="text-gray-500">Bilde kommer snart</span>
                                </div>
                            </div>
                        ))}
                    </div>
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
            `}</style>
        </>
    );
};

export default Info;
