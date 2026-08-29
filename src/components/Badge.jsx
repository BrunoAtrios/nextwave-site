export default function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-accent-primary/20 to-accent-cyan/20 border border-accent-primary/30 text-sm">
      <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
      <span className="text-text-secondary font-medium">{children}</span>
    </span>
  )
}