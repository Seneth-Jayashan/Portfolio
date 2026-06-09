import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  FaCode, FaPaintBrush, FaServer, FaTools, FaWordpress, FaRocket,
} from 'react-icons/fa';
import { useAnimeIntro, useAnimeStagger, useScrollParallax } from '../hooks/useAnimeMotion';

const services = [
  {
    icon: <FaCode aria-hidden="true" />,
    title: 'Frontend Development',
    description:
      'Beautiful, performant interfaces built with React and Next.js. Animated interactions with Anime.js, micro-details with Tailwind CSS, and pixel-precise responsiveness across every device.',
    tags: ['React', 'Next.js', 'Tailwind CSS', 'Anime.js'],
    accent: 'var(--cyan-300)',
    featured: true,
  },
  {
    icon: <FaServer aria-hidden="true" />,
    title: 'Backend Development',
    description:
      'Scalable REST and GraphQL APIs with Node.js, NestJS, and Express. TypeORM + PostgreSQL or MongoDB — designed for reliability, security, and growth.',
    tags: ['Node.js', 'NestJS', 'PostgreSQL', 'MongoDB'],
    accent: 'var(--teal-400)',
    featured: false,
  },
  {
    icon: <FaPaintBrush aria-hidden="true" />,
    title: 'UI/UX Design',
    description:
      'User research, wireframes, and polished design systems. Clean, accessible interfaces that convert visitors into customers and delight them on return.',
    tags: ['Figma', 'Design Systems', 'Accessibility', 'UX Research'],
    accent: 'var(--violet-400)',
    featured: false,
  },
  {
    icon: <FaRocket aria-hidden="true" />,
    title: 'Full-Stack Products',
    description:
      'End-to-end web application builds from zero — covering auth, dashboards, notifications, payments, and deployment pipelines on Vercel or custom servers.',
    tags: ['Full-Stack', 'Auth', 'Deployment', 'CI/CD'],
    accent: 'var(--amber-400)',
    featured: false,
  },
  {
    icon: <FaWordpress aria-hidden="true" />,
    title: 'WordPress Development',
    description:
      'Custom WordPress themes, plugins, WooCommerce setups, and speed optimization. Fast-loading, SEO-friendly, and easy for your team to manage.',
    tags: ['WordPress', 'WooCommerce', 'Custom Themes', 'SEO'],
    accent: 'var(--cyan-300)',
    featured: false,
  },
  {
    icon: <FaTools aria-hidden="true" />,
    title: 'Maintenance & Optimization',
    description:
      'Ongoing updates, security patching, Core Web Vitals optimization, and performance monitoring. Peace of mind so you can focus on your business.',
    tags: ['Core Web Vitals', 'Security', 'Monitoring', 'SEO'],
    accent: 'var(--rose-400)',
    featured: false,
  },
];

export default function Services() {
  const scopeRef = useRef(null);

  useAnimeIntro(scopeRef, []);
  useAnimeStagger(scopeRef, '.reveal-item', []);
  useScrollParallax(scopeRef, '.scroll-parallax', []);

  return (
    <section className="page-wrap" ref={scopeRef} aria-labelledby="services-heading">
      {/* Header */}
      <div className="mb-10 scroll-parallax" data-speed="0.13" data-depth="1.1">
        <p className="section-kicker" data-intro>Services</p>
        <h1
          id="services-heading"
          className="section-title mt-2 mb-4"
          data-intro
          style={{ maxWidth: '720px' }}
        >
          End-to-end web services for{' '}
          <span className="section-title-accent">serious growth.</span>
        </h1>
        <p className="section-copy text-lg" data-intro style={{ maxWidth: '560px' }}>
          From a single landing page to a full-stack SaaS product — I handle the whole stack with care and craft.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
        {services.map((service, index) => (
          <article
            key={service.title}
            className="glass rounded-3xl p-7 reveal-item scroll-parallax card-hover flex flex-col"
            data-speed="0.2"
            data-depth="0.85"
            aria-label={`Service: ${service.title}`}
          >
            {/* Icon */}
            <div
              className="skill-icon-wrap mb-5"
              style={{ color: service.accent, background: `${service.accent}18`, borderColor: `${service.accent}30` }}
            >
              {service.icon}
            </div>

            {/* Title */}
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '1.15rem',
                color: 'var(--text-50)',
                marginBottom: 10,
                letterSpacing: '-0.01em',
              }}
            >
              {service.title}
            </h2>

            {/* Description */}
            <p className="section-copy mb-5 flex-1" style={{ fontSize: '0.9rem' }}>
              {service.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {service.tags.map(tag => (
                <span key={tag} className="tag-chip" style={{ fontSize: '0.7rem' }}>
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      {/* Custom Combo Banner */}
      <div
        className="glass rounded-3xl p-7 mt-6 reveal-item scroll-parallax"
        data-speed="0.15"
        data-depth="0.95"
        style={{ borderColor: 'rgba(34,211,238,0.2)' }}
      >
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div style={{ maxWidth: '560px' }}>
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '1.1rem',
                color: 'var(--text-50)',
                marginBottom: 8,
              }}
            >
              Need a custom combination?
            </p>
            <p className="section-copy" style={{ fontSize: '0.9rem' }}>
              I can handle design systems, third-party API integrations, database migrations,
              performance optimization, and more — tailored to your project scope.
            </p>
          </div>
          <Link to="/contact" className="btn-primary flex-shrink-0">
            Discuss Your Project
          </Link>
        </div>
      </div>
    </section>
  );
}