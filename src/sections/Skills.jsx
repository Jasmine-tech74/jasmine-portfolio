import React from "react";
// Import icons from react-icons. Example: Devicons (Di), Simple Icons (Si), Font Awesome (Fa)
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaServer,
  FaCode,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiMongodb,
  SiExpress,
} from "react-icons/si";

const Skills = () => {
  // Organize your skills into relevant categories
  const skillCategories = [
    {
      title: "Frontend Development",
      description: "Building fast, responsive, and intuitive user interfaces.",
      skills: [
        { name: "React", icon: <FaReact className="text-4xl text-blue-500" /> },
        {
          name: "JavaScript",
          icon: <SiJavascript className="text-4xl text-yellow-500" />,
        },
        {
          name: "HTML5",
          icon: <FaHtml5 className="text-4xl text-orange-600" />,
        },
        {
          name: "CSS3",
          icon: <FaCss3Alt className="text-4xl text-blue-600" />,
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="text-4xl text-teal-500" />,
        },
      ],
    },
    {
      title: "Backend & Database",
      description:
        "Designing and managing scalable server-side logic and data.",
      skills: [
        {
          name: "Node.js",
          icon: <FaNodeJs className="text-4xl text-green-600" />,
        },
        {
          name: "Express.js",
          icon: <SiExpress className="text-4xl text-gray-800" />,
        },
        {
          name: "MongoDB",
          icon: <SiMongodb className="text-4xl text-green-700" />,
        },
        // Add more backend skills like SQL, Python, etc., here
      ],
    },
    {
      title: "Tools & Workflow",
      description:
        "Practices and tools for efficient development and deployment.",
      skills: [
        {
          name: "Git/GitHub",
          icon: <FaGitAlt className="text-4xl text-red-600" />,
        },
        {
          name: "VS Code",
          icon: <FaCode className="text-4xl text-blue-600" />,
        },
        {
          name: "Rest APIs",
          icon: <FaServer className="text-4xl text-gray-700" />,
        },
        // Add more tools like Docker, Jest, AWS, etc., here
      ],
    },
  ];

  return (
    // The ID 'skills' is crucial for the Navbar link to work
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-3">
            My Toolkit
          </h2>
          <p className="text-xl text-indigo-600 font-medium">
            Technologies I use to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2 border-indigo-100">
                {category.title}
              </h3>
              <p className="text-gray-500 mb-6 text-sm">
                {category.description}
              </p>

              {/* Individual Skill Badges */}
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex flex-col items-center p-3 border rounded-lg hover:bg-indigo-50 transition duration-150"
                  >
                    {skill.icon}
                    <span className="text-sm font-medium text-gray-600 mt-1">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
