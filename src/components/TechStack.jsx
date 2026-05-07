import TiltCard from './TiltCard'

const GROUPS = [
  { label: 'Frontend', tags: ['React.js','Next.js','TypeScript','HTML5','CSS3'] },
  { label: 'Backend', tags: ['Node.js','Express.js','REST APIs','WebSocket'] },
  { label: 'Mobile', tags: ['React Native','Android'] },
  { label: 'Database', tags: ['MySQL','MongoDB','PostgreSQL'] },
  { label: 'AI / ML', tags: ['AI Calling','Chatbots','Automation','Data Processing'] },
  { label: 'Cloud', tags: ['Scalable Cloud','Server Management','Real-time Systems','API Integrations'] },
]
export default function TechStack() {
  return (
    <section id="stack">
      <div className="container">
        <p className="label">OUR STACK</p>
        <h2 className="sec-title" data-g="Technologies We Use">Technologies We Use</h2>
        <div className="stack-grid">
          {GROUPS.map(g => (
            <TiltCard key={g.label} className="stack-group reveal">
              <div className="stack-label">{g.label}</div>
              <div className="stack-tags">
                {g.tags.map(t => <span key={t} className="stack-tag">{t}</span>)}
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  )
}
