import React, { useRef } from 'react';
import { useAnimeIntro, useAnimeStagger } from '../hooks/useAnimeMotion';

export default function ProjectDetail({
  title,
  description,
  image,
  imageAlt,
  highlights = [],
  tags = [],
  ctaLabel,
  ctaHref,
}) {
  const scopeRef = useRef(null);

  useAnimeIntro(scopeRef, []);
  useAnimeStagger(scopeRef, '.reveal-item', []);

  return (
    <section className="page-wrap" ref={scopeRef}>
      <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-6 items-stretch">
        <div className="glass rounded-3xl p-5 md:p-6 flex items-center justify-center reveal-item">
          <img src={image} alt={imageAlt || title} className="w-full rounded-2xl object-cover max-h-[520px]" />
        </div>

        <div className="glass rounded-3xl p-6 md:p-8 lg:p-10">
          <p className="section-kicker" data-intro>
            Project Case Study
          </p>
          <h2 className="section-title mt-2 mb-4" data-intro>
            {title}
          </h2>
          <p className="section-copy mb-6" data-intro>
            {description}
          </p>

          <ul className="space-y-2 mb-6 text-slate-200/90">
            {highlights.map((point) => (
              <li key={point} className="reveal-item">
                • {point}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 mb-7">
            {tags.map((item) => (
              <span key={item} className="tag-chip reveal-item">
                {item}
              </span>
            ))}
          </div>

          {ctaLabel && ctaHref && (
            <a href={ctaHref} target="_blank" rel="noopener noreferrer" className="btn-primary">
              {ctaLabel}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
