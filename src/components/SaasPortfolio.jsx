import { useEffect, useRef } from 'react'
import TiltCard from './TiltCard'

const FEATURE_VIDEO = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_024928_1efd0b0d-6c02-45a8-8847-1030900c4f63.mp4'
const PLATFORM_VIDEO = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_024928_1efd0b0d-6c02-45a8-8847-1030900c4f63.mp4'

const ITEMS = [
  { tag: 'Real Estate', name: 'Property Milan', desc: 'Buyers and sellers connect through a seamless property discovery platform', link: 'https://www.propertymilan.com/' },
  { tag: 'Sports & Hospitality', name: 'Best Sports Bars', desc: '10,000+ listed sports bars across UK, Canada & global markets', link: 'https://bestsportsbars.net/' },
  { tag: 'Student Living GB', name: 'Acolyte Living', desc: 'Helping students across the UK find PGs, flats, and rentals', link: 'https://acolyteliving.com/' },
  { tag: 'Healthcare', name: 'DocLinks', desc: 'Connecting hospitals, doctors, patients, and labs on one platform', link: 'https://doclinks.in/' },
  { tag: 'Government', name: 'Tender Source', desc: 'Discover government and private tenders and manage bids efficiently', link: 'https://www.tendersource.co.in/' },
  { tag: 'AI / Lead Tech', name: 'ConvrsAI', desc: 'AI-powered calling that validates and qualifies leads automatically', link: 'https://convrsai.com/' },
  { tag: 'Real Estate', name: 'EstatRent', desc: 'Buy, sell, and manage property listings on a modern marketplace', link: 'https://www.estatrent.com/' },
  { tag: 'Gaming / Telegram', name: 'Planets 7', desc: 'Play games, earn 7P coins - a gamified mining ecosystem on Telegram', link: 'https://t.me/Planets_7_Bot' },
]

function PortfolioCard({ item }) {
  const videoRef = useRef(null)

  const playPreview = () => {
    const video = videoRef.current
    if (!video) return
    if (!video.src) video.src = FEATURE_VIDEO
    video.play().catch(() => {})
  }

  const stopPreview = () => {
    const video = videoRef.current
    if (!video) return
    video.pause()
    video.removeAttribute('src')
    video.load()
  }

  return (
    <TiltCard
      className="saas-card glow-card reveal"
      onMouseEnter={playPreview}
      onMouseLeave={stopPreview}
    >
      <video
        ref={videoRef}
        className="saas-card-video"
        muted
        loop
        playsInline
        preload="none"
        aria-hidden="true"
      />
      <div className="saas-tag">{item.tag}</div>
      <h3>{item.name}</h3>
      <p>{item.desc}</p>
      <a href={item.link} target="_blank" rel="noopener noreferrer" className="btn-outline">Visit Site -&gt;</a>
    </TiltCard>
  )
}

function PlatformVideo() {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return undefined

    const loadAndPlay = () => {
      if (!video.src) video.src = PLATFORM_VIDEO
      video.play().catch(() => {})
    }

    const pauseAndUnload = () => {
      video.pause()
      video.removeAttribute('src')
      video.load()
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) loadAndPlay()
        else pauseAndUnload()
      },
      { rootMargin: '360px 0px', threshold: 0.05 }
    )

    observer.observe(video)
    return () => {
      observer.disconnect()
      pauseAndUnload()
    }
  }, [])

  return (
    <div className="platform-video">
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="none"
        aria-label="Platform showcase video"
      />
      <div className="platform-video-content">
        <p className="platform-video-kicker">Platform Engineering</p>
        <h3>Designed for products that keep moving.</h3>
        <p>
          From AI workflows to marketplace systems, we build digital platforms with the speed,
          reliability, and polish modern teams expect.
        </p>
        <a href="#contact" className="btn-primary">Build With Us</a>
      </div>
    </div>
  )
}

export default function SaasPortfolio() {
  return (
    <section id="portfolio">
      <div className="container">
        <p className="label">WHAT WE'VE BUILT</p>
        <h2 className="sec-title" data-g="SaaS & Platform Portfolio">SaaS &amp; Platform Portfolio</h2>
        <div className="saas-grid">
          {ITEMS.map(item => (
            <PortfolioCard key={item.name} item={item} />
          ))}
        </div>
        <PlatformVideo />
      </div>
    </section>
  )
}
