import React, { useRef } from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDatabase, FaWordpress, FaJs, FaPhp, FaLaravel, FaDocker, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiExpress, SiNextdotjs, SiGraphql, SiTailwindcss, SiTensorflow, SiPython } from "react-icons/si";
import { useAnimeIntro, useAnimeStagger } from '../hooks/useAnimeMotion';

const roadmap = [
  {
    year: "2020",
    frontend: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
    ],
    backend: [
      { name: "SQL", icon: <FaDatabase /> },
      { name: "PHP", icon: <FaPhp /> },
    ],
  },
  {
    year: "2021",
    frontend: [
      { name: "WordPress", icon: <FaWordpress /> },
    ],
    backend: [],
  },
  {
    year: "2022",
    frontend: [
      { name: "JavaScript", icon: <FaJs /> },
    ],
    backend: [],
  },
  {
    year: "2024",
    frontend: [
      { name: "React.js", icon: <FaReact /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
    backend: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
    ],
  },
  {
    year: "2025",
    frontend: [
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "UI/UX Design", icon: <FaGitAlt /> },
      ],
    backend:  [
        { name: "Docker", icon: <FaDocker /> },
        { name: "GraphQL", icon: <SiGraphql /> },
      ],
  },
  {
    year: "2026",
    frontend: [
      { name: "Astro JS", icon: <SiNextdotjs /> },
    ],
    backend: [
      { name: "Laravel", icon: <FaLaravel /> },
    ],
  },
  {
    year: "2027",
    frontend: [],
    backend: [],
    nextTarget: {
      frontend: [
        { name: "AI/ML", icon: <SiTensorflow /> },
      ],
      backend: [
        { name: "AI/ML Engineering", icon: <SiPython /> },
      ],
    },
  },
];

export default function RoadmapTimeline() {
  const scopeRef = useRef(null);

  useAnimeIntro(scopeRef, []);
  useAnimeStagger(scopeRef, '.reveal-item', []);

  return (
    <section className="page-wrap" ref={scopeRef}>
      <div className="mb-8 md:mb-10">
        <p className="section-kicker" data-intro>
          Roadmap
        </p>
        <h2 className="section-title mt-2" data-intro>
          Learning timeline and next milestones.
        </h2>
      </div>

      <div className="space-y-5 relative before:absolute before:left-[15px] md:before:left-[19px] before:top-2 before:bottom-2 before:w-[2px] before:bg-teal-300/35">
        {roadmap.map((section, index) => (
          <article key={index} className="glass rounded-3xl p-5 md:p-7 reveal-item relative ml-8 md:ml-10">
            <span className="absolute -left-9 md:-left-10 top-6 w-5 h-5 rounded-full bg-teal-300 shadow-[0_0_0_5px_rgba(61,216,193,0.18)]" />
            <h3 className="text-2xl font-semibold text-teal-300 mb-4">{section.year}</h3>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <h4 className="font-semibold mb-2">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  {section.frontend.map((item, i) => (
                    <span key={i} className="tag-chip flex items-center gap-2">{item.icon} {item.name}</span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Backend</h4>
                <div className="flex flex-wrap gap-2">
                  {section.backend.map((item, i) => (
                    <span key={i} className="tag-chip flex items-center gap-2">{item.icon} {item.name}</span>
                  ))}
                </div>
              </div>
            </div>

            {section.nextTarget && (
              <div className="mt-5 border border-amber-300/30 bg-amber-200/10 rounded-2xl p-4">
                <p className="font-semibold text-amber-300 mb-3">Next target</p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex flex-wrap gap-2">
                    {section.nextTarget.frontend.map((item, i) => (
                      <span key={i} className="tag-chip flex items-center gap-2">{item.icon} {item.name}</span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {section.nextTarget.backend.map((item, i) => (
                      <span key={i} className="tag-chip flex items-center gap-2">{item.icon} {item.name}</span>
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
