import { motion, useMotionValue, useSpring } from 'motion/react'

export default function TiltCard({ className = '', children, onMouseEnter, onMouseLeave, onMouseMove, ...props }) {
  const rotateX = useSpring(useMotionValue(0), { stiffness: 220, damping: 20 })
  const rotateY = useSpring(useMotionValue(0), { stiffness: 220, damping: 20 })

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const px = x / rect.width
    const py = y / rect.height

    rotateY.set((px - 0.5) * 8)
    rotateX.set((0.5 - py) * 8)
    onMouseMove?.(e)
  }

  const handleMouseLeave = (e) => {
    rotateX.set(0)
    rotateY.set(0)
    onMouseLeave?.(e)
  }

  return (
    <motion.div
      className={className}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      whileHover={{ scale: 1.025 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      onMouseEnter={onMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </motion.div>
  )
}
