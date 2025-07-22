import React from 'react'
import { motion } from 'framer-motion'

export default function KASSS() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-black text-white py-20">
      {/* Left Side - Image */}
      <motion.div
        className="md:w-1/2 w-full h-64 md:h-auto flex items-center justify-center px-16"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src="/kasss.png"
          alt="KASSS Advertising Company"
          className="w-full object-cover rounded-lg shadow-lg"
        />
      </motion.div>

      {/* Right Side - Content */}
      <motion.div
        className="md:w-1/2 w-full p-8 flex items-center justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-xl">
          <h2 className="text-4xl font-bold text-cyan-400 mb-4">KASSS Advertising Company</h2>
          <p className="text-gray-300 mb-6">
            KASSS is a dynamic advertising agency website built with traditional web technologies. It showcases creative marketing campaigns and client success stories with a focus on vibrant visuals and easy navigation.
          </p>

          <ul className="text-gray-400 list-disc list-inside mb-6 space-y-1">
            <li>Portfolio of marketing campaigns</li>
            <li>Client testimonials and case studies</li>
            <li>Responsive and interactive design</li>
            <li>Built using HTML, CSS, PHP, and MySQL</li>
          </ul>

          <div className="mb-4">
            <p className="text-cyan-300 font-semibold mb-1">Tech Stack:</p>
            <div className="flex flex-wrap gap-2 text-sm">
              <span className="bg-cyan-800 px-3 py-1 rounded-full">HTML</span>
              <span className="bg-cyan-800 px-3 py-1 rounded-full">CSS</span>
              <span className="bg-cyan-800 px-3 py-1 rounded-full">PHP</span>
              <span className="bg-cyan-800 px-3 py-1 rounded-full">MySQL</span>
            </div>
          </div>

          <a
            href="https://github.com/Seneth-Jayashan/KASSS-Advertising-Agency"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-cyan-600 hover:bg-cyan-500 transition px-6 py-2 rounded-full text-white font-semibold"
          >
            Source Code
          </a>
        </div>
      </motion.div>
    </div>
  )
}
