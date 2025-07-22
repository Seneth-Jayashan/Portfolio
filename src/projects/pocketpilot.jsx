import React from 'react'
import { motion } from 'framer-motion'

export default function PocketPilot() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col md:flex-row py-20">
      {/* Left Side - Image */}
      <motion.div
        className="md:w-1/2 w-full h-64 md:h-auto flex items-center justify-center px-16"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src="/pocketPilot.png"
          alt="Pocket Pilot Android App"
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
        <div className="max-w-2xl">
          <h2 className="text-4xl font-bold text-cyan-400 mb-4">Pocket Pilot ✈️</h2>
          <p className="text-gray-300 mb-5 leading-relaxed">
            Pocket Pilot is an Android mobile application developed using Kotlin and XML layouts. It helps travelers, business professionals, and digital nomads manage tasks, trips, and expenses efficiently using Shared Preferences and Firebase for backend services.
          </p>

          <div className="mb-6">
            <p className="text-cyan-300 font-semibold mb-2">Key Features:</p>
            <ul className="list-disc list-inside text-gray-400 space-y-1">
              <li>Itinerary and trip planner</li>
              <li>Offline note & checklist support using Shared Preferences</li>
              <li>Expense tracking by category</li>
              <li>Flight and hotel reminders</li>
              <li>Firebase integration for real-time data syncing</li>
              <li>Minimal UI with dark mode</li>
            </ul>
          </div>

          <div className="mb-6">
            <p className="text-cyan-300 font-semibold mb-2">Tech Stack:</p>
            <div className="flex flex-wrap gap-2 text-sm">
              <span className="bg-cyan-700 px-3 py-1 rounded-full">Kotlin</span>
              <span className="bg-cyan-700 px-3 py-1 rounded-full">XML Layouts</span>
              <span className="bg-cyan-700 px-3 py-1 rounded-full">Shared Preferences</span>
              <span className="bg-cyan-700 px-3 py-1 rounded-full">Firebase</span>
            </div>
          </div>

          <a
            href="https://github.com/Seneth-Jayashan/Pocket-Pilot"
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
