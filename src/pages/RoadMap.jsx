import React, { useRef } from 'react';
import {
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDatabase,
  FaWordpress, FaJs, FaPhp, FaLaravel, FaDocker, FaGitAlt,
} from 'react-icons/fa';
import {
  SiMongodb, SiExpress, SiNextdotjs, SiGraphql,
  SiTailwindcss, SiTensorflow, SiPython, SiAstro, SiNestjs,
} from 'react-icons/si';
import { useAnimeIntro, useAnimeStagger, useScrollParallax } from '../hooks/useAnimeMotion';

const roadmap = [
  {
    year: '2020',
    label: 'The Foundation',
    frontend: [
      { name: 'HTML5',      icon: <FaHtml5 /> },
      { name: 'CSS3',       icon: <FaCss3Alt /> },
    ],
    backend: [
      { name: 'SQL',        icon: <FaDatabase /> },
      { name: 'PHP',        icon: <FaPhp /> },
    ],
    note: 'Built my first dynamic web pages with server-side rendering.',
  },
  {
    year: '2021',
    label: 'CMS Era',
    frontend: [
      { name: 'WordPress',  icon: <FaWordpress /> },
    ],
    backend: [],
    note: 'Delivered client sites and learned real-world deployment workflows.',
  },
  {
    year: '2022',
    label: 'JavaScript Deep Dive',
    frontend: [
      { name: 'JavaScript', icon: <FaJs /> },
    ],
    backend: [],
    note: 'Mastered ES6+, DOM manipulation, async patterns, and module bundling.',
  },
  {
    year: '2024',
    label: 'Modern Full-Stack',
    frontend: [
      { name: 'React.js',    icon: <FaReact /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    ],
    backend: [
      { name: 'Node.js',     icon: <FaNodeJs /> },
      { name: 'Express.js',  icon: <SiExpress /> },
      { name: 'MongoDB',     icon: <SiMongodb /> },
    ],
    note: 'Launched SaaS-style apps with JWT auth, REST APIs, and React front-ends.',
  },
  {
    year: '2025',
    label: 'Advanced Engineering',
    frontend: [
      { name: 'Next.js',     icon: <SiNextdotjs /> },
      { name: 'UI/UX Design', icon: <FaGitAlt /> },
    ],
    backend: [
      { name: 'NestJS',      icon: <SiNestjs /> },
      { name: 'Docker',      icon: <FaDocker /> },
      { name: 'GraphQL',     icon: <SiGraphql /> },
    ],
    note: 'Building production-grade systems with modular architecture, TypeScript, and containerization.',
    active: true,
  },
  {
    year: '2026',
    label: 'Expanding the Stack',
    frontend: [
      { name: 'Astro.js',    icon: <SiAstro /> },
    ],
    backend: [
      { name: 'Laravel',     icon: <FaLaravel /> },
    ],
    note: 'Targeting static-site performance with Astro and PHP/Laravel ecosystem fluency.',
  },
  {
    year: '2027',
    label: 'AI/ML Frontier',
    frontend: [],
    backend: [],
    isTarget: true,
    nextTarget: {
      frontend: [{ name: 'AI Integration',  icon: <SiTensorflow /> }],
      backend:  [{ name: 'ML Engineering',  icon: <SiPython /> }],
    },
    note: 'Moving into intelligent application layers — LLMs, embeddings, and data pipelines.',
  },
];

export default function RoadmapTimeline() {
  const scopeRef = useRef(null);

  useAnimeIntro(scopeRef, []);
  useAnimeStagger(scopeRef, '.reveal-item', []);
  useScrollParallax(scopeRef, '.scroll-parallax', []);

  return (
    <section className="page-wrap" ref={scopeRef} aria-labelledby="roadmap-heading">
      {/* Header */}
      <div className="mb-10 scroll-parallax" data-speed="0.13" data-depth="1.1">
        <p className="section-kicker" data-intro>Roadmap</p>
        <h1
          id="roadmap-heading"
          className="section-title mt-2"
          data-intro
          style={{ maxWidth: '680px' }}
        >
          Learning timeline &amp;{' '}
          <span className="section-title-accent">next milestones.</span>
        </h1>
      </div>

      {/* Timeline */}
      <div className="relative ml-8 md:ml-10 space-y-5">
        {/* Vertical line */}
        <div
          className="timeline-line"
          aria-hidden="true"
          style={{ left: '-29px' }}
        />

        {roadmap.map((section, index) => (
          <article
            key={index}
            className={`glass rounded-3xl p-6 md:p-7 reveal-item relative scroll-parallax ${
              section.active ? 'ring-2 ring-cyan-400/40' : ''
            }`}
            data-speed="0.1"
            data-depth="0.9"
            aria-label={`${section.year}: ${section.label}`}
          >
            {/* Timeline dot */}
            <div
              className="timeline-dot"
              aria-hidden="true"
              style={{
                background: section.isTarget
                  ? 'var(--amber-400)'
                  : section.active
                    ? 'var(--cyan-400)'
                    : 'var(--teal-500)',
                boxShadow: section.active
                  ? '0 0 0 5px rgba(34,211,238,0.15), 0 0 20px rgba(34,211,238,0.3)'
                  : '0 0 0 4px rgba(20,184,166,0.12)',
              }}
            />

            {/* Year + label row */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: '1.6rem',
                  letterSpacing: '-0.03em',
                  lineHeight: 1,
                  background: section.isTarget
                    ? 'linear-gradient(120deg, var(--amber-400), var(--amber-300))'
                    : 'linear-gradient(120deg, var(--cyan-300), var(--teal-400))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {section.year}
              </h2>
              <span
                className="tag-chip"
                style={
                  section.isTarget
                    ? { borderColor: 'rgba(251,191,36,0.3)', background: 'rgba(251,191,36,0.08)', color: 'var(--amber-300)' }
                    : section.active
                      ? { borderColor: 'rgba(34,211,238,0.4)', background: 'rgba(34,211,238,0.12)', color: 'var(--cyan-300)' }
                      : {}
                }
              >
                {section.isTarget ? '🎯 Next Target' : section.active ? '⚡ Current' : section.label}
              </span>
            </div>

            {/* Note */}
            {section.note && (
              <p
                className="section-copy mb-5"
                style={{ fontSize: '0.88rem', maxWidth: '600px' }}
              >
                {section.note}
              </p>
            )}

            {/* Skills grid */}
            {!section.isTarget && (
              <div className="grid md:grid-cols-2 gap-4">
                {section.frontend.length > 0 && (
                  <div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.7rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.18em',
                        color: 'var(--text-400)',
                        marginBottom: 8,
                      }}
                    >
                      Frontend
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {section.frontend.map((item, i) => (
                        <span key={i} className="tag-chip flex items-center gap-2">
                          <span aria-hidden="true">{item.icon}</span>
                          {item.name}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {section.backend.length > 0 && (
                  <div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.7rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.18em',
                        color: 'var(--text-400)',
                        marginBottom: 8,
                      }}
                    >
                      Backend
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {section.backend.map((item, i) => (
                        <span key={i} className="tag-chip flex items-center gap-2">
                          <span aria-hidden="true">{item.icon}</span>
                          {item.name}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Next Target block */}
            {section.nextTarget && (
              <div
                className="rounded-2xl p-5 mt-2"
                style={{
                  background: 'rgba(251,191,36,0.06)',
                  border: '1px solid rgba(251,191,36,0.2)',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.18em',
                    color: 'var(--amber-300)',
                    marginBottom: 12,
                  }}
                >
                  Target Skills
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex flex-wrap gap-2">
                    {section.nextTarget.frontend.map((item, i) => (
                      <span key={i} className="tag-chip tag-amber flex items-center gap-2">
                        <span aria-hidden="true">{item.icon}</span>
                        {item.name}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {section.nextTarget.backend.map((item, i) => (
                      <span key={i} className="tag-chip tag-amber flex items-center gap-2">
                        <span aria-hidden="true">{item.icon}</span>
                        {item.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}