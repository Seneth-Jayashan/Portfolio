import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAnimeIntro, useAnimeStagger, useScrollParallax } from '../hooks/useAnimeMotion';

const projects = [
  {
    title: 'KHB Associates',
    description: 'Corporate website with professional branding, service showcase, and inquiry system for a law & business consulting firm.',
    imageUrl: './khb.png',
    link: '/projects/khb',
    linkType: 'internal',
    tags: ['React', 'Tailwind CSS'],
    category: 'Corporate',
  },
  {
    title: 'CleanWave Laundry',
    description: 'Laundry management system with online booking, order tracking, and customer notifications.',
    imageUrl: '/cleanWave.png',
    link: '/projects/cleanwave',
    linkType: 'internal',
    tags: ['React', 'Node.js', 'MongoDB'],
    category: 'App',
  },
  {
    title: 'KASSS Advertising',
    description: 'Creative advertising agency website with portfolio showcase, branding services, and animated UX.',
    imageUrl: '/kasss.png',
    link: '/projects/kasss',
    linkType: 'internal',
    tags: ['React', 'Framer Motion'],
    category: 'Creative',
  },
  {
    title: 'Mood Meals',
    description: 'Mobile app concept suggesting personalized meal recommendations based on the user\'s emotional state.',
    imageUrl: '/moodmeals.png',
    link: '/projects/moodmeals',
    linkType: 'internal',
    tags: ['React Native', 'AI/ML'],
    category: 'App',
  },
  {
    title: 'Pocket Pilot',
    description: 'Personal finance mobile app for income and expense tracking with data visualisation and budget goals.',
    imageUrl: '/pocketPilot.png',
    link: '/projects/pocketpilot',
    linkType: 'internal',
    tags: ['React Native', 'Charts'],
    category: 'App',
  },
  {
    title: 'CL Towing NYC',
    description: 'Towing company website with 24/7 service locator, live call CTA, and route-based SEO pages.',
    imageUrl: '/clTowing.png',
    link: 'https://onexuniverse.com/projects/',
    linkType: 'external',
    owner: 'OneX Universe',
    tags: ['WordPress', 'SEO'],
    category: 'Corporate',
  },
  {
    title: 'Chrysle Tours',
    description: 'Travel agency website with booking flow, image gallery, tour packages, and multilingual support.',
    imageUrl: '/chrysleTours.png',
    link: 'https://onexuniverse.com/projects/',
    linkType: 'external',
    owner: 'OneX Universe',
    tags: ['React', 'Booking API'],
    category: 'E-commerce',
  },
  {
    title: 'NKASL Karate Dojo',
    description: 'Karate association website with member management, event calendar, and grading system.',
    imageUrl: '/nkasl.png',
    link: 'https://onexuniverse.com/projects/',
    linkType: 'external',
    owner: 'OneX Universe',
    tags: ['WordPress', 'Members'],
    category: 'Corporate',
  },
  {
    title: 'P&P Pet Shop',
    description: 'Pet shop e-commerce website with product catalogue, shopping cart, and secure checkout.',
    imageUrl: '/pandppetshop.png',
    link: 'https://onexuniverse.com/projects/',
    linkType: 'external',
    owner: 'OneX Universe',
    tags: ['WordPress', 'WooCommerce'],
    category: 'E-commerce',
  },
  {
    title: 'VolunteerIX',
    description: 'Multi-organisation volunteer management system with role-based access, event coordination, and reporting.',
    imageUrl: '/comingSoon.png',
    link: 'https://onexuniverse.com/projects/',
    linkType: 'external',
    owner: 'OneX Universe',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    category: 'App',
  },
];

const categories = ['All', 'App', 'Corporate', 'Creative', 'E-commerce'];

