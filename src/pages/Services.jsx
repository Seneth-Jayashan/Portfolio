import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaPaintBrush, FaServer, FaTools, FaWordpress } from 'react-icons/fa';

export default function Services() {
  const services = [
    {
      icon: <FaCode size={30} />,
      title: "Frontend Development",
      description: "Beautiful, responsive interfaces using React, Tailwind CSS, and Framer Motion.",
    },
    {
      icon: <FaServer size={30} />,
      title: "Backend Development",
      description: "RESTful APIs and backend logic using Node.js, Express, and MongoDB.",
    },
    {
      icon: <FaPaintBrush size={30} />,
      title: "UI/UX Design",
      description: "Clean and user-friendly designs that focus on usability and performance.",
    },
    {
      icon: <FaTools size={30} />,
      title: "Website Maintenance",
      description: "Regular updates, backups, and performance optimization to keep your site running smoothly.",
    },
    {
      icon: <FaWordpress size={30} />,
      title: "WordPress Development",
      description: "Custom WordPress themes and plugins to enhance your website's functionality.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-cyan-400"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Services
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
                key={index}
                className="bg-gray-800 rounded-xl p-8 text-center shadow-lg hover:shadow-cyan-500/30 transition cursor-pointer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                >
                <div className="text-cyan-400 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
