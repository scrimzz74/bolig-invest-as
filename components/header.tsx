import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center py-3 px-6 shadow-md bg-white-100 rounded-full">
      {/* Logo (trykkbar) */}
      <div className="flex items-center gap-4 ml-16">
        <Link href="/" aria-label="Gå til hjem-siden" passHref>
          <Image
            src="/hus.png"
            alt="Bolig Invest AS logo"
            width={100}
            height={100}
            className="rounded-full"
          />
        </Link>
        <span className="font-bold text-2xl text-gray-800 ml-20">
          Bolig Invest AS
        </span>
      </div>

      {/* Navigasjon */}
      <nav
        className="flex gap-6 mt-3 md:mt-0 text-gray-800"
        aria-label="Main navigation"
      >
        <Link
          href="hjem"
          className="hover:underline hover:text-gray-600 transition-colors text-lg md:text-xl"
        >
          Hjem
        </Link>
        <Link
          href="info"
          className="hover:underline hover:text-gray-600 transition-colors text-lg md:text-xl"
        >
          Info
        </Link>
        <Link
          href="prosjekter"
          className="hover:underline hover:text-gray-600 transition-colors text-lg md:text-xl"
        >
          Prosjekter
        </Link>
        <Link
          href="#kontakt-oss"
          className="hover:underline hover:text-gray-600 transition-colors text-lg md:text-xl"
        >
          Kontakt Oss
        </Link>
      </nav>

      {/* Button */}
      <button className="bg-black text-white py-2 px-6 rounded-full hover:bg-gray-800 transition-colors mt-3 md:mt-0">
        Språk
      </button>
    </header>
  );
};

export default Header;
