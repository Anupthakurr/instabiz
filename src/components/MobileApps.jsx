import TiltCard from './TiltCard'
import BlueWhiteText from './BlueWhiteText'

const APPS = [
  { icon: '🏢', badge: '5,000+ Downloads', name: 'Egniol', desc: 'Government scheme discovery and consultancy booking for MSMEs', link: 'https://play.google.com/store/apps/details?id=com.egniolapp&hl=en_IN' },
  { icon: '🏥', badge: '10,000+ Downloads · 4,400+ Active Users', name: 'DHN', desc: 'Trusted health news and government-backed information platform', link: 'https://play.google.com/store/apps/details?id=com.dhn&hl=en_IN' },
  { icon: '🚕', badge: '15,000+ Downloads · 6,000+ Active Users', name: 'Chennai Cabs', desc: 'Local ride-booking platform serving Chennai commuters', link: 'https://play.google.com/store/apps/details?id=com.cabs.chennaicabs&hl=en_IN' },
  { icon: '📱', badge: 'Live on Play Store', name: 'CashFlex', desc: 'User-friendly marketplace for buying and selling used phones and tablets', link: 'https://play.google.com/store/apps/details?id=com.cashflex_user&hl=en_IN' },
  { icon: '🔧', badge: 'Live on Play Store', name: 'Carefix', desc: 'Book technicians and home services — like Urban Company', link: 'https://play.google.com/store/apps/details?id=com.carefix_technician&hl=en_IN' },
]

export default function MobileApps() {
  return (
    <section id="apps">
      <div className="container">
        <p className="label">APPS THAT MOVE PEOPLE</p>
        <h2 className="sec-title" data-g="Mobile Applications">
          <BlueWhiteText text="Mobile Applications" />
        </h2>
        <div className="apps-grid">
          {APPS.map(app => (
            <TiltCard key={app.name} className="app-card glow-card reveal">
              <div className="app-icon">{app.icon}</div>
              <div className="app-badge">{app.badge}</div>
              <h3><BlueWhiteText text={app.name} /></h3>
              <p>{app.desc}</p>
              <a href={app.link} target="_blank" rel="noopener noreferrer" className="btn-outline">View on Play Store →</a>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}
