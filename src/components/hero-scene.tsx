"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, ContactShadows, MeshDistortMaterial } from "@react-three/drei";
import { useRef, Suspense } from "react";
import type { Mesh, Group } from "three";

/* A glossy floating chocolate-drip sphere */
function ChocoSphere({ position, scale = 1, color = "#3D2314" }: { position: [number, number, number]; scale?: number; color?: string }) {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.25;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.4) * 0.2;
  });
  return (
    <Float speed={2} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={ref} position={position} scale={scale} castShadow>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color={color}
          roughness={0.15}
          metalness={0.4}
          distort={0.35}
          speed={2}
          clearcoat={1}
        />
      </mesh>
    </Float>
  );
}

/* Gold torus (donut-like waffle ring) */
function GoldTorus({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.z = state.clock.elapsedTime * 0.3;
    ref.current.rotation.x = state.clock.elapsedTime * 0.15;
  });
  return (
    <Float speed={1.6} rotationIntensity={0.8} floatIntensity={1.5}>
      <mesh ref={ref} position={position} scale={scale} castShadow>
        <torusGeometry args={[0.8, 0.32, 32, 100]} />
        <meshStandardMaterial
          color="#F2C14E"
          roughness={0.2}
          metalness={0.85}
          emissive="#C8792B"
          emissiveIntensity={0.15}
        />
      </mesh>
    </Float>
  );
}

/* Strawberry-pink rounded cube */
function PinkCube({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.2;
    ref.current.rotation.x = state.clock.elapsedTime * 0.18;
  });
  return (
    <Float speed={1.4} rotationIntensity={1} floatIntensity={1.4}>
      <mesh ref={ref} position={position} scale={scale} castShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color="#FF6B8B"
          roughness={0.25}
          metalness={0.3}
          emissive="#FF6B8B"
          emissiveIntensity={0.1}
        />
      </mesh>
    </Float>
  );
}

/* Waffle-cone shape (cone) */
function WaffleCone({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) {
  const ref = useRef<Group>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.35;
  });
  return (
    <Float speed={1.8} rotationIntensity={0.5} floatIntensity={1.1}>
      <group ref={ref} position={position} scale={scale}>
        {/* cone */}
        <mesh rotation={[Math.PI, 0, 0]} castShadow>
          <coneGeometry args={[0.7, 1.4, 32]} />
          <meshStandardMaterial color="#C8792B" roughness={0.6} metalness={0.2} />
        </mesh>
        {/* scoop */}
        <mesh position={[0, 0.65, 0]} castShadow>
          <sphereGeometry args={[0.55, 32, 32]} />
          <MeshDistortMaterial
            color="#F9D77E"
            roughness={0.3}
            metalness={0.2}
            distort={0.2}
            speed={1.5}
          />
        </mesh>
      </group>
    </Float>
  );
}

function Scene() {
  // Objects positioned on the LEFT and RIGHT sides, center kept clear.
  // Smaller scale than before so they frame the centered text.
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight
        position={[5, 8, 5]}
        intensity={1.4}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />
      <pointLight position={[-6, 2, -4]} intensity={2} color="#FF6B8B" />
      <pointLight position={[6, -2, 4]} intensity={2} color="#F2C14E" />
      <spotLight position={[0, 6, 0]} angle={0.6} penumbra={1} intensity={1.2} color="#FFB3C5" />

      {/* LEFT side cluster (x: -3.8 to -5.2) */}
      <ChocoSphere position={[-4.4, 1.0, 0]} scale={0.62} color="#3D2314" />
      <GoldTorus position={[-3.6, -0.8, 0.5]} scale={0.5} />
      <WaffleCone position={[-4.8, -0.2, -0.5]} scale={0.5} />
      <PinkCube position={[-3.4, 1.6, -0.5]} scale={0.34} />

      {/* RIGHT side cluster (x: +3.6 to +5.2) */}
      <GoldTorus position={[4.2, 1.0, 0]} scale={0.6} />
      <ChocoSphere position={[3.6, -0.9, 0.3]} scale={0.5} color="#2A1609" />
      <PinkCube position={[4.8, -0.1, -0.5]} scale={0.42} />
      <WaffleCone position={[3.8, 1.7, -1]} scale={0.42} />

      {/* tiny accents slightly closer to center on far edges */}
      <GoldTorus position={[-2.9, -1.4, 1]} scale={0.32} />
      <ChocoSphere position={[2.9, 1.5, 0.8]} scale={0.32} color="#3D2314" />

      <ContactShadows
        position={[0, -2.4, 0]}
        opacity={0.4}
        scale={14}
        blur={2.8}
        far={4}
        color="#2A1609"
      />
      <Environment preset="sunset" />
    </>
  );
}

export function HeroScene({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        shadows
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
