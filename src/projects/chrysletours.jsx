import React from 'react'
import { motion } from 'framer-motion'

export default function ChrysleTours() {
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
          src="/chrysleTours.png"
          alt="Chrysle Tours Screenshot"
          className="w-full object-cover rounded-lg shadow-lg"
        />
      </motion.div>

      {/* Right Side - Project Info */}
      <motion.div
        className="md:w-1/2 w-full p-8 flex items-center justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-xl">
          <h2 className="text-4xl font-bold text-cyan-400 mb-4">Chrysle Tours</h2>
          <p className="text-gray-300 mb-6">
            A professionally built WordPress website for a Sri Lankan travel agency. Designed to showcase destinations, tour packages, and encourage travel inquiries.
          </p>

          <ul className="text-gray-400 list-disc list-inside mb-6 space-y-1">
            <li>WordPress-powered CMS</li>
            <li>Custom Elementor layout with vibrant visuals</li>
            <li>Mobile-friendly and SEO optimized</li>
            <li>Gallery and contact form integrations</li>
          </ul>

          <div className="mb-4">
            <p className="text-cyan-300 font-semibold mb-1">Tools Used:</p>
            <div className="flex flex-wrap gap-2 text-sm">
              <span className="bg-cyan-800 px-3 py-1 rounded-full">WordPress</span>
              <span className="bg-cyan-800 px-3 py-1 rounded-full">Elementor</span>
              <span className="bg-cyan-800 px-3 py-1 rounded-full">Custom CSS</span>
              <span className="bg-cyan-800 px-3 py-1 rounded-full">Yoast SEO</span>
            </div>
          </div>

          <a
            href="https://chrysletours.com"
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
