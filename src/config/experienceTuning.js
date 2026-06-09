/**
 * experienceTuning.js
 *
 * Central control for the site's motion personality.
 * Change `activeMotionTheme` to instantly restyle all motion across the portfolio.
 *
 * Themes:
 *   calm    — subtle, content-forward, minimal distraction
 *   premium — polished and balanced (default)
 *   ultra   — immersive, showstopper mode
 */

export const motionThemes = {
  calm: {
    parallaxIntensity: 0.65,
    routeTransitionPreset: 'minimal',
    webglPreset: 'flowing-noise',
  },
  premium: {
    parallaxIntensity: 1.15,
    routeTransitionPreset: 'dramatic',
    webglPreset: 'neon-mesh',
  },
  ultra: {
    parallaxIntensity: 1.65,
    routeTransitionPreset: 'dramatic',
    webglPreset: 'dense-particles',
  },
};

/**
 * 🎛  Change this value to switch the full motion personality.
 * @type {'calm' | 'premium' | 'ultra'}
 */
export const activeMotionTheme = 'premium';

const selectedTheme = motionThemes[activeMotionTheme] || motionThemes.premium;

export const experienceTuning = {
  theme: activeMotionTheme,
  ...selectedTheme,
};

/* ─── Route Transition Presets ────────────────────────────────────────── */
export const routeTransitionPresets = {
  minimal: {
    duration: 520,
    overlayOpacity: [0, 0.22, 0],
    beamTravel: ['-115%', '115%'],
    glowOpacity: [0, 0.38, 0],
    glowScale: [0.96, 1.04, 1],
  },
  dramatic: {
    duration: 1000,
    overlayOpacity: [0, 0.80, 0.65, 0],
    beamTravel: ['-140%', '140%'],
    glowOpacity: [0, 0.90, 0],
    glowScale: [0.80, 1.18, 1.06],
  },
};

/* ─── WebGL Particle / Mesh Presets ───────────────────────────────────── */
export const webglPresets = {
  'dense-particles': {
    particleCount: 260,
    speed: 0.32,
    pointSizeRange: [1.0, 2.5],
    mouseInfluence: 0.16,
    flowField: false,
    meshLines: false,
  },
  'flowing-noise': {
    particleCount: 180,
    speed: 0.26,
    pointSizeRange: [1.2, 3.2],
    mouseInfluence: 0.15,
    flowField: true,
    meshLines: false,
  },
  'neon-mesh': {
    particleCount: 160,
    speed: 0.22,
    pointSizeRange: [1.3, 3.6],
    mouseInfluence: 0.13,
    flowField: true,
    meshLines: true,
  },
};