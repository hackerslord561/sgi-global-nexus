"use client";

import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Html, Line, useTexture, Stars } from '@react-three/drei';
import * as THREE from 'three';

const R = 2;
const deg2rad = Math.PI / 180;

const getCoordinates = (lat: number, lng: number) => {
    const phi = (90 - lat) * deg2rad;
    const theta = (lng + 90) * deg2rad;
    return new THREE.Vector3().setFromSphericalCoords(R, phi, theta);
};

const positions = {
    washington: getCoordinates(38.9072, -77.0369),
    accra: getCoordinates(5.6037, -0.1870),
    singapore: getCoordinates(1.3521, 103.8198),
};

const HubNode = ({ position, label, role }: { position: THREE.Vector3; label: string; role: string }) => {
    const nodeRef = useRef<THREE.Group>(null);
    const htmlRef = useRef<HTMLDivElement>(null);
    const coreRef = useRef<THREE.Mesh>(null);

    useFrame(({ camera, clock }) => {
        if (htmlRef.current && nodeRef.current) {
            const nodeWorldPos = new THREE.Vector3();
            nodeRef.current.getWorldPosition(nodeWorldPos);
            const toCamera = new THREE.Vector3().subVectors(camera.position, nodeWorldPos).normalize();
            const dot = nodeWorldPos.normalize().dot(toCamera);

            if (dot > 0.1) {
                htmlRef.current.style.opacity = '1';
                htmlRef.current.style.pointerEvents = 'auto';
                htmlRef.current.style.transform = 'scale(1)';
            } else {
                htmlRef.current.style.opacity = '0';
                htmlRef.current.style.pointerEvents = 'none';
                htmlRef.current.style.transform = 'scale(0.8)';
            }
        }
        if (coreRef.current) {
            const t = clock.getElapsedTime();
            const pulse = 1 + Math.sin(t * 3) * 0.15;
            coreRef.current.scale.set(pulse, pulse, pulse);
        }
    });

    return (
        <group position={position} ref={nodeRef}>
            <mesh ref={coreRef}>
                <sphereGeometry args={[0.07, 32, 32]} />
                <meshBasicMaterial color="#FFFFFF" />
            </mesh>
            <mesh>
                <sphereGeometry args={[0.12, 32, 32]} />
                <meshBasicMaterial color="#D4AF37" transparent opacity={0.5} />
            </mesh>

            <Html center zIndexRange={[0, 10]}>
                <div
                    ref={htmlRef}
                    className="bg-navy-900/90 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded text-left w-max transform translate-x-4 translate-y-4 transition-all duration-500 ease-out shadow-xl"
                >
                    <p className="text-ghost font-bold text-xs uppercase tracking-wider leading-tight m-0">{label}</p>
                    <p className="text-steel-light text-[10px] leading-tight mt-0.5 m-0">{role}</p>
                </div>
            </Html>
        </group>
    );
};

const ConnectionArc = ({ start, end }: { start: THREE.Vector3; end: THREE.Vector3 }) => {
    const { points, curve } = useMemo(() => {
        const mid = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5).normalize().multiplyScalar(R + 0.6);
        const c = new THREE.QuadraticBezierCurve3(start, mid, end);
        return { points: c.getPoints(64), curve: c };
    }, [start, end]);

    const packetRef = useRef<THREE.Mesh>(null);

    useFrame(({ clock }) => {
        const t = (clock.getElapsedTime() * 0.25) % 1;
        const point = curve.getPoint(t);
        if (packetRef.current) packetRef.current.position.copy(point);
    });

    return (
        <>
            <Line points={points} color="#8a9aab" lineWidth={1.5} transparent opacity={0.6} />
            <mesh ref={packetRef}>
                <sphereGeometry args={[0.03, 16, 16]} />
                <meshBasicMaterial color="#FFD700" />
            </mesh>
        </>
    );
};

const Earth = () => {
    const earthRef = useRef<THREE.Group>(null);
    const topoMap = useTexture('https://unpkg.com/three-globe/example/img/earth-topology.png');
    const waterMap = useTexture('https://unpkg.com/three-globe/example/img/earth-water.png');
    const nightMap = useTexture('https://unpkg.com/three-globe/example/img/earth-night.jpg');

    useFrame(() => {
        if (earthRef.current) earthRef.current.rotation.y += 0.001;
    });

    return (
        <group ref={earthRef}>
            <mesh>
                <sphereGeometry args={[R * 1.05, 64, 64]} />
                <meshBasicMaterial color="#4eaaff" transparent opacity={0.15} side={THREE.BackSide} />
            </mesh>
            <Sphere args={[R, 128, 128]}>
                <shaderMaterial
                    // INTENSIVE FIX: Removed the 'extensions' property to clear TS2353
                    uniforms={{ tTopology: { value: topoMap }, tWater: { value: waterMap }, tNight: { value: nightMap } }}
                    vertexShader={`
                        uniform sampler2D tTopology;
                        varying vec2 vUv;
                        varying vec3 vNormal;
                        void main() {
                          vUv = uv;
                          float h = texture2D(tTopology, uv).r;
                          vec3 displaced = position + normal * (h * 0.08);
                          vNormal = normalize(normalMatrix * normal);
                          gl_Position = projectionMatrix * modelViewMatrix * vec4(displaced, 1.0);
                        }
                    `}
                    fragmentShader={`
                        uniform sampler2D tWater;
                        uniform sampler2D tNight;
                        varying vec2 vUv;
                        varying vec3 vNormal;
                        void main() {
                          float water = texture2D(tWater, vUv).r;
                          vec3 colorLand = vec3(0.0, 0.05, 0.12);
                          vec3 colorWater = vec3(0.35, 0.7, 1.0);
                          vec3 base = mix(colorLand, colorWater, water);
                          vec3 night = texture2D(tNight, vUv).rgb;
                          vec3 lightDir = normalize(vec3(1.0, 1.0, 1.0));
                          float light = dot(normalize(vNormal), lightDir);
                          float nightFactor = smoothstep(0.2, -0.2, light);
                          base = mix(base, night * 2.5, nightFactor);
                          float diff = max(light, 0.2);
                          base *= diff;
                          gl_FragColor = vec4(base, 1.0);
                        }
                    `}
                />
            </Sphere>
            <HubNode position={positions.washington} label="Washington D.C." role="Global HQ" />
            <HubNode position={positions.accra} label="Accra (Ghana)" role="Regional HQ" />
            <HubNode position={positions.singapore} label="Singapore" role="Trading Hub" />
            <ConnectionArc start={positions.washington} end={positions.accra} />
            <ConnectionArc start={positions.accra} end={positions.singapore} />
            <ConnectionArc start={positions.singapore} end={positions.washington} />
        </group>
    );
};

export default function TrilateralGlobe() {
    return (
        <div className="relative w-full h-full min-h-[500px] overflow-hidden cursor-grab bg-navy-900">
            <Canvas camera={{ position: [0, 0, 6], fov: 40 }} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                <Suspense fallback={null}>
                    <Stars radius={50} depth={20} count={800} factor={4} saturation={0} fade />
                    <Earth />
                </Suspense>
                <ambientLight intensity={1.2} />
                <pointLight position={[10, 10, 10]} intensity={1.5} />
                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.3} />
            </Canvas>
        </div>
    );
}