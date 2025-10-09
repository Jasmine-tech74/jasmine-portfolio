import React from "react";
// Import icons for email, location, and social media
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Contact = () => {
  return (
    // The ID 'contact' is crucial for the Navbar link to work
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-3">
            Get In Touch
          </h2>
          <p className="text-xl text-indigo-600 font-medium">
            Let's build something amazing together
          </p>
        </div>

        {/* Contact Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 bg-white p-8 md:p-12 rounded-xl shadow-2xl">
          {/* Left Column: Contact Form */}
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Send Me a Message
            </h3>

            {/* ACTION NOTE: 
              Replace the 'action' attribute below with your form submission endpoint.
              Popular free services include:
              - Formspree: action="https://formspree.io/f/[your-unique-code]"
              - Netlify Forms: Add 'data-netlify="true"' to the form tag.
            */}
            <form
              className="space-y-6"
              action="https://formspree.io/f/xwprndbn"
              method="POST"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
                  placeholder="Tell me about your project or opportunity..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 text-lg font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition duration-300 transform hover:scale-[1.01] shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Column: Details & Social */}
          <div className="md:border-l md:pl-12 pt-8 md:pt-0 border-gray-200">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              My Contact Details
            </h3>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-3xl text-indigo-600" />
                <div>
                  <p className="text-lg font-semibold text-gray-800">Email</p>
                  <a
                    href="mailto:jasminetolu74@gmail.com"
                    className="text-gray-600 hover:text-indigo-600 transition duration-200"
                  >
                    jasminetolu74@gmail.com
                  </a>
                </div>
              </div>

              {/* Location (Optional) */}
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-3xl text-indigo-600" />
                <div>
                  <p className="text-lg font-semibold text-gray-800">
                    Location
                  </p>
                  <p className="text-gray-600">Ilorin, Nigeria</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4">
                <p className="text-lg font-semibold text-gray-800 mb-3">
                  Connect With Me
                </p>
                <div className="flex space-x-6">
                  <a
                    href="[YOUR-LINKEDIN-URL]"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-4xl text-gray-700 hover:text-indigo-600 transition duration-200 transform hover:scale-110"
                    aria-label="LinkedIn Profile"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://github.com/Jasmine-tech74"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-4xl text-gray-700 hover:text-indigo-600 transition duration-200 transform hover:scale-110"
                    aria-label="GitHub Profile"
                  >
                    <FaGithub />
                  </a>
                  {/* Add other social links (e.g., Twitter, portfolio blog) here */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
