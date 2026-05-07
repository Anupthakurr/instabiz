import TiltCard from './TiltCard'

const SVCS = [
  { icon: '🤖', title: 'AI Automation Solutions', desc: 'Automate communication, sales, and operations with intelligent systems' },
  { icon: '📦', title: 'SaaS Product Development', desc: 'Scalable SaaS platforms with secure architecture and automation workflows' },
  { icon: '📱', title: 'Mobile App Development', desc: 'Android and cross-platform apps for healthcare, transport, fintech & more' },
  { icon: '🌐', title: 'Website Development', desc: 'High-performance, SEO-friendly websites for businesses worldwide' },
  { icon: '🗂️', title: 'CRM Development', desc: '45+ custom CRM systems built for manufacturers, sales teams & enterprises' },
  { icon: '🏢', title: 'Enterprise Software', desc: 'ERP systems, workflow automation, dashboards, and business process tools' },
]
export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <p className="label">END-TO-END DEVELOPMENT</p>
        <h2 className="sec-title" data-g="What We Do">What We Do</h2>
        <div className="services-grid">
          {SVCS.map(s => (
            <TiltCard key={s.title} className="svc-card glow-card reveal">
              <div className="svc-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}
