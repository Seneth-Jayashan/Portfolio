import React from 'react'
import { motion } from 'framer-motion'
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJsSquare, FaWordpress } from 'react-icons/fa'
import { SiTailwindcss, SiMongodb, SiExpress } from 'react-icons/si'

export default function Skills() {
  const skills = [
    { name: 'React.js', icon: <FaReact />, level: 90 },
    { name: 'Node.js', icon: <FaNodeJs />, level: 85 },
    { name: 'Express.js', icon: <SiExpress />, level: 80 },
    { name: 'MongoDB', icon: <SiMongodb />, level: 80 },
    { name: 'HTML5', icon: <FaHtml5 />, level: 95 },
    { name: 'CSS3', icon: <FaCss3Alt />, level: 90 },
    { name: 'WordPress', icon: <FaWordpress />, level: 90 },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 70 },
    { name: 'JavaScript', icon: <FaJsSquare />, level: 70 },
  ]

  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">
      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-cyan-400 text-center mb-12">My Skills</h2>

        <div className="grid sm:grid-cols-2 gap-10">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 p-6 rounded-xl shadow-xl hover:scale-105 transition-transform"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="text-cyan-400 text-2xl">{skill.icon}</div>
                <h3 className="text-xl font-semibold">{skill.name}</h3>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3">
                <div
                  className="bg-cyan-400 h-3 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-300 mt-1">{skill.level}% Proficiency</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
