import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'Skills', path: '/skills' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 px-1 md:px-12 mt-4">
      <div className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-950 to-black shadow-lg rounded-lg">
        {/* Logo */}
        <Link to="/" className="text-xl md:text-2xl font-bold tracking-wide text-cyan-400 flex items-center gap-2">
          <img src="/logo.png" alt="Logo" className="w-8 h-8" />
          S JAY Web Solutions
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          {links.map(({ name, path }) => (
            <NavLink
              key={name}
              to={path}
              end
              className={({ isActive }) =>
                `text-sm md:text-base font-medium hover:text-cyan-400 transition ${
                  isActive ? 'text-cyan-400' : 'text-white'
                }`
              }
            >
              <motion.span whileHover={{ scale: 1.1 }}>{name}</motion.span>
            </NavLink>
          ))}
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
          aria-expanded={open}
        >
          {open ? (
            <svg className="w-7 h-7" fill="none" stroke="white" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-7 h-7" fill="none" stroke="white" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black border-t border-gray-700 shadow-inner"
          >
            <ul className="flex flex-col space-y-4 px-6 py-4">
              {links.map(({ name, path }) => (
                <li key={name}>
                  <NavLink
                    to={path}
                    end
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block font-medium transition ${
                        isActive ? 'text-cyan-400' : 'text-white'
                      } hover:text-cyan-400`
                    }
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
