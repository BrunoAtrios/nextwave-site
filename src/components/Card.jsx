import { motion } from 'framer-motion'

export default function Card({ icon, title, description, href }) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="group relative p-6 rounded-2xl glass hover:border-accent-primary/30 cursor-pointer"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-primary/5 to-accent-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-primary/20 to-accent-cyan/20 flex items-center justify-center mb-4 text-accent-primary group-hover:text-accent-cyan transition-colors">
          {icon}
        </div>

        <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-white transition-colors">
          {title}
        </h3>

        <p className="text-text-secondary text-sm leading-relaxed mb-4">
          {description}
        </p>

        <a
          href={href || '#'}
          className="inline-flex items-center gap-1 text-sm text-accent-primary hover:text-accent-cyan transition-colors group/link"
        >
          Saiba mais
          <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </motion.div>
  )
}