import React from "react";
import aboutImage from "../assets/about-us.png"; // Replace with your actual image
import { motion } from "framer-motion";

function AboutUs() {
  return (
    <section
      id="about"
      className="h-screen flex flex-col md:flex-row items-center justify-center bg-[#f1f5f9] py-10" // Light gray background
    >
      {/* Left Image - Occupying 50% */}
      <div className="w-full md:w-1/2 h-full flex items-center justify-center mb-10 md:mb-0">
        <motion.img
          src={aboutImage}
          alt="About Us"
          className="max-w-full h-auto object-cover rounded-xl transform hover:scale-105 transition-transform duration-500"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        />
      </div>

      {/* Right Content - Occupying 50% */}
      <motion.div
        className="w-full md:w-1/2 p-8 text-center md:text-left"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#138808] mb-6 tracking-wide"> {/* Green color */}
          About Us
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-[#4B5563] mb-6 leading-relaxed"> {/* Dark gray text */}
          At InnovMart, we are committed to providing you with the freshest and highest quality grocery products. Our mission is to make grocery shopping easy, convenient, and accessible for everyone. With a focus on customer satisfaction, we strive to deliver your orders quickly and efficiently.
        </p>
        <p className="text-lg md:text-xl text-[#4B5563] mb-8 leading-relaxed"> {/* Dark gray text */}
          We believe in sourcing our products from local farmers and trusted suppliers to ensure the best quality for our customers. Whether you’re looking for fresh fruits, vegetables, or pantry staples, InnovMart has you covered.
        </p>

        {/* Button */}
        <button className="px-8 py-4 bg-[#FF9933] text-white rounded-full hover:bg-[#FFB84D] shadow-md hover:shadow-lg transition-all duration-300"> {/* Saffron button */}
          Learn More
        </button>
      </motion.div>
    </section>
  );
}

export default AboutUs;
