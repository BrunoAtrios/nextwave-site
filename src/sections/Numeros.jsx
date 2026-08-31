import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Briefcase, Users, Layers, Sparkles } from "lucide-react";

function AnimatedCounter({ end, suffix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setCount(end);
      return;
    }
    let startTime = null;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <span ref={ref} aria-label={`${end}${suffix}`}>
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  {
    icon: <Briefcase size={24} />,
    value: 6,
    suffix: "",
    label: "Produtos no ecossistema ServOS",
  },
  {
    icon: <Layers size={24} />,
    value: 13,
    suffix: "",
    label: "Projetos em portfólio",
  },
  {
    icon: <Users size={24} />,
    value: 5,
    suffix: "",
    label: "Áreas de atuação",
  },
  {
    icon: <Sparkles size={24} />,
    value: 100,
    suffix: "%",
    label: "Código próprio da NextWave",
  },
];

export default function Numeros() {
  return (
    <section className="py-20 px-6 relative overflow-hidden border-t border-b border-border/50">
      <div className="absolute inset-0 mesh-gradient" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent-primary/10 text-accent-primary mb-4 group-hover:bg-accent-primary/20 transition-colors">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold text-text-primary mb-1">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-text-muted text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}