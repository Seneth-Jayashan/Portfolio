import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAnimeIntro, useAnimeStagger } from '../hooks/useAnimeMotion';

const BASE_URL = 'https://www.sjaywebsolutions.lk';

/**
 * ProjectDetail — reusable project case-study layout
 *
 * Props:
 *   title       {string}   Project name
 *   description {string}   Long description
 *   image       {string}   Image path
 *   imageAlt    {string}   Alt text for image
 *   highlights  {string[]} Bullet highlights
 *   tags        {string[]} Tech stack chips
 *   ctaLabel    {string}   CTA button text
 *   ctaHref     {string}   CTA href (external)
 *   year        {string}   Year of project
 *   category    {string}   Project category
 */
export default function ProjectDetail({
  title,
  description,
  image,
  imageAlt,
  highlights = [],
  tags = [],
  ctaLabel,
  ctaHref,
  year,
  category,
}) {
  const scopeRef = useRef(null);

  useAnimeIntro(scopeRef, []);
  useAnimeStagger(scopeRef, '.reveal-item', []);

  /* Per-project SEO */
  useEffect(() => {
    if (!title) return;
    const prev = document.title;
    document.title = `${title} — Project Case Study | S JAY Web Solutions`;

    /* OG */
    const setMeta = (prop, val, useProperty = false) => {
      const attr = useProperty ? 'property' : 'name';
      let el = document.querySelector(`meta[${attr}="${prop}"]`);
      if (!el) { el = document.createElement('meta'); el.setAttribute(attr, prop); document.head.appendChild(el); }
      el.setAttribute('content', val);
    };
    setMeta('description', `${description?.slice(0, 155)}…`);
    setMeta('og:title', `${title} — Case Study | S JAY Web Solutions`, true);
    setMeta('og:description', description, true);
    if (image) setMeta('og:image', `${BASE_URL}${image}`, true);

    /* Project structured data */
    const sd = {
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      name: title,
      description,
      creator: { '@type': 'Person', name: 'Seneth Jayashan', url: BASE_URL },
      ...(year && { dateCreated: year }),
      ...(category && { genre: category }),
      ...(ctaHref && { url: ctaHref }),
    };
    let el = document.getElementById('sd-project');
    if (!el) { el = document.createElement('script'); el.id = 'sd-project'; el.type = 'application/ld+json'; document.head.appendChild(el); }
    el.textContent = JSON.stringify(sd);

    return () => {
      document.title = prev;
      document.getElementById('sd-project')?.remove();
    };
  }, [title, description, image, year, category, ctaHref]);

  return (
    <section
      className="page-wrap"
      ref={scopeRef}
      aria-labelledby="project-detail-heading"
      itemScope
      itemType="https://schema.org/CreativeWork"
    >
      <meta itemProp="name" content={title} />
      {year && <meta itemProp="dateCreated" content={year} />}

      {/* Back nav */}
      <div className="mb-6" data-intro>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm"
          style={{
            color: 'var(--text-400)',
            fontFamily: 'var(--font-mono)',
            transition: 'color 200ms',
          }}
          onMouseOver={e => (e.currentTarget.style.color = 'var(--cyan-300)')}
          onMouseOut={e => (e.currentTarget.style.color = 'var(--text-400)')}
          aria-label="Back to all projects"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          All Projects
        </Link>
      </div>

      {/* Main grid */}
      <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-6 items-start">

        {/* Image panel */}
        <div
          className="glass rounded-3xl p-4 overflow-hidden reveal-item"
          style={{ position: 'sticky', top: 'calc(var(--nav-h) + 1.5rem)' }}
        >
          <img
            src={image}
            alt={imageAlt || `${title} project screenshot`}
            className="w-full rounded-2xl object-cover"
            style={{ maxHeight: 500, minHeight: 240 }}
            loading="eager"
            decoding="async"
            itemProp="image"
          />

          {/* Meta chips below image */}
          {(year || category) && (
            <div className="flex flex-wrap gap-2 mt-4 px-1">
              {year && (
                <span className="tag-chip tag-amber" style={{ fontSize: '0.7rem' }}>
                  {year}
                </span>
              )}
              {category && (
                <span className="tag-chip" style={{ fontSize: '0.7rem' }}>
                  {category}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Content panel */}
        <div className="glass rounded-3xl p-7 md:p-9">
          <p className="section-kicker" data-intro>
            Project Case Study
          </p>

          <h1
            id="project-detail-heading"
            className="section-title mt-3 mb-5"
            data-intro
            itemProp="name"
          >
            {title}
          </h1>

          <p
            className="section-copy mb-6"
            data-intro
            style={{ fontSize: '1rem' }}
            itemProp="description"
          >
            {description}
          </p>

          {/* Highlights */}
          {highlights.length > 0 && (
            <div className="mb-6">
              <h2
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.18em',
                  color: 'var(--text-400)',
                  marginBottom: 12,
                }}
              >
                Key Highlights
              </h2>
              <ul
                className="space-y-3"
                aria-label="Project highlights"
              >
                {highlights.map((point) => (
                  <li
                    key={point}
                    className="reveal-item flex items-start gap-3"
                  >
                    <span
                      aria-hidden="true"
                      style={{
                        display: 'inline-block',
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        background: 'var(--cyan-400)',
                        marginTop: 8,
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        color: 'var(--text-200)',
                        fontSize: '0.9rem',
                        lineHeight: 1.7,
                      }}
                    >
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech stack tags */}
          {tags.length > 0 && (
            <div className="mb-7">
              <h2
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.18em',
                  color: 'var(--text-400)',
                  marginBottom: 10,
                }}
              >
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {tags.map((item) => (
                  <span key={item} className="tag-chip reveal-item">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          {ctaLabel && ctaHref && (
            <div className="flex flex-wrap gap-3 pt-2 border-t" style={{ borderColor: 'var(--stroke-subtle)' }}>
              <a
                href={ctaHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                aria-label={`${ctaLabel} (opens in new tab)`}
                itemProp="url"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                {ctaLabel}
              </a>
              <Link to="/contact" className="btn-ghost">
                Discuss a Similar Project
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}