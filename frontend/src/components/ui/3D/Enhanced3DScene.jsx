// components/ui/3D/Enhanced3DScene.jsx
// Enhanced Three.js 3D scene components

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  OrbitControls,
  Stars,
  Float,
  MeshDistortMaterial,
  MeshWobbleMaterial,
  Environment,
  ContactShadows,
  Sparkles,
  Trail,
  Sphere,
  Box,
  Torus,
  TorusKnot,
  Dodecahedron,
  Octahedron,
  PerspectiveCamera,
} from '@react-three/drei';
import { EffectComposer, Bloom, ChromaticAberration, Vignette, Noise, TiltShift } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import PropTypes from 'prop-types';
import * as THREE from 'three';

/**
 * Animated 3D Sphere with Distortion
 */
export function DistortedSphere({ position = [0, 0, 0], color = '#6C63FF', speed = 1, distort = 0.4 }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * speed * 0.3;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * speed * 0.4;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere ref={meshRef} args={[1, 64, 64]} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={distort}
          speed={speed}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
}

DistortedSphere.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number),
  color: PropTypes.string,
  speed: PropTypes.number,
  distort: PropTypes.number,
};

/**
 * Wobbling Torus Knot
 */
export function WobblingTorusKnot({ position = [0, 0, 0], color = '#00D2FF', speed = 1 }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * speed * 0.5;
      meshRef.current.rotation.z = state.clock.getElapsedTime() * speed * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <TorusKnot ref={meshRef} args={[0.8, 0.3, 128, 32]} position={position}>
        <MeshWobbleMaterial
          color={color}
          attach="material"
          factor={0.3}
          speed={speed}
          roughness={0.1}
          metalness={0.9}
        />
      </TorusKnot>
    </Float>
  );
}

WobblingTorusKnot.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number),
  color: PropTypes.string,
  speed: PropTypes.number,
};

/**
 * Particle Field Component
 */
export function ParticleField({ count = 5000, size = 0.02, color = '#6C63FF' }) {
  const particlesRef = useRef();

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 50;
      const y = (Math.random() - 0.5) * 50;
      const z = (Math.random() - 0.5) * 50;
      temp.push(x, y, z);
    }
    return new Float32Array(temp);
  }, [count]);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={size} color={color} sizeAttenuation transparent opacity={0.6} />
    </points>
  );
}

ParticleField.propTypes = {
  count: PropTypes.number,
  size: PropTypes.number,
  color: PropTypes.string,
};

/**
 * Animated Ring System
 */
export function RingSystem({ rings = 3, baseColor = '#6C63FF' }) {
  return (
    <group>
      {Array.from({ length: rings }).map((_, i) => (
        <AnimatedRing
          key={i}
          radius={1 + i * 0.5}
          color={baseColor}
          speed={0.5 + i * 0.2}
          opacity={1 - i * 0.2}
        />
      ))}
    </group>
  );
}

RingSystem.propTypes = {
  rings: PropTypes.number,
  baseColor: PropTypes.string,
};

function AnimatedRing({ radius, color, speed, opacity }) {
  const ringRef = useRef();

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.x = Math.PI / 2;
      ringRef.current.rotation.z = state.clock.getElapsedTime() * speed;
    }
  });

  return (
    <Torus ref={ringRef} args={[radius, 0.05, 16, 100]}>
      <meshStandardMaterial color={color} transparent opacity={opacity} roughness={0.3} metalness={0.7} />
    </Torus>
  );
}

AnimatedRing.propTypes = {
  radius: PropTypes.number,
  color: PropTypes.string,
  speed: PropTypes.number,
  opacity: PropTypes.number,
};

/**
 * Floating Geometric Shapes
 */
export function FloatingGeometry({ shape = 'dodecahedron', position = [0, 0, 0], color = '#00C896' }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.3;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.4;
    }
  });

  const Shape = {
    dodecahedron: Dodecahedron,
    octahedron: Octahedron,
    box: Box,
    sphere: Sphere,
  }[shape] || Dodecahedron;

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <Shape ref={meshRef} args={[0.8]} position={position}>
        <meshStandardMaterial color={color} roughness={0.2} metalness={0.8} />
      </Shape>
    </Float>
  );
}

FloatingGeometry.propTypes = {
  shape: PropTypes.oneOf(['dodecahedron', 'octahedron', 'box', 'sphere']),
  position: PropTypes.arrayOf(PropTypes.number),
  color: PropTypes.string,
};

/**
 * Holographic Effect Material
 */
export function HolographicSphere({ position = [0, 0, 0] }) {
  const materialRef = useRef();

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.time.value = state.clock.getElapsedTime();
    }
  });

  const shaderMaterial = useMemo(
    () =>
      new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0 },
          color1: { value: new THREE.Color('#6C63FF') },
          color2: { value: new THREE.Color('#00D2FF') },
          color3: { value: new THREE.Color('#00C896') },
        },
        vertexShader: `
          varying vec2 vUv;
          varying vec3 vNormal;
          void main() {
            vUv = uv;
            vNormal = normalize(normalMatrix * normal);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform float time;
          uniform vec3 color1;
          uniform vec3 color2;
          uniform vec3 color3;
          varying vec2 vUv;
          varying vec3 vNormal;

          void main() {
            float fresnel = pow(1.0 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 3.0);
            vec3 color = mix(color1, color2, vUv.y);
            color = mix(color, color3, sin(time + vUv.x * 3.14159) * 0.5 + 0.5);
            gl_FragColor = vec4(color, 0.6 + fresnel * 0.4);
          }
        `,
        transparent: true,
      }),
    []
  );

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={1}>
      <Sphere args={[1, 64, 64]} position={position}>
        <primitive ref={materialRef} object={shaderMaterial} attach="material" />
      </Sphere>
    </Float>
  );
}

HolographicSphere.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number),
};

/**
 * Complete 3D Scene Component
 */
export default function Enhanced3DScene({
  children,
  enableEffects = true,
  enableStars = true,
  enableLighting = true,
  cameraPosition = [0, 0, 5],
  cameraFov = 75,
}) {
  return (
    <Canvas
      dpr={[1, 2]}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      }}
      style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
    >
      <PerspectiveCamera makeDefault position={cameraPosition} fov={cameraFov} />

      {/* Lighting */}
      {enableLighting && (
        <>
          <ambientLight intensity={0.3} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#6C63FF" />
          <pointLight position={[10, 10, 10]} intensity={0.5} color="#00D2FF" />
        </>
      )}

      {/* Stars Background */}
      {enableStars && <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />}

      {/* Scene Content */}
      {children}

      {/* Post-processing Effects */}
      {enableEffects && (
        <EffectComposer>
          <Bloom
            luminanceThreshold={0.2}
            luminanceSmoothing={0.9}
            intensity={1.5}
            blendFunction={BlendFunction.ADD}
          />
          <ChromaticAberration offset={[0.001, 0.001]} blendFunction={BlendFunction.NORMAL} />
          <Vignette eskil={false} offset={0.1} darkness={0.5} />
          <Noise opacity={0.02} />
        </EffectComposer>
      )}
    </Canvas>
  );
}

Enhanced3DScene.propTypes = {
  children: PropTypes.node,
  enableEffects: PropTypes.bool,
  enableStars: PropTypes.bool,
  enableLighting: PropTypes.bool,
  cameraPosition: PropTypes.arrayOf(PropTypes.number),
  cameraFov: PropTypes.number,
};
