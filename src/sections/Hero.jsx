import React from "react";
// Ensure you have a file named 'mypic.jpg' in the './assets/' directory
import mypic from "../assets/mypic.jpg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-gray-50 min-h-screen flex items-center justify-center py-16 md:py-24"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between max-w-6xl">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0 animate-fadeInLeft">
          <p className="text-xl text-indigo-600 font-semibold mb-2">
            Hi, my name is
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight">
            Jasmine
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-gray-700 mt-3 mb-6">
            A Software Developer & Web Designer
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto md:mx-0">
            I build engaging, responsive, and high-performing web applications.
            Let's create something great together!
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="#contact"
              className="px-8 py-3 text-lg font-medium text-white bg-indigo-600 rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
            >
              Get In Touch ✉️
            </a>
            <a
              href="/Jasmine_Frontend_Developer_Resume.pdf" // Update this path to your actual resume
              target="_blank"
              className="px-8 py-3 text-lg font-medium text-indigo-600 border border-indigo-600 rounded-lg shadow-md hover:bg-indigo-50 transition duration-300 transform hover:scale-105"
            >
              View Resume
            </a>
          </div>
        </div>

        {/* Image / Avatar */}
        <div className="md:w-1/2 flex justify-center animate-fadeInRight">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-indigo-500 rounded-full transform translate-x-3 translate-y-3 z-0"></div>
            <img
              src={mypic}
              alt="Professional Headshot of Jasmine"
              className="relative w-full h-full object-cover rounded-full shadow-2xl z-10 border-4 border-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
