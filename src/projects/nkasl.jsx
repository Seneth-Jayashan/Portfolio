import React from 'react'
import { motion } from 'framer-motion'

export default function NKASL() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-black text-white py-20">
      {/* Left - Image */}
      <motion.div
        className="md:w-1/2 w-full h-64 md:h-auto flex items-center justify-center px-16"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src="/nkasl.png"
          alt="NKASL Karate Dojo"
          className="w-full object-cover rounded-lg shadow-lg"
        />
      </motion.div>

      {/* Right - Content */}
      <motion.div
        className="md:w-1/2 w-full p-8 flex items-center justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-xl">
          <h2 className="text-4xl font-bold text-cyan-400 mb-4">NKASL - Karate Dojo</h2>
          <p className="text-gray-300 mb-6">
            NKASL is a dedicated martial arts organization website built with WordPress. It showcases dojo details such as class schedules, instructor profiles, belt rankings, event galleries, and achievements with a responsive and accessible design.
          </p>

          <ul className="text-gray-400 list-disc list-inside mb-6 space-y-1">
            <li>Karate class schedules and dojo locations</li>
            <li>Instructor profiles and belt ranking system</li>
            <li>Event galleries showcasing dojo activities</li>
            <li>Mobile-friendly and SEO optimized</li>
          </ul>

          <div className="mb-4">
            <p className="text-cyan-300 font-semibold mb-1">Built With:</p>
            <div className="flex flex-wrap gap-2 text-sm">
              <span className="bg-cyan-800 px-3 py-1 rounded-full">WordPress</span>
              <span className="bg-cyan-800 px-3 py-1 rounded-full">PHP</span>
              <span className="bg-cyan-800 px-3 py-1 rounded-full">Custom Theme</span>
              <span className="bg-cyan-800 px-3 py-1 rounded-full">SEO</span>
            </div>
          </div>

          <a
            href="https://nkasl.com"
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
