import TiltCard from './TiltCard'

const CARDS = [
  { icon:'⚡', title:'Innovation-Driven Development', desc:'Modern, scalable, and future-ready digital products' },
  { icon:'🤖', title:'AI-Powered Solutions', desc:'Intelligent automation integrated into real business workflows' },
  { icon:'🔁', title:'End-to-End Development', desc:'From idea validation to deployment and maintenance' },
  { icon:'📈', title:'Scalable Architecture', desc:'Enterprise-grade reliability built for growth' },
  { icon:'🌍', title:'Industry Experience', desc:'Proven delivery across multiple industries and international markets' },
  { icon:'🎯', title:'Custom Development', desc:'Fully tailored software solutions for your specific operations' },
]
export default function WhyUs() {
  return (
    <section id="why">
      <div className="container">
        <p className="label">WHY TEAMS CHOOSE US</p>
        <h2 className="sec-title" data-g="Why Instabiz Web">Why Instabiz Web</h2>
        <div className="why-grid">
          {CARDS.map(c => (
            <TiltCard key={c.title} className="why-card glow-card reveal">
              <div className="why-icon">{c.icon}</div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}
