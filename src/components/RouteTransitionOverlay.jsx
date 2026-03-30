import { useEffect, useRef } from 'react';
import { animate } from 'animejs';
import { routeTransitionPresets } from '../config/experienceTuning';

export default function RouteTransitionOverlay({ routeKey, preset = 'dramatic' }) {
  const overlayRef = useRef(null);
  const beamRef = useRef(null);
  const glowRef = useRef(null);
  const profile = routeTransitionPresets[preset] || routeTransitionPresets.dramatic;

  useEffect(() => {
    if (!overlayRef.current || !beamRef.current || !glowRef.current) return undefined;

    const overlayAnim = animate(overlayRef.current, {
      opacity: profile.overlayOpacity,
      duration: profile.duration,
      ease: 'linear',
    });

    const beamAnim = animate(beamRef.current, {
      x: profile.beamTravel,
      duration: profile.duration,
      ease: 'inOutQuart',
    });

    const glowAnim = animate(glowRef.current, {
      opacity: profile.glowOpacity,
      scale: profile.glowScale,
      duration: profile.duration,
      ease: 'outCubic',
    });

    return () => {
      overlayAnim.pause?.();
      beamAnim.pause?.();
      glowAnim.pause?.();
    };
  }, [routeKey, profile]);

  return (
    <div className={`route-overlay ${preset === 'minimal' ? 'route-overlay-minimal' : 'route-overlay-dramatic'}`} ref={overlayRef}>
      <div className="route-overlay-beam" ref={beamRef} />
      <div className="route-overlay-glow" ref={glowRef} />
    </div>
  );
}
