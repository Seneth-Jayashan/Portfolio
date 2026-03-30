import React, { useRef } from 'react';
import { useAnimeIntro, useAnimeStagger, useScrollParallax } from '../hooks/useAnimeMotion';

export default function About() {
  const scopeRef = useRef(null);

  useAnimeIntro(scopeRef, []);
  useAnimeStagger(scopeRef, '.reveal-item', []);
  useScrollParallax(scopeRef, '.scroll-parallax', []);

  return (
    <section className="page-wrap" ref={scopeRef}>
      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-stretch">
        <div className="glass rounded-3xl p-6 md:p-8 lg:p-10 scroll-parallax" data-speed="0.14" data-depth="1.1">
          <p className="section-kicker" data-intro>
            About
          </p>
          <h2 className="section-title mt-3 mb-5" data-intro>
            Engineering-forward, brand-aware digital work.
          </h2>
          <p className="section-copy text-lg" data-intro>
            I am Seneth Jayashan, founder of S JAY Web Solutions (Pvt) Ltd. I partner with startups and established businesses to design and develop websites that are visually strong and technically dependable.
          </p>
          <p className="section-copy mt-4" data-intro>
            My process blends strategy, UX, and full-stack execution. Every build is focused on speed, accessibility, and real-world business outcomes.
          </p>
        </div>

        <div className="grid gap-4">
          <div className="glass rounded-3xl p-6 reveal-item scroll-parallax" data-speed="0.2" data-depth="0.85">
            <h3 className="text-xl font-semibold text-teal-300 mb-2">Core Focus</h3>
            <p className="section-copy">Modern React interfaces, scalable Node.js backends, and meaningful animation systems that improve clarity and engagement.</p>
          </div>
          <div className="glass rounded-3xl p-6 reveal-item scroll-parallax" data-speed="0.25" data-depth="0.85">
            <h3 className="text-xl font-semibold text-amber-300 mb-2">How I Work</h3>
            <p className="section-copy">I keep communication clear, milestones predictable, and code quality high from kickoff to deployment.</p>
          </div>
          <div className="glass rounded-3xl p-6 reveal-item flex items-center gap-5 scroll-parallax" data-speed="0.3" data-depth="0.85">
            <img src="/logo.png" alt="S JAY Web Solutions Logo" className="w-20 h-20 rounded-2xl ring-2 ring-teal-300/45" />
            <p className="section-copy">Trusted by clients who want premium execution, practical architecture, and long-term maintainability.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
