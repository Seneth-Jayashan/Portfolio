import { useState } from 'react';
import { useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { animate } from 'animejs';

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'Skills', path: '/skills' },
  { name: 'Road Map', path: '/roadmap' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (!menuRef.current) return undefined;

    if (!open) {
      const closeAnim = animate(menuRef.current, {
        opacity: [1, 0],
        y: [0, -12],
        duration: 240,
        ease: 'outQuad',
      });

      return () => {
        closeAnim.pause?.();
      };
    }

    const openAnim = animate(menuRef.current, {
      opacity: [0, 1],
      y: [-10, 0],
      duration: 340,
      ease: 'outExpo',
    });

    return () => {
      openAnim.pause?.();
    };
  }, [open]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 pt-3 md:pt-4">
      <div className="w-[min(1240px,calc(100%-1rem))] md:w-[min(1240px,calc(100%-2.5rem))] mx-auto glass rounded-2xl px-4 py-3 md:px-6 md:py-4">
        <div className="flex justify-between items-center gap-4">
          <Link to="/" className="text-sm md:text-base tracking-wide text-white flex items-center gap-3 font-semibold">
            <img src="/logo.png" alt="Logo" className="w-8 h-8 rounded-full ring-2 ring-teal-200/50" />
            <span className="hidden sm:inline">S JAY Web Solutions</span>
            <span className="sm:hidden">S JAY</span>
          </Link>

          <div className="hidden md:flex items-center gap-7">
            {links.map(({ name, path }) => (
              <NavLink
                key={name}
                to={path}
                end
                className={({ isActive }) =>
                  `text-sm tracking-wide transition ${isActive ? 'text-teal-300' : 'text-slate-100/90 hover:text-teal-300'}`
                }
              >
                {name}
              </NavLink>
            ))}
          </div>

          <button
            className="md:hidden focus:outline-none text-slate-100"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle Menu"
            aria-expanded={open}
          >
            {open ? (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {open && (
          <div ref={menuRef} className="md:hidden mt-3 border-t border-slate-400/20 pt-3">
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {links.map(({ name, path }) => (
                <li key={name}>
                  <NavLink
                    to={path}
                    end
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block rounded-lg px-3 py-2 transition ${isActive ? 'bg-teal-400/18 text-teal-200' : 'text-slate-200 hover:bg-slate-500/20'}`
                    }
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
