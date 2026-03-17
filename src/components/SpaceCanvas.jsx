import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';

// ── Particle field with mouse repulsion + constellation lines ──────────────
function ParticleField({ mouseNDC }) {
  const count = 60;
  const mesh = useRef();
  const lines = useRef();

  // Initial positions and velocities
  const data = useMemo(() => {
    return Array.from({ length: count }, () => ({
      pos: new THREE.Vector3(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 6
      ),
      vel: new THREE.Vector3(
        (Math.random() - 0.5) * 0.01,
        (Math.random() - 0.5) * 0.01,
        0
      ),
      color: [
        [0.655, 0.545, 0.980], // purple
        [0.220, 0.741, 0.980], // cyan
        [0.204, 0.827, 0.600], // mint
        [0.486, 0.227, 0.929], // deep purple
      ][Math.floor(Math.random() * 4)],
    }));
  }, []);

  // Gravity wells
  const wells = useMemo(() => [
    new THREE.Vector3(-7, 3, 0),
    new THREE.Vector3(7, -3, 0),
  ], []);

  const positions = useMemo(() => new Float32Array(count * 3), []);
  const colors = useMemo(() => {
    const c = new Float32Array(count * 3);
    data.forEach((d, i) => {
      c[i * 3] = d.color[0];
      c[i * 3 + 1] = d.color[1];
      c[i * 3 + 2] = d.color[2];
    });
    return c;
  }, [data]);

  const { camera } = useThree();

  useFrame(() => {
    // Mouse in world space (project from NDC)
    const mouseWorld = new THREE.Vector3(
      mouseNDC.current.x * 10,
      mouseNDC.current.y * 6,
      0
    );

    data.forEach((p, i) => {
      // Mouse repulsion
      const toMouse = p.pos.clone().sub(mouseWorld);
      const dist = toMouse.length();
      if (dist < 3.5 && dist > 0) {
        const force = ((3.5 - dist) / 3.5) * 0.04;
        p.vel.add(toMouse.normalize().multiplyScalar(force));
      }

      // Gravity well attraction
      wells.forEach(w => {
        const toWell = w.clone().sub(p.pos);
        const wd = toWell.length();
        if (wd > 0.5) {
          p.vel.add(toWell.normalize().multiplyScalar(0.00015 / wd));
        }
      });

      // Damping
      p.vel.multiplyScalar(0.97);

      // Slow upward drift (antigravity)
      p.vel.y += 0.0002;

      p.pos.add(p.vel);

      // Wrap bounds
      if (p.pos.x > 11) p.pos.x = -11;
      if (p.pos.x < -11) p.pos.x = 11;
      if (p.pos.y > 7) p.pos.y = -7;
      if (p.pos.y < -7) p.pos.y = 7;

      positions[i * 3] = p.pos.x;
      positions[i * 3 + 1] = p.pos.y;
      positions[i * 3 + 2] = p.pos.z;
    });

    if (mesh.current) {
      mesh.current.geometry.attributes.position.needsUpdate = true;
    }

    // Constellation lines
    if (lines.current) {
      const linePositions = [];
      const lineColors = [];
      for (let i = 0; i < count; i++) {
        for (let j = i + 1; j < count; j++) {
          const d = data[i].pos.distanceTo(data[j].pos);
          if (d < 3.5) {
            const alpha = 1 - d / 3.5;
            linePositions.push(
              data[i].pos.x, data[i].pos.y, data[i].pos.z,
              data[j].pos.x, data[j].pos.y, data[j].pos.z
            );
            lineColors.push(
              0.655 * alpha, 0.545 * alpha, 0.980 * alpha,
              0.220 * alpha, 0.741 * alpha, 0.980 * alpha
            );
          }
        }
      }
      lines.current.geometry.setAttribute(
        'position',
        new THREE.Float32BufferAttribute(linePositions, 3)
      );
      lines.current.geometry.setAttribute(
        'color',
        new THREE.Float32BufferAttribute(lineColors, 3)
      );
    }
  });

  return (
    <>
      {/* Particles */}
      <points ref={mesh}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[colors, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.12}
          vertexColors
          transparent
          opacity={0.85}
          sizeAttenuation
          depthWrite={false}
        />
      </points>

      {/* Constellation lines */}
      <lineSegments ref={lines}>
        <bufferGeometry />
        <lineBasicMaterial vertexColors transparent opacity={0.3} depthWrite={false} />
      </lineSegments>
    </>
  );
}

// ── Orbital Planet centerpiece ─────────────────────────────────────────────
export function OrbitalPlanet() {
  const planetRef = useRef();
  const ringRef = useRef();
  const outerRingRef = useRef();
  const glowRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (planetRef.current) {
      planetRef.current.rotation.y = t * 0.15;
      planetRef.current.rotation.x = t * 0.05;
      planetRef.current.position.y = Math.sin(t * 0.4) * 0.15;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = t * 0.1;
      ringRef.current.position.y = Math.sin(t * 0.4) * 0.15;
    }
    if (outerRingRef.current) {
      outerRingRef.current.rotation.z = -t * 0.06;
      outerRingRef.current.position.y = Math.sin(t * 0.4) * 0.15;
    }
    if (glowRef.current) {
      glowRef.current.position.y = Math.sin(t * 0.4) * 0.15;
    }
  });

  return (
    <group position={[0, 0, -2]}>
      {/* Glow sphere */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[1.4, 32, 32]} />
        <meshStandardMaterial
          color="#7c3aed"
          transparent
          opacity={0.06}
          side={THREE.FrontSide}
        />
      </mesh>

      {/* Planet */}
      <mesh ref={planetRef}>
        <sphereGeometry args={[0.9, 64, 64]} />
        <meshStandardMaterial
          color="#1a0a3c"
          emissive="#5b21b6"
          emissiveIntensity={0.6}
          roughness={0.4}
          metalness={0.8}
        />
      </mesh>

      {/* Inner orbital ring */}
      <mesh ref={ringRef} rotation={[Math.PI / 2.8, 0.3, 0]}>
        <torusGeometry args={[1.45, 0.04, 16, 100]} />
        <meshStandardMaterial
          color="#a78bfa"
          emissive="#a78bfa"
          emissiveIntensity={1.2}
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* Outer orbital ring */}
      <mesh ref={outerRingRef} rotation={[Math.PI / 2.2, -0.15, 0.5]}>
        <torusGeometry args={[1.9, 0.025, 16, 100]} />
        <meshStandardMaterial
          color="#38bdf8"
          emissive="#38bdf8"
          emissiveIntensity={0.9}
          transparent
          opacity={0.55}
        />
      </mesh>

      {/* Lights */}
      <pointLight position={[3, 3, 3]} color="#a78bfa" intensity={3} distance={10} />
      <pointLight position={[-3, -2, 2]} color="#38bdf8" intensity={2} distance={8} />
    </group>
  );
}

// ── Antigravity star drift ─────────────────────────────────────────────────
function DriftingStars() {
  const ref = useRef();
  useFrame(() => {
    if (ref.current) ref.current.rotation.y += 0.00015;
  });
  return (
    <Stars
      ref={ref}
      radius={80}
      depth={50}
      count={3000}
      factor={3}
      saturation={0.5}
      fade
      speed={0.6}
    />
  );
}

// ── Main exported canvas ───────────────────────────────────────────────────
export default function SpaceCanvas({ mouseNDC }) {
  return (
    <div id="space-canvas" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.2} />
        <DriftingStars />
        <ParticleField mouseNDC={mouseNDC} />
      </Canvas>
    </div>
  );
}
