import React, { useState } from "react";
// Import icons for the mobile menu button
import { FaBars, FaTimes } from "react-icons/fa"; // <-- ADD THESE ICONS

const Navbar = () => {
  // Define the core, essential links
  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    // { name: "Contact", href: "#contact" }, // <-- Added 'Contact' for completeness
  ];

  // State for a mobile menu (hamburger icon)
  const [isOpen, setIsOpen] = useState(false); // <-- UNCOMMENTED

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo/Brand Name */}
          <a
            href="#hero"
            className="text-4xl font-bold text-indigo-600 hover:text-indigo-800 transition duration-200"
          >
            J✨
          </a>

          {/* Navigation Links (Desktop) - Remains hidden on mobile */}
          <nav
            className="hidden md:flex space-x-8"
            aria-label="Main Navigation"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 text-lg font-medium hover:text-indigo-600 transition duration-200 ease-in-out tracking-wide border-b-2 border-transparent hover:border-indigo-600 pb-1"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Primary Call to Action Button (Desktop) - Remains hidden on mobile */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="bg-indigo-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-indigo-700 transition duration-200 shadow-md hover:shadow-lg"
            >
              Contact Me
            </a>
          </div>

          {/* Mobile Menu Button (Hamburger/Close Icon) */}
          <button
            className="md:hidden text-gray-800 focus:outline-none p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            {/* Show Close Icon (FaTimes) when open, otherwise show Hamburger (FaBars) */}
            {isOpen ? (
              <FaTimes size={24} className="text-indigo-600" />
            ) : (
              <FaBars size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown Panel */}
      {/* Show this panel only when isOpen is true (on mobile screens) */}
      {isOpen && (
        <nav className="md:hidden bg-white shadow-lg py-2 absolute w-full top-full left-0 z-40">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              // Close the menu after clicking a link
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-gray-700 font-medium hover:bg-indigo-50 hover:text-indigo-600 transition duration-150 border-b border-gray-100 last:border-b-0"
            >
              {item.name}
            </a>
          ))}
          {/* Contact Button for mobile view */}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-2 bg-indigo-600 text-white text-center m-4 rounded-lg font-semibold hover:bg-indigo-700 transition duration-200"
          >
            Contact Me
          </a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
