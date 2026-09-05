import { motion } from 'framer-motion'

export default function SectionTitle({ title, subtitle, centered = true, gradient = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className={`mb-14 md:mb-16 ${centered ? 'text-center' : ''}`}
    >
      {gradient ? (
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-[-0.055em] mb-5">
          <span className="gradient-text">{title}</span>
        </h2>
      ) : (
        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-[-0.055em] text-text-primary mb-5">
          {title}
        </h2>
      )}

      {subtitle && (
        <p className="text-text-secondary text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
