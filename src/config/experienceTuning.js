export const motionThemes = {
  calm: {
    parallaxIntensity: 0.72,
    routeTransitionPreset: 'minimal',
    webglPreset: 'flowing-noise',
  },
  premium: {
    parallaxIntensity: 1.25,
    routeTransitionPreset: 'dramatic',
    webglPreset: 'neon-mesh',
  },
  ultra: {
    parallaxIntensity: 1.72,
    routeTransitionPreset: 'dramatic',
    webglPreset: 'dense-particles',
  },
};

// Change this single value to switch the full motion personality.
export const activeMotionTheme = 'premium';

const selectedTheme = motionThemes[activeMotionTheme] || motionThemes.premium;

export const experienceTuning = {
  theme: activeMotionTheme,
  ...selectedTheme,
};

export const routeTransitionPresets = {
  minimal: {
    duration: 560,
    overlayOpacity: [0, 0.26, 0],
    beamTravel: ['-110%', '110%'],
    glowOpacity: [0, 0.45, 0],
    glowScale: [0.94, 1.04, 1],
  },
  dramatic: {
    duration: 1080,
    overlayOpacity: [0, 0.84, 0.7, 0],
    beamTravel: ['-140%', '140%'],
    glowOpacity: [0, 0.96, 0],
    glowScale: [0.78, 1.2, 1.08],
  },
};

export const webglPresets = {
  'dense-particles': {
    particleCount: 280,
    speed: 0.34,
    pointSizeRange: [1.1, 2.6],
    mouseInfluence: 0.18,
    flowField: false,
    meshLines: false,
  },
  'flowing-noise': {
    particleCount: 190,
    speed: 0.28,
    pointSizeRange: [1.3, 3.4],
    mouseInfluence: 0.16,
    flowField: true,
    meshLines: false,
  },
  'neon-mesh': {
    particleCount: 170,
    speed: 0.24,
    pointSizeRange: [1.4, 3.8],
    mouseInfluence: 0.14,
    flowField: true,
    meshLines: true,
  },
};
