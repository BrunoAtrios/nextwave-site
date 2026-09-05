import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import {
  Server,
  Factory,
  HardHat,
  Church,
  Music,
  CreditCard,
  Cpu,
} from "lucide-react";

const modules = [
  {
    icon: <Server size={24} />,
    label: "ServOS",
    desc: "Gestão integrada multi-tenant",
  },
  {
    icon: <HardHat size={24} />,
    label: "ServObras",
    desc: "Gestão de obras de engenharia",
  },
  {
    icon: <Factory size={24} />,
    label: "Next Gestão",
    desc: "ERP para chão de fábrica",
  },
  {
    icon: <Church size={24} />,
    label: "ServOS Church",
    desc: "Gestão para igrejas",
  },
  {
    icon: <Music size={24} />,
    label: "Minhas Cifras",
    desc: "Repertório e ferramentas do músico",
  },
  {
    icon: <CreditCard size={24} />,
    label: "Smart Card",
    desc: "Cartão digital com NFC",
  },
];

export default function Ecossistema() {
  return (
    <section
      id="ecossistema"
      className="py-24 md:py-32 px-5 sm:px-6 relative overflow-hidden"
    >
      <div className="absolute inset-0 mesh-gradient" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionTitle
          title="Soluções que se conectam"
          subtitle="A Next Sistemas integra gestão, automação e tecnologia em produtos pensados para operações reais"
          gradient
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px max-w-6xl mx-auto bg-border border border-border">
          {modules.slice(0, 3).map((mod, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 bg-bg-secondary hover:bg-bg-tertiary transition-all duration-300 group text-center"
            >
              <div
                className="w-12 h-12 bg-accent-primary/10 border border-accent-primary/25 flex items-center justify-center text-accent-glow mx-auto mb-4 group-hover:bg-accent-primary group-hover:text-white group-hover:border-accent-primary transition-all"
              >
                {mod.icon}
              </div>
              <h4 className="text-text-primary font-bold text-sm uppercase tracking-[0.08em] mb-2">
                {mod.label}
              </h4>
              <p className="text-text-muted text-xs mb-3">{mod.desc}</p>
              <span className="inline-block text-[10px] uppercase tracking-[0.16em] text-accent-glow font-bold">
                  via Next Sistemas
              </span>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden md:flex items-center justify-center bg-bg-secondary"
          >
            <div className="w-full h-px bg-gradient-to-r from-transparent via-accent-primary/60 to-accent-primary" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
            className="flex items-center justify-center py-10 md:py-0 bg-bg-primary relative overflow-hidden"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-accent-primary opacity-25 blur-2xl scale-125" />
              <div className="relative w-32 h-32 md:w-36 md:h-36 border border-accent-glow/50 bg-gradient-to-br from-accent-primary to-[#0b3570] flex items-center justify-center shadow-2xl shadow-accent-primary/30">
                <div className="text-center">
                  <Cpu size={36} className="text-white mx-auto mb-1" />
                  <span className="text-white text-xs font-bold uppercase tracking-[0.1em]">NextW</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden md:flex items-center justify-center bg-bg-secondary"
          >
            <div className="w-full h-px bg-gradient-to-r from-accent-primary via-accent-primary/60 to-transparent" />
          </motion.div>

          {modules.slice(3, 6).map((mod, i) => (
            <motion.div
              key={i + 3}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              className="p-6 bg-bg-secondary hover:bg-bg-tertiary transition-all duration-300 group text-center"
            >
              <div
                className="w-12 h-12 bg-accent-primary/10 border border-accent-primary/25 flex items-center justify-center text-accent-glow mx-auto mb-4 group-hover:bg-accent-primary group-hover:text-white group-hover:border-accent-primary transition-all"
              >
                {mod.icon}
              </div>
              <h4 className="text-text-primary font-bold text-sm uppercase tracking-[0.08em] mb-2">
                {mod.label}
              </h4>
              <p className="text-text-muted text-xs mb-3">{mod.desc}</p>
              <span className="inline-block text-[10px] uppercase tracking-[0.16em] text-accent-glow font-bold">
                  via Next Sistemas
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center max-w-2xl mx-auto"
        >
          <p className="text-text-secondary leading-relaxed">
            A <span className="text-accent-glow font-semibold">Next Sistemas</span>{" "}
            conecta as soluções do ecossistema{" "}
            <span className="text-accent-cyan font-semibold">ServOS</span> e seus
            módulos para responder a necessidades reais, da gestão da indústria à equipe de música da igreja, da obra civil à fábrica de cartões NFC.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
