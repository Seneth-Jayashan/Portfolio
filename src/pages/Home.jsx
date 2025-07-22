import React from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="text-center max-w-3xl"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          Hi, I'm <span className="text-cyan-400">Seneth Jayashan</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-gray-300 text-lg md:text-xl leading-relaxed"
        >
          Founder of <span className="text-cyan-400 font-medium">S JAY Web Solutions (Pvt) Ltd</span> <br />
          I craft responsive, modern web applications using MERN stack, Tailwind CSS, and REST API.
        </motion.p>

        <motion.div
          className="mt-10 flex justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <a
            href="/projects"
            className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-xl text-sm font-semibold transition shadow-lg"
          >
            View Projects
          </a>
          <a
            href="/contact"
            className="px-6 py-3 border border-cyan-400 hover:bg-cyan-600 hover:text-white text-cyan-400 rounded-xl text-sm font-semibold transition"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
