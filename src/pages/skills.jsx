import React, { useEffect, useRef } from 'react';
import { animate, stagger } from 'animejs';
import {
  FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt,
  FaJsSquare, FaWordpress, FaDocker, FaGitAlt,
} from 'react-icons/fa';
import {
  SiTailwindcss, SiMongodb, SiExpress, SiNextdotjs,
  SiPostgresql, SiTypescript, SiNestjs,
} from 'react-icons/si';
import { useAnimeIntro, useAnimeStagger, useScrollParallax } from '../hooks/useAnimeMotion';

const skillGroups = [
  {
    group: 'Frontend',
    accent: 'var(--cyan-300)',
    accentBg: 'rgba(34,211,238,0.08)',
    skills: [
      { name: 'React.js',      icon: <FaReact />,       level: 92, years: 2 },
      { name: 'Next.js',       icon: <SiNextdotjs />,   level: 82, years: 1 },
      { name: 'HTML5',         icon: <FaHtml5 />,       level: 97, years: 5 },
      { name: 'CSS3',          icon: <FaCss3Alt />,      level: 92, years: 5 },
      { name: 'JavaScript',    icon: <FaJsSquare />,    level: 85, years: 3 },
      { name: 'TypeScript',    icon: <SiTypescript />,  level: 72, years: 1 },
      { name: 'Tailwind CSS',  icon: <SiTailwindcss />, level: 90, years: 2 },
      { name: 'WordPress',     icon: <FaWordpress />,   level: 90, years: 4 },
    ],
  },
  {
    group: 'Backend',
    accent: 'var(--teal-400)',
    accentBg: 'rgba(45,212,191,0.08)',
    skills: [
      { name: 'Node.js',       icon: <FaNodeJs />,      level: 85, years: 2 },
      { name: 'NestJS',        icon: <SiNestjs />,      level: 78, years: 1 },
      { name: 'Express.js',    icon: <SiExpress />,     level: 82, years: 2 },
      { name: 'PostgreSQL',    icon: <SiPostgresql />,  level: 76, years: 1 },
      { name: 'MongoDB',       icon: <SiMongodb />,     level: 80, years: 2 },
    ],
  },
  {
    group: 'DevOps & Tools',
    accent: 'var(--amber-400)',
    accentBg: 'rgba(251,191,36,0.08)',
    skills: [
      { name: 'Git / GitHub',  icon: <FaGitAlt />,      level: 88, years: 4 },
      { name: 'Docker',        icon: <FaDocker />,      level: 68, years: 1 },
      { name: 'SQL (General)', icon: <FaDatabase />,    level: 80, years: 5 },
    ],
  },
];

function SkillBar({ level, accent }) {
  const barRef = useRef(null);
  useEffect(() => {
    if (!barRef.current) return;
    animate(barRef.current, {
      scaleX: [0, level / 100],
      duration: 1100,
      delay: 200,
      ease: 'outExpo',
    });
  }, [level]);

  return (
    <div className="meter-track">
      <div
        ref={barRef}
        className="meter-fill"
        style={{
          transform: 'scaleX(0)',
          background: `linear-gradient(90deg, ${accent}, var(--cyan-300))`,
        }}
        role="progressbar"
        aria-valuenow={level}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${level}% proficiency`}
      />
    </div>
  );
}

export default function Skills() {
  const scopeRef = useRef(null);

  useAnimeIntro(scopeRef, []);
  useAnimeStagger(scopeRef, '.reveal-item', []);
  useScrollParallax(scopeRef, '.scroll-parallax', []);

  return (
    <section className="page-wrap" ref={scopeRef} aria-labelledby="skills-heading">
      {/* Header */}
      <div className="mb-10 scroll-parallax" data-speed="0.13" data-depth="1.1">
        <p className="section-kicker" data-intro>Skills</p>
        <h1
          id="skills-heading"
          className="section-title mt-2 mb-4"
          data-intro
          style={{ maxWidth: '640px' }}
        >
          Tools I use to build{' '}
          <span className="section-title-accent">robust products.</span>
        </h1>
        <p className="section-copy" data-intro style={{ maxWidth: '500px' }}>
          5 years of hands-on experience across the full web stack —
          from HTML/CSS foundations to modern React, Node.js, and cloud deployments.
        </p>
      </div>

      {/* Skill Groups */}
      <div className="space-y-8">
        {skillGroups.map(({ group, accent, accentBg, skills }) => (
          <div key={group}>
            {/* Group heading */}
            <h2
              className="mb-4 reveal-item"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                textTransform: 'uppercase',
                letterSpacing: '0.18em',
                color: accent,
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              <span style={{ display: 'inline-block', width: 24, height: 1, background: accent, opacity: 0.6 }} aria-hidden="true" />
              {group}
            </h2>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
              {skills.map((skill) => (
                <article
                  key={skill.name}
                  className="glass rounded-2xl p-5 reveal-item card-hover"
                  aria-label={`${skill.name} skill: ${skill.level}% proficiency`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="skill-icon-wrap"
                      style={{ color: accent, background: accentBg, borderColor: `${accent}30` }}
                      aria-hidden="true"
                    >
                      {skill.icon}
                    </div>
                    <div>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', color: 'var(--text-50)', marginBottom: 2 }}>
                        {skill.name}
                      </h3>
                      <p style={{ fontSize: '0.72rem', color: 'var(--text-400)', fontFamily: 'var(--font-mono)' }}>
                        {skill.years} yr{skill.years !== 1 ? 's' : ''} experience
                      </p>
                    </div>
                    <span
                      className="ml-auto"
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.82rem',
                        fontWeight: 600,
                        color: accent,
                      }}
                    >
                      {skill.level}%
                    </span>
                  </div>
                  <SkillBar level={skill.level} accent={accent} />
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Note */}
      <div
        className="glass rounded-2xl p-6 mt-8 reveal-item"
        style={{ borderColor: 'rgba(34,211,238,0.15)' }}
      >
        <p className="section-copy" style={{ fontSize: '0.88rem' }}>
          <span style={{ color: 'var(--cyan-300)', fontWeight: 600 }}>Always learning:</span>{' '}
          Currently deepening expertise in AI/ML integration, Astro.js, and Laravel.
          See the{' '}
          <a href="/roadmap" style={{ color: 'var(--cyan-300)', textDecoration: 'underline', textUnderlineOffset: 3 }}>
            full roadmap
          </a>{' '}
          for next targets.
        </p>
      </div>
    </section>
  );
}