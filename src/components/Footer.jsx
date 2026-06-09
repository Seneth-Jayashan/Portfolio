import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedinIn, FaFacebookF, FaWhatsapp } from 'react-icons/fa';

const navLinks = [
  { name: 'Home',     path: '/' },
  { name: 'About',    path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'Skills',   path: '/skills' },
  { name: 'Roadmap',  path: '/roadmap' },
  { name: 'Contact',  path: '/contact' },
];

const socialLinks = [
  { icon: <FaGithub />,    href: 'https://github.com/Seneth-Jayashan',                        label: 'GitHub' },
  { icon: <FaLinkedinIn />, href: 'https://lk.linkedin.com/in/seneth-jayashan',                label: 'LinkedIn' },
  { icon: <FaFacebookF />, href: 'https://facebook.com/s.jay20/',                             label: 'Facebook' },
  { icon: <FaWhatsapp />,  href: 'https://wa.me/94703999709',                                 label: 'WhatsApp' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer role="contentinfo" aria-label="Site footer" style={{ paddingBottom: '1.25rem' }}>
      <div
        className="glass rounded-2xl"
        style={{
          width: 'min(1280px, calc(100% - 1.5rem))',
          margin: '0 auto',
          padding: '28px 28px 24px',
        }}
      >
        {/* Top row */}
        <div className="flex flex-wrap items-start justify-between gap-8 mb-6">
          {/* Brand */}
          <div style={{ maxWidth: 280 }}>
            <Link to="/" aria-label="S JAY Web Solutions homepage" className="inline-flex items-center gap-3 mb-3">
              <div
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 'var(--radius-sm)',
                  background: 'linear-gradient(135deg, var(--teal-400), var(--cyan-400))',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 16px -4px rgba(34,211,238,0.4)',
                }}
              >
                <img src="/logo.png" alt="" className="w-full h-full object-cover" aria-hidden="true" />
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  color: 'var(--text-50)',
                }}
              >
                S JAY{' '}
                <span style={{ color: 'var(--cyan-300)', fontWeight: 400 }}>Web Solutions</span>
              </span>
            </Link>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-400)', lineHeight: 1.6, fontFamily: 'var(--font-body)' }}>
              Full-stack web development & digital product engineering based in Colombo, Sri Lanka.
            </p>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                textTransform: 'uppercase',
                letterSpacing: '0.18em',
                color: 'var(--text-400)',
                marginBottom: 10,
              }}
            >
              Pages
            </p>
            <ul
              className="grid grid-cols-2 gap-x-6 gap-y-2"
              style={{ listStyle: 'none', padding: 0, margin: 0 }}
              role="list"
            >
              {navLinks.map(({ name, path }) => (
                <li key={name}>
                  <Link
                    to={path}
                    style={{
                      fontSize: '0.83rem',
                      color: 'var(--text-300)',
                      fontFamily: 'var(--font-body)',
                      transition: 'color 200ms',
                    }}
                    onMouseOver={e => (e.currentTarget.style.color = 'var(--cyan-300)')}
                    onMouseOut={e => (e.currentTarget.style.color = 'var(--text-300)')}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact quick access */}
          <address style={{ fontStyle: 'normal' }}>
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.68rem',
                textTransform: 'uppercase',
                letterSpacing: '0.18em',
                color: 'var(--text-400)',
                marginBottom: 10,
              }}
            >
              Reach Me
            </p>
            <div className="space-y-2">
              <a
                href="mailto:contact@sjaywebsolutions.lk"
                style={{ display: 'block', fontSize: '0.83rem', color: 'var(--text-300)', transition: 'color 200ms' }}
                onMouseOver={e => (e.currentTarget.style.color = 'var(--cyan-300)')}
                onMouseOut={e => (e.currentTarget.style.color = 'var(--text-300)')}
              >
                contact@sjaywebsolutions.lk
              </a>
              <a
                href="tel:+94703999709"
                style={{ display: 'block', fontSize: '0.83rem', color: 'var(--text-300)', transition: 'color 200ms' }}
                onMouseOver={e => (e.currentTarget.style.color = 'var(--cyan-300)')}
                onMouseOut={e => (e.currentTarget.style.color = 'var(--text-300)')}
              >
                +94 70 3999 709
              </a>
              <p style={{ fontSize: '0.83rem', color: 'var(--text-400)' }}>
                Colombo, Sri Lanka
              </p>
            </div>
          </address>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: 'var(--stroke-subtle)', marginBottom: 18 }} aria-hidden="true" />

        {/* Bottom row */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p style={{ fontSize: '0.78rem', color: 'var(--text-400)', fontFamily: 'var(--font-body)' }}>
            &copy; {year}{' '}
            <span style={{ color: 'var(--text-200)', fontWeight: 600 }}>Seneth Jayashan</span>
            {' '}·{' '}
            S JAY Web Solutions (Pvt) Ltd
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-2" role="list" aria-label="Social media links">
            {socialLinks.map(({ icon, href, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label={`${label} (opens in new tab)`}
                role="listitem"
                style={{ width: 36, height: 36, fontSize: '0.85rem' }}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}