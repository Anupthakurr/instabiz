const TAGS = ['Healthcare','Real Estate','Transportation','BPO & Call Centers','Manufacturing','Education','Hospitality','eCommerce','Fintech','Government Services','SaaS Startups','Consultancy']
export default function Industries() {
  return (
    <section id="industries" className="ind-section">
      <div className="container">
        <p className="label">BUILT FOR EVERY SECTOR</p>
        <h2 className="sec-title" data-g="Industries We Serve">Industries We Serve</h2>
        <div className="ind-cloud">
          {TAGS.map((t,i) => <span key={t} className="ind-tag reveal" style={{animationDelay:`${i*0.12}s`}}>{t}</span>)}
        </div>
      </div>
    </section>
  )
}
