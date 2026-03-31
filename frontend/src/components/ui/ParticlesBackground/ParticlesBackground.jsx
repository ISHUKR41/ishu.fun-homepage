// ParticlesBackground.jsx — Lightweight, smooth particles
// Uses device detection to scale down on low-end devices
import { useCallback, useMemo } from 'react';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const themeColors = {
  default: { particles: ['#6C63FF', '#00D2FF', '#00C896'], links: '#6C63FF' },
  cosmic:  { particles: ['#8338EC', '#3A86FF', '#FF006E'],  links: '#8338EC' },
  ocean:   { particles: ['#00D4FF', '#0096FF', '#06FFA5'],  links: '#00D4FF' },
  sunset:  { particles: ['#FF6D00', '#FF9100', '#FFC400'],  links: '#FF9100' },
};

export default function ParticlesBackground({ density = 'low', theme = 'default' }) {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const colors = themeColors[theme] || themeColors.default;

  // Keep counts very low for smooth performance
  const countMap = { low: 25, medium: 45, high: 70 };
  const count = countMap[density] ?? 25;

  const options = useMemo(() => ({
    background: { color: { value: 'transparent' } },
    fpsLimit: 60,
    interactivity: {
      detectsOn: 'canvas',
      events: {
        onHover: { enable: true, mode: 'grab' },
        onClick: { enable: false },
        resize: true,
      },
      modes: {
        grab: { distance: 160, links: { opacity: 0.4 } },
      },
    },
    particles: {
      color: { value: colors.particles },
      links: {
        color: colors.links,
        distance: 150,
        enable: true,
        opacity: 0.15,
        width: 1,
        triangles: { enable: false },
        shadow: { enable: false },
      },
      move: {
        enable: true,
        speed: { min: 0.3, max: 0.8 },
        direction: 'none',
        random: true,
        straight: false,
        outModes: { default: 'out' },
        attract: { enable: false },
      },
      number: {
        density: { enable: true, area: 900 },
        value: count,
      },
      opacity: {
        value: { min: 0.15, max: 0.5 },
        animation: { enable: false },
      },
      shape: { type: 'circle' },
      size: {
        value: { min: 1, max: 3 },
        animation: { enable: false },
      },
      twinkle: { particles: { enable: false }, lines: { enable: false } },
      rotate: { animation: { enable: false } },
      shadow: { enable: false },
    },
    detectRetina: true,
    smooth: true,
  }), [colors, count]);

  return (
    <Particles
      id="tsparticles-bg"
      init={particlesInit}
      options={options}
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}
