import { useEffect, useRef, useState } from 'react'
import Hls from 'hls.js'

const PHRASES = [
  'AI Automation · SaaS Platforms · CRM Systems',
  'Mobile Apps · Web Solutions · Voice AI'
]

const BADGES = [
  '⚡ 12,000+ Scout Users',
  '🗂️ 45+ CRM Systems',
  '✅ Official Meta Partner',
  '🍺 10,000+ Sports Bars Listed'
]

export default function Hero() {
  const canvasRef = useRef(null)
  const [typed, setTyped] = useState('')
  const videoRef = useRef(null)
  const [headlineAnimated, setHeadlineAnimated] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setHeadlineAnimated(true), 1300)
    return () => clearTimeout(t)
  }, [])

  // Typewriter
  useEffect(() => {
    let pi = 0, ci = 0, del = false, timer
    function step() {
      const phrase = PHRASES[pi]
      if (!del) {
        setTyped(phrase.slice(0, ci + 1))
        ci++
        if (ci === phrase.length) { del = true; timer = setTimeout(step, 2200); return }
        timer = setTimeout(step, 60)
      } else {
        setTyped(phrase.slice(0, ci - 1))
        ci--
        if (ci === 0) { del = false; pi = (pi + 1) % PHRASES.length; timer = setTimeout(step, 400); return }
        timer = setTimeout(step, 35)
      }
    }
    timer = setTimeout(step, 1800)
    return () => clearTimeout(timer)
  }, [])

  // Hero word reveal
  useEffect(() => {
    document.querySelectorAll('.hero-badge').forEach((b, i) => {
      setTimeout(() => { b.style.opacity = '1'; b.style.transform = 'none' }, 1200 + i * 120)
    })
  }, [])

  // Canvas particle network
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let W, H, pts = [], raf
    const N = 65, D = 140

    function resize() {
      W = canvas.width = canvas.offsetWidth
      H = canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize, { passive: true })

    function Pt() {
      this.x = Math.random() * W; this.y = Math.random() * H
      this.vx = (Math.random() - .5) * .38; this.vy = (Math.random() - .5) * .38
      this.r = Math.random() * 1.6 + .5
      this.c = Math.random() > .5 ? '0,240,255' : '139,92,246'
    }
    for (let i = 0; i < N; i++) pts.push(new Pt())

    function draw() {
      ctx.clearRect(0, 0, W, H)
      // dot matrix
      ctx.fillStyle = 'rgba(0,240,255,0.022)'
      for (let x = 0; x < W; x += 32) for (let y = 0; y < H; y += 32) {
        ctx.beginPath(); ctx.arc(x, y, .7, 0, Math.PI * 2); ctx.fill()
      }
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > W) p.vx *= -1
        if (p.y < 0 || p.y > H) p.vy *= -1
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${p.c},0.8)`; ctx.fill()
      })
      for (let i = 0; i < pts.length; i++) for (let j = i + 1; j < pts.length; j++) {
        const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < D) {
          ctx.beginPath()
          ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y)
          ctx.strokeStyle = `rgba(0,240,255,${(1 - dist / D) * 0.22})`
          ctx.lineWidth = .6; ctx.stroke()
        }
      }
      raf = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [])

  // HLS video
  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    const HLS_SRC = 'https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8'
    const MP4_FALLBACK = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260429_182501_0216c2be-1b2f-40d3-8716-0d4f42e73b44.mp4'
    let hls

    const tryPlay = () => video.play().catch(() => {})

    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = HLS_SRC
      video.addEventListener('loadedmetadata', tryPlay)
    } else if (Hls.isSupported()) {
      hls = new Hls({ autoStartLoad: true, startLevel: -1, enableWorker: true })
      hls.loadSource(HLS_SRC)
      hls.attachMedia(video)
      hls.on(Hls.Events.MANIFEST_PARSED, tryPlay)
      hls.on(Hls.Events.ERROR, (_, data) => {
        if (data.fatal) {
          video.src = MP4_FALLBACK
          tryPlay()
        }
      })
    } else {
      video.src = MP4_FALLBACK
      tryPlay()
    }
    return () => { hls && hls.destroy() }
  }, [])

  return (
    <section id="hero" className="hero">
      <video ref={videoRef} className="hero-video" autoPlay muted loop playsInline crossOrigin="anonymous" />
      <div className="hero-overlay" />
      <canvas ref={canvasRef} className="hero-canvas" />
      <div className="hero-content">
        <h1 className={`hero-headline${headlineAnimated ? ' animate' : ''}`}>
          <span className="hw">We</span>
          <span className="hw">Build</span>
          <span className="hw cyan">Intelligent</span>
          <span className="hw">Software.</span>
        </h1>
        <p className="hero-sub">
          {typed}<span className="cursor-blink">|</span>
        </p>
        <div className="hero-ctas">
          <a href="#portfolio" className="btn-primary">Explore Our Work</a>
          <a href="#products" className="btn-ghost">View Products</a>
        </div>
        <div className="hero-badges">
          {BADGES.map(b => <span key={b} className="hero-badge">{b}</span>)}
        </div>
      </div>
      <div className="hero-scroll">
        <span>Scroll</span>
        <div className="scroll-bar" />
      </div>
    </section>
  )
}
