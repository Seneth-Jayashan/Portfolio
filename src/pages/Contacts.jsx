import React, { useRef, useState } from 'react';
import {
  FaEnvelope, FaPhoneAlt, FaMapMarkerAlt,
  FaGlobe, FaFacebookF, FaLinkedinIn, FaWhatsapp, FaGithub,
} from 'react-icons/fa';
import { useAnimeIntro, useAnimeStagger, useScrollParallax } from '../hooks/useAnimeMotion';

const contactDetails = [
  {
    icon: <FaEnvelope size={18} aria-hidden="true" />,
    title: 'Email',
    value: 'contact@sjaywebsolutions.lk',
    link: 'mailto:contact@sjaywebsolutions.lk',
    accentVar: '--cyan-300',
    copyable: true,
  },
  {
    icon: <FaPhoneAlt size={18} aria-hidden="true" />,
    title: 'Phone / WhatsApp',
    value: '+94 70 3999 709',
    link: 'tel:+94703999709',
    accentVar: '--teal-400',
    copyable: true,
  },
  {
    icon: <FaMapMarkerAlt size={18} aria-hidden="true" />,
    title: 'Location',
    value: 'Colombo, Western Province, Sri Lanka',
    link: null,
    accentVar: '--amber-400',
    copyable: false,
  },
  {
    icon: <FaGlobe size={18} aria-hidden="true" />,
    title: 'Website',
    value: 'www.sjaywebsolutions.lk',
    link: 'https://www.sjaywebsolutions.lk',
    accentVar: '--violet-400',
    copyable: false,
  },
];

const socialLinks = [
  { icon: <FaFacebookF aria-hidden="true" />, url: 'https://facebook.com/s.jay20/', label: 'Facebook profile' },
  { icon: <FaLinkedinIn aria-hidden="true" />, url: 'https://www.linkedin.com/company/seneth-jayashan/', label: 'LinkedIn profile' },
  { icon: <FaWhatsapp aria-hidden="true" />, url: 'https://wa.me/94703999709', label: 'WhatsApp chat' },
  { icon: <FaGithub aria-hidden="true" />, url: 'https://github.com/Seneth-Jayashan', label: 'GitHub profile' },
];

function CopyButton({ value }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* fallback silently */
    }
  };

  return (
    <button
      onClick={handleCopy}
      aria-label={copied ? 'Copied!' : `Copy ${value}`}
      style={{
        background: copied ? 'rgba(34,211,238,0.15)' : 'rgba(255,255,255,0.05)',
        border: '1px solid var(--stroke-subtle)',
        borderRadius: 8,
        padding: '4px 10px',
        fontSize: '0.7rem',
        fontFamily: 'var(--font-mono)',
        color: copied ? 'var(--cyan-300)' : 'var(--text-400)',
        cursor: 'pointer',
        transition: 'all 200ms',
        flexShrink: 0,
      }}
    >
      {copied ? 'Copied!' : 'Copy'}
    </button>
  );
}

export default function Contacts() {
  const scopeRef = useRef(null);

  useAnimeIntro(scopeRef, []);
  useAnimeStagger(scopeRef, '.reveal-item', []);
  useScrollParallax(scopeRef, '.scroll-parallax', []);

  return (
    <section
      className="page-wrap"
      ref={scopeRef}
      aria-labelledby="contact-heading"
      itemScope
      itemType="https://schema.org/ContactPage"
    >
      {/* Header */}
      <div className="max-w-3xl scroll-parallax mb-10" data-speed="0.12" data-depth="1.1">
        <p className="section-kicker" data-intro>Contact</p>
        <h1
          id="contact-heading"
          className="section-title mt-2 mb-4"
          data-intro
        >
          Let's build your next{' '}
          <span className="section-title-accent">digital product.</span>
        </h1>
        <p className="section-copy text-lg" data-intro>
          Planning a new website, redesign, or full-stack product? Reach out and I'll help
          shape the best technical path — from concept to launch.
        </p>
      </div>

      {/* Contact Cards Grid */}
      <div
        className="grid md:grid-cols-2 gap-4 mb-5"
        itemScope
        itemType="https://schema.org/LocalBusiness"
      >
        <meta itemProp="name" content="S JAY Web Solutions (Pvt) Ltd" />
        <meta itemProp="url" content="https://www.sjaywebsolutions.lk" />

        {contactDetails.map((item) => (
          <article
            key={item.title}
            className="glass rounded-2xl p-6 reveal-item scroll-parallax card-hover flex items-start gap-4"
            data-speed="0.2"
            data-depth="0.85"
            aria-label={`Contact method: ${item.title}`}
          >
            {/* Icon */}
            <div
              className="skill-icon-wrap flex-shrink-0"
              style={{
                color: `var(${item.accentVar})`,
                background: `var(${item.accentVar})18`,
                borderColor: `var(${item.accentVar})30`,
                width: 44,
                height: 44,
                fontSize: '1rem',
              }}
            >
              {item.icon}
            </div>

            <div className="flex-1 min-w-0">
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.18em',
                  color: 'var(--text-400)',
                  marginBottom: 4,
                }}
              >
                {item.title}
              </p>

              <div className="flex items-center justify-between gap-2 flex-wrap">
                {item.link ? (
                  <a
                    href={item.link}
                    itemProp={item.title === 'Email' ? 'email' : item.title === 'Phone / WhatsApp' ? 'telephone' : 'url'}
                    target={item.link.startsWith('http') ? '_blank' : undefined}
                    rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    style={{
                      color: `var(${item.accentVar})`,
                      fontWeight: 600,
                      fontSize: '0.95rem',
                      wordBreak: 'break-word',
                      transition: 'opacity 200ms',
                    }}
                    onMouseOver={e => (e.currentTarget.style.opacity = '0.75')}
                    onMouseOut={e => (e.currentTarget.style.opacity = '1')}
                  >
                    {item.value}
                  </a>
                ) : (
                  <p
                    style={{ color: 'var(--text-200)', fontWeight: 500, fontSize: '0.95rem' }}
                    itemProp="address"
                  >
                    {item.value}
                  </p>
                )}

                {item.copyable && <CopyButton value={item.value} />}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Social Links */}
      <div
        className="glass rounded-2xl p-6 reveal-item scroll-parallax"
        data-speed="0.16"
        data-depth="0.9"
      >
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            textTransform: 'uppercase',
            letterSpacing: '0.18em',
            color: 'var(--text-400)',
            marginBottom: 14,
          }}
        >
          Find me on
        </p>
        <div className="flex gap-3" role="list" aria-label="Social media links">
          {socialLinks.map((social) => (
            <a
              key={social.url}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn"
              aria-label={`${social.label} (opens in new tab)`}
              role="listitem"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Availability notice */}
      <div
        className="glass rounded-2xl p-6 mt-4 reveal-item"
        style={{
          background: 'rgba(20,212,150,0.05)',
          borderColor: 'rgba(20,212,150,0.2)',
        }}
      >
        <div className="flex items-center gap-3 flex-wrap">
          <span
            style={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              background: '#4ade80',
              boxShadow: '0 0 8px 2px rgba(74,222,128,0.5)',
              display: 'inline-block',
              flexShrink: 0,
            }}
            aria-hidden="true"
          />
          <p style={{ color: '#86efac', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
            Currently available for new projects — typical response within 24 hours.
          </p>
        </div>
      </div>
    </section>
  );
}