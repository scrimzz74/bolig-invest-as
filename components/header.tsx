import Image from "next/image";
import hus2 from "../public/hus2.png";

const Header = () => {
  return (
    <header
      className="flex justify-between items-center py-1 px-2 rounded-full shadow-md"
      style={{ backgroundImage: `url(${hus2.src})`, backgroundSize: "cover" }}
    >
      {/* Logo */}
      <div className="flex items-center gap-4">
        <Image
          src="/hus2.png"
          alt="Bolig Invest AS logo"
          width={200}
          height={200}
        />
        <span className="font-bold text-lg ml-40">Bolig Invest AS</span>
      </div>

      {/* Navigation */}
      <nav className="flex gap-6">
        <a href="#" className="hover:underline">
          Hjem
        </a>
        <a href="#" className="hover:underline">
          Info
        </a>
        <a href="#" className="hover:underline">
          Prosjekter
        </a>
        <a href="#" className="hover:underline">
          Kontakt Oss
        </a>
      </nav>

      {/* Button */}
      <button className="bg-black text-white py-2 px-4 rounded-full hover:bg-gray-800">
        Knapp
      </button>
    </header>
  );
};

export default Header;
