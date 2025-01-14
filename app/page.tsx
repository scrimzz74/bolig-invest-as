import Image from "next/image";

export default function Home() {
  return (
    <div className="relative">
      <main className="flex flex-col items-center justify-center min-h-screen">
        <div className="absolute top-48 left-32">
          <h1 className="text-8xl font-extrabold">BOLIG INVEST</h1>
          <h2 className="text-8xl font-extrabold mt-4 ml-48">AS</h2>
          <p className="mt-4 text-gray-600 text-base">
            Vi er et eiendomsselskap som spesialiserer oss på investeringer og
            utvikling av boligprosjekter. <br /> Vi har fokus på kvalitet og
            bærekraft i alle våre prosjekter.
          </p>
        </div>
      </main>
      <div className="absolute top-[700px] left-0 w-full">
        <Image
          src="/Mønster.png"
          alt="mønster nede"
          width={1200}
          height={200}
        />
      </div>
      <div className="absolute bottom-[-50px] right-0 flex items-center">
        <Image
          src="/Mønster2.png"
          alt="mønster til høyre"
          width={600}
          height={200}
        />
      </div>
    </div>
  );
}
