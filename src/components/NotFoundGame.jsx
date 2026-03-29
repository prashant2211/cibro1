import { useCallback, useEffect, useRef, useState } from 'react'

const SPARK_COLORS = ['#f0d78c', '#e07a5f', '#9b8cff', '#2ec4b6']

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduced(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  return reduced
}

function StaticFallback() {
  return (
    <div
      className="not-found-game not-found-game--static"
      role="img"
      aria-label="Soft decorative lights in a calm arrangement"
    >
      <div className="not-found-game__static-orbs" aria-hidden="true">
        <span className="not-found-game__orb not-found-game__orb--1" />
        <span className="not-found-game__orb not-found-game__orb--2" />
        <span className="not-found-game__orb not-found-game__orb--3" />
        <span className="not-found-game__orb not-found-game__orb--4" />
        <span className="not-found-game__orb not-found-game__orb--5" />
      </div>
      <p className="not-found-game__static-caption">A quiet moment, just for you</p>
    </div>
  )
}

export default function NotFoundGame() {
  const reducedMotion = usePrefersReducedMotion()
  const wrapRef = useRef(null)
  const canvasRef = useRef(null)
  const [score, setScore] = useState(0)
  const [paused, setPaused] = useState(false)

  const pausedRef = useRef(false)

  useEffect(() => {
    pausedRef.current = paused
  }, [paused])

  const gameRef = useRef({
    playerX: 0,
    targetX: 0,
    sparks: [],
    particles: [],
    keys: { left: false, right: false },
    lastSpawn: 0,
    w: 320,
    h: 380,
    dpr: 1,
  })

  const bumpScore = useCallback(() => {
    setScore((s) => s + 1)
  }, [])

  useEffect(() => {
    if (reducedMotion) return undefined

    const canvas = canvasRef.current
    const wrap = wrapRef.current
    if (!canvas || !wrap) return undefined

    const ctx = canvas.getContext('2d')
    if (!ctx) return undefined

    const g = gameRef.current
    let raf = 0

    const gameHeight = (w) => {
      const vh = window.innerHeight || 800
      const narrow = w < 480
      const maxH = narrow ? Math.min(340, Math.round(vh * 0.36)) : 560
      const minH = narrow ? 220 : 320
      const byVh = Math.round(vh * (narrow ? 0.36 : 0.44))
      const byW = Math.round(w * (narrow ? 0.58 : 0.62))
      return Math.min(maxH, Math.max(minH, Math.max(byVh, byW)))
    }

    const resize = () => {
      const rect = wrap.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const w = Math.max(240, Math.floor(rect.width))
      const h = gameHeight(w)
      g.w = w
      g.h = h
      g.dpr = dpr
      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      g.targetX = Math.max(28, Math.min(w - 28, g.targetX))
      g.playerX = Math.max(28, Math.min(w - 28, g.playerX))
    }

    const ro = new ResizeObserver(resize)
    ro.observe(wrap)
    window.addEventListener('resize', resize)
    resize()

    const setTargetFromClientX = (clientX) => {
      const rect = canvas.getBoundingClientRect()
      const x = clientX - rect.left
      g.targetX = Math.max(28, Math.min(g.w - 28, x))
    }

    const onPointerMove = (e) => {
      if (pausedRef.current) return
      setTargetFromClientX(e.clientX)
    }

    const onPointerDown = (e) => {
      if (e.pointerType === 'touch') {
        canvas.setPointerCapture(e.pointerId)
        setTargetFromClientX(e.clientX)
      }
    }

    const onKeyDown = (e) => {
      if (e.code === 'ArrowLeft') {
        g.keys.left = true
        e.preventDefault()
      }
      if (e.code === 'ArrowRight') {
        g.keys.right = true
        e.preventDefault()
      }
    }

    const onKeyUp = (e) => {
      if (e.code === 'ArrowLeft') g.keys.left = false
      if (e.code === 'ArrowRight') g.keys.right = false
    }

    canvas.addEventListener('pointermove', onPointerMove)
    canvas.addEventListener('pointerdown', onPointerDown)
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('keyup', onKeyUp)

    const PLAYER_R = 22
    const MARGIN = 28

    const spawnSpark = () => {
      g.sparks.push({
        x: MARGIN + Math.random() * (g.w - MARGIN * 2),
        y: -12,
        vy: 0.45 + Math.random() * 0.35,
        wobble: Math.random() * Math.PI * 2,
        wobbleSpeed: 0.018 + Math.random() * 0.02,
        color: SPARK_COLORS[(Math.random() * SPARK_COLORS.length) | 0],
        r: 5 + Math.random() * 3,
      })
    }

    const addParticles = (x, y, color) => {
      for (let i = 0; i < 12; i += 1) {
        const a = (Math.PI * 2 * i) / 12 + Math.random() * 0.5
        const sp = 1.2 + Math.random() * 2.2
        g.particles.push({
          x,
          y,
          vx: Math.cos(a) * sp,
          vy: Math.sin(a) * sp - 0.8,
          life: 1,
          color,
        })
      }
    }

    let last = performance.now()

    const tick = (now) => {
      const dt = Math.min(32, now - last)
      last = now

      if (!pausedRef.current) {
        if (g.keys.left) g.targetX -= 0.14 * dt
        if (g.keys.right) g.targetX += 0.14 * dt
        g.targetX = Math.max(MARGIN, Math.min(g.w - MARGIN, g.targetX))

        g.playerX += (g.targetX - g.playerX) * 0.14

        if (now - g.lastSpawn > 1200 && g.sparks.length < 9) {
          spawnSpark()
          g.lastSpawn = now
        }

        const floorY = g.h - Math.max(40, Math.min(58, Math.round(g.h * 0.095)))

        g.sparks = g.sparks.filter((s) => {
          s.wobble += s.wobbleSpeed * dt
          s.y += s.vy * (dt / 16)
          s.x += Math.sin(s.wobble) * 0.06 * dt

          const dx = s.x - g.playerX
          const dy = s.y - floorY
          const dist = Math.hypot(dx, dy)
          if (dist < s.r + PLAYER_R - 4) {
            addParticles(s.x, s.y, s.color)
            bumpScore()
            return false
          }
          return s.y < g.h + 40
        })

        g.particles = g.particles.filter((p) => {
          p.x += p.vx * (dt / 16)
          p.y += p.vy * (dt / 16)
          p.vy += 0.04 * (dt / 16)
          p.life -= 0.022 * (dt / 16)
          return p.life > 0
        })
      }

      const w = g.w
      const h = g.h

      ctx.clearRect(0, 0, w, h)

      const bg = ctx.createLinearGradient(0, 0, 0, h)
      bg.addColorStop(0, 'rgba(255, 255, 255, 0.04)')
      bg.addColorStop(0.5, 'rgba(20, 26, 34, 0.5)')
      bg.addColorStop(1, 'rgba(6, 8, 13, 0.65)')
      ctx.fillStyle = bg
      ctx.fillRect(0, 0, w, h)

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)'
      ctx.lineWidth = 1
      ctx.strokeRect(0.5, 0.5, w - 1, h - 1)

      const floorY = h - Math.max(40, Math.min(58, Math.round(h * 0.095)))
      const gridY = Math.max(0, floorY - 36)
      ctx.strokeStyle = 'rgba(155, 140, 255, 0.08)'
      ctx.beginPath()
      for (let gx = 0; gx < w; gx += 24) {
        ctx.moveTo(gx + 0.5, gridY)
        ctx.lineTo(gx + 0.5, h)
      }
      ctx.stroke()

      for (const s of g.sparks) {
        const glow = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 4)
        glow.addColorStop(0, s.color)
        glow.addColorStop(0.35, `${s.color}99`)
        glow.addColorStop(1, 'transparent')
        ctx.fillStyle = glow
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r * 4, 0, Math.PI * 2)
        ctx.fill()
        ctx.fillStyle = 'rgba(255, 255, 255, 0.95)'
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r * 0.45, 0, Math.PI * 2)
        ctx.fill()
      }

      for (const p of g.particles) {
        ctx.globalAlpha = Math.max(0, p.life)
        ctx.fillStyle = p.color
        ctx.beginPath()
        ctx.arc(p.x, p.y, 2.2, 0, Math.PI * 2)
        ctx.fill()
        ctx.globalAlpha = 1
      }

      const px = g.playerX
      const playerY = floorY
      const ring = ctx.createRadialGradient(px, playerY, 0, px, playerY, PLAYER_R * 2.2)
      ring.addColorStop(0, 'rgba(240, 215, 140, 0.35)')
      ring.addColorStop(0.5, 'rgba(155, 140, 255, 0.2)')
      ring.addColorStop(1, 'transparent')
      ctx.fillStyle = ring
      ctx.beginPath()
      ctx.arc(px, playerY, PLAYER_R * 2.2, 0, Math.PI * 2)
      ctx.fill()

      ctx.strokeStyle = 'rgba(255, 248, 231, 0.55)'
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.arc(px, playerY, PLAYER_R, 0, Math.PI * 2)
      ctx.stroke()

      ctx.fillStyle = 'rgba(6, 8, 13, 0.85)'
      ctx.beginPath()
      ctx.arc(px, playerY, 8, 0, Math.PI * 2)
      ctx.fill()
      ctx.fillStyle = 'rgba(255, 255, 255, 0.9)'
      ctx.beginPath()
      ctx.arc(px, playerY, 3, 0, Math.PI * 2)
      ctx.fill()

      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('pointermove', onPointerMove)
      canvas.removeEventListener('pointerdown', onPointerDown)
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('keyup', onKeyUp)
      g.sparks = []
      g.particles = []
    }
  }, [reducedMotion, bumpScore])

  if (reducedMotion) {
    return <StaticFallback />
  }

  return (
    <div className="not-found-game">
      <div className="not-found-game__toolbar">
        <span className="not-found-game__score" aria-live="polite">
          Sparks gathered
          <strong>{score}</strong>
        </span>
        <button
          type="button"
          className="not-found-game__pause"
          onClick={() => setPaused((p) => !p)}
          aria-pressed={paused}
        >
          {paused ? 'Resume' : 'Pause'}
        </button>
      </div>

      <div ref={wrapRef} className="not-found-game__canvas-wrap">
        <canvas
          ref={canvasRef}
          className="not-found-game__canvas"
          role="img"
          aria-label="Mini game: move the ring to catch drifting sparks. Use the pointer or arrow keys."
        />
      </div>

      <p className="not-found-game__hint">
        Glide the ring · pointer or <kbd>←</kbd> <kbd>→</kbd>
      </p>
    </div>
  )
}
