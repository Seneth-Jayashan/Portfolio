import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDatabase, FaWordpress, FaJs, FaPhp, FaLaravel, FaDocker, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiExpress, SiNextdotjs, SiGraphql, SiTailwindcss } from "react-icons/si";

const roadmap = [
  {
    year: "2020",
    frontend: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
    ],
    backend: [
      { name: "SQL", icon: <FaDatabase /> },
      { name: "PHP", icon: <FaPhp /> },
    ],
  },
  {
    year: "2021",
    frontend: [
      { name: "WordPress", icon: <FaWordpress /> },
    ],
    backend: [],
  },
  {
    year: "2022",
    frontend: [
      { name: "JavaScript", icon: <FaJs /> },
    ],
    backend: [],
  },
  {
    year: "2024",
    frontend: [
      { name: "React.js", icon: <FaReact /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
    backend: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
    ],
  },
  {
    year: "2025",
    frontend: [],
    backend: [],
    nextTarget: {
      frontend: [
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "UI/UX Design", icon: <FaGitAlt /> },
      ],
      backend: [
        { name: "Docker", icon: <FaDocker /> },
        { name: "GraphQL", icon: <SiGraphql /> },
      ],
    },
  },
];

export default function RoadmapTimeline() {
  return (
    <div className="bg-black text-white py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-16">Roadmap Timeline</h2>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-cyan-500 z-0" />

          {roadmap.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-20 relative flex flex-col md:flex-row md:items-start"
            >
              {/* Frontend (Left Side) */}
              <div className="w-full md:w-1/2 md:pr-8 text-right md:text-right z-10">
                <h3 className="text-2xl font-bold text-cyan-300 mb-2">{section.year}</h3>

                {section.frontend.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-xl font-semibold text-white mb-2">Frontend</h4>
                    <div className="flex flex-wrap gap-3 justify-end">
                      {section.frontend.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full hover:bg-cyan-800 transition">
                          <span className="text-lg">{item.icon}</span>
                          <span className="text-sm">{item.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Dot in the middle */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-cyan-400 rounded-full border-4 border-black top-6 z-10" />

              {/* Backend (Right Side) */}
              <div className="w-full md:w-1/2 md:pl-8 mt-10 md:mt-0 z-10">
                {section.backend.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-xl font-semibold text-white mb-2">Backend</h4>
                    <div className="flex flex-wrap gap-3">
                      {section.backend.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full hover:bg-cyan-800 transition">
                          <span className="text-lg">{item.icon}</span>
                          <span className="text-sm">{item.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Show Next Target only in the final year */}
                {section.nextTarget && (
                  <div className="mt-4 p-4 bg-gray-900 border border-cyan-400 rounded-xl shadow-lg">
                    <h4 className="text-cyan-300 font-bold mb-3">🎯 Next Target</h4>
                    <div className="mb-2">
                      <p className="font-semibold text-sm mb-1">Frontend:</p>
                      <div className="flex flex-wrap gap-2">
                        {section.nextTarget.frontend.map((item, i) => (
                          <div key={i} className="flex items-center gap-2 bg-gray-800 px-3 py-1 rounded-full hover:bg-cyan-800 transition">
                            <span className="text-lg">{item.icon}</span>
                            <span className="text-sm">{item.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="mt-3">
                      <p className="font-semibold text-sm mb-1">Backend:</p>
                      <div className="flex flex-wrap gap-2">
                        {section.nextTarget.backend.map((item, i) => (
                          <div key={i} className="flex items-center gap-2 bg-gray-800 px-3 py-1 rounded-full hover:bg-cyan-800 transition">
                            <span className="text-lg">{item.icon}</span>
                            <span className="text-sm">{item.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
