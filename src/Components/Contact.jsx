import React from "react";
import contactImage from "../assets/contact-us-image.png"; // Assuming you have an image for the right side

function ContactUs() {
  return (
    <section
      id="contact-us"
      className="h-screen flex flex-col md:flex-row items-center justify-center bg-gray-50 py-10 relative"
    >
      {/* Left Content - Form */}
      <div className="w-full md:w-1/2 p-6 md:p-8 max-w-lg mx-auto">
        <h2 className="text-4xl font-bold text-green-700 text-center mb-6">Contact Us</h2>

        <form className="space-y-4">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Message Textarea */}
          <div>
            <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Write your message"
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-[#FF9933] text-white rounded-lg hover:bg-[#FFB84D] transition-all duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 h-full flex items-center justify-center">
        <img
          src={contactImage}
          alt="Contact Us"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </section>
  );
}

export default ContactUs;
