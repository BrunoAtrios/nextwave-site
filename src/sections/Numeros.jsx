import { motion, useReducedMotion } from "framer-motion";
import { Boxes, Globe2, Layers, ServerCog } from "lucide-react";

const pillars = [
  {
    icon: <Boxes size={24} />,
    title: "Soluções próprias",
    description: "Produtos em produção, do processo à interface",
  },
  {
    icon: <ServerCog size={24} />,
    title: "Sob medida",
    description: "Cada projeto construído a partir da sua operação",
  },
  {
    icon: <Layers size={24} />,
    title: "Local, cloud ou híbrido",
    description: "Arquitetura definida pelos requisitos do projeto",
  },
  {
    icon: <Globe2 size={24} />,
    title: "Atendimento nacional",
    description: "Base em Americana-SP, projetos em todo o Brasil",
  },
];

export default function Numeros() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="py-16 md:py-20 px-5 sm:px-6 relative overflow-hidden border-y border-border bg-bg-secondary"
      aria-label="Como a Next Sistemas trabalha"
    >
      <div className="absolute inset-0 mesh-gradient" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10"
        >
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group text-center lg:border-r lg:border-border lg:last:border-0"
            >
              <div className="inline-flex items-center justify-center w-11 h-11 bg-accent-primary/10 text-accent-glow mb-4 group-hover:bg-accent-primary group-hover:text-white transition-colors">
                {pillar.icon}
              </div>
              <div className="text-base font-black uppercase tracking-[-0.02em] text-text-primary mb-2">
                {pillar.title}
              </div>
              <div className="text-text-muted text-xs leading-relaxed max-w-[14rem] mx-auto">
                {pillar.description}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
