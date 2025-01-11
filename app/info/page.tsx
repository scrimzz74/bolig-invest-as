import Head from 'next/head';

const Info = () => {
    return (
        <>
            <Head>
                <title>Video Background</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div className="relative h-screen overflow-hidden">
                <iframe
                    src="https://www.youtube.com/embed/OSwxm9IlImI?autoplay=1&mute=1&loop=1&playlist=OSwxm9IlImI"
                    className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
                    allow="autoplay; loop; fullscreen"
                    frameBorder="0"
                    title="Background Video"
                ></iframe>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 -translate-y-24">
                    <h1 className="text-6xl md:text-8xl font-extrabold mb-6 text-shadow-lg">BOLIG INVEST AS</h1>
                    <p className="text-2xl md:text-3xl max-w-4xl mb-6">
                        Din partner for trygge og lønnsomme investeringer i eiendom.
                    </p>
                </div>
            </div>
            <section className="bg-[#2D98EA] text-white py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-4 text-center">
                        Våre Tjenester
                    </h2>
                    <div className="text-center mt-6">
                        <ul className="list-disc pl-8 text-lg text-left max-w-3xl mx-auto space-y-4">
                            <li>Kjøp og salg av eiendom</li>
                            <li>Utleie og eiendomsforvaltning</li>
                            <li>Investering og rådgivning</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-6xl font-bold mb-8 text-center">Vårt Team</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
                        {['Prosjektleder', 'Byggeleder', 'Arkitekt', 'Ingeniør', 'Kundesupport'].map((role) => (
                            <div key={role} className="flex flex-col items-center bg-gray-100 rounded-lg shadow-lg overflow-hidden w-72 h-72">
                                <h3 className="text-xl font-semibold bg-black text-white w-full text-center py-4">
                                    {role}
                                </h3>
                                <div className="flex-grow flex items-center justify-center bg-gray-300 w-full">
                                    {/* Replace the div below with an img tag if you have employee images */}
                                    <span className="text-gray-500">Bilde kommer snart</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Info;
