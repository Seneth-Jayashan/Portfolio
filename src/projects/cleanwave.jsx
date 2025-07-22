import React from 'react'
import { motion } from 'framer-motion'

export default function CleanWave() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-black text-white py-20">
      {/* Left - Project Image */}
      <motion.div
        className="md:w-1/2 w-full h-64 md:h-auto flex items-center justify-center px-16"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <img
          src="/cleanWave.png"
          alt="CleanWave Laundry System"
          className="w-full object-cover rounded-lg shadow-lg"
        />
      </motion.div>

      {/* Right - Content */}
      <motion.div
        className="md:w-1/2 w-full p-8 flex items-center justify-center"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="max-w-xl">
          <h2 className="text-4xl font-bold text-cyan-400 mb-4">CleanWave Laundry System</h2>
          <p className="text-gray-300 mb-6">
            CleanWave is a Java-based laundry management system developed with Servlets and JSP following the MVC architecture. It helps staff and customers manage laundry orders, track statuses, and handle invoices efficiently.
          </p>

          <ul className="text-gray-400 list-disc list-inside mb-6 space-y-1">
            <li>Real-time order status and invoice tracking</li>
            <li>Admin and customer dashboards with role-based access</li>
            <li>Database-driven using MySQL</li>
            <li>Structured backend using MVC pattern</li>
          </ul>

          <div className="mb-4">
            <p className="text-cyan-300 font-semibold mb-1">Tech Stack:</p>
            <div className="flex flex-wrap gap-2 text-sm">
              <span className="bg-cyan-800 px-3 py-1 rounded-full">Java (Servlets)</span>
              <span className="bg-cyan-800 px-3 py-1 rounded-full">JSP</span>
              <span className="bg-cyan-800 px-3 py-1 rounded-full">MySQL</span>
              <span className="bg-cyan-800 px-3 py-1 rounded-full">HTML/CSS</span>
              <span className="bg-cyan-800 px-3 py-1 rounded-full">MVC Architecture</span>
            </div>
          </div>

          <a
            href="https://github.com/Seneth-Jayashan/CleanWave"
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
