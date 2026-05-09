import { useState } from 'react'
import { ArrowLeft, ArrowRight, Bot, MessageCircle, Phone, ShoppingCart, Zap } from 'lucide-react'
import FeatureCard from './FeatureCard'
import BlueWhiteText from './BlueWhiteText'

const PROJECT_CARDS = [
  {
    title: 'Scout',
    description: 'AI Lead Extraction Platform. Extract high-quality leads from Google and the web.',
    icon: Bot,
    gradient: 'linear-gradient(137deg, #FF3D77 0%, #FFB1CE 45%, #FF9D3C 100%)',
    delay: 0.1,
    link: 'https://scout.blutec.ai/',
  },
  {
    title: 'Ping',
    description: 'WhatsApp Automation and AI Chatbot. Automate customer conversations at scale.',
    icon: MessageCircle,
    gradient: 'linear-gradient(137deg, #FFFFFF 0%, #7DD3FC 45%, #06B6D4 100%)',
    delay: 0.2,
    link: 'https://ping.blutec.ai/',
  },
  {
    title: 'Dialer',
    description: 'Cloud Telephony and Call Center. Enterprise calling for BPOs and sales teams.',
    icon: Phone,
    gradient: 'linear-gradient(137deg, #4361EE 0%, #E0AEFF 45%, #F72585 100%)',
    delay: 0.3,
    link: 'https://dialer.blutec.ai/',
  },
  {
    title: 'Echo',
    description: 'AI Voice Calling Agent. AI agents that call your leads for you.',
    icon: Zap,
    gradient: 'linear-gradient(137deg, #FF3D77 0%, #FFB1CE 45%, #FF9D3C 100%)',
    delay: 0.4,
    link: 'https://echo.blutec.ai/',
  },
  {
    title: 'Instant Dukaan',
    description: 'eCommerce Store Builder. Launch your online store in 5 minutes.',
    icon: ShoppingCart,
    gradient: 'linear-gradient(137deg, #4361EE 0%, #E0AEFF 45%, #F72585 100%)',
    delay: 0.5,
    link: 'https://www.instantdukaan.com/',
  },
]

export default function Products() {
  const [activeIndex, setActiveIndex] = useState(0)
  const angle = 360 / PROJECT_CARDS.length

  const rotate = (direction) => {
    setActiveIndex((current) => (
      current + direction + PROJECT_CARDS.length
    ) % PROJECT_CARDS.length)
  }

  return (
    <section id="products">
      <div className="container">
        <p className="label">OUR INTELLIGENCE STACK</p>
        <h2 className="sec-title" data-g="Our Intelligence Stack">
          <BlueWhiteText text="Our Intelligence Stack" />
        </h2>
        <div className="product-carousel-shell">
          <button
            className="product-carousel-arrow product-carousel-arrow-left"
            type="button"
            aria-label="Previous product"
            onClick={() => rotate(-1)}
          >
            <ArrowLeft size={22} strokeWidth={2.4} />
          </button>

          <div className="product-carousel-stage" aria-live="polite">
            <div
              className="product-carousel-ring"
              style={{ transform: `rotateY(${-activeIndex * angle}deg)` }}
            >
              {PROJECT_CARDS.map((card, index) => (
                <div
                  className={`product-carousel-item${activeIndex === index ? ' active' : ''}`}
                  key={card.title}
                  style={{ transform: `rotateY(${index * angle}deg) translateZ(var(--carousel-radius))` }}
                  aria-hidden={activeIndex !== index}
                >
                  <FeatureCard {...card} />
                </div>
              ))}
            </div>
          </div>

          <button
            className="product-carousel-arrow product-carousel-arrow-right"
            type="button"
            aria-label="Next product"
            onClick={() => rotate(1)}
          >
            <ArrowRight size={22} strokeWidth={2.4} />
          </button>

          <div className="product-carousel-dots" aria-label="Choose product">
            {PROJECT_CARDS.map((card, index) => (
              <button
                key={card.title}
                type="button"
                className={`product-carousel-dot${activeIndex === index ? ' active' : ''}`}
                aria-label={`Show ${card.title}`}
                aria-current={activeIndex === index}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
