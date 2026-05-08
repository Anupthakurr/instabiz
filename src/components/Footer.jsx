const PRODUCTS = [
  { name: 'Scout', link: 'https://scout.blutec.ai/' },
  { name: 'Ping', link: 'https://ping.blutec.ai/' },
  { name: 'Dialer', link: 'https://dialer.blutec.ai/' },
  { name: 'Echo', link: 'https://echo.blutec.ai/' },
  { name: 'Instant Dukaan', link: 'https://www.instantdukaan.com/' },
]

const FOOTER_VIDEO = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260322_013248_a74099a8-be2b-4164-a823-eddd5e149fa1.mp4'

export default function Footer() {
  return (
    <footer>
      <video
        className="footer-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src={FOOTER_VIDEO} type="video/mp4" />
      </video>
      <div className="footer-video-overlay" aria-hidden="true" />
      <div className="container footer-inner">
        <div className="footer-brand">
          <div className="nav-logo">
            <span className="logo-badge">IW</span>
            <span className="logo-text">INSTABIZ <span>WEB</span></span>
          </div>
          <p className="footer-tagline">
            AI Automation | SaaS Development | CRM Solutions | Web Development | Mobile Applications
          </p>
        </div>
        <div className="footer-links">
          <div className="footer-col">
            <div className="footer-col-title">Quick Links</div>
            <a href="#products">Products</a>
            <a href="#services">Services</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-col">
            <div className="footer-col-title">Products</div>
            {PRODUCTS.map(p => (
              <a key={p.name} href={p.link} target="_blank" rel="noopener noreferrer">{p.name}</a>
            ))}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        © 2025 Instabiz Web. All Rights Reserved.
      </div>
    </footer>
  )
}
