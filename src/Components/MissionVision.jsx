import React from "react";
import { motion } from "framer-motion";

function MissionVision() {
  return (
    <section
      id="mission-vision"
      className="h-screen flex flex-col md:flex-row items-center justify-center bg-[#f1f5f9] py-10" // Light gray background
    >
      {/* Left Content - Mission */}
      <motion.div
        className="w-full md:w-1/2 p-8 text-center md:text-left md:pl-16"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Mission Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#138808] mb-6 tracking-wide"> {/* Indian Green */}
          Our Mission
        </h2>

        {/* Mission Description */}
        <p className="text-lg md:text-xl text-[#4B5563] mb-6 leading-relaxed"> {/* Dark Gray */}
          Our mission is to provide customers with high-quality, fresh groceries delivered to their doorstep. We aim to simplify the grocery shopping experience while supporting local farmers and businesses.
        </p>

        {/* Button */}
        <button className="px-8 py-4 bg-[#FF9933] text-white rounded-full hover:bg-[#FFB84D] shadow-md hover:shadow-lg transition-all duration-300"> {/* Saffron */}
          Join Us
        </button>
      </motion.div>

      {/* Right Content - Vision */}
      <motion.div
        className="w-full md:w-1/2 p-8 text-center md:text-left"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Vision Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#138808] mb-6 tracking-wide"> {/* Indian Green */}
          Our Vision
        </h2>

        {/* Vision Description */}
        <p className="text-lg md:text-xl text-[#4B5563] mb-8 leading-relaxed"> {/* Dark Gray */}
          Our vision is to become the leading grocery delivery service, making fresh and sustainable food accessible to all households while contributing to a healthier and more eco-friendly planet.
        </p>

        {/* Button */}
        <button className="px-8 py-4 bg-[#FF9933] text-white rounded-full hover:bg-[#FFB84D] shadow-md hover:shadow-lg transition-all duration-300"> {/* Saffron */}
          Join Us
        </button>
      </motion.div>
    </section>
  );
}

export default MissionVision;
