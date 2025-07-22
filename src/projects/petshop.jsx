import React from 'react'
import { motion } from 'framer-motion'

export default function Petshop() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col md:flex-row py-20">
      {/* Left - Image */}
      <motion.div
        className="md:w-1/2 w-full h-64 md:h-auto flex items-center justify-center px-16"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src="/pandppetshop.png"
          alt="P & P Pet Shop"
          className="w-full object-cover rounded-lg shadow-lg"
        />
      </motion.div>

      {/* Right - Content */}
      <motion.div
        className="md:w-1/2 w-full p-8 flex items-center justify-center"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-2xl">
          <h2 className="text-4xl font-bold text-cyan-400 mb-4">P & P Pet Shop 🐾</h2>
          <p className="text-gray-300 mb-5 leading-relaxed">
            P & P Pet Shop is a WordPress website created for a local Sri Lankan pet retail business. It features product showcases, adoption info, and a simple inquiry form, designed with a caring and approachable aesthetic.
          </p>

          <div className="mb-6">
            <p className="text-cyan-300 font-semibold mb-2">Business Features:</p>
            <ul className="list-disc list-inside text-gray-400 space-y-1">
              <li>Pet product catalog and showcase</li>
              <li>Adoption and rescue information</li>
              <li>Inquiry form built with Elementor</li>
              <li>Fully responsive design</li>
              <li>Live Facebook feed integration</li>
            </ul>
          </div>

          <div className="mb-6">
            <p className="text-cyan-300 font-semibold mb-2">Built With:</p>
            <div className="flex flex-wrap gap-2 text-sm">
              <span className="bg-cyan-700 px-3 py-1 rounded-full">WordPress</span>
              <span className="bg-cyan-700 px-3 py-1 rounded-full">Elementor</span>
              <span className="bg-cyan-700 px-3 py-1 rounded-full">HTML/CSS</span>
              <span className="bg-cyan-700 px-3 py-1 rounded-full">Facebook Plugin</span>
            </div>
          </div>

          <a
            href="https://pandppetshop.lk"
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
