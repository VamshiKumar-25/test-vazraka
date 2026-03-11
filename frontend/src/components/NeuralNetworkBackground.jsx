import { useMemo, useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const MAX_PARTICLES = 300;

function Network() {
  const groupRef = useRef();
  const pointsRef = useRef();
  const linesRef = useRef();
  const [particleCount, setParticleCount] = useState(MAX_PARTICLES);

  useEffect(() => {
    const handleResize = () => {
      setParticleCount(window.innerWidth < 768 ? 100 : 250);
    };
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const particlesData = useMemo(() => {
    const data = [];
    for (let i = 0; i < MAX_PARTICLES; i++) {
      data.push({
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02
        ),
        numConnections: 0
      });
    }
    return data;
  }, []);

  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(MAX_PARTICLES * 3);
    const colors = new Float32Array(MAX_PARTICLES * 3);
    const color = new THREE.Color();
    for (let i = 0; i < MAX_PARTICLES; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;

      const r = Math.random();
      if (r < 0.33) color.setHex(0x00ffff); // Cyan
      else if (r < 0.66) color.setHex(0x9933ff); // Purple
      else color.setHex(0x4d79ff); // Blue

      color.toArray(colors, i * 3);
    }
    return { positions, colors };
  }, []);

  const maxLines = (MAX_PARTICLES * (MAX_PARTICLES - 1)) / 2;
  const linePositions = useMemo(() => new Float32Array(maxLines * 6), [maxLines]);
  const lineColors = useMemo(() => new Float32Array(maxLines * 6), [maxLines]);

  useFrame((state) => {
    const { mouse } = state;
    if (!pointsRef.current || !linesRef.current) return;

    let vertexpos = 0;
    let colorpos = 0;

    const positionsData = pointsRef.current.geometry.attributes.position.array;
    
    // Smooth group parallax movement reacting to mouse
    groupRef.current.rotation.x += (mouse.y * 0.1 - groupRef.current.rotation.x) * 0.05;
    groupRef.current.rotation.y += (mouse.x * 0.1 - groupRef.current.rotation.y) * 0.05;

    // Reset connections
    for (let i = 0; i < particleCount; i++) {
        particlesData[i].numConnections = 0;
    }

    // Update positions
    for (let i = 0; i < particleCount; i++) {
      const particleData = particlesData[i];

      positionsData[i * 3] += particleData.velocity.x;
      positionsData[i * 3 + 1] += particleData.velocity.y;
      positionsData[i * 3 + 2] += particleData.velocity.z;

      // Bouning box
      if (positionsData[i * 3] < -10 || positionsData[i * 3] > 10) particleData.velocity.x *= -1;
      if (positionsData[i * 3 + 1] < -10 || positionsData[i * 3 + 1] > 10) particleData.velocity.y *= -1;
      if (positionsData[i * 3 + 2] < -10 || positionsData[i * 3 + 2] > 10) particleData.velocity.z *= -1;
      
      // Calculate lines
      for (let j = i + 1; j < particleCount; j++) {
        const dx = positionsData[i * 3] - positionsData[j * 3];
        const dy = positionsData[i * 3 + 1] - positionsData[j * 3 + 1];
        const dz = positionsData[i * 3 + 2] - positionsData[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        const maxDist = 2.5;

        // Interactive expansion mapping
        if (dist < maxDist) {
          particleData.numConnections++;
          particlesData[j].numConnections++;

          const alpha = 1.0 - dist / maxDist;
          const alphaFade = alpha * 0.5;

          linePositions[vertexpos++] = positionsData[i * 3];
          linePositions[vertexpos++] = positionsData[i * 3 + 1];
          linePositions[vertexpos++] = positionsData[i * 3 + 2];

          linePositions[vertexpos++] = positionsData[j * 3];
          linePositions[vertexpos++] = positionsData[j * 3 + 1];
          linePositions[vertexpos++] = positionsData[j * 3 + 2];

          // Use color of first particle
          const c1r = pointsRef.current.geometry.attributes.color.array[i * 3];
          const c1g = pointsRef.current.geometry.attributes.color.array[i * 3 + 1];
          const c1b = pointsRef.current.geometry.attributes.color.array[i * 3 + 2];
          
          lineColors[colorpos++] = c1r * alphaFade;
          lineColors[colorpos++] = c1g * alphaFade;
          lineColors[colorpos++] = c1b * alphaFade;

          lineColors[colorpos++] = c1r * alphaFade;
          lineColors[colorpos++] = c1g * alphaFade;
          lineColors[colorpos++] = c1b * alphaFade;
        }
      }
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;
    
    linesRef.current.geometry.attributes.position.needsUpdate = true;
    linesRef.current.geometry.attributes.color.needsUpdate = true;
    
    // Set draw ranges
    pointsRef.current.geometry.setDrawRange(0, particleCount);
    linesRef.current.geometry.setDrawRange(0, vertexpos / 3);
  });

  return (
    <group ref={groupRef}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={MAX_PARTICLES}
            array={positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={MAX_PARTICLES}
            array={colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.15}
          vertexColors
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={maxLines * 2}
            array={linePositions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={maxLines * 2}
            array={lineColors}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          vertexColors
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
    </group>
  );
}

export default function NeuralNetworkBackground() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: -1,
      pointerEvents: 'none'
    }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <Network />
      </Canvas>
    </div>
  );
}
