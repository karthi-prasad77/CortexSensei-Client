import React from "react";
import groceryImage from "../assets/fruits.png";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa"; // Importing WhatsApp icon

function Home() {
  return (
    <>
      <section
        id="home"
        className="h-screen flex flex-col md:flex-row items-center justify-between bg-gray-100 pt-12"
      >
        {/* Left Content */}
        <motion.div
          className="w-full md:w-1/2 p-8 flex flex-col items-center md:items-start text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-green-600">
            Welcome to InnovMart
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-md">
            Your one-stop solution for fresh and quality groceries delivered to your doorstep.
          </p>
          <div className="mt-6">
            <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">
              Shop Now
            </button>
          </div>
        </motion.div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 h-full flex items-center justify-center">
          <img
            src={groceryImage}
            alt="Grocery"
            className="max-w-full h-auto object-cover rounded-lg"
          />
        </div>
      </section>

      {/* Floating WhatsApp Icon */}
      <a
        href="https://wa.me/yourwhatsappnumber" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-all duration-300"
      >
        <FaWhatsapp size={40} />
      </a>
    </>
  );
}

export default Home;
