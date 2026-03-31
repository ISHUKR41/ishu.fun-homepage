// components/sections/HeroSection/HeroCanvas3D.jsx
// Premium Three.js WebGL 3D Scene with particles, globe, and effects
// Inspired by Apple, Tesla, and Awwwards winners

import { Suspense, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Sphere, MeshDistortMaterial, Float, PerspectiveCamera } from '@react-three/drei';
import { EffectComposer, Bloom, ChromaticAberration, Vignette } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import * as THREE from 'three';

// Animated particles system
function Particles({ count = 200 }) {
  const mesh = useRef();
  const light = useRef();

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.01 + Math.random() / 200;
      const xFactor = -50 + Math.random() * 100;
      const yFactor = -50 + Math.random() * 100;
      const zFactor = -50 + Math.random() * 100;

      temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
    }
    return temp;
  }, [count]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame((state) => {
    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle;

      t = particle.t += speed / 2;
      const a = Math.cos(t) + Math.sin(t * 1) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      const s = Math.cos(t);

      particle.mx += (state.mouse.x * 1000 - particle.mx) * 0.01;
      particle.my += (state.mouse.y * 1000 - 1 - particle.my) * 0.01;

      dummy.position.set(
        (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
        (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
        (particle.my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
      );

      const scale = Math.cos(t) * 0.3 + 0.5;
      dummy.scale.set(scale, scale, scale);
      dummy.rotation.set(s * 5, s * 5, s * 5);
      dummy.updateMatrix();

      mesh.current.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <>
      <instancedMesh ref={mesh} args={[null, null, count]}>
        <dodecahedronGeometry args={[0.2, 0]} />
        <meshStandardMaterial color="#6C63FF" emissive="#6C63FF" emissiveIntensity={0.5} />
      </instancedMesh>
      <pointLight ref={light} intensity={1} position={[0, 0, 0]} color="#00D2FF" />
    </>
  );
}

// India-inspired animated globe
function IndiaGlobe() {
  const mesh = useRef();

  useFrame((state, delta) => {
    mesh.current.rotation.y += delta * 0.15;
    mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere ref={mesh} args={[2.5, 32, 32]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#080810"
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0.2}
          metalness={0.8}
          emissive="#6C63FF"
          emissiveIntensity={0.3}
        />
      </Sphere>
    </Float>
  );
}

// Orbiting data nodes (representing cities)
function OrbitingNodes() {
  const groupRef = useRef();

  const nodes = useMemo(() => [
    { position: [4, 2, 0], color: '#6C63FF', name: 'Delhi' },
    { position: [-4, -1, 2], color: '#00D2FF', name: 'Mumbai' },
    { position: [3, -2, -3], color: '#00C896', name: 'Bengaluru' },
    { position: [-3, 2, -2], color: '#FF6B9D', name: 'Kolkata' },
    { position: [2, 0, 4], color: '#FFC107', name: 'Chennai' },
  ], []);

  useFrame((state) => {
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
  });

  return (
    <group ref={groupRef}>
      {nodes.map((node, i) => (
        <Float key={i} speed={1.5 + i * 0.2} rotationIntensity={0.5} floatIntensity={0.5}>
          <mesh position={node.position}>
            <octahedronGeometry args={[0.3, 0]} />
            <meshStandardMaterial
              color={node.color}
              emissive={node.color}
              emissiveIntensity={0.8}
              metalness={0.5}
              roughness={0.3}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

// Torus rings for depth
function TorusRings() {
  return (
    <>
      <Float speed={1} rotationIntensity={0.3} floatIntensity={0.2}>
        <mesh rotation={[Math.PI / 4, 0, 0]} position={[0, 0, 0]}>
          <torusGeometry args={[5, 0.02, 8, 64]} />
          <meshStandardMaterial
            color="#6C63FF"
            emissive="#6C63FF"
            emissiveIntensity={0.5}
            transparent
            opacity={0.3}
          />
        </mesh>
      </Float>

      <Float speed={0.8} rotationIntensity={0.2} floatIntensity={0.15}>
        <mesh rotation={[Math.PI / 3, Math.PI / 4, 0]} position={[0, 0, 0]}>
          <torusGeometry args={[7, 0.015, 8, 64]} />
          <meshStandardMaterial
            color="#00D2FF"
            emissive="#00D2FF"
            emissiveIntensity={0.4}
            transparent
            opacity={0.2}
          />
        </mesh>
      </Float>
    </>
  );
}

// Main 3D Scene Component
function Scene() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 15]} fov={50} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />

      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#6C63FF" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#00D2FF" />
      <spotLight position={[0, 15, 0]} angle={0.3} penumbra={1} intensity={2} castShadow color="#FFFFFF" />

      {/* Background stars */}
      <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={0.5} />

      {/* Main elements */}
      <IndiaGlobe />
      <OrbitingNodes />
      <TorusRings />
      <Particles count={200} />

      {/* Post-processing Effects */}
      <EffectComposer>
        <Bloom
          intensity={1.5}
          luminanceThreshold={0.2}
          luminanceSmoothing={0.9}
          mipmapBlur
        />
        <ChromaticAberration
          offset={[0.0002, 0.0002]}
        />
        <Vignette
          offset={0.3}
          darkness={0.5}
          eskil={false}
          blendFunction={BlendFunction.NORMAL}
        />
      </EffectComposer>
    </>
  );
}

// Fallback loader
function Loader() {
  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'radial-gradient(ellipse at center, rgba(108,99,255,0.1) 0%, rgba(8,8,16,0) 70%)',
    }}>
      <div style={{
        fontSize: '3rem',
        animation: 'pulse 2s ease-in-out infinite',
      }}>
        🇮🇳
      </div>
    </div>
  );
}

// Main component with error boundary
export default function HeroCanvas3D() {
  return (
    <div style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}>
      <Canvas
        dpr={[1, 1.5]}
        performance={{ min: 0.5, max: 1, debounce: 200 }}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: 'high-performance',
          preserveDrawingBuffer: false,
        }}
        frameloop="always"
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
