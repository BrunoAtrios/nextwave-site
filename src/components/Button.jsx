import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const variants = {
  primary: 'bg-accent-primary text-white hover:bg-accent-glow hover:shadow-lg hover:shadow-accent-primary/25',
  secondary: 'border border-border text-text-primary hover:bg-bg-tertiary hover:border-accent-glow',
  ghost: 'text-text-secondary hover:text-text-primary hover:bg-bg-tertiary',
}

const sizes = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3 text-base',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  className = '',
  href,
  ...props
}) {
  const classes = `group inline-flex items-center justify-center gap-2 font-bold uppercase tracking-[0.1em] rounded-sm transition-all duration-200 ${variants[variant]} ${sizes[size]} ${className}`

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className={icon}>{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />}
    </>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={classes}
        {...props}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={classes}
      {...props}
    >
      {content}
    </motion.button>
  )
}
