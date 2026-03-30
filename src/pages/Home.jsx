import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useAnimeFloat, useAnimeIntro, useAnimeStagger, useMouseParallax, useScrollParallax } from '../hooks/useAnimeMotion';

export default function Home() {
  const scopeRef = useRef(null);

  useAnimeIntro(scopeRef, []);
  useAnimeStagger(scopeRef, '.reveal-item', []);
  useAnimeFloat(scopeRef, '.float-item', []);
  useMouseParallax(scopeRef, '.parallax-layer', []);
  useScrollParallax(scopeRef, '.scroll-parallax', []);

  return (
    <section className="page-wrap grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center" ref={scopeRef}>
      <div className="space-y-6 scroll-parallax" data-speed="0.14" data-depth="1.05">
        <p className="section-kicker" data-intro>
          Premium Web Experiences
        </p>
        <h1 className="section-title" data-intro>
          Seneth Jayashan builds websites that feel fast, smooth, and unforgettable.
        </h1>
        <p className="section-copy text-lg max-w-2xl" data-intro>
          Founder of S JAY Web Solutions. I design and engineer modern full-stack products with clean visuals, conversion-focused UX, and reliable architecture.
        </p>

        <div className="flex flex-wrap gap-3" data-intro>
          <Link to="/projects" className="btn-primary">
            Explore Projects
          </Link>
          <Link to="/contact" className="btn-ghost">
            Start a Conversation
          </Link>
        </div>

        <div className="grid sm:grid-cols-3 gap-3 pt-2">
          <div className="glass rounded-2xl p-4 reveal-item scroll-parallax" data-speed="0.2" data-depth="0.7">
            <p className="text-3xl font-bold text-teal-300">20+</p>
            <p className="text-sm text-slate-300">Completed builds</p>
          </div>
          <div className="glass rounded-2xl p-4 reveal-item scroll-parallax" data-speed="0.25" data-depth="0.7">
            <p className="text-3xl font-bold text-amber-300">5 yrs</p>
            <p className="text-sm text-slate-300">Hands-on experience</p>
          </div>
          <div className="glass rounded-2xl p-4 reveal-item scroll-parallax" data-speed="0.3" data-depth="0.7">
            <p className="text-3xl font-bold text-cyan-200">Global</p>
            <p className="text-sm text-slate-300">Clients & audiences</p>
          </div>
        </div>
      </div>

      <div className="three-d-wrap scroll-parallax" data-speed="0.2" data-depth="1.25">
        <div className="three-d-scene p-6 md:p-8">
          <div className="depth-ring one parallax-layer" data-depth="30" />
          <div className="depth-ring two parallax-layer" data-depth="18" />
          <div className="absolute inset-0 bg-gradient-to-br from-teal-300/15 via-transparent to-amber-200/10 parallax-layer" data-depth="10" />

          <div className="relative z-10 space-y-5">
            <h2 className="text-2xl md:text-3xl font-bold float-item parallax-layer" data-depth="22">From idea to launch, with polish.</h2>
            <p className="section-copy float-item parallax-layer" data-depth="16">
              My focus is combining business clarity with engineering quality: practical architecture, robust APIs, and animated interfaces that feel alive.
            </p>
            <div className="flex flex-wrap gap-2 pt-2 float-item parallax-layer" data-depth="26">
              <span className="tag-chip">React</span>
              <span className="tag-chip">Node.js</span>
              <span className="tag-chip">Tailwind CSS</span>
              <span className="tag-chip">API Integration</span>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-3 parallax-layer" data-depth="20">
              <div className="glass rounded-2xl p-4">
                <p className="text-sm text-slate-300">Average load feel</p>
                <p className="text-2xl text-teal-300 font-semibold">Fast + Smooth</p>
              </div>
              <div className="glass rounded-2xl p-4">
                <p className="text-sm text-slate-300">Motion depth</p>
                <p className="text-2xl text-amber-300 font-semibold">3D Parallax</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
