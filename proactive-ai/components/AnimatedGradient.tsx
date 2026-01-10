'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const vertexShader = `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`

const fragmentShader = `
precision highp float;

varying vec2 vUv;

uniform float uTime;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
uniform vec3 uColor4;
uniform int uColorCount;
uniform float uSpeed;
uniform float uNoiseScale;
uniform float uWaveFrequency;
uniform float uDistortion;
uniform int uShape;
uniform float uCornerRadius;
uniform int uBlendMode;
uniform float uAngle;
uniform float uGrain;
uniform float uGlow;

// Simplex 3D Noise
vec4 permute(vec4 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

float snoise(vec3 v) {
  const vec2 C = vec2(1.0/6.0, 1.0/3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

  vec3 i  = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);

  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);

  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;

  i = mod(i, 289.0);
  vec4 p = permute(permute(permute(
             i.z + vec4(0.0, i1.z, i2.z, 1.0))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0))
           + i.x + vec4(0.0, i1.x, i2.x, 1.0));

  float n_ = 1.0/7.0;
  vec3 ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);

  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);

  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);

  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
}

float fbm(vec3 p) {
  float value = 0.0;
  float amplitude = 0.5;
  float frequency = 1.0;
  for (int i = 0; i < 4; i++) {
    value += amplitude * snoise(p * frequency);
    amplitude *= 0.5;
    frequency *= 2.0;
  }
  return value;
}

float random(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

float circleMask(vec2 uv) {
  vec2 center = uv - 0.5;
  return 1.0 - smoothstep(0.4, 0.5, length(center));
}

float rectangleMask(vec2 uv, float radius) {
  vec2 center = abs(uv - 0.5);
  vec2 q = center - vec2(0.4 - radius);
  float d = length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - radius;
  return 1.0 - smoothstep(0.0, 0.02, d);
}

float blobMask(vec2 uv, float time) {
  vec2 center = uv - 0.5;
  float angle = atan(center.y, center.x);
  float radius = 0.35 + 0.1 * snoise(vec3(cos(angle) * 2.0, sin(angle) * 2.0, time * 0.5));
  return 1.0 - smoothstep(radius - 0.02, radius + 0.02, length(center));
}

float linearBlend(vec2 uv, float angle) {
  float rad = angle * 3.14159265 / 180.0;
  vec2 dir = vec2(cos(rad), sin(rad));
  return dot(uv - 0.5, dir) + 0.5;
}

float radialBlend(vec2 uv) {
  return length(uv - 0.5) * 2.0;
}

float angularBlend(vec2 uv) {
  vec2 center = uv - 0.5;
  return (atan(center.y, center.x) / 3.14159265 + 1.0) * 0.5;
}

float diamondBlend(vec2 uv) {
  vec2 center = abs(uv - 0.5);
  return (center.x + center.y);
}

vec3 getColorByIndex(int index) {
  if (index == 0) return uColor1;
  if (index == 1) return uColor2;
  if (index == 2) return uColor3;
  if (index == 3) return uColor4;
  return uColor1;
}

void main() {
  vec2 uv = vUv;
  float time = uTime * uSpeed;

  vec2 distortedUv = uv;
  distortedUv.x += snoise(vec3(uv * uNoiseScale, time * 0.3)) * uDistortion * 0.1;
  distortedUv.y += snoise(vec3(uv * uNoiseScale + 100.0, time * 0.3)) * uDistortion * 0.1;

  float blend = 0.0;
  if (uBlendMode == 0) blend = linearBlend(distortedUv, uAngle);
  else if (uBlendMode == 1) blend = radialBlend(distortedUv);
  else if (uBlendMode == 2) blend = angularBlend(distortedUv);
  else blend = diamondBlend(distortedUv);

  float n1 = fbm(vec3(distortedUv * uNoiseScale, time * 0.2));
  float n2 = fbm(vec3(distortedUv * uNoiseScale + 50.0, time * 0.25 + 10.0));

  float wave = sin(distortedUv.x * uWaveFrequency * 10.0 + time) *
               cos(distortedUv.y * uWaveFrequency * 10.0 + time * 0.7) * 0.5 + 0.5;

  vec3 color = uColor1;
  float colorCount = float(uColorCount);

  for (int i = 1; i < 4; i++) {
    if (i >= uColorCount) break;
    float step = float(i) / (colorCount - 1.0);
    float noiseOffset = fbm(vec3(distortedUv * uNoiseScale + float(i) * 30.0, time * 0.2 + float(i) * 5.0));
    float t = smoothstep(step - 0.3, step + 0.3, blend + noiseOffset * 0.3 + wave * 0.1);
    vec3 nextColor = getColorByIndex(i);
    color = mix(color, nextColor, t);
  }

  float glowAmount = (n1 + n2) * 0.5 + 0.5;
  color = mix(color, color * 1.3, uGlow * glowAmount);

  float grain = random(uv * 1000.0 + time) * uGrain;
  color = color + vec3(grain - uGrain * 0.5);

  float mask = 1.0;
  if (uShape == 0) mask = circleMask(uv);
  else if (uShape == 1) mask = rectangleMask(uv, uCornerRadius);
  else if (uShape == 2) mask = blobMask(uv, time);

  gl_FragColor = vec4(color, mask);
}
`

const shapeMap = { circle: 0, rectangle: 1, blob: 2, full: 3 } as const
const blendModeMap = { linear: 0, radial: 1, angular: 2, diamond: 3 } as const

interface GradientMeshProps {
  colors: string[]
}

function GradientMesh({ colors }: GradientMeshProps) {
  const meshRef = useRef<THREE.Mesh>(null)

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColor1: { value: new THREE.Color(colors[0] || '#000000') },
      uColor2: { value: new THREE.Color(colors[1] || '#462381') },
      uColor3: { value: new THREE.Color(colors[2] || '#e662f8') },
      uColor4: { value: new THREE.Color(colors[3] || '#3549ff') },
      uColorCount: { value: colors.length },
      uSpeed: { value: 0.1 },
      uNoiseScale: { value: 4.1 },
      uWaveFrequency: { value: 0.1 },
      uDistortion: { value: 1.9 },
      uShape: { value: shapeMap['full'] },
      uCornerRadius: { value: 0.1 },
      uBlendMode: { value: blendModeMap['linear'] },
      uAngle: { value: 65 },
      uGrain: { value: 0.1 },
      uGlow: { value: 0.2 },
    }),
    [colors]
  )

  useFrame((state) => {
    if (!meshRef.current) return
    const material = meshRef.current.material as THREE.ShaderMaterial
    material.uniforms.uTime.value = state.clock.elapsedTime
  })

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
      />
    </mesh>
  )
}

interface AnimatedGradientProps {
  className?: string
  colors?: string[]
}

export function AnimatedGradient({ className = '', colors = ["#000000","#462381","#e662f8","#3549ff"] }: AnimatedGradientProps) {
  return (
    <div className={className} style={{ width: '100%', height: '100%' }}>
      <Canvas
        camera={{ position: [0, 0, 1], fov: 75 }}
        gl={{ alpha: true, antialias: true }}
      >
        <GradientMesh colors={colors} />
      </Canvas>
    </div>
  )
}
