import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="min-h-screen px-10 py-40 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold text-cyan-400 mb-6">About Me</h2>
          <p className="text-gray-300 leading-relaxed text-lg">
            I'm <span className="text-white font-medium">Seneth Jayashan</span>, the founder of
            <span className="text-cyan-400 font-semibold"> S JAY Web Solutions (Pvt) Ltd</span>.  
            With a passion for full-stack web development, I specialize in building clean, scalable, and high-performance web applications using the MERN stack, Tailwind CSS, and Framer Motion.
          </p>

          <p className="text-gray-400 mt-4">
            My mission is to help businesses and individuals bring their ideas to life through visually compelling and technically robust digital solutions. I believe in writing clean code, designing with purpose, and delivering results that exceed expectations.
          </p>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center"
        >
          <img
            src="/logo.png"
            alt="S JAY Web Solutions (Pvt) Ltd Logo"
            className="w-72 h-72 rounded-2xl object-cover shadow-lg"
          />
        </motion.div>
      </div>
    </div>
  );
}
