import { useEffect, useRef } from 'react'
import BlueWhiteText from './BlueWhiteText'

export default function Contact() {
  const meshRef = useRef(null)

  useEffect(() => {
    let angle = 0, raf
    const run = () => {
      angle += 0.003
      const x1 = 30 + Math.sin(angle) * 10
      const x2 = 70 + Math.cos(angle * 0.7) * 10
      if (meshRef.current) {
        meshRef.current.style.background = `radial-gradient(ellipse at ${x1}% 50%,rgba(0,240,255,0.1) 0%,transparent 60%),radial-gradient(ellipse at ${x2}% 50%,rgba(139,92,246,0.1) 0%,transparent 60%)`
      }
      raf = requestAnimationFrame(run)
    }
    run()
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <section id="contact" className="contact-section">
      <div className="contact-mesh" ref={meshRef} />
      <div className="container contact-inner">
        <p className="label">LET'S CONNECT</p>
        <h2 className="contact-headline">
          <BlueWhiteText text="Let's Build Something" />
          <br />
          <BlueWhiteText text="Powerful Together" startBlue={false} />
        </h2>
        <p className="contact-sub">
          Startup, enterprise, healthcare provider, or consultancy — we turn ideas into scalable technology.
        </p>
        <div className="contact-ctas">
          <a href="mailto:hello@instabizdweb.com" className="btn-primary">Start a Project</a>
          <a href="#products" className="btn-ghost">Explore Our Products</a>
        </div>
      </div>
    </section>
  )
}
