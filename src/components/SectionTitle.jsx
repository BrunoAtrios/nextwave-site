import { motion } from 'framer-motion'

export default function SectionTitle({ title, subtitle, centered = true, gradient = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${centered ? 'text-center' : ''}`}
    >
      {gradient ? (
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="gradient-text">{title}</span>
        </h2>
      ) : (
        <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
          {title}
        </h2>
      )}

      {subtitle && (
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}