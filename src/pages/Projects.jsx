import React from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useAnimeIntro, useAnimeStagger, useScrollParallax } from '../hooks/useAnimeMotion';

const projects = [
  {
    title: 'KHB Associates',
    description: 'Custom website development for corporate clients.',
    imageUrl: './khb.png',
    link: '/projects/khb',
    linkType: 'internal',
  },
  {
    title: 'CleanWave Laundry',
    description: 'Laundry management system with online booking.',
    imageUrl: '/cleanWave.png',
    link: '/projects/cleanwave',
    linkType: 'internal',
  },
  {
    title: 'KASSS Advertising',
    description: 'Creative and modern advertising and branding website.',
    imageUrl: '/kasss.png',
    link: '/projects/kasss',
    linkType: 'internal',
  },
  {
    title: 'Mood Meals',
    description: 'Mobile app to suggest meals based on user mood.',
    imageUrl: '/moodmeals.png',
    link: '/projects/moodmeals',
    linkType: 'internal',
  },
  {
    title: 'Pocket Pilot',
    description: 'Mobile app for income and outgoing management.',
    imageUrl: '/pocketPilot.png',
    link: '/projects/pocketpilot',
    linkType: 'internal',
  },
  {
    title: 'CL Towing NYC',
    description: 'Towing company website with service locator.',
    imageUrl: '/clTowing.png',
    link: 'https://onexuniverse.com/projects/',
    linkType: 'external',
    owner: 'OneX Universe',
  },
  {
    title: 'Chrysle Tours',
    description: 'Travel agency website with booking & gallery features.',
    imageUrl: '/chrysleTours.png',
    link: 'https://onexuniverse.com/projects/',
    linkType: 'external',
    owner: 'OneX Universe',
  },
  {
    title: 'NKASL Karate Dojo',
    description: 'Karate club website with member management.',
    imageUrl: '/nkasl.png',
    link: 'https://onexuniverse.com/projects/',
    linkType: 'external',
    owner: 'OneX Universe',
  },
  {
    title: 'P&P Pet Shop',
    description: 'Pet shop e-commerce website with shopping cart.',
    imageUrl: '/pandppetshop.png',
    link: 'https://onexuniverse.com/projects/',
    linkType: 'external',
    owner: 'OneX Universe',
  },
  {
    title: 'VolunteerIX',
    description: 'Volunteer management system built for multi-organization support as part of OneX Universe.',
    imageUrl: '/comingSoon.png',
    link: 'https://onexuniverse.com/projects/',
    linkType: 'external',
    owner: 'OneX Universe',
  },
];

export default function Projects() {
  const scopeRef = useRef(null);

  useAnimeIntro(scopeRef, []);
  useAnimeStagger(scopeRef, '.reveal-item', []);
  useScrollParallax(scopeRef, '.scroll-parallax', []);

  return (
    <section className="page-wrap" ref={scopeRef}>
      <div className="mb-8 md:mb-10 scroll-parallax" data-speed="0.16" data-depth="1.1">
        <p className="section-kicker" data-intro>
          Portfolio
        </p>
        <h2 className="section-title mt-2" data-intro>
          Selected projects with real-world impact.
        </h2>
        <a href="https://onexuniverse.com/projects/" target="_blank" rel="noopener noreferrer" className="btn-primary mt-5" data-intro>
          Visit OneX Project Hub
        </a>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 three-d-wrap">
        {projects.map(({ title, description, imageUrl, link, linkType, owner }, index) => (
          <article key={index} className="glass rounded-3xl overflow-hidden reveal-item scroll-parallax" data-speed="0.24" data-depth="0.85">
            <div className="overflow-hidden">
              <img src={imageUrl} alt={title} className="w-full h-56 object-cover card-image-zoom" />
            </div>
            <div className="p-5 md:p-6">
              <h3 className="text-2xl font-semibold mb-2">{title}</h3>
              <p className="section-copy">{description}</p>
              {owner && (
                <p className="text-xs uppercase tracking-[0.18em] text-teal-300/90 mt-3">{owner}</p>
              )}
              {linkType === 'internal' && (
                <Link to={link} className="btn-primary mt-5 w-full project-cta">
                  View Project
                </Link>
              )}
              {linkType === 'external' && (
                <a href={link} target="_blank" rel="noopener noreferrer" className="btn-primary mt-5 w-full project-cta">
                  View On OneX
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}