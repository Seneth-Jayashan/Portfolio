import React, { useRef } from 'react';
import { FaCode, FaPaintBrush, FaServer, FaTools, FaWordpress } from 'react-icons/fa';
import { useAnimeIntro, useAnimeStagger, useScrollParallax } from '../hooks/useAnimeMotion';

export default function Services() {
  const scopeRef = useRef(null);

  useAnimeIntro(scopeRef, []);
  useAnimeStagger(scopeRef, '.reveal-item', []);
  useScrollParallax(scopeRef, '.scroll-parallax', []);

  const services = [
    {
      icon: <FaCode size={30} />,
      title: "Frontend Development",
      description: 'Beautiful, responsive interfaces built with React, Tailwind CSS, and anime-powered interactions.',
    },
    {
      icon: <FaServer size={30} />,
      title: "Backend Development",
      description: "RESTful APIs and backend logic using Node.js, Express, and MongoDB.",
    },
    {
      icon: <FaPaintBrush size={30} />,
      title: "UI/UX Design",
      description: "Clean and user-friendly designs that focus on usability and performance.",
    },
    {
      icon: <FaTools size={30} />,
      title: "Website Maintenance",
      description: "Regular updates, backups, and performance optimization to keep your site running smoothly.",
    },
    {
      icon: <FaWordpress size={30} />,
      title: "WordPress Development",
      description: "Custom WordPress themes and plugins to enhance your website's functionality.",
    },
  ];

  return (
    <section className="page-wrap" ref={scopeRef}>
      <div className="mb-8 md:mb-10 scroll-parallax" data-speed="0.15" data-depth="1.1">
        <p className="section-kicker" data-intro>
          Services
        </p>
        <h2 className="section-title mt-2" data-intro>
          End-to-end web services for serious growth.
        </h2>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
        {services.map((service, index) => (
          <article key={index} className="glass rounded-3xl p-6 md:p-7 reveal-item scroll-parallax" data-speed="0.22" data-depth="0.8">
            <div className="text-teal-300 mb-4 text-3xl">{service.icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
            <p className="section-copy">{service.description}</p>
          </article>
        ))}
      </div>

      <div className="glass rounded-3xl p-6 md:p-7 mt-6 reveal-item scroll-parallax" data-speed="0.18" data-depth="0.95">
        <p className="text-lg text-slate-100">
          Need a custom combination? I can handle design systems, API integrations, migrations, and performance optimization as part of your build.
        </p>
      </div>
    </section>
  );
}
