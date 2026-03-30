// ParticlesBackground.jsx — Advanced tsParticles Background with Enhanced Effects
import { useCallback } from 'react';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

export default function ParticlesBackground({ density = 'medium', theme = 'default' }) {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const densityConfig = {
    low: 40,
    medium: 100,
    high: 200,
  };

  const particleCount = densityConfig[density] || densityConfig.medium;

  // Theme configurations for different visual styles
  const themeColors = {
    default: {
      particles: ['#6C63FF', '#00D2FF', '#00C896', '#FF6B35', '#9D4EDD'],
      links: '#6C63FF',
    },
    cosmic: {
      particles: ['#FF006E', '#8338EC', '#3A86FF', '#FFBE0B', '#FB5607'],
      links: '#8338EC',
    },
    ocean: {
      particles: ['#06FFA5', '#00D4FF', '#0096FF', '#7209B7', '#560BAD'],
      links: '#00D4FF',
    },
    sunset: {
      particles: ['#FF6D00', '#FF9100', '#FFAB00', '#FFC400', '#FFD600'],
      links: '#FF9100',
    },
  };

  const colors = themeColors[theme] || themeColors.default;

  const particlesConfig = {
    autoPlay: true,
    background: {
      color: {
        value: 'transparent',
      },
    },
    fpsLimit: 120,
    interactivity: {
      detectsOn: 'window',
      events: {
        onClick: {
          enable: true,
          mode: ['push', 'bubble'],
        },
        onHover: {
          enable: true,
          mode: ['grab', 'repulse'],
          parallax: {
            enable: true,
            force: 60,
            smooth: 10,
          },
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 3,
        },
        bubble: {
          distance: 200,
          size: 8,
          duration: 0.3,
          opacity: 0.8,
        },
        grab: {
          distance: 250,
          links: {
            blink: true,
            consent: false,
            opacity: 0.6,
          },
        },
        repulse: {
          distance: 150,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: colors.particles,
        animation: {
          enable: true,
          speed: 20,
          sync: false,
        },
      },
      links: {
        color: colors.links,
        distance: 180,
        enable: true,
        opacity: 0.2,
        width: 1.5,
        triangles: {
          enable: true,
          opacity: 0.05,
        },
        shadow: {
          enable: true,
          color: colors.links,
          blur: 5,
        },
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'out',
          bottom: 'out',
          left: 'out',
          right: 'out',
          top: 'out',
        },
        random: true,
        speed: { min: 0.5, max: 1.5 },
        straight: false,
        attract: {
          enable: true,
          rotateX: 600,
          rotateY: 1200,
        },
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: particleCount,
      },
      opacity: {
        value: { min: 0.1, max: 0.6 },
        animation: {
          enable: true,
          speed: 0.8,
          minimumValue: 0.1,
          sync: false,
        },
      },
      shape: {
        type: ['circle', 'triangle', 'polygon', 'star'],
        options: {
          polygon: {
            sides: 6,
          },
          star: {
            sides: 5,
          },
        },
      },
      size: {
        value: { min: 1, max: 5 },
        animation: {
          enable: true,
          speed: 3,
          minimumValue: 0.5,
          sync: false,
        },
      },
      stroke: {
        width: 0.5,
        color: {
          value: '#ffffff',
          animation: {
            enable: true,
            speed: 50,
            sync: false,
          },
        },
      },
      twinkle: {
        particles: {
          enable: true,
          frequency: 0.08,
          opacity: 1,
        },
        lines: {
          enable: true,
          frequency: 0.05,
          opacity: 0.8,
        },
      },
      life: {
        duration: {
          value: 0,
        },
        count: 0,
      },
      rotate: {
        value: 0,
        random: true,
        direction: 'clockwise',
        animation: {
          enable: true,
          speed: 3,
          sync: false,
        },
      },
      shadow: {
        enable: true,
        blur: 10,
        color: {
          value: colors.particles,
        },
        offset: {
          x: 0,
          y: 0,
        },
      },
    },
    detectRetina: true,
    smooth: true,
    style: {
      filter: 'blur(0.3px)',
    },
  };

  return (
    <Particles
      id="tsparticles-background"
      init={particlesInit}
      options={particlesConfig}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'auto',
      }}
    />
  );
}
