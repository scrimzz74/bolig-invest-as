import Header from "../components/header";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center transform -translate-x-16 -translate-y-16">
          {" "}
          {/* Larger translation values */}
          <h1 className="text-8xl font-extrabold">BOLIG INVEST AS</h1>
          <p className="mt-4 text-gray-600">
            Lorem Ipsum er rett og slett dummytekst fra trykke- og
            setteriindustrien. Lorem Ipsum har vært standard dummytekst i
            bransjen siden 1500-tallet...
          </p>
        </div>
      </main>
    </div>
  );
}
