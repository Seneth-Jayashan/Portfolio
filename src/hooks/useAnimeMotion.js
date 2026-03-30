import { useEffect } from 'react';
import { animate, stagger } from 'animejs';
import { experienceTuning } from '../config/experienceTuning';

export function useAnimeIntro(scopeRef, deps = []) {
  useEffect(() => {
    const scope = scopeRef.current;
    if (!scope) return undefined;

    const targets = scope.querySelectorAll('[data-intro]');
    if (!targets.length) return undefined;

    const intro = animate(targets, {
      opacity: [0, 1],
      y: [28, 0],
      duration: 850,
      delay: stagger(120),
      ease: 'outExpo',
    });

    return () => {
      intro.pause?.();
    };
  }, deps);
}

export function useAnimeStagger(scopeRef, selector = '.reveal-item', deps = []) {
  useEffect(() => {
    const scope = scopeRef.current;
    if (!scope) return undefined;

    const targets = scope.querySelectorAll(selector);
    if (!targets.length) return undefined;

    const reveal = animate(targets, {
      opacity: [0, 1],
      y: [24, 0],
      duration: 780,
      delay: stagger(90),
      ease: 'outCubic',
    });

    return () => {
      reveal.pause?.();
    };
  }, deps);
}

export function useAnimeFloat(scopeRef, selector = '.float-item', deps = []) {
  useEffect(() => {
    const scope = scopeRef.current;
    if (!scope) return undefined;

    const targets = scope.querySelectorAll(selector);
    if (!targets.length) return undefined;

    const floating = animate(targets, {
      y: [-8, 8],
      duration: 2800,
      delay: stagger(140),
      loop: true,
      alternate: true,
      ease: 'inOutSine',
    });

    return () => {
      floating.pause?.();
    };
  }, deps);
}

export function useMouseParallax(scopeRef, selector = '.parallax-layer', deps = []) {
  useEffect(() => {
    const scope = scopeRef.current;
    if (!scope) return undefined;

    const supportsHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!supportsHover) return undefined;

    const layers = scope.querySelectorAll(selector);
    if (!layers.length) return undefined;

    const onMove = (event) => {
      const rect = scope.getBoundingClientRect();
      const mx = (event.clientX - rect.left) / rect.width - 0.5;
      const my = (event.clientY - rect.top) / rect.height - 0.5;

      layers.forEach((layer) => {
        const depth = Number(layer.getAttribute('data-depth') || 16);
        animate(layer, {
          x: mx * depth,
          y: my * depth,
          duration: 420,
          ease: 'outQuad',
        });
      });
    };

    const onLeave = () => {
      layers.forEach((layer) => {
        animate(layer, {
          x: 0,
          y: 0,
          duration: 520,
          ease: 'outExpo',
        });
      });
    };

    scope.addEventListener('mousemove', onMove);
    scope.addEventListener('mouseleave', onLeave);

    return () => {
      scope.removeEventListener('mousemove', onMove);
      scope.removeEventListener('mouseleave', onLeave);
    };
  }, deps);
}

export function useTiltCards(scopeRef, selector = '.tilt-card', deps = []) {
  useEffect(() => {
    const scope = scopeRef.current;
    if (!scope) return undefined;

    const supportsHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!supportsHover) return undefined;

    const cards = scope.querySelectorAll(selector);
    if (!cards.length) return undefined;

    const handlers = [];

    cards.forEach((card) => {
      const move = (event) => {
        const rect = card.getBoundingClientRect();
        const px = (event.clientX - rect.left) / rect.width - 0.5;
        const py = (event.clientY - rect.top) / rect.height - 0.5;

        animate(card, {
          rotateY: px * 10,
          rotateX: -py * 10,
          duration: 260,
          ease: 'outQuad',
        });
      };

      const leave = () => {
        animate(card, {
          rotateX: 0,
          rotateY: 0,
          duration: 400,
          ease: 'outExpo',
        });
      };

      card.addEventListener('mousemove', move);
      card.addEventListener('mouseleave', leave);
      handlers.push([card, move, leave]);
    });

    return () => {
      handlers.forEach(([card, move, leave]) => {
        card.removeEventListener('mousemove', move);
        card.removeEventListener('mouseleave', leave);
      });
    };
  }, deps);
}

export function useScrollParallax(scopeRef, selector = '.scroll-parallax', deps = []) {
  useEffect(() => {
    const scope = scopeRef.current;
    if (!scope) return undefined;

    const targets = scope.querySelectorAll(selector);
    if (!targets.length) return undefined;

    let ticking = false;

    const update = () => {
      const vh = window.innerHeight || 1;

      targets.forEach((target) => {
        const rect = target.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const progress = (vh / 2 - center) / vh;
        const clamped = Math.max(-1.2, Math.min(1.2, progress));
        const speed = Number(target.getAttribute('data-speed') || 0.12);
        const depth = Number(target.getAttribute('data-depth') || 1);
        const shiftY = clamped * speed * 160 * depth * experienceTuning.parallaxIntensity;

        target.style.setProperty('--sp-y', `${shiftY.toFixed(2)}px`);
      });

      ticking = false;
    };

    const requestTick = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', requestTick, { passive: true });
    window.addEventListener('resize', requestTick);

    return () => {
      window.removeEventListener('scroll', requestTick);
      window.removeEventListener('resize', requestTick);
    };
  }, deps);
}
