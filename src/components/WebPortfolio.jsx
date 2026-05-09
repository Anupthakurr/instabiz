import TiltCard from './TiltCard'
import BlueWhiteText from './BlueWhiteText'

const SITES = [
  { flag: '🇨🇦', ind: 'Architecture & Design', domain: 'buildwithchintan.ca', link: 'https://buildwithchintan.ca/' },
  { flag: '🇨🇦', ind: 'Digital Agency', domain: 'coppersocial.ca', link: 'https://coppersocial.ca/' },
  { flag: '🇮🇳', ind: 'MSME Consultancy', domain: 'saarthium.com', link: 'https://www.saarthium.com/' },
  { flag: '🇮🇳', ind: 'Business Consultancy', domain: 'setubridgesolutions.co.in', link: 'https://www.setubridgesolutions.co.in/' },
  { flag: '🇮🇳', ind: 'Product Business', domain: 'agimoneey.com', link: 'https://www.agimoneey.com/' },
  { flag: '🇮🇳', ind: 'Manufacturing', domain: 'hindland.in', link: 'https://hindland.in/' },
  { flag: '🇮🇳', ind: 'Finance & Loans', domain: 'sunpazsupport.com', link: 'https://www.sunpazsupport.com/' },
  { flag: '🇫🇷', ind: 'Educational Institution', domain: 'grand-sud.fr', link: 'https://grand-sud.fr/' },
]

export default function WebPortfolio() {
  return (
    <section id="websites">
      <div className="container">
        <p className="label">DIGITAL PRESENCES WE'VE CRAFTED</p>
        <h2 className="sec-title" data-g="Website Portfolio">
          <BlueWhiteText text="Website Portfolio" />
        </h2>
        <div className="web-grid">
          {SITES.map(s => (
            <TiltCard key={s.domain} className="web-card glow-card reveal">
              <div className="web-flag">{s.flag}</div>
              <div className="web-ind">{s.ind}</div>
              <h3><BlueWhiteText text={s.domain} /></h3>
              <a href={s.link} target="_blank" rel="noopener noreferrer" className="btn-outline">Visit Site →</a>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}
