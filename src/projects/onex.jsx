import React from 'react'
import { motion } from 'framer-motion'

export default function Onex() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col md:flex-row">
      {/* Left - Image */}
      <motion.div
        className="md:w-1/2 w-full h-64 md:h-auto"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <img
          src="/projects/onex-universe.png"
          alt="OneX Universe"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Right - Content */}
      <motion.div
        className="md:w-1/2 w-full p-8 flex items-center justify-center"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="max-w-2xl">
          <h2 className="text-4xl font-bold text-cyan-400 mb-4">OneX Universe 🌐</h2>
          <p className="text-gray-300 mb-5 leading-relaxed">
            OneX Universe is an all-in-one digital ecosystem, designed for organizations to manage their entire operation in one powerful, multi-tenant platform. It combines 10 integrated systems ranging from HR to E-commerce, with support for both custom domains and subdomains.
          </p>

          <div className="mb-6">
            <p className="text-cyan-300 font-semibold mb-2">Systems Included:</p>
            <ul className="list-disc list-inside text-gray-400 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1">
              <li>VolunteerIX</li>
              <li>OneX Care</li>
              <li>OneX HR</li>
              <li>OneX Invoice</li>
              <li>OneX LMS</li>
              <li>OneX POS</li>
              <li>OneX Event</li>
              <li>OneX Apartment</li>
              <li>OneX E-commerce</li>
              <li>CoreX Admin Panel</li>
            </ul>
          </div>

          <div className="mb-6">
            <p className="text-cyan-300 font-semibold mb-2">Built With:</p>
            <div className="flex flex-wrap gap-2 text-sm">
              <span className="bg-cyan-800 px-3 py-1 rounded-full">MERN Stack</span>
              <span className="bg-cyan-800 px-3 py-1 rounded-full">Vite</span>
              <span className="bg-cyan-800 px-3 py-1 rounded-full">Tailwind CSS</span>
              <span className="bg-cyan-800 px-3 py-1 rounded-full">Framer Motion</span>
              <span className="bg-cyan-800 px-3 py-1 rounded-full">Electron.js</span>
              <span className="bg-cyan-800 px-3 py-1 rounded-full">CI/CD</span>
            </div>
          </div>

          <a
            href="https://onex.sjaywebsolutions.lk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-cyan-600 hover:bg-cyan-500 transition px-6 py-2 rounded-full text-white font-semibold"
          >
            Visit Platform
          </a>
        </div>
      </motion.div>
    </div>
  )
}
