import React from 'react'
import { motion } from 'framer-motion'

export default function KHB() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-black text-white py-20 justify-center items-center">
      {/* Left Side - Image */}
      <motion.div
        className="md:w-1/2 w-full h-64 md:h-auto flex items-center justify-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src="/khb.png"
          alt="KHB Associates"
          className="w-3/5 object-contain"
        />
      </motion.div>

      {/* Right Side - Content */}
      <motion.div
        className="md:w-1/2 w-full px-8 flex items-center justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-xl">
          <h2 className="text-4xl font-bold text-cyan-400 mb-4">KHB Associates</h2>
          <p className="text-gray-300 mb-6">
            A modern MERN stack application built for a textile machines selling company. This project features a responsive interface, product catalog, order management, and real-time data interaction to streamline sales and customer engagement.
          </p>

          <ul className="text-gray-400 list-disc list-inside mb-6 space-y-1">
            <li>Full-stack MERN architecture (MongoDB, Express, React, Node.js)</li>
            <li>Dynamic product catalog and search functionality</li>
            <li>User authentication and order management</li>
            <li>Responsive UI with Tailwind CSS</li>
          </ul>

          <div className="mb-4">
            <p className="text-cyan-300 font-semibold mb-1">Tech Stack:</p>
            <div className="flex flex-wrap gap-2 text-sm">
              <span className="bg-cyan-800 px-3 py-1 rounded-full">MongoDB</span>
              <span className="bg-cyan-800 px-3 py-1 rounded-full">Express</span>
              <span className="bg-cyan-800 px-3 py-1 rounded-full">React</span>
              <span className="bg-cyan-800 px-3 py-1 rounded-full">Node.js</span>
              <span className="bg-cyan-800 px-3 py-1 rounded-full">Tailwind CSS</span>
            </div>
          </div>

          <a
            href="https://github.com/Seneth-Jayashan/KHB-Web-Application"
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