export default function Projects() {
  const scopeRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('All');

  useAnimeIntro(scopeRef, []);
  useAnimeStagger(scopeRef, '.reveal-item', []);
  useScrollParallax(scopeRef, '.scroll-parallax', []);

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section className="page-wrap" ref={scopeRef} aria-labelledby="projects-heading">
      {/* Header */}
      <div className="mb-8 scroll-parallax" data-speed="0.14" data-depth="1.1">
        <p className="section-kicker" data-intro>Portfolio</p>
        <h1
          id="projects-heading"
          className="section-title mt-2 mb-4"
          data-intro
          style={{ maxWidth: '680px' }}
        >
          Selected projects with{' '}
          <span className="section-title-accent">real-world impact.</span>
        </h1>

        {/* External hub CTA */}
        <div className="flex flex-wrap gap-3 mb-7" data-intro>
          <a
            href="https://onexuniverse.com/projects/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            aria-label="Visit OneX Universe project hub (opens in new tab)"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
            </svg>
            Visit OneX Project Hub
          </a>
        </div>

        {/* Category filter */}
        <nav aria-label="Project category filter">
          <ul className="flex flex-wrap gap-2" role="list">
            {categories.map(cat => (
              <li key={cat}>
                <button
                  onClick={() => setActiveCategory(cat)}
                  aria-pressed={activeCategory === cat}
                  className="tag-chip transition-all cursor-pointer"
                  style={{
                    background: activeCategory === cat ? 'rgba(34,211,238,0.18)' : undefined,
                    borderColor: activeCategory === cat ? 'rgba(34,211,238,0.5)' : undefined,
                    color: activeCategory === cat ? 'var(--cyan-300)' : undefined,
                    border: 'none',
                    outline: 'none',
                  }}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Project Grid */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 three-d-wrap">
        {filtered.map(({ title, description, imageUrl, link, linkType, owner, tags, category }) => (
          <article
            key={title}
            className="glass rounded-3xl overflow-hidden reveal-item scroll-parallax card-hover flex flex-col"
            data-speed="0.22"
            data-depth="0.85"
            aria-label={`Project: ${title}`}
          >
            {/* Image */}
            <div className="overflow-hidden" style={{ height: 220 }}>
              <img
                src={imageUrl}
                alt={`Screenshot of ${title} project`}
                className="w-full h-full object-cover card-image-zoom"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="p-6 flex flex-col flex-1">
              {/* Category badge */}
              <span
                className="tag-chip tag-amber self-start mb-3"
                style={{ fontSize: '0.68rem' }}
                aria-label={`Category: ${category}`}
              >
                {category}
              </span>

              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '1.2rem',
                  color: 'var(--text-50)',
                  marginBottom: 8,
                  letterSpacing: '-0.015em',
                }}
              >
                {title}
              </h2>

              <p className="section-copy flex-1" style={{ fontSize: '0.88rem' }}>
                {description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {tags.map(tag => (
                  <span key={tag} className="tag-chip" style={{ fontSize: '0.68rem' }}>{tag}</span>
                ))}
              </div>

              {/* Owner attribution */}
              {owner && (
                <p
                  style={{
                    fontSize: '0.7rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.15em',
                    color: 'var(--cyan-300)',
                    marginTop: 10,
                    fontFamily: 'var(--font-mono)',
                    opacity: 0.8,
                  }}
                >
                  via {owner}
                </p>
              )}

              {/* CTA */}
              {linkType === 'internal' ? (
                <Link to={link} className="btn-primary mt-5 project-cta" aria-label={`View ${title} project details`}>
                  View Project
                </Link>
              ) : (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost mt-5 project-cta"
                  aria-label={`View ${title} on ${owner} (opens in new tab)`}
                >
                  View on OneX
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* No results state */}
      {filtered.length === 0 && (
        <div
          className="glass rounded-3xl p-12 text-center"
          style={{ color: 'var(--text-400)' }}
          role="status"
          aria-live="polite"
        >
          <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem' }}>
            No projects in this category yet.
          </p>
        </div>
      )}
    </section>
  );
}