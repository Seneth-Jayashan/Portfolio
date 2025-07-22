import React from 'react'
import { motion } from 'framer-motion'

export default function VolunteerIX() {
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
          src="/projects/volunteerix.jpg"
          alt="VolunteerIX Interface"
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
          <h2 className="text-4xl font-bold text-rose-500 mb-4">VolunteerIX 🤝</h2>
          <p className="text-gray-300 mb-5 leading-relaxed">
            VolunteerIX is a modern volunteer management system built as part of the OneX Universe. It helps NGOs, organizations, and communities coordinate volunteers, track hours, assign roles, and manage events — all in one powerful platform.
          </p>

          <div className="mb-6">
            <p className="text-rose-400 font-semibold mb-2">Core Features:</p>
            <ul className="list-disc list-inside text-gray-400 space-y-1">
              <li>Volunteer profile management</li>
              <li>Role-based permissions for coordinators</li>
              <li>Time tracking and attendance logs</li>
              <li>Event planning with registration & reminders</li>
              <li>Multi-organization & multi-domain support</li>
            </ul>
          </div>

          <div className="mb-6">
            <p className="text-rose-400 font-semibold mb-2">Tech Stack:</p>
            <div className="flex flex-wrap gap-2 text-sm">
              <span className="bg-rose-600 px-3 py-1 rounded-full">React</span>
              <span className="bg-rose-600 px-3 py-1 rounded-full">Tailwind CSS</span>
              <span className="bg-rose-600 px-3 py-1 rounded-full">Framer Motion</span>
              <span className="bg-rose-600 px-3 py-1 rounded-full">Node.js</span>
              <span className="bg-rose-600 px-3 py-1 rounded-full">MongoDB</span>
            </div>
          </div>

          <a
            href="https://volunteerix.onexsystems.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-rose-500 hover:bg-rose-400 transition px-6 py-2 rounded-full text-white font-semibold"
          >
            View Live Platform
          </a>
        </div>
      </motion.div>
    </div>
  )
}
