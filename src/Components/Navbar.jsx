import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing hamburger and close icons

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track menu open/close

  // Toggle function for menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-green-500">InnovMart</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-lg hover:text-green-500">Home</a>
          <a href="#about" className="text-lg hover:text-green-500">About Us</a>
          <a href="#mission-vision" className="text-lg hover:text-green-500">Mission & Vision</a>
          <a href="#contact" className="text-lg hover:text-green-500">Contact</a>
        </div>

        {/* Hamburger Menu Button (Visible in mobile view) */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <FaTimes size={30} className="text-white" /> // Close icon when menu is open
            ) : (
              <FaBars size={30} className="text-white" /> // Hamburger icon when menu is closed
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Conditional Rendering) */}
      <div
        className={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-gray-700 text-white px-6 py-4`}
      >
        <a href="#home" className="block py-2 text-lg hover:text-green-500">Home</a>
        <a href="#about" className="block py-2 text-lg hover:text-green-500">About Us</a>
        <a href="#mission-vision" className="block py-2 text-lg hover:text-green-500">Mission & Vision</a>
        <a href="#contact" className="block py-2 text-lg hover:text-green-500">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
