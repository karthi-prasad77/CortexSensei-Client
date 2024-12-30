import React from "react";
import { Link } from "react-scroll"; // Assuming you are using react-scroll for smooth scrolling

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 shadow-lg bg-white">
      <div className="flex justify-between items-center px-6 py-4 max-w-screen-xl mx-auto">
        {/* Brand Logo / Name */}
        <div className="text-2xl font-bold text-[#FF9933] font-poppins">
          <Link to="home" smooth={true} duration={500}>
            InnovMart
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-lg text-gray-800 hover:text-[#FF9933] transition duration-300 cursor-pointer font-poppins"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="text-lg text-gray-800 hover:text-[#FF9933] transition duration-300 cursor-pointer font-poppins"
          >
            About Us
          </Link>
          <Link
            to="mission"
            smooth={true}
            duration={500}
            className="text-lg text-gray-800 hover:text-[#FF9933] transition duration-300 cursor-pointer font-poppins"
          >
            Mission & Vision
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="text-lg text-gray-800 hover:text-[#FF9933] transition duration-300 cursor-pointer font-poppins"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Icon (Hamburger) */}
        <div className="md:hidden flex items-center">
          <button className="text-3xl text-[#138808]">
            {/* You can add a hamburger icon here if needed */}
            <span>&#9776;</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
