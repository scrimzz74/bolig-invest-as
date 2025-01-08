import Image from "next/image";
import hus2 from "../public/hus2.png";

const Header = () => {
  return (
    <header
      className="flex justify-between items-center py-4 px-6 rounded-full shadow-md"
      style={{ backgroundImage: `url(${hus2.src})`, backgroundSize: "cover" }} // Using hus2 as background
    >
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Image
          src="/house-icon.svg" // Replace with the file path to your icon
          alt="Bolig Invest AS logo"
          width={40}
          height={40}
        />
        <span className="font-bold text-lg">Bolig Invest AS</span>
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
