import { useEffect, useRef } from 'react'
import TiltCard from './TiltCard'
import BlueWhiteText from './BlueWhiteText'

const STATS = [
  { target: 12000, suffix: '+', label: 'Live Users (Scout)' },
  { target: 45, suffix: '+', label: 'CRM Systems Built' },
  { target: 5, suffix: '', label: 'Countries Served' },
  { target: 10000, suffix: '+', label: 'Sports Bars Listed' },
  { target: 4, suffix: '', label: 'AI-Powered Products' },
]

function fmt(n, suffix) {
  return n >= 1000 ? Math.floor(n / 1000) + 'K' + suffix : n + suffix
}

export default function About() {
  const refs = useRef([])

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return
        const el = e.target
        const target = +el.dataset.target
        const suffix = el.dataset.suffix
        const dur = 1800, start = performance.now()
        const run = now => {
          const p = Math.min((now - start) / dur, 1)
          const ease = 1 - Math.pow(1 - p, 3)
          el.textContent = fmt(Math.floor(ease * target), suffix)
          if (p < 1) requestAnimationFrame(run)
          else el.textContent = fmt(target, suffix)
        }
        requestAnimationFrame(run)
        obs.unobserve(el)
      })
    }, { threshold: 0.5 })
    refs.current.forEach(r => r && obs.observe(r))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="about">
      <div className="container">
        <p className="label">WHO WE ARE</p>
        <h2 className="sec-title" data-g="Transforming Business Through Technology">
          <BlueWhiteText text="Transforming Business Through Technology" />
        </h2>
        <p className="about-text reveal">
          Instabiz Web is a modern software development and IT solutions company specializing in AI automation,
          SaaS platforms, CRM systems, web development, and mobile application development. We've successfully
          delivered digital solutions across India, Canada, the UK, France, and other international markets.
        </p>
        <div className="stats-grid">
          {STATS.map((s, i) => (
            <TiltCard key={s.label} className="stat-card glow-card reveal">
              <div className="stat-num" data-target={s.target} data-suffix={s.suffix} ref={el => refs.current[i] = el}>0</div>
              <div className="stat-lbl">{s.label}</div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}
