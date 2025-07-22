import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'KHB Associates',
    description: 'Custom website development for corporate clients.',
    imageUrl: './khb.png',
    link: 'projects/khb',
  },
  {
    title: 'CleanWave Laundry',
    description: 'Laundry management system with online booking.',
    imageUrl: '/cleanWave.png',
    link: 'projects/cleanwave',
  },
  {
    title: 'KASSS Advertising',
    description: 'Creative and modern advertising and branding website.',
    imageUrl: '/kasss.png',
    link: 'projects/kasss',
  },
  {
    title: 'Mood Meals',
    description: 'Mobile app to suggest meals based on user mood.',
    imageUrl: '/moodmeals.png',
    link: 'projects/moodmeals',
  },
  {
    title: 'Pocket Pilot',
    description: 'Mobile app for income and outgoing management.',
    imageUrl: '/pocketPilot.png',
    link: 'projects/pocketpilot',
  },
  {
    title: 'CL Towing NYC',
    description: 'Towing company website with service locator.',
    imageUrl: '/clTowing.png',
    link: 'projects/cltowing',
  },
  {
    title: 'Chrysle Tours',
    description: 'Travel agency website with booking & gallery features.',
    imageUrl: '/chrysleTours.png',
    link: 'projects/chrysletours',
  },
  {
    title: 'NKASL Karate Dojo',
    description: 'Karate club website with member management.',
    imageUrl: '/nkasl.png',
    link: 'projects/nkasl',
  },
  {
    title: 'P&P Pet Shop',
    description: 'Pet shop e-commerce website with shopping cart.',
    imageUrl: '/pandppetshop.png',
    link: 'projects/petshop',
  },
  {
    title: 'VolunteerIX',
    description: 'Volunteer management system built for multi-organization support.',
    imageUrl: '/comingSoon.png',
    link: 'projects/comingsoon',
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-cyan-400"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {projects.map(({ title, description, imageUrl, link }, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-xl p-6 text-center shadow-lg hover:shadow-cyan-500/30 transition cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              onClick={() => {
                  if (link) window.location.href = link;
              }}
            >
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-48 object-cover rounded-lg mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-300">{description}</p>
              {link && (
                <button className="mt-4 px-4 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600 transition w-full">
                  View Project
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}