import { Bot, MessageCircle, Phone, ShoppingCart, Zap } from 'lucide-react'
import FeatureCard from './FeatureCard'

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
  return (
    <section id="products">
      <div className="container">
        <p className="label">OUR INTELLIGENCE STACK</p>
        <h2 className="sec-title" data-g="Our Intelligence Stack">Our Intelligence Stack</h2>
        <div className="w-full bg-[#0A0A0B] flex flex-col items-center p-6 md:p-12 font-sans rounded-[28px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-8 w-full max-w-[936px]">
          {PROJECT_CARDS.map((card) => (
            <FeatureCard key={card.title} {...card} />
          ))}
          </div>
        </div>
      </div>
    </section>
  )
}
