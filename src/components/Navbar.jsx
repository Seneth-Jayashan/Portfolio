import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { animate, stagger } from 'animejs';

const links = [
  { name: 'Home',     path: '/' },
  { name: 'About',    path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'Skills',   path: '/skills' },
  { name: 'Roadmap',  path: '/roadmap' },
  { name: 'Contact',  path: '/contact' },
];

export default function Navbar() {
  const [open, setOpen]           = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const menuRef                   = useRef(null);
  const menuItemsRef              = useRef(null);
  const location                  = useLocation();

  /* Close menu on route change */
  useEffect(() => { setOpen(false); }, [location.pathname]);

  /* Scroll shadow */
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  /* Mobile menu animation */
  useEffect(() => {
    if (!menuRef.current) return;
    if (open) {
      menuRef.current.style.display = 'block';
      animate(menuRef.current, { opacity: [0, 1], y: [-8, 0], duration: 320, ease: 'outExpo' });
      const items = menuRef.current.querySelectorAll('li');
      if (items.length) {
        animate(items, { opacity: [0, 1], x: [-10, 0], duration: 280, delay: stagger(40, { start: 60 }), ease: 'outExpo' });
      }
    } else {
      animate(menuRef.current, {
        opacity: [1, 0], y: [0, -6], duration: 200, ease: 'outQuad',
        complete: () => { if (menuRef.current) menuRef.current.style.display = 'none'; },
      });
    }
  }, [open]);

  /* Init hidden */
  useEffect(() => { if (menuRef.current) menuRef.current.style.display = 'none'; }, []);

  return (
    <header
      className="fixed top-0 left-0 w-full z-50"
      role="banner"
      style={{ paddingTop: '12px' }}
    >
      <div
        className="glass rounded-2xl transition-all duration-300"
        style={{
          width: 'min(1280px, calc(100% - 1.5rem))',
          margin: '0 auto',
          padding: '12px 20px',
          borderColor: scrolled ? 'rgba(34,211,238,0.22)' : undefined,
          boxShadow: scrolled ? '0 8px 40px -8px rgba(0,0,0,0.5), 0 0 20px -10px rgba(34,211,238,0.2)' : undefined,
        }}
      >
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3"
            aria-label="S JAY Web Solutions – Home"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}
          >
            <div
              className="relative"
              style={{
                width: 36,
                height: 36,
                borderRadius: 'var(--radius-sm)',
                background: 'linear-gradient(135deg, var(--teal-400), var(--cyan-400))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 16px -4px rgba(34,211,238,0.5)',
                overflow: 'hidden',
              }}
            >
              <img src="/logo.png" alt="" className="w-full h-full object-cover" aria-hidden="true" />
            </div>
            <span
              className="hidden sm:block text-sm"
              style={{ color: 'var(--text-50)', letterSpacing: '-0.01em' }}
            >
              S JAY{' '}
              <span style={{ color: 'var(--cyan-300)', fontWeight: 400 }}>Web Solutions</span>
            </span>
            <span className="sm:hidden text-sm" style={{ color: 'var(--text-50)' }}>S JAY</span>
          </Link>

          {/* Desktop Nav */}
          <nav aria-label="Main navigation">
            <ul className="hidden md:flex items-center gap-1" role="list">
              {links.map(({ name, path }) => (
                <li key={name}>
                  <NavLink
                    to={path}
                    end
                    className={({ isActive }) =>
                      `nav-link relative block px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-lg ${
                        isActive ? 'nav-link-active' : ''
                      }`
                    }
                    style={({ isActive }) => ({
                      color: isActive ? 'var(--cyan-300)' : 'rgba(240,246,255,0.8)',
                      background: isActive ? 'rgba(34,211,238,0.08)' : 'transparent',
                      fontFamily: 'var(--font-body)',
                    })}
                  >
                    {({ isActive }) => (
                      <>
                        {name}
                        <span
                          style={{
                            position: 'absolute',
                            bottom: 4,
                            left: '50%',
                            transform: `translateX(-50%) scale(${isActive ? 1 : 0})`,
                            width: 4,
                            height: 4,
                            borderRadius: '999px',
                            background: 'var(--cyan-400)',
                            display: 'block',
                            transition: 'transform 200ms cubic-bezier(0.34,1.56,0.64,1)',
                          }}
                          aria-hidden="true"
                        />
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="/contact"
              className="btn-primary hidden md:inline-flex"
              style={{ padding: '0.5rem 1.1rem', fontSize: '0.82rem' }}
              aria-label="Hire Seneth Jayashan"
            >
              Hire Me
            </a>

            <button
              className="md:hidden relative w-9 h-9 rounded-xl flex flex-col items-center justify-center gap-[5px]"
              style={{
                background: 'rgba(20,35,65,0.5)',
                border: '1px solid var(--stroke-medium)',
                cursor: 'pointer',
              }}
              onClick={() => setOpen(v => !v)}
              aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={open}
              aria-controls="mobile-nav"
            >
              <span
                style={{
                  display: 'block',
                  width: 18,
                  height: 1.5,
                  background: 'var(--text-100)',
                  borderRadius: 2,
                  transition: 'transform 240ms, opacity 240ms',
                  transform: open ? 'translateY(6.5px) rotate(45deg)' : 'none',
                }}
              />
              <span
                style={{
                  display: 'block',
                  width: 18,
                  height: 1.5,
                  background: 'var(--text-100)',
                  borderRadius: 2,
                  transition: 'transform 240ms, opacity 240ms',
                  opacity: open ? 0 : 1,
                  transform: open ? 'scaleX(0)' : 'scaleX(1)',
                }}
              />
              <span
                style={{
                  display: 'block',
                  width: 18,
                  height: 1.5,
                  background: 'var(--text-100)',
                  borderRadius: 2,
                  transition: 'transform 240ms, opacity 240ms',
                  transform: open ? 'translateY(-6.5px) rotate(-45deg)' : 'none',
                }}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <nav
          id="mobile-nav"
          ref={menuRef}
          aria-label="Mobile navigation"
          aria-hidden={!open}
          style={{
            borderTop: '1px solid var(--stroke-subtle)',
            marginTop: 12,
            paddingTop: 12,
          }}
        >
          <ul
            ref={menuItemsRef}
            className="grid grid-cols-2 gap-2"
            style={{ listStyle: 'none', margin: 0, padding: 0 }}
          >
            {links.map(({ name, path }) => (
              <li key={name}>
                <NavLink
                  to={path}
                  end
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
                      isActive ? 'text-cyan-300' : ''
                    }`
                  }
                  style={({ isActive }) => ({
                    background: isActive ? 'rgba(34,211,238,0.10)' : 'rgba(20,35,65,0.4)',
                    border: `1px solid ${isActive ? 'rgba(34,211,238,0.3)' : 'var(--stroke-subtle)'}`,
                    color: isActive ? 'var(--cyan-300)' : 'var(--text-200)',
                    fontFamily: 'var(--font-body)',
                  })}
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}