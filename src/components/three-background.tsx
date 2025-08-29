"use client"

import * as React from "react"
import * as THREE from "three"
import { cn } from "@/lib/utils"

type ThreeBackgroundProps = {
  className?: string
  density?: number // total number of particles across layers
  opacity?: number // global opacity multiplier
  depth?: number // z-depth of field (larger = more immersive)
  speed?: number // base speed factor
  colors?: string[] // optional array of CSS colors (will derive from currentColor if not provided)
}

/**
 * ThreeBackground
 * - Layered star/particle field with additive glow, parallax, twinkle, and subtle drift
 * - Decorative only (aria-hidden). Fully cleaned up on unmount.
 *
 * Best placed absolutely under your content: className="absolute inset-0 pointer-events-none"
 */
export function ThreeBackground({
  className,
  density = 1800,
  opacity = 0.5,
  depth = 900,
  speed = 0.06,
  colors,
}: ThreeBackgroundProps) {
  const containerRef = React.useRef<HTMLDivElement | null>(null)
  const rafRef = React.useRef<number | null>(null)

  React.useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Respect reduced motion
    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, 1, 1, depth * 3)
    camera.position.set(0, 0, depth / 2)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, reduceMotion ? 1 : 2))
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.setClearColor(0x000000, 0)
    container.appendChild(renderer.domElement)

    // Sizing
    const setSize = () => {
      const { clientWidth, clientHeight } = container
      renderer.setSize(clientWidth, clientHeight, false)
      camera.aspect = clientWidth / Math.max(clientHeight, 1)
      camera.updateProjectionMatrix()
    }
    setSize()

    // Observe container resize
    const ro = new ResizeObserver(() => setSize())
    ro.observe(container)

    // Resolve base colors
    const baseStyle = getComputedStyle(container)
    const current = colors?.[0] || baseStyle.color || "#60a5fa" // default sky-500
    // Derive 2 accents if not provided
    const c1 = new THREE.Color(current)
    const c2 = colors?.[1] ? new THREE.Color(colors[1]) : c1.clone().offsetHSL(0.04, 0.1, 0.08) // slightly warmer/brighter
    const c3 = colors?.[2] ? new THREE.Color(colors[2]) : c1.clone().offsetHSL(-0.06, -0.05, -0.06) // slightly cooler/darker
    const layerColors = [c1, c2, c3]

    // Create a soft sprite for glow (radial gradient)
    const spriteSize = 64
    const spriteCanvas = document.createElement("canvas")
    spriteCanvas.width = spriteCanvas.height = spriteSize
    const ctx = spriteCanvas.getContext("2d")!
    const gradient = ctx.createRadialGradient(
      spriteSize / 2,
      spriteSize / 2,
      0,
      spriteSize / 2,
      spriteSize / 2,
      spriteSize / 2,
    )
    gradient.addColorStop(0, "rgba(255,255,255,1)")
    gradient.addColorStop(0.25, "rgba(255,255,255,0.85)")
    gradient.addColorStop(0.6, "rgba(255,255,255,0.35)")
    gradient.addColorStop(1, "rgba(255,255,255,0)")
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, spriteSize, spriteSize)
    const spriteTexture = new THREE.CanvasTexture(spriteCanvas)
    spriteTexture.colorSpace = THREE.SRGBColorSpace
    spriteTexture.needsUpdate = true

    // Particle layers
    const layers = 3
    const perLayer = Math.max(100, Math.floor(density / layers))
    const groups: {
      points: THREE.Points
      geo: THREE.BufferGeometry
      mat: THREE.PointsMaterial
      // speed multipliers per layer
      driftX: number
      driftY: number
      zSpeed: number
      twinklePhase: number
    }[] = []

    // Distribution ranges
    const rangeX = 1 // normalized; scaled by camera frustum later
    const rangeY = 1
    const zMin = -depth
    const zMax = depth * 0.6 // keep some to front, but not too near

    for (let i = 0; i < layers; i++) {
      const positions = new Float32Array(perLayer * 3)
      // Distribute in cube; we'll rely on perspective for depth variation
      for (let p = 0; p < perLayer; p++) {
        const idx = p * 3
        positions[idx + 0] = (Math.random() * 2 - 1) * rangeX
        positions[idx + 1] = (Math.random() * 2 - 1) * rangeY
        positions[idx + 2] = THREE.MathUtils.lerp(zMin, zMax, Math.random())
      }

      const geo = new THREE.BufferGeometry()
      geo.setAttribute("position", new THREE.BufferAttribute(positions, 3))

      const mat = new THREE.PointsMaterial({
        size: i === 0 ? 2.2 : i === 1 ? 1.7 : 1.3,
        map: spriteTexture,
        color: layerColors[i],
        transparent: true,
        opacity: opacity * (i === 0 ? 0.85 : i === 1 ? 0.65 : 0.5),
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        sizeAttenuation: true,
      })

      const points = new THREE.Points(geo, mat)
      scene.add(points)

      // Layer motion characteristics
      const driftX = 0.08 + i * 0.05
      const driftY = 0.06 + i * 0.04
      const zSpeed = (speed * (i + 1)) / 3
      const twinklePhase = Math.random() * Math.PI * 2

      groups.push({ points, geo, mat, driftX, driftY, zSpeed, twinklePhase })
    }

    const circuit = {
      nodePoints: null as unknown as THREE.Points,
      nodeGeo: null as unknown as THREE.BufferGeometry,
      nodeMat: null as unknown as THREE.PointsMaterial,
      lineObj: null as unknown as THREE.LineSegments,
      lineGeo: null as unknown as THREE.BufferGeometry,
      lineMat: null as unknown as THREE.LineBasicMaterial,
      twinklePhase: Math.random() * Math.PI * 2,
    }
    {
      // derive colors: cyan for nodes, lime for traces by default
      const nodesColor = colors?.[0] ? new THREE.Color(colors[0]) : new THREE.Color("#22d3ee") // cyan-400
      const linesColor = colors?.[1] ? new THREE.Color(colors[1]) : new THREE.Color("#a3e635") // lime-400

      const nodeCount = Math.max(80, Math.min(300, Math.floor(density / 12)))
      const nodePositions = new Float32Array(nodeCount * 3)
      // distribute on a mid-depth slab for a "PCB layer" feel
      const zCenter = depth * 0.1
      const zSpread = depth * 0.15

      for (let i = 0; i < nodeCount; i++) {
        const ix = i * 3
        nodePositions[ix + 0] = (Math.random() * 2 - 1) * rangeX
        nodePositions[ix + 1] = (Math.random() * 2 - 1) * rangeY
        nodePositions[ix + 2] = zCenter + (Math.random() * 2 - 1) * zSpread
      }

      // nearest-neighbor connectivity with distance threshold
      const maxNeighbors = 3
      const distThreshold2 = 0.45 * 0.45 // normalized XY
      const edges: number[] = []
      for (let i = 0; i < nodeCount; i++) {
        const ix = i * 3
        const ax = nodePositions[ix + 0]
        const ay = nodePositions[ix + 1]
        const candidates: { j: number; d2: number }[] = []
        for (let j = i + 1; j < nodeCount; j++) {
          const jx = j * 3
          const bx = nodePositions[jx + 0]
          const by = nodePositions[jx + 1]
          const dx = ax - bx
          const dy = ay - by
          const d2 = dx * dx + dy * dy
          if (d2 <= distThreshold2) candidates.push({ j, d2 })
        }
        candidates.sort((a, b) => a.d2 - b.d2)
        const take = Math.min(maxNeighbors, candidates.length)
        for (let k = 0; k < take; k++) {
          edges.push(i, candidates[k].j)
        }
      }

      const linePositions = new Float32Array(edges.length * 3 * 2) // pair of vertices per edge
      for (let e = 0; e < edges.length; e++) {
        const a = edges[e * 2 + 0]
        const b = edges[e * 2 + 1]
        const a3 = a * 3
        const b3 = b * 3
        const base = e * 6
        linePositions[base + 0] = nodePositions[a3 + 0]
        linePositions[base + 1] = nodePositions[a3 + 1]
        linePositions[base + 2] = nodePositions[a3 + 2]
        linePositions[base + 3] = nodePositions[b3 + 0]
        linePositions[base + 4] = nodePositions[b3 + 1]
        linePositions[base + 5] = nodePositions[b3 + 2]
      }

      // nodes (glow dots)
      const nodeGeo = new THREE.BufferGeometry()
      nodeGeo.setAttribute("position", new THREE.BufferAttribute(nodePositions, 3))
      const nodeMat = new THREE.PointsMaterial({
        size: 2.2,
        map: spriteTexture,
        color: nodesColor,
        transparent: true,
        opacity: Math.min(1, opacity * 0.9),
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        sizeAttenuation: true,
      })
      const nodePoints = new THREE.Points(nodeGeo, nodeMat)
      scene.add(nodePoints)

      // traces (lines)
      const lineGeo = new THREE.BufferGeometry()
      lineGeo.setAttribute("position", new THREE.BufferAttribute(linePositions, 3))
      const lineMat = new THREE.LineBasicMaterial({
        color: linesColor,
        transparent: true,
        opacity: Math.min(1, opacity * 0.45),
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      })
      const lineObj = new THREE.LineSegments(lineGeo, lineMat)
      scene.add(lineObj)

      circuit.nodePoints = nodePoints
      circuit.nodeGeo = nodeGeo
      circuit.nodeMat = nodeMat
      circuit.lineObj = lineObj
      circuit.lineGeo = lineGeo
      circuit.lineMat = lineMat
    }

    type Wave = {
      obj: THREE.Line
      geo: THREE.BufferGeometry
      pos: THREE.BufferAttribute
      phase: number
      speed: number
      amp: number
      freq: number
      baseY: number
      color: THREE.Color
    }
    const waves: Wave[] = []
    {
      const waveCount = 3
      const samples = 256
      const xMin = -1.2
      const xMax = 1.2
      for (let i = 0; i < waveCount; i++) {
        const positions = new Float32Array(samples * 3)
        const baseY = -0.4 + i * 0.4 // spread vertically
        const z = depth * (0.05 + i * 0.06)
        const amp = 0.035 + i * 0.015
        const freq = 7 + i * 2
        const phase = Math.random() * Math.PI * 2
        const speedWave = speed * (0.8 + 0.3 * i)

        for (let s = 0; s < samples; s++) {
          const t = s / (samples - 1)
          const x = THREE.MathUtils.lerp(xMin, xMax, t)
          const y = baseY + amp * Math.sin(freq * x + phase)
          const idx = s * 3
          positions[idx + 0] = x
          positions[idx + 1] = y
          positions[idx + 2] = z
        }

        const geo = new THREE.BufferGeometry()
        const pos = new THREE.BufferAttribute(positions, 3)
        geo.setAttribute("position", pos)

        const col = i % 2 === 0 ? colors?.[0] || "#22d3ee" : colors?.[1] || "#a3e635"
        const mat = new THREE.LineBasicMaterial({
          color: new THREE.Color(col),
          transparent: true,
          opacity: Math.min(1, opacity * (0.35 - i * 0.05)),
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        })

        const obj = new THREE.Line(geo, mat)
        scene.add(obj)

        waves.push({
          obj,
          geo,
          pos,
          phase,
          speed: speedWave,
          amp,
          freq,
          baseY,
          color: new THREE.Color(col),
        })
      }
    }

    // Pointer parallax
    let targetPX = 0
    let targetPY = 0
    let parallaxX = 0
    let parallaxY = 0

    const onPointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height
      targetPX = (x - 0.5) * 2 // -1..1
      targetPY = (y - 0.5) * 2
    }

    container.addEventListener("pointermove", onPointerMove)

    // World group, neon grid, and floating "chip" cubes
    const world = new THREE.Group()
    scene.add(world)

    // Neon grid (PCB-like), additive blended
    const gridColor = new THREE.Color(colors?.[0] || "#22d3ee") // cyan
    const grid = new THREE.GridHelper(12, 80, gridColor, gridColor)
    ;(grid.material as THREE.LineBasicMaterial).transparent = true
    ;(grid.material as THREE.LineBasicMaterial).opacity = Math.min(1, opacity * 0.18)
    ;(grid.material as THREE.LineBasicMaterial).blending = THREE.AdditiveBlending
    ;(grid.material as THREE.LineBasicMaterial).depthWrite = false
    grid.rotation.x = Math.PI / 2.35 // tilt towards camera
    grid.position.z = depth * 0.08
    world.add(grid)

    // Floating chip cubes with glowing edges
    type Chip = {
      group: THREE.Group
      zSpeed: number
      bobAmp: number
      bobFreq: number
      rot: THREE.Vector3
      drift: THREE.Vector3
    }
    const chips: Chip[] = []

    const chipCount = Math.max(16, Math.min(60, Math.floor(density / 100)))
    const chipGeom = new THREE.BoxGeometry(0.12, 0.02, 0.18)
    const chipFaceMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color("#0ea5e9"), // sky-500-ish
      transparent: true,
      opacity: Math.min(1, opacity * 0.12),
    })
    const chipEdgeGeom = new THREE.EdgesGeometry(chipGeom)
    const chipEdgeMat = new THREE.LineBasicMaterial({
      color: new THREE.Color(colors?.[1] || "#a3e635"), // lime
      transparent: true,
      opacity: Math.min(1, opacity * 0.9),
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })

    for (let i = 0; i < chipCount; i++) {
      const body = new THREE.Mesh(chipGeom, chipFaceMat)
      const edges = new THREE.LineSegments(chipEdgeGeom, chipEdgeMat)
      const grp = new THREE.Group()
      grp.add(body)
      grp.add(edges)

      // Randomize initial transform within normalized XY, mid-front Z slab
      grp.position.set(
        (Math.random() * 2 - 1) * 1.2,
        (Math.random() * 2 - 1) * 0.9,
        THREE.MathUtils.lerp(depth * 0.02, depth * 0.4, Math.random()),
      )
      grp.rotation.set(Math.random() * 0.6 - 0.3, Math.random() * 2 * Math.PI, Math.random() * 0.6 - 0.3)
      const rot = new THREE.Vector3(
        (Math.random() - 0.5) * 0.002,
        (Math.random() - 0.5) * 0.004,
        (Math.random() - 0.5) * 0.002,
      )
      const drift = new THREE.Vector3((Math.random() - 0.5) * 0.0008, (Math.random() - 0.5) * 0.0006, 0)
      const zSpeed = speed * (0.15 + Math.random() * 0.35)
      const bobAmp = 0.02 + Math.random() * 0.02
      const bobFreq = 0.6 + Math.random() * 0.8

      world.add(grp)
      chips.push({ group: grp, zSpeed, bobAmp, bobFreq, rot, drift })
    }

    // Animation loop
    const clock = new THREE.Clock()

    const animate = () => {
      const t = clock.getElapsedTime()
      const dt = clock.getDelta()

      // Smooth parallax
      const lerp = (a: number, b: number, m: number) => a + (b - a) * m
      const parallaxEase = reduceMotion ? 0.05 : 0.12
      parallaxX = lerp(parallaxX, targetPX, parallaxEase)
      parallaxY = lerp(parallaxY, targetPY, parallaxEase)

      camera.position.x = parallaxX * 8
      camera.position.y = -parallaxY * 6
      camera.lookAt(0, 0, 0)

      // Subtle world rotation for stronger 3D depth
      world.rotation.y = parallaxX * 0.12
      world.rotation.x = -parallaxY * 0.08

      for (let i = 0; i < groups.length; i++) {
        const g = groups[i]
        const pos = g.geo.getAttribute("position") as THREE.BufferAttribute

        // Twinkle and subtle pulsation
        if (!reduceMotion) {
          const twinkle = 0.9 + 0.1 * Math.sin(t * (0.8 + i * 0.3) + g.twinklePhase)
          g.mat.size = (i === 0 ? 2.2 : i === 1 ? 1.7 : 1.3) * twinkle
          g.mat.opacity = Math.min(
            1,
            opacity * (i === 0 ? 0.85 : i === 1 ? 0.65 : 0.5) * (0.95 + 0.05 * Math.sin(t * 0.6 + i)),
          )
        }

        // Drift and z-wrapping starfield
        const count = pos.count
        for (let p = 0; p < count; p++) {
          const ix = p * 3
          let x = pos.array[ix + 0] as number
          let y = pos.array[ix + 1] as number
          let z = pos.array[ix + 2] as number

          if (!reduceMotion) {
            x += Math.sin(t * (g.driftX + 0.05) + (z * 0.002 + (p % 7))) * 0.0007
            y += Math.cos(t * (g.driftY + 0.04) + (z * 0.002 + (p % 11))) * 0.0006
          }

          z += g.zSpeed
          if (z > zMax) {
            z = zMin + (z - zMax)
            // reposition softly in x/y to avoid visible streaks
            x = (Math.random() * 2 - 1) * rangeX
            y = (Math.random() * 2 - 1) * rangeY
          }

          pos.array[ix + 0] = x
          pos.array[ix + 1] = y
          pos.array[ix + 2] = z
        }
        pos.needsUpdate = true
      }

      if (!reduceMotion) {
        // oscilloscope waves
        for (let i = 0; i < waves.length; i++) {
          const w = waves[i]
          w.phase += dt * w.speed * 2.0
          const count = w.pos.count
          for (let s = 0; s < count; s++) {
            const idx = s * 3
            const x = w.pos.array[idx + 0] as number
            w.pos.array[idx + 1] = w.baseY + w.amp * Math.sin(w.freq * (x + w.phase))
            // z remains constant
          }
          w.pos.needsUpdate = true
          const lineMat = w.obj.material as THREE.LineBasicMaterial
          lineMat.opacity = Math.min(1, opacity * (0.35 - i * 0.05) * (0.9 + 0.1 * Math.sin(t * 1.3 + i)))
        }

        // circuit twinkle
        const nodeMat = circuit.nodeMat
        const lineMat = circuit.lineMat
        if (nodeMat && lineMat) {
          const pulse = 0.92 + 0.08 * Math.sin(t * 1.1 + circuit.twinklePhase)
          nodeMat.size = 2.2 * pulse
          nodeMat.opacity = Math.min(1, opacity * 0.9 * (0.9 + 0.1 * Math.sin(t * 0.9)))
          lineMat.opacity = Math.min(1, opacity * 0.45 * (0.9 + 0.1 * Math.cos(t * 1.0)))
        }
      }

      // Animate chips (float, drift, and wrap by Z)
      for (let i = 0; i < chips.length; i++) {
        const c = chips[i]
        const g = c.group
        g.rotation.x += c.rot.x
        g.rotation.y += c.rot.y
        g.rotation.z += c.rot.z
        g.position.x += c.drift.x
        g.position.y += c.drift.y

        // gentle bobbing
        g.position.y += Math.sin(t * c.bobFreq + i) * c.bobAmp * 0.002

        // move forward in Z and wrap
        g.position.z += c.zSpeed
        if (g.position.z > depth * 0.6) {
          g.position.z = -depth * 0.2
          g.position.x = (Math.random() * 2 - 1) * 1.2
          g.position.y = (Math.random() * 2 - 1) * 0.9
        }
      }

      renderer.render(scene, camera)
      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      container.removeEventListener("pointermove", onPointerMove)
      ro.disconnect()

      // Cleanup for particles, circuit, waves
      groups.forEach(({ points, geo, mat }) => {
        scene.remove(points)
        geo.dispose()
        mat.dispose()
      })
      if (circuit.nodePoints) {
        scene.remove(circuit.nodePoints)
        circuit.nodeGeo.dispose()
        circuit.nodeMat.dispose()
      }
      if (circuit.lineObj) {
        scene.remove(circuit.lineObj)
        circuit.lineGeo.dispose()
        ;(circuit.lineMat as THREE.LineBasicMaterial).dispose()
      }
      waves.forEach((w) => {
        scene.remove(w.obj)
        w.geo.dispose()
        ;(w.obj.material as THREE.LineBasicMaterial).dispose()
      })

      // Cleanup for world, grid, and chips
      world.remove(grid)
      scene.remove(world)
      ;(grid.material as THREE.LineBasicMaterial).dispose()
      // dispose chip shared resources
      chipGeom.dispose()
      chipEdgeGeom.dispose()
      chipFaceMat.dispose()
      chipEdgeMat.dispose()
      for (const c of chips) {
        world.remove(c.group)
        c.group.traverse((obj) => {
          if ((obj as THREE.Mesh).geometry) {
            ;(obj as THREE.Mesh).geometry.dispose?.()
          }
          if ((obj as THREE.Mesh).material) {
            const m = (obj as THREE.Mesh).material as THREE.Material
            m.dispose?.()
          }
        })
      }

      spriteTexture.dispose()
      renderer.dispose()
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [colors, density, depth, opacity, speed])

  return <div ref={containerRef} className={cn("w-full h-full", className)} aria-hidden="true" />
}
