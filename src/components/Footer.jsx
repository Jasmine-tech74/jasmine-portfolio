import React from "react";
// Import icons from react-icons/fa for consistency
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white mt-16 py-10">
           {" "}
      <div className="container mx-auto px-6 max-w-6xl">
               {" "}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-8 mb-8">
                              {/* Logo/Name */}         {" "}
          <div className="text-4xl font-bold text-indigo-400 mb-4 md:mb-0">
                        J✨          {" "}
          </div>
                    {/* Navigation Links - Includes #skills */}         {" "}
          <nav className="flex space-x-6 text-gray-400">
                       {" "}
            <a
              href="#hero"
              className="hover:text-indigo-400 transition duration-300"
            >
                            Home            {" "}
            </a>
                       {" "}
            <a
              href="#about"
              className="hover:text-indigo-400 transition duration-300"
            >
                            About            {" "}
            </a>
            <a // Added Skills link
              href="#skills"
              className="hover:text-indigo-400 transition duration-300"
            >
                            Skills            {" "}
            </a>
                       {" "}
            <a
              href="#projects"
              className="hover:text-indigo-400 transition duration-300"
            >
                            Projects            {" "}
            </a>
                       {" "}
            <a
              href="#contact"
              className="hover:text-indigo-400 transition duration-300"
            >
                            Contact            {" "}
            </a>
                     {" "}
          </nav>
                              {/* Social Media Icons - Now using React Icons */}
                   {" "}
          <div className="flex space-x-4 mt-6 md:mt-0">
                       {" "}
            <a
              href="https://github.com/Jasmine-tech74" // ✅ Update this link
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-indigo-400 transition duration-300 transform hover:scale-110 text-xl"
              aria-label="GitHub Profile"
            >
                            <FaGithub />           {" "}
            </a>
                       {" "}
            <a
              href="[Your-LinkedIn-URL]" // ✅ Update this link
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-indigo-400 transition duration-300 transform hover:scale-110 text-xl"
              aria-label="LinkedIn Profile"
            >
                            <FaLinkedinIn />           {" "}
            </a>
                       {" "}
            <a
              href="mailto:jasminetolu74@gmail.com" // ✅ Update this link
              className="text-gray-400 hover:text-indigo-400 transition duration-300 transform hover:scale-110 text-xl"
              aria-label="Send an Email"
            >
                            <FaEnvelope />           {" "}
            </a>
                     {" "}
          </div>
                 {" "}
        </div>
                {/* Copyright & Credit */}       {" "}
        <div className="text-center text-sm text-gray-500">
                    <p>&copy; {currentYear} Jasmine. All rights reserved.</p>   
                <p className="mt-1 text-xs">Built with React & Tailwind CSS</p> 
               {" "}
        </div>
             {" "}
      </div>
         {" "}
    </footer>
  );
};

export default Footer;
