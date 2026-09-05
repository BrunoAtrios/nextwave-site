import { motion } from 'framer-motion'

export default function Card({ icon, title, description, href }) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="group relative p-6 rounded-sm glass hover:border-accent-primary/50 cursor-pointer"
    >
      <div className="absolute inset-0 rounded-sm bg-gradient-to-br from-accent-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative z-10">
        <div className="w-12 h-12 rounded-sm bg-accent-primary/15 flex items-center justify-center mb-4 text-accent-glow group-hover:bg-accent-primary group-hover:text-white transition-colors">
          {icon}
        </div>

        <h3 className="text-lg font-bold uppercase tracking-[-0.02em] text-text-primary mb-2 group-hover:text-white transition-colors">
          {title}
        </h3>

        <p className="text-text-secondary text-sm leading-relaxed mb-4">
          {description}
        </p>

        <a
          href={href || '#'}
          className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.12em] font-bold text-accent-glow hover:text-accent-cyan transition-colors group/link"
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
