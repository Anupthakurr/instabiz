import { useEffect, useRef, useState } from 'react'

const INTERACTIVE_SELECTOR = 'a, button, input, textarea, select, [role="button"], .feature-card-wrap, .card, .glow-card'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const position = useRef({ x: 0, y: 0 })
  const ringPosition = useRef({ x: 0, y: 0 })
  const lastSparkle = useRef({ x: 0, y: 0, time: 0 })
  const sparkleId = useRef(0)
  const [active, setActive] = useState(false)
  const [visible, setVisible] = useState(false)
  const [sparkles, setSparkles] = useState([])

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      return undefined
    }

    let raf = 0

    const render = () => {
      const dot = dotRef.current
      const ring = ringRef.current
      if (!dot || !ring) return

      ringPosition.current.x += (position.current.x - ringPosition.current.x) * 0.18
      ringPosition.current.y += (position.current.y - ringPosition.current.y) * 0.18

      dot.style.transform = `translate3d(${position.current.x}px, ${position.current.y}px, 0)`
      ring.style.transform = `translate3d(${ringPosition.current.x}px, ${ringPosition.current.y}px, 0)`
      raf = requestAnimationFrame(render)
    }

    const handlePointerMove = (event) => {
      position.current = { x: event.clientX, y: event.clientY }
      setVisible(true)
      setActive(Boolean(event.target.closest(INTERACTIVE_SELECTOR)))

      const dx = event.clientX - lastSparkle.current.x
      const dy = event.clientY - lastSparkle.current.y
      const now = performance.now()

      if (Math.hypot(dx, dy) > 24 && now - lastSparkle.current.time > 32) {
        const id = sparkleId.current += 1
        const angle = Math.random() * Math.PI * 2
        const distance = 12 + Math.random() * 20
        const size = 3 + Math.random() * 4

        lastSparkle.current = { x: event.clientX, y: event.clientY, time: now }
        setSparkles((current) => [
          ...current.slice(-14),
          {
            id,
            x: event.clientX,
            y: event.clientY,
            dx: Math.cos(angle) * distance,
            dy: Math.sin(angle) * distance,
            size,
          },
        ])
        window.setTimeout(() => {
          setSparkles((current) => current.filter((sparkle) => sparkle.id !== id))
        }, 650)
      }
    }

    const handlePointerLeave = () => setVisible(false)
    const handlePointerEnter = () => setVisible(true)

    document.body.classList.add('custom-cursor-enabled')
    window.addEventListener('pointermove', handlePointerMove)
    document.documentElement.addEventListener('mouseleave', handlePointerLeave)
    document.documentElement.addEventListener('mouseenter', handlePointerEnter)
    raf = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(raf)
      document.body.classList.remove('custom-cursor-enabled')
      window.removeEventListener('pointermove', handlePointerMove)
      document.documentElement.removeEventListener('mouseleave', handlePointerLeave)
      document.documentElement.removeEventListener('mouseenter', handlePointerEnter)
    }
  }, [])

  return (
    <div className={`custom-cursor${visible ? ' visible' : ''}${active ? ' active' : ''}`} aria-hidden="true">
      <div className="custom-cursor-sparkles">
        {sparkles.map((sparkle) => (
          <span
            key={sparkle.id}
            className="custom-cursor-sparkle"
            style={{
              left: sparkle.x,
              top: sparkle.y,
              width: sparkle.size,
              height: sparkle.size,
              '--spark-x': `${sparkle.dx}px`,
              '--spark-y': `${sparkle.dy}px`,
            }}
          />
        ))}
      </div>
      <div ref={ringRef} className="custom-cursor-ring" />
      <div ref={dotRef} className="custom-cursor-dot" />
    </div>
  )
}
