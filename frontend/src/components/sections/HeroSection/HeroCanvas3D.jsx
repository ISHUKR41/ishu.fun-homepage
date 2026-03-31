// HeroCanvas3D.jsx — Deferred Three.js scene
// Shows a CSS fallback instantly, loads WebGL only after 2s idle
// This prevents the 1000ms+ WebGL shader-compilation long task from blocking scroll

import { Suspense, useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Sphere, MeshDistortMaterial, Float, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

// ── Animated globe ────────────────────────────────────────────────────────────
function IndiaGlobe() {
  const mesh = useRef();
  useFrame((state, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.y += delta * 0.12;
    mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.08;
  });
  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.4}>
      <Sphere ref={mesh} args={[2.5, 32, 32]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#080810"
          attach="material"
          distort={0.25}
          speed={1.2}
          roughness={0.2}
          metalness={0.8}
          emissive="#6C63FF"
          emissiveIntensity={0.25}
        />
      </Sphere>
    </Float>
  );
}

// ── City nodes ────────────────────────────────────────────────────────────────
function OrbitingNodes() {
  const groupRef = useRef();
  const nodes = useMemo(() => [
    { position: [4, 2, 0],   color: '#6C63FF' },
    { position: [-4, -1, 2], color: '#00D2FF' },
    { position: [3, -2, -3], color: '#00C896' },
    { position: [-3, 2, -2], color: '#FF6B9D' },
    { position: [2, 0, 4],   color: '#FFC107' },
  ], []);
  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.08;
  });
  return (
    <group ref={groupRef}>
      {nodes.map((node, i) => (
        <Float key={i} speed={1.2 + i * 0.2} rotationIntensity={0.3} floatIntensity={0.3}>
          <mesh position={node.position}>
            <octahedronGeometry args={[0.28, 0]} />
            <meshStandardMaterial color={node.color} emissive={node.color} emissiveIntensity={0.7} metalness={0.5} roughness={0.3} />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

// ── Torus rings ───────────────────────────────────────────────────────────────
function TorusRings() {
  return (
    <>
      <Float speed={1} rotationIntensity={0.3} floatIntensity={0.15}>
        <mesh rotation={[Math.PI / 4, 0, 0]}>
          <torusGeometry args={[5, 0.02, 8, 64]} />
          <meshStandardMaterial color="#6C63FF" emissive="#6C63FF" emissiveIntensity={0.4} transparent opacity={0.25} />
        </mesh>
      </Float>
      <Float speed={0.7} rotationIntensity={0.2} floatIntensity={0.12}>
        <mesh rotation={[Math.PI / 3, Math.PI / 4, 0]}>
          <torusGeometry args={[7, 0.015, 8, 64]} />
          <meshStandardMaterial color="#00D2FF" emissive="#00D2FF" emissiveIntensity={0.3} transparent opacity={0.18} />
        </mesh>
      </Float>
    </>
  );
}

// ── Instanced particles ───────────────────────────────────────────────────────
function Particles({ count = 150 }) {
  const mesh = useRef();
  const particles = useMemo(() => Array.from({ length: count }, () => ({
    t: Math.random() * 100,
    factor: 20 + Math.random() * 80,
    speed: 0.008 + Math.random() / 250,
    xFactor: -40 + Math.random() * 80,
    yFactor: -40 + Math.random() * 80,
    zFactor: -40 + Math.random() * 80,
  })), [count]);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame(() => {
    if (!mesh.current) return;
    particles.forEach((p, i) => {
      p.t += p.speed / 2;
      const a = Math.cos(p.t) + Math.sin(p.t) / 10;
      const b = Math.sin(p.t) + Math.cos(p.t * 2) / 10;
      const s = Math.cos(p.t) * 0.25 + 0.45;
      dummy.position.set(
        p.xFactor + Math.cos(p.t / 10 * p.factor) + Math.sin(p.t) * p.factor / 10,
        p.yFactor + Math.sin(p.t / 10 * p.factor) + Math.cos(p.t * 2) * p.factor / 10,
        p.zFactor + Math.cos(p.t / 10 * p.factor) + Math.sin(p.t * 3) * p.factor / 10
      );
      dummy.scale.setScalar(s);
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[null, null, count]}>
      <dodecahedronGeometry args={[0.15, 0]} />
      <meshStandardMaterial color="#6C63FF" emissive="#6C63FF" emissiveIntensity={0.4} />
    </instancedMesh>
  );
}

// ── Scene ─────────────────────────────────────────────────────────────────────
function Scene() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 15]} fov={50} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.2} color="#6C63FF" />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color="#00D2FF" />
      <Stars radius={100} depth={50} count={1500} factor={4} saturation={0} fade speed={0.4} />
      <IndiaGlobe />
      <OrbitingNodes />
      <TorusRings />
      <Particles count={150} />
    </>
  );
}

// ── CSS Fallback (shows instantly, no WebGL needed) ───────────────────────────
function CSSFallback() {
  return (
    <div style={{
      width: '100%', height: '100%', position: 'absolute', inset: 0,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'radial-gradient(ellipse at 60% 50%, rgba(108,99,255,0.12) 0%, transparent 70%)',
    }}>
      {/* Animated rings via CSS */}
      <div style={{ position: 'relative', width: 280, height: 280 }}>
        {[0, 1, 2].map(i => (
          <div key={i} style={{
            position: 'absolute', inset: `${i * 28}px`,
            borderRadius: '50%',
            border: `1px solid rgba(108,99,255,${0.3 - i * 0.08})`,
            animation: `spin ${8 + i * 4}s linear infinite ${i % 2 ? 'reverse' : ''}`,
          }} />
        ))}
        {/* Globe */}
        <div style={{
          position: 'absolute', inset: '28%',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse at 35% 35%, rgba(108,99,255,0.4), rgba(8,8,16,0.95))',
          boxShadow: '0 0 40px rgba(108,99,255,0.3), inset 0 0 30px rgba(108,99,255,0.1)',
          animation: 'pulse 4s ease-in-out infinite',
        }} />
        {/* Orbiting dots */}
        {[0, 1, 2, 3, 4].map(i => (
          <div key={i} style={{
            position: 'absolute', inset: `${i * 8 + 10}%`,
            animation: `spin ${5 + i * 2}s linear infinite ${i % 2 ? 'reverse' : ''}`,
          }}>
            <div style={{
              position: 'absolute', top: 0, left: '50%',
              width: 6, height: 6, marginLeft: -3, marginTop: -3,
              borderRadius: '50%',
              background: ['#6C63FF','#00D2FF','#00C896','#FF6B9D','#FFC107'][i],
              boxShadow: `0 0 8px ${['#6C63FF','#00D2FF','#00C896','#FF6B9D','#FFC107'][i]}`,
            }} />
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Main component — deferred loading ─────────────────────────────────────────
export default function HeroCanvas3D() {
  const [showWebGL, setShowWebGL] = useState(false);

  useEffect(() => {
    // Use requestIdleCallback: browser loads WebGL only when main thread is free
    // Fallback to setTimeout for browsers without rIC (Safari)
    // This ensures Three.js NEVER blocks initial page render or scroll
    let handle;
    const load = () => setShowWebGL(true);

    // Strategy: load Three.js after 3 seconds regardless of idle state
    // This ensures WebGL loads BEFORE the user scrolls past hero section
    // requestIdleCallback with 3s timeout acts as "idle OR 3 seconds, whichever first"
    const hardTimeout = setTimeout(load, 3000);

    if ('requestIdleCallback' in window) {
      handle = window.requestIdleCallback(() => {
        clearTimeout(hardTimeout);
        load();
      }, { timeout: 2800 });
    } else {
      handle = hardTimeout;
    }

    return () => {
      clearTimeout(hardTimeout);
      if ('cancelIdleCallback' in window && handle !== hardTimeout) {
        window.cancelIdleCallback(handle);
      }
    };
  }, []);

  return (
    <div style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}>
      {!showWebGL && <CSSFallback />}
      {showWebGL && (
        <Canvas
          dpr={[1, 1.5]}
          performance={{ min: 0.5, debounce: 200 }}
          gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
          frameloop="always"
        >
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      )}
    </div>
  );
}
