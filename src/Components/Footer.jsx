import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // Importing social media icons

function Footer() {
  return (
    <footer className="bg-[#003366] text-white py-12"> {/* Dark blue background (representing the flag's blue color) */}
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Section - Company Info */}
          <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h3 className="text-2xl font-bold text-[#FF9933] mb-2"> {/* Saffron color */}
              InnovMart
            </h3>
            <p className="text-lg text-[#f1f5f9] mb-4"> {/* Light gray text */}
              Your one-stop solution for fresh groceries delivered to your doorstep. We are committed to providing quality products and excellent service.
            </p>
            <p className="text-[#f1f5f9] text-sm"> {/* Light gray text */}
              © 2024 InnovMart. All rights reserved.
            </p>
          </div>

          {/* Right Section - Social Media Links */}
          <div className="w-full md:w-1/2 text-center">
            <h3 className="text-xl font-bold text-[#FF9933] mb-4"> {/* Saffron color */}
              Follow Us
            </h3>
            <div className="flex justify-center space-x-6">
              {/* Social Media Icons */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#138808] transition-all duration-300" 
              >
                <FaFacebook size={30} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#138808] transition-all duration-300" 
              >
                <FaTwitter size={30} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#138808] transition-all duration-300" 
              >
                <FaInstagram size={30} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#138808] transition-all duration-300"
              >
                <FaLinkedin size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
