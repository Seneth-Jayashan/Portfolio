import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useAnimeIntro, useAnimeStagger, useScrollParallax } from '../hooks/useAnimeMotion';

const highlights = [
  { label: 'Founded', value: '2022', accent: 'text-gradient-cyan' },
  { label: 'Projects', value: '20+', accent: 'text-gradient-amber' },
  { label: 'Clients', value: 'Global', accent: 'text-gradient-violet' },
];

const values = [
  {
    title: 'Engineering First',
    desc: 'Clean, maintainable code and robust architecture — not shortcuts. Every build is made to last and scale.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    accent: 'var(--cyan-300)',
  },
  {
    title: 'Brand Aware',
    desc: 'Design is not decoration — it is communication. I align every pixel with the brand story and business objective.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
    accent: 'var(--teal-400)',
  },
  {
    title: 'Outcome Focused',
    desc: 'Speed, accessibility, and conversions are baked in from the start — not bolted on after.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    accent: 'var(--amber-400)',
  },
];

export default function About() {
  const scopeRef = useRef(null);

  useAnimeIntro(scopeRef, []);
  useAnimeStagger(scopeRef, '.reveal-item', []);
  useScrollParallax(scopeRef, '.scroll-parallax', []);

  return (
    <section className="page-wrap" ref={scopeRef} aria-labelledby="about-heading">
      {/* ── Top Grid ── */}
      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6 items-stretch">
        {/* Main Bio Card */}
        <div
          className="glass rounded-3xl p-8 md:p-10 scroll-parallax"
          data-speed="0.12"
          data-depth="1.05"
        >
          <p className="section-kicker" data-intro>About</p>

          <h1
            id="about-heading"
            className="section-title mt-3 mb-5"
            data-intro
          >
            Engineering-forward,{' '}
            <span className="section-title-accent">brand-aware</span>{' '}
            digital work.
          </h1>

          <p className="section-copy text-lg mb-4" data-intro>
            I'm{' '}
            <strong style={{ color: 'var(--text-50)', fontWeight: 600 }}>
              Seneth Jayashan
            </strong>
            , founder of{' '}
            <strong style={{ color: 'var(--cyan-300)', fontWeight: 600 }}>
              S JAY Web Solutions (Pvt) Ltd
            </strong>
            . I partner with startups and established businesses to design and
            develop websites that are visually strong and technically dependable.
          </p>

          <p className="section-copy mb-5" data-intro>
            My process blends strategy, UX, and full-stack execution. Every
            build is focused on performance, accessibility, and real-world
            business outcomes — from first commit to live deployment.
          </p>

          {/* Highlight stats */}
          <div className="grid grid-cols-3 gap-4 pt-4 border-t" style={{ borderColor: 'var(--stroke-subtle)' }}>
            {highlights.map(({ label, value, accent }) => (
              <div key={label}>
                <p className={`stat-value text-2xl mb-1 ${accent}`}>{value}</p>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-400)', fontFamily: 'var(--font-mono)' }}>
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Panel */}
        <div className="flex flex-col gap-4">
          {values.map(({ title, desc, icon, accent }, i) => (
            <article
              key={title}
              className="glass rounded-2xl p-5 reveal-item card-hover flex items-start gap-4 scroll-parallax"
              data-speed={0.18 + i * 0.05}
              data-depth="0.85"
            >
              <div
                className="skill-icon-wrap flex-shrink-0"
                style={{ color: accent }}
                aria-hidden="true"
              >
                {icon}
              </div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-50)', marginBottom: 6 }}>
                  {title}
                </h3>
                <p className="section-copy" style={{ fontSize: '0.9rem' }}>{desc}</p>
              </div>
            </article>
          ))}

          {/* Company badge */}
          <div
            className="glass rounded-2xl p-5 reveal-item flex items-center gap-4 scroll-parallax"
            data-speed="0.32"
            data-depth="0.85"
          >
            <img
              src="/logo.png"
              alt="S JAY Web Solutions company logo"
              className="w-16 h-16 rounded-xl"
              style={{ border: '1px solid rgba(34,211,238,0.3)', objectFit: 'cover' }}
            />
            <div>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-50)', marginBottom: 4 }}>
                S JAY Web Solutions
              </p>
              <p className="section-copy" style={{ fontSize: '0.83rem' }}>
                Trusted for premium execution, practical architecture, and long-term maintainability.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── CTA Row ── */}
      <div
        className="mt-8 flex flex-wrap gap-3"
        aria-label="Call to action"
      >
        <Link to="/projects" className="btn-primary">View Projects</Link>
        <Link to="/contact" className="btn-ghost">Let's Work Together</Link>
      </div>
    </section>
  );
}