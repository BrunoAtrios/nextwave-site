import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import {
  Server,
  Home,
  Factory,
  HardHat,
  Radio,
  Shield,
  Cpu,
} from "lucide-react";

const modules = [
  {
    icon: <Server size={24} />,
    label: "ServOS",
    desc: "Sistema operacional de serviços",
    color: "from-indigo-400 to-purple-500",
    shadow: "shadow-indigo-500/20",
  },
  {
    icon: <HardHat size={24} />,
    label: "Serv Obra",
    desc: "Gestão inteligente de obras",
    color: "from-amber-400 to-orange-500",
    shadow: "shadow-amber-500/20",
  },
  {
    icon: <Factory size={24} />,
    label: "Next Gestão",
    desc: "ERP industrial completo",
    color: "from-blue-400 to-indigo-500",
    shadow: "shadow-blue-500/20",
  },
  {
    icon: <Home size={24} />,
    label: "Automação IA",
    desc: "Casa inteligente com IA",
    color: "from-purple-400 to-pink-500",
    shadow: "shadow-purple-500/20",
  },
  {
    icon: <Radio size={24} />,
    label: "NFC/UHF",
    desc: "Rastreamento e identificação",
    color: "from-cyan-400 to-teal-500",
    shadow: "shadow-cyan-500/20",
  },
  {
    icon: <Shield size={24} />,
    label: "Redes & Infra",
    desc: "Infraestrutura corporativa",
    color: "from-green-400 to-emerald-500",
    shadow: "shadow-green-500/20",
  },
];

export default function Ecossistema() {
  return (
    <section
      id="ecossistema"
      className="py-24 md:py-32 px-6 relative overflow-hidden"
    >
      <div className="absolute inset-0 mesh-gradient" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionTitle
          title="Ecossistema ServOS"
          subtitle="A NextWave orquestra todos os módulos do ecossistema ServOS em uma plataforma única"
          gradient
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {modules.slice(0, 3).map((mod, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-5 rounded-2xl glass border border-border hover:border-accent-primary/20 transition-all duration-300 group text-center"
            >
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${mod.color} flex items-center justify-center text-white mx-auto mb-3 shadow-lg ${mod.shadow} group-hover:scale-110 transition-transform`}
              >
                {mod.icon}
              </div>
              <h4 className="text-text-primary font-semibold text-sm mb-1">
                {mod.label}
              </h4>
              <p className="text-text-muted text-xs mb-2">{mod.desc}</p>
              <span className="inline-block text-[10px] uppercase tracking-wider text-accent-cyan/70 font-semibold">
                via NextWave
              </span>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden md:flex items-center justify-center"
          >
            <div className="w-full h-px bg-gradient-to-r from-transparent via-accent-primary/40 to-accent-primary/60" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
            className="flex items-center justify-center py-8 md:py-0"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-primary to-accent-cyan opacity-20 blur-xl scale-150" />
              <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-accent-primary to-accent-cyan flex items-center justify-center shadow-2xl shadow-accent-primary/30">
                <div className="text-center">
                  <Cpu size={36} className="text-white mx-auto mb-1" />
                  <span className="text-white text-sm font-bold">NextWave</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden md:flex items-center justify-center"
          >
            <div className="w-full h-px bg-gradient-to-r from-accent-primary/60 via-accent-primary/40 to-transparent" />
          </motion.div>

          {modules.slice(3, 6).map((mod, i) => (
            <motion.div
              key={i + 3}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              className="p-5 rounded-2xl glass border border-border hover:border-accent-primary/20 transition-all duration-300 group text-center"
            >
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${mod.color} flex items-center justify-center text-white mx-auto mb-3 shadow-lg ${mod.shadow} group-hover:scale-110 transition-transform`}
              >
                {mod.icon}
              </div>
              <h4 className="text-text-primary font-semibold text-sm mb-1">
                {mod.label}
              </h4>
              <p className="text-text-muted text-xs mb-2">{mod.desc}</p>
              <span className="inline-block text-[10px] uppercase tracking-wider text-accent-cyan/70 font-semibold">
                via NextWave
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
            A <span className="text-accent-primary font-semibold">NextWave</span>{" "}
            é o centro de tudo. Ela orquestra o ecossistema{" "}
            <span className="text-accent-cyan font-semibold">ServOS</span> e seus
            módulos se comunicam em tempo real, gerando dados consolidados,
            dashboards analíticos e automação inteligente de processos.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
