import React from 'react'
import { motion } from 'framer-motion'

export default function MoodMeals() {
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
          src="/moodmeals.png"
          alt="Mood Meals Android App"
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
          <h2 className="text-4xl font-bold text-cyan-400 mb-4">Mood Meals</h2>
          <p className="text-gray-300 mb-6">
            Mood Meals is a native Android app developed using Kotlin and XML layouts. It offers personalized meal recommendations based on the user’s current mood, combining mental well-being with healthy eating habits.
          </p>

          <ul className="text-gray-400 list-disc list-inside mb-6 space-y-1">
            <li>Personalized food recommendations</li>
            <li>Mood tracking system</li>
            <li>Clean UI built with XML layouts</li>
            <li>Optimized for Android devices</li>
          </ul>

          <div className="mb-4">
            <p className="text-cyan-300 font-semibold mb-1">Tech Stack:</p>
            <div className="flex flex-wrap gap-2 text-sm">
              <span className="bg-cyan-800 px-3 py-1 rounded-full">Kotlin</span>
              <span className="bg-cyan-800 px-3 py-1 rounded-full">XML Layouts</span>
              <span className="bg-cyan-800 px-3 py-1 rounded-full">Android SDK</span>
              <span className="bg-cyan-800 px-3 py-1 rounded-full">Firebase</span>
            </div>
          </div>

          <a
            href="https://github.com/Seneth-Jayashan/Mood-Meals"
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
