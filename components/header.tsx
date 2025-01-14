import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center py-3 px-6 shadow-md bg-white-100 rounded-full">
      {/* Logo (trykkbar) */}
      <div className="flex items-center gap-4 ml-16">
        <Link href="/" aria-label="Gå til hjem-siden" passHref>
          <Image
            src="/Hus.png"
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
          href="/"
          className="relative group text-lg md:text-xl text-gray-800 transition-transform transform hover:scale-105"
        >
          Hjem
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#2D98EA] transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link
          href="/info"
          className="relative group text-lg md:text-xl text-gray-800 transition-transform transform hover:scale-105"
        >
          Info
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#2D98EA] transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link
          href="/prosjekter"
          className="relative group text-lg md:text-xl text-gray-800 transition-transform transform hover:scale-105"
        >
          Prosjekter
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#2D98EA] transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <Link
          href="/kontakt-oss"
          className="relative group text-lg md:text-xl text-gray-800 transition-transform transform hover:scale-105"
        >
          Kontakt Oss
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#2D98EA] transition-all duration-300 group-hover:w-full"></span>
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
