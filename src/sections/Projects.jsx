import React from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";

// Define the structure for your projects
const projectsData = [
  {
    id: 1,
    title: "Conference Ticket Generator",
    description:
      "A utility tool that allows users to input details and instantly generate a printable or shareable conference ticket image/PDF. Focus on clean form validation and output rendering.",
    image: "/conference-ticket.png",
    technologies: [
      "HTML",
      "CSS",
      "JS",
      "Custom Hooks",
      "Form Validation",
      "Image/PDF Generation",
    ],
    githubLink: "https://github.com/Jasmine-tech74/conference-ticket-generator",
    liveLink: "https://conference-ticket-generator-psi-three.vercel.app/",
  },
  {
    id: 2,
    title: "Crypto Wallet Balance Checker",
    description:
      "A Web3 tool that checks the ETH balance of a connected wallet. Requires the MetaMask extension to function, demonstrating integration with browser APIs and Web3 libraries.",
    image: "/wallet-checker.png",

    technologies: [
      "HTML",
      "CSS",
      "Ethers.js",
      "MetaMask API",
      "Asynchronous JS",
    ],
    githubLink: "https://github.com/Jasmine-tech74/wallet-balance-checker",
    liveLink: "https://wallet-balance-checker-q1xc.vercel.app/",
  },
  {
    id: 3,
    title: "Anti-Bullying Chatbot",
    description:
      "A responsive conversational interface deployed via Dialogflow (or similar) to provide guidance and resources on bullying prevention. Showcases strong UI/UX for user interaction.",
    image: "/antibullyingassistant.png",
    technologies: ["HTML", "CSS", "Dialogflow API", "Conversational UI/UX"],
    githubLink: "https://github.com/Jasmine-tech74/antibullyingassistant",
    liveLink: "https://antibullyingassistant.vercel.app/",
  },
];

const Projects = () => {
  return (
    // The ID 'projects' is crucial for the Navbar link to work
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-3">
            Featured Projects
          </h2>
          <p className="text-xl text-indigo-600 font-medium">
            A showcase of my recent work and client-side integrations
          </p>
        </div>

        {/* Projects Grid (The rendering logic below remains the same) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1"
            >
              {/* Project Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  className="w-full h-full object-cover transition duration-500 hover:scale-110"
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {project.description}
                </p>

                {/* Technologies Used (Pills) */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium text-indigo-700 bg-indigo-100 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex space-x-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-700 hover:text-indigo-600 font-medium transition duration-200"
                  >
                    <FiGithub size={20} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-800 font-medium transition duration-200"
                  >
                    <FiExternalLink size={20} />
                    <span>Live Site</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA for more projects */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-4">
            Explore more projects and contributions on my GitHub profile.
          </p>
          <a
            href="https://github.com/Jasmine-tech74" // Replace with your main GitHub link
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 text-lg font-medium text-white bg-gray-900 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300 transform hover:scale-105 inline-flex items-center space-x-2"
          >
            <FiGithub size={20} />
            <span>View My GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
