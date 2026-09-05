export default function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1.5 border border-accent-primary/40 bg-accent-primary/10 text-[10px] uppercase tracking-[0.18em]">
      <span className="w-1.5 h-1.5 bg-accent-primary animate-pulse" />
      <span className="text-accent-cyan font-bold">{children}</span>
    </span>
  )
}
