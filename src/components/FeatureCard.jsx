import { motion } from 'motion/react'
import BlueWhiteText from './BlueWhiteText'

export default function FeatureCard({ title, description, icon: Icon, gradient, delay, link }) {
  return (
    <motion.div
      className="feature-card-wrap"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut', delay }}
    >
      <div
        className="feature-card-glow"
        style={{ background: gradient, filter: 'blur(45px)' }}
      />

      <div
        className="feature-card-panel"
        style={{
          background: `linear-gradient(#000, #000) padding-box, ${gradient} border-box`,
        }}
      >
        <div className="feature-card-content">
          <div className="feature-card-icon">
            <Icon size={32} strokeWidth={2.5} />
          </div>

          <div className="feature-card-copy">
            <h3><BlueWhiteText text={title} /></h3>
            <p>{description}</p>
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="feature-card-link"
              >
                Visit Product -&gt;
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
