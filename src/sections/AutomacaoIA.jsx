import { motion } from "framer-motion";
import {
  Brain,
  Mic,
  Lightbulb,
  Thermometer,
  Lock,
  Wifi,
  Sparkles,
  Cpu,
  Zap,
  Eye,
  Activity,
} from "lucide-react";
import NeuralSelector from "../components/NeuralSelector";

const features = [
  {
    icon: <Brain size={20} />,
    title: "IA Personalizada",
    desc: "Cérebro treinado para a sua rotina, não um genérico de prateleira.",
  },
  {
    icon: <Mic size={20} />,
    title: "Comando por Voz",
    desc: "Conversa natural em português. Sem palavras mágicas ou sintaxes estranhas.",
  },
  {
    icon: <Lightbulb size={20} />,
    title: "Previsão Comportamental",
    desc: "Antecipa ações com base em padrões: clima, agenda, presença, horário.",
  },
  {
    icon: <Thermometer size={20} />,
    title: "Clima Inteligente",
    desc: "Temperatura, luz e ventilação se ajustam antes de você pedir.",
  },
  {
    icon: <Eye size={20} />,
    title: "Visão Computacional",
    desc: "Câmeras locais interpretam cena — reconhecem pessoas, gestos e eventos.",
  },
  {
    icon: <Lock size={20} />,
    title: "Segurança Preditiva",
    desc: "Detecta anomalias e reage antes que se tornem incidentes.",
  },
];

// placeholder removido

export default function AutomacaoIA() {
  return (
    <section
      id="automacao"
      className="py-24 md:py-36 px-6 relative overflow-hidden neural-stage"
    >
      <div className="absolute inset-0 mesh-gradient opacity-60" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-8"
        >
          <span className="ai-status">
            <span className="dot" />
            <Sparkles size={14} className="text-purple-400" />
            IA Embarcada · Processamento Local
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* ====== LADO ESQUERDO — CÉREBRO COM SELETOR ====== */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <NeuralSelector />

            {/* Métricas flutuantes */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="absolute top-2 left-0 ai-metric w-32 z-20"
            >
              <div className="ai-metric-value">
                <Cpu size={20} className="inline" />
              </div>
              <div className="ai-metric-label">Edge AI</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.0 }}
              className="absolute top-10 right-0 ai-metric w-32 z-20"
            >
              <div className="ai-metric-value">
                <Zap size={20} className="inline text-cyan-300" />
              </div>
              <div className="ai-metric-label">Tempo Real</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2 }}
              className="absolute bottom-8 left-4 ai-metric w-36 z-20"
            >
              <div className="ai-metric-value">
                <Activity size={20} className="inline text-pink-300" />
              </div>
              <div className="ai-metric-label">100% Local</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.4 }}
              className="absolute bottom-4 right-0 ai-metric w-32 z-20"
            >
              <div className="ai-metric-value">
                <Wifi size={20} className="inline text-purple-300" />
              </div>
              <div className="ai-metric-label">Multi-device</div>
            </motion.div>
          </motion.div>

          {/* ====== LADO DIREITO — CONTEÚDO ====== */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-text-primary mb-6 leading-[1.05] tracking-tight">
              Não é só{" "}
              <span className="gradient-text">ligar e desligar</span>
              <br />
              a luz. É um{" "}
              <span className="gradient-text-warm">cérebro</span>{" "}
              pensando por você.
            </h2>

            <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-8">
              A automação da <span className="text-text-primary font-semibold">NextWave</span> roda uma IA
              personalizada direto no seu ambiente — <span className="text-accent-cyan font-semibold">sem
              nuvem, sem latência, sem espionagem</span>. Ela aprende, prevê e age antes mesmo de você pedir.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="ai-feature-card rounded-xl p-4 flex items-start gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/30 to-pink-500/30 flex items-center justify-center text-purple-300 flex-shrink-0 border border-purple-500/30">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-text-primary mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-text-muted text-xs leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="relative overflow-hidden rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-500/10 via-bg-secondary/80 to-pink-500/10 p-6"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-purple-500/20 blur-3xl" />
              <div className="relative flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/40">
                  <Brain size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-text-primary text-sm md:text-base font-medium italic leading-relaxed mb-2">
                    "A IA não está em nenhum servidor no exterior. Ela roda{" "}
                    <span className="text-accent-cyan font-semibold">aqui</span>, ao
                    lado dos seus dispositivos. Privacidade total e resposta em
                    milissegundos."
                  </p>
                  <p className="text-text-muted text-xs">
                    — Filosofia NextWave · IA Embarcada
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}