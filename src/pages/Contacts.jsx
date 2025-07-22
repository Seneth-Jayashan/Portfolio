import React from 'react';
import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGlobe,
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
} from 'react-icons/fa';

export default function Contacts() {
  const contactDetails = [
    {
      icon: <FaEnvelope size={20} />,
      title: 'Email',
      value: 'contact@sjaywebsolutions.lk',
      link: 'mailto:contact@sjaywebsolutions.lk',
    },
    {
      icon: <FaPhoneAlt size={20} />,
      title: 'Phone',
      value: '+94 70 3999 709',
      link: 'tel:+94703999709',
    },
    {
      icon: <FaMapMarkerAlt size={20} />,
      title: 'Location',
      value: 'Colombo, Western Province, Sri Lanka',
      link: null,
    },
    {
      icon: <FaGlobe size={20} />,
      title: 'Website',
      value: 'www.sjaywebsolutions.lk',
      link: 'https://www.sjaywebsolutions.lk',
    },
  ];

  const socialLinks = [
    {
      icon: <FaFacebookF />,
      url: 'https://facebook.com/s.jay20/',
    },
    {
      icon: <FaLinkedinIn />,
      url: 'https://www.linkedin.com/company/seneth-jayashan/',
    },
    {
      icon: <FaWhatsapp />,
      url: 'https://wa.me/94703999709',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white py-24 px-6">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-cyan-400 mb-6">Let’s Talk</h2>
        <p className="text-gray-300 text-lg mb-12">
          Whether you have a project idea or just want to say hi, my inbox is always open.
        </p>

        <div className="grid sm:grid-cols-2 gap-8 text-left mb-16">
          {contactDetails.map((item, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-xl p-6 shadow-lg flex gap-4 items-start hover:scale-105 transition-transform"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-cyan-400 mt-1">{item.icon}</div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">{item.title}</h4>
                {item.link ? (
                  <a
                    href={item.link}
                    className="text-gray-300 hover:text-cyan-400 transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-gray-300">{item.value}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-xl font-semibold text-cyan-400 mb-3">Connect with Me</h3>
          <div className="flex justify-center gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-gray-700 hover:bg-cyan-500 p-3 rounded-full transition"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
