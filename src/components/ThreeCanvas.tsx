import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function ThreeCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 80;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 1. NEURAL NETWORK NODES & CONNECTIONS
    const nodeCount = 90;
    const nodeGeometry = new THREE.BufferGeometry();
    const nodePositions = new Float32Array(nodeCount * 3);
    const nodeVelocities: { x: number; y: number; z: number }[] = [];

    for (let i = 0; i < nodeCount; i++) {
      const x = (Math.random() - 0.5) * 120;
      const y = (Math.random() - 0.5) * 90;
      const z = (Math.random() - 0.5) * 60;
      nodePositions[i * 3] = x;
      nodePositions[i * 3 + 1] = y;
      nodePositions[i * 3 + 2] = z;

      nodeVelocities.push({
        x: (Math.random() - 0.5) * 0.04,
        y: (Math.random() - 0.5) * 0.04,
        z: (Math.random() - 0.5) * 0.04,
      });
    }

    nodeGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(nodePositions, 3)
    );

    // Node particles material
    const nodeMaterial = new THREE.PointsMaterial({
      color: 0x00dbff,
      size: 2.2,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });
    const nodesPoints = new THREE.Points(nodeGeometry, nodeMaterial);
    scene.add(nodesPoints);

    // Neural Network dynamic connection lines
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x915eff,
      transparent: true,
      opacity: 0.22,
      blending: THREE.AdditiveBlending,
    });

    const maxConnections = 400;
    const linePositions = new Float32Array(maxConnections * 2 * 3);
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(linePositions, 3)
    );
    const lineSegments = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lineSegments);

    // 2. AMBIENT STAR / TENSOR PARTICLES
    const starCount = 350;
    const starGeometry = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    const palette = [
      new THREE.Color(0x915eff), // Purple
      new THREE.Color(0x00dbff), // Cyan
      new THREE.Color(0xff4d9d), // Pink
      new THREE.Color(0xffffff), // White
    ];

    for (let i = 0; i < starCount; i++) {
      starPositions[i * 3] = (Math.random() - 0.5) * 220;
      starPositions[i * 3 + 1] = (Math.random() - 0.5) * 180;
      starPositions[i * 3 + 2] = (Math.random() - 0.5) * 140;

      const col = palette[Math.floor(Math.random() * palette.length)];
      starColors[i * 3] = col.r;
      starColors[i * 3 + 1] = col.g;
      starColors[i * 3 + 2] = col.b;
    }

    starGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(starPositions, 3)
    );
    starGeometry.setAttribute(
      'color',
      new THREE.BufferAttribute(starColors, 3)
    );

    const starMaterial = new THREE.PointsMaterial({
      size: 1.4,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });
    const starPoints = new THREE.Points(starGeometry, starMaterial);
    scene.add(starPoints);

    // Mouse tracking for parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (event: MouseEvent) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      mouseX = (event.clientX - windowHalfX) / 100;
      mouseY = (event.clientY - windowHalfY) / 100;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // Window resize handler
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onWindowResize);

    // Animation loop
    let animationFrameId: number;
    const connectionDistance = 25;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Smooth camera interpolation
      targetX += (mouseX - targetX) * 0.03;
      targetY += (mouseY - targetY) * 0.03;

      camera.position.x = targetX * 8;
      camera.position.y = -targetY * 6;
      camera.lookAt(scene.position);

      // Rotate nodes & stars
      nodesPoints.rotation.y += 0.001;
      starPoints.rotation.y -= 0.0004;
      lineSegments.rotation.y += 0.001;

      // Update node positions and bounce off boundaries
      const positions = nodeGeometry.attributes.position.array as Float32Array;
      for (let i = 0; i < nodeCount; i++) {
        positions[i * 3] += nodeVelocities[i].x;
        positions[i * 3 + 1] += nodeVelocities[i].y;
        positions[i * 3 + 2] += nodeVelocities[i].z;

        if (Math.abs(positions[i * 3]) > 60) nodeVelocities[i].x *= -1;
        if (Math.abs(positions[i * 3 + 1]) > 45) nodeVelocities[i].y *= -1;
        if (Math.abs(positions[i * 3 + 2]) > 30) nodeVelocities[i].z *= -1;
      }
      nodeGeometry.attributes.position.needsUpdate = true;

      // Calculate connections between nearby nodes
      let lineIndex = 0;
      const lines = lineGeometry.attributes.position.array as Float32Array;

      for (let i = 0; i < nodeCount; i++) {
        for (let j = i + 1; j < nodeCount; j++) {
          const dx = positions[i * 3] - positions[j * 3];
          const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
          const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < connectionDistance && lineIndex < maxConnections * 6) {
            lines[lineIndex++] = positions[i * 3];
            lines[lineIndex++] = positions[i * 3 + 1];
            lines[lineIndex++] = positions[i * 3 + 2];

            lines[lineIndex++] = positions[j * 3];
            lines[lineIndex++] = positions[j * 3 + 1];
            lines[lineIndex++] = positions[j * 3 + 2];
          }
        }
      }

      // Zero out remaining line buffer
      for (let i = lineIndex; i < maxConnections * 6; i++) {
        lines[i] = 0;
      }
      lineGeometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // Clean up
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onWindowResize);
      cancelAnimationFrame(animationFrameId);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      scene.clear();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      id="threejs-canvas-background"
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-65"
      style={{ willChange: 'transform' }}
    />
  );
}
