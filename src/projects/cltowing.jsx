import React from 'react'
import { motion } from 'framer-motion'

export default function ClTowing() {
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
          src="/clTowing.png"
          alt="CL Towing NYC Website"
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
          <h2 className="text-4xl font-bold text-cyan-400 mb-4">CL Towing NYC</h2>
          <p className="text-gray-300 mb-6">
            A custom-designed WordPress website created for a professional towing and roadside assistance company based in Queens and Brooklyn, New York. It highlights the company’s key services, provides emergency contact access, and improves local discoverability through SEO and map integration.
          </p>

          <ul className="text-gray-400 list-disc list-inside mb-6 space-y-1">
            <li>Dedicated pages for towing & emergency services</li>
            <li>Integrated Google Maps for local SEO</li>
            <li>Fully responsive and performance-optimized</li>
            <li>Custom build using WordPress + Elementor</li>
          </ul>

          <div className="mb-4">
            <p className="text-cyan-300 font-semibold mb-1">Built With:</p>
            <div className="flex flex-wrap gap-2 text-sm">
              <span className="bg-cyan-800 px-3 py-1 rounded-full">WordPress</span>
              <span className="bg-cyan-800 px-3 py-1 rounded-full">Elementor</span>
              <span className="bg-cyan-800 px-3 py-1 rounded-full">Custom CSS</span>
            </div>
          </div>

          <a
            href="https://cltowingnyc.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-cyan-600 hover:bg-cyan-500 transition px-6 py-2 rounded-full text-white font-semibold"
          >
            Visit Website
          </a>
        </div>
      </motion.div>
    </div>
  )
}
