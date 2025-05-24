import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "STUDY", path: "/study" },
    { name: "CALCULATOR", path: "/calculator" },
  ];

  return (
    <header className="bg-orange-600 text-white p-6 flex justify-between items-center shadow-lg fixed top-0 left-0 w-full z-50 rounded-b-2xl backdrop-blur-md bg-opacity-90">
      {/* Logo */}
      <h1 className="text-4xl font-extrabold tracking-wide font-serif">Numerologist</h1>

      {/* Hamburger Menu Button (Mobile) */}
      <button
        className={`md:hidden focus:outline-none transition-transform duration-300 ${isOpen ? "rotate-90" : "rotate-0"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      {/* Navigation Links - Desktop */}
      <nav className="hidden md:block">
        <ul className="flex space-x-8 text-xl font-semibold">
          {navLinks.map(({ name, path }, index) => (
            <li key={index} className="relative">
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `${isActive ? "text-black" : ""} transition-colors duration-200`
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-orange-700 bg-opacity-95 shadow-lg md:hidden overflow-hidden transition-all duration-500 ease-in-out rounded-b-2xl ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 p-6 text-xl font-semibold">
          {navLinks.map(({ name, path }, index) => (
            <li key={index}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `${isActive ? "text-black" : ""} block px-4 py-2 rounded transition-colors duration-200`
                }
                onClick={() => setIsOpen(false)}
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Header;
