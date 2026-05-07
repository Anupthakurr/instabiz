import { motion, useMotionValue, useSpring } from 'motion/react'

export default function FeatureCard({ title, description, icon: Icon, gradient, delay, link }) {
  const rotateX = useSpring(useMotionValue(0), { stiffness: 220, damping: 20 })
  const rotateY = useSpring(useMotionValue(0), { stiffness: 220, damping: 20 })

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const px = x / rect.width
    const py = y / rect.height

    rotateY.set((px - 0.5) * 10)
    rotateX.set((0.5 - py) * 10)
  }

  const handleMouseLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <motion.div
      className="feature-card-wrap"
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.025 }}
      transition={{ duration: 0.8, ease: 'easeOut', delay }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
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
            <h3>{title}</h3>
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
