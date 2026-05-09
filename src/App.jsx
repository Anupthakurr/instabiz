import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import SaasPortfolio from './components/SaasPortfolio'
import MobileApps from './components/MobileApps'
import WebPortfolio from './components/WebPortfolio'
import Services from './components/Services'
import Industries from './components/Industries'
import TechStack from './components/TechStack'
import WhyUs from './components/WhyUs'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import './index.css'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const minDelay = setTimeout(() => setLoading(false), 1200)
    return () => clearTimeout(minDelay)
  }, [])

  useEffect(() => {
    const autoRevealSelectors = [
      'section .label',
      'section .sec-title',
      '.contact-headline',
      '.contact-sub',
      '.contact-ctas',
      '.products-grid',
      '.ind-cloud',
      '.footer-brand',
      '.footer-col',
    ]

    document.querySelectorAll(autoRevealSelectors.join(',')).forEach((el) => {
      el.classList.add('reveal')

      if (el.classList.contains('label') || el.classList.contains('footer-col')) {
        el.classList.add('reveal-left')
      } else if (el.classList.contains('sec-title') || el.classList.contains('contact-headline')) {
        el.classList.add('reveal-zoom')
      }
    })

    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
          obs.unobserve(e.target)
        }
      }),
      { threshold: 0.12, rootMargin: '0px 0px -70px 0px' }
    )
    const items = document.querySelectorAll('.reveal')
    items.forEach((el, i) => {
      el.style.transitionDelay = `${(i % 5) * 0.07}s`
      obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  return (
    <>
      {loading && (
        <div className="site-loader" aria-label="Loading site">
          <div className="site-loader-ring" />
          <p className="site-loader-text">Loading...</p>
        </div>
      )}
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <SaasPortfolio />
        <MobileApps />
        <WebPortfolio />
        <Services />
        <Industries />
        <TechStack />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
