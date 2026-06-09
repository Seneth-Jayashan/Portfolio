import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  useAnimeIntro,
  useAnimeStagger,
  useAnimeFloat,
  useMouseParallax,
  useScrollParallax,
} from '../hooks/useAnimeMotion';

const stats = [
  { value: '20+',    label: 'Projects shipped',  accent: 'text-gradient-cyan' },
  { value: '5 yrs',  label: 'Engineering depth',  accent: 'text-gradient-amber' },
  { value: 'Global', label: 'Clients & audiences', accent: 'text-gradient-violet' },
];

const techStack = ['React', 'Next.js', 'Node.js', 'NestJS', 'Tailwind CSS', 'PostgreSQL'];

export default function Home() {
  const scopeRef = useRef(null);

  useAnimeIntro(scopeRef, []);
  useAnimeStagger(scopeRef, '.reveal-item', []);
  useAnimeFloat(scopeRef, '.float-item', []);
  useMouseParallax(scopeRef, '.parallax-layer', []);
  useScrollParallax(scopeRef, '.scroll-parallax', []);

  return (
    <section
      className="page-wrap grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center"
      ref={scopeRef}
      aria-label="Hero section"
    >
      {/* ── Left Column ── */}
      <div
        className="space-y-7 scroll-parallax"
        data-speed="0.12"
        data-depth="1.05"
      >
        {/* Kicker */}
        <p className="section-kicker" data-intro aria-label="Section category">
          Full-Stack Web Developer · Sri Lanka
        </p>

        {/* Headline — H1 for SEO */}
        <h1 className="section-title" data-intro>
          Seneth Jayashan builds{' '}
          <span className="section-title-accent">digital products</span>{' '}
          that feel fast &amp; unforgettable.
        </h1>

        {/* Sub-copy */}
        <p className="section-copy text-lg max-w-xl" data-intro>
          Founder of{' '}
          <strong style={{ color: 'var(--cyan-300)', fontWeight: 600 }}>
            S JAY Web Solutions
          </strong>
          . I design and engineer full-stack web products with clean visuals,
          conversion-focused UX, and reliable architecture.
        </p>

        {/* CTA Row */}
        <div className="flex flex-wrap gap-3" data-intro>
          <Link to="/projects" className="btn-primary" aria-label="View my portfolio projects">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            Explore Projects
          </Link>
          <Link to="/contact" className="btn-ghost" aria-label="Contact me to start a project">
            Start a Conversation
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-3 gap-3 pt-2">
          {stats.map(({ value, label, accent }) => (
            <div
              key={label}
              className="glass rounded-2xl p-5 reveal-item scroll-parallax card-hover"
              data-speed="0.2"
              data-depth="0.7"
            >
              <p className={`stat-value text-3xl mb-1 ${accent}`}>{value}</p>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-300)', fontFamily: 'var(--font-mono)' }}>
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Right Column — 3D Scene ── */}
      <div
        className="three-d-wrap scroll-parallax"
        data-speed="0.18"
        data-depth="1.25"
        aria-hidden="true"
      >
        <div className="three-d-scene p-7 md:p-9">
          <div className="depth-ring one parallax-layer" data-depth="28" />
          <div className="depth-ring two parallax-layer" data-depth="16" />
          <div className="depth-ring three parallax-layer" data-depth="10" />

          {/* Gradient overlay */}
          <div
            className="absolute inset-0 parallax-layer"
            data-depth="8"
            style={{
              background: 'radial-gradient(ellipse 70% 60% at 30% 20%, rgba(34,211,238,0.08) 0%, transparent 60%), radial-gradient(ellipse 50% 50% at 80% 80%, rgba(251,191,36,0.06) 0%, transparent 60%)',
              pointerEvents: 'none',
            }}
          />

          <div className="relative z-10 space-y-6">
            <h2
              className="float-item parallax-layer"
              data-depth="22"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                fontWeight: 700,
                letterSpacing: '-0.025em',
                color: 'var(--text-50)',
              }}
            >
              From idea to launch,<br />
              <span className="text-gradient-cyan">with polish.</span>
            </h2>

            <p className="section-copy float-item parallax-layer" data-depth="16" style={{ maxWidth: '92%' }}>
              Business clarity + engineering quality: practical architecture,
              robust APIs, and animated interfaces that feel alive.
            </p>

            {/* Tech chips */}
            <div className="flex flex-wrap gap-2 float-item parallax-layer" data-depth="26">
              {techStack.map(tech => (
                <span key={tech} className="tag-chip">{tech}</span>
              ))}
            </div>

            {/* Mini stats */}
            <div className="grid grid-cols-2 gap-3 parallax-layer" data-depth="20">
              <div className="glass-subtle rounded-2xl p-4">
                <p style={{ fontSize: '0.75rem', color: 'var(--text-400)', fontFamily: 'var(--font-mono)', marginBottom: 6 }}>
                  Performance feel
                </p>
                <p className="text-gradient-cyan" style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.2rem' }}>
                  Fast + Smooth
                </p>
              </div>
              <div className="glass-subtle rounded-2xl p-4">
                <p style={{ fontSize: '0.75rem', color: 'var(--text-400)', fontFamily: 'var(--font-mono)', marginBottom: 6 }}>
                  Motion depth
                </p>
                <p className="text-gradient-amber" style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.2rem' }}>
                  3D Parallax
                </p>
              </div>
            </div>

            {/* Availability badge */}
            <div
              className="float-item parallax-layer inline-flex items-center gap-2 rounded-full"
              data-depth="18"
              style={{
                padding: '8px 16px',
                background: 'rgba(20, 212, 150, 0.10)',
                border: '1px solid rgba(20, 212, 150, 0.25)',
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: '#4ade80',
                  boxShadow: '0 0 8px 2px rgba(74,222,128,0.5)',
                  display: 'inline-block',
                }}
                aria-hidden="true"
              />
              <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: '#86efac' }}>
                Available for new projects
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}