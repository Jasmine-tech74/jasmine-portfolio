import React from "react";
import mypic from "../assets/mypic.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-3">
            About Me
          </h2>
          <p className="text-xl text-indigo-600 font-medium">
            Bridging Design and Functionality
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          {/* Left Column: Image/Avatar */}
          <div className="md:w-1/3 mb-10 md:mb-0 flex justify-center">
            <img
              src={mypic}
              alt="Jasmine's Professional Portrait"
              className="w-64 h-64 object-cover rounded-full shadow-2xl border-4 border-indigo-200"
            />
          </div>

          {/* Right Column: Text Content */}
          <div className="md:w-2/3">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Hi, I'm Jasmine, a passionate Full Stack Developer.
            </h3>

            {/* Core Story Paragraphs */}
            <p className="text-gray-600 mb-4 leading-relaxed">
              My journey into development started with a curiosity for how
              things work, quickly blossoming into a career where I love
              bringing intricate designs to life with clean, efficient code. I
              specialize in the modern MERN stack, crafting scalable web
              applications that deliver exceptional user experiences.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              I believe that great software is a perfect blend of robust
              engineering and thoughtful design. Whether I'm tackling complex
              backend logic or fine-tuning frontend performance, my focus is
              always on creating value and delightful interactions.
            </p>

            {/* Resume CTA */}
            <a
              href="/Jasmine_Frontend_Developer_Resume.pdf"
              download="Jasmine-Frontend-Developer-Resume.pdf"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-indigo-700 transition duration-300 transform hover:scale-105"
            >
              Download Resume
            </a>
          </div>
        </div>
        {/*Metrics/Facts*/}
        <div className="mt-16 pt-8 border-t border-gray-200 grid grid-cols-3 gap-8 text-center">
          <div className="p-4">
            <p className="text-4xl font-extrabold text-indigo-600">12+</p>
            <p className="text-gray-500 mt-1">Projects Completed</p>
          </div>
          <div className="p-4">
            <p className="text-4xl font-extrabold text-indigo-600">90%</p>
            <p className="text-gray-500 mt-1">Client Satisfaction</p>
          </div>
          <div className="p-4">
            <p className="text-4xl font-extrabold text-indigo-600">MERN</p>
            <p className="text-gray-500 mt-1">Core Stack</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
