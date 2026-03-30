// HeroCanvas.jsx — Three.js 3D WebGL Scene for Hero Section
import { useRef, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float, Stars, useTexture } from '@react-three/drei';
import * as THREE from 'three';

// Animated 3D Globe Component
function AnimatedGlobe() {
  const meshRef = useRef();
  const particlesRef = useRef();

  // Rotate the globe continuously
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }

    // Animate particles orbiting the globe
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.001;
      particlesRef.current.rotation.x += 0.0005;
    }
  });

  // Create orbiting particles
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 200; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      const radius = 2.5 + Math.random() * 1;

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      temp.push({ position: [x, y, z], scale: Math.random() * 0.5 + 0.3 });
    }
    return temp;
  }, []);

  return (
    <group>
      {/* Main Globe */}
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <Sphere ref={meshRef} args={[2, 64, 64]} scale={1}>
          <MeshDistortMaterial
            color="#6C63FF"
            attach="material"
            distort={0.3}
            speed={2}
            roughness={0.2}
            metalness={0.8}
          />
        </Sphere>
      </Float>

      {/* Orbiting Particles */}
      <group ref={particlesRef}>
        {particles.map((particle, i) => (
          <mesh key={i} position={particle.position}>
            <sphereGeometry args={[0.03, 8, 8]} />
            <meshStandardMaterial
              color={i % 3 === 0 ? '#00D2FF' : i % 3 === 1 ? '#00C896' : '#FF6B35'}
              emissive={i % 3 === 0 ? '#00D2FF' : i % 3 === 1 ? '#00C896' : '#FF6B35'}
              emissiveIntensity={0.5}
            />
          </mesh>
        ))}
      </group>

      {/* Ring around globe */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.8, 0.02, 16, 100]} />
        <meshBasicMaterial color="#6C63FF" transparent opacity={0.4} />
      </mesh>

      {/* Second ring at angle */}
      <mesh rotation={[Math.PI / 3, Math.PI / 4, 0]}>
        <torusGeometry args={[3, 0.015, 16, 100]} />
        <meshBasicMaterial color="#00D2FF" transparent opacity={0.3} />
      </mesh>
    </group>
  );
}

// Data Nodes floating around
function DataNodes() {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003;
    }
  });

  const nodes = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => {
      const angle = (i / 12) * Math.PI * 2;
      const radius = 4.5;
      return {
        position: [
          Math.cos(angle) * radius,
          (Math.random() - 0.5) * 3,
          Math.sin(angle) * radius
        ],
        delay: i * 0.1
      };
    });
  }, []);

  return (
    <group ref={groupRef}>
      {nodes.map((node, i) => (
        <Float
          key={i}
          speed={2 + Math.random()}
          rotationIntensity={0.5}
          floatIntensity={1}
        >
          <mesh position={node.position}>
            <octahedronGeometry args={[0.15, 0]} />
            <meshStandardMaterial
              color="#00C896"
              emissive="#00C896"
              emissiveIntensity={0.5}
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

// Main Canvas Component
export default function HeroCanvas() {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      minHeight: '500px',
      position: 'relative'
    }}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00D2FF" />
        <spotLight
          position={[0, 10, 0]}
          angle={0.3}
          penumbra={1}
          intensity={1}
          castShadow
        />

        {/* Background Stars */}
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />

        {/* 3D Objects */}
        <AnimatedGlobe />
        <DataNodes />

        {/* Controls - disabled rotation for better UX */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={false}
          autoRotate={false}
        />
      </Canvas>
    </div>
  );
}
