import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="flex mt-4">
        <div className="w-1/2 m-36">
          <h1 className="text-8xl font-extrabold">BOLIG INVEST</h1>
          <h2 className="text-8xl font-extrabold mt-4 ml-48">AS</h2>
          <p className="mt-4 text-gray-600 text-base">
            Vi er et eiendomsselskap som spesialiserer oss på investeringer og
            utvikling av boligprosjekter. <br /> Vi har fokus på kvalitet og
            bærekraft i alle våre prosjekter.
          </p>
        </div>
        <div className="w-1/2 relative">
          <Image
            src="/Mønster2.png"
            alt="mønster"
            width={400}
            height={200}
            className="absolute right-0"
          />
        </div>
      </div>
      <div className="ml-28">
        <Image src="/Mønster.png" alt="mønster nede" width={850} height={200} />
      </div>
    </div>
  );
}
