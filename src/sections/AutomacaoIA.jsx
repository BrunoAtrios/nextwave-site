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
    title: "Orquestração de modelos",
    desc: "Roteamento por intenção com fallback em cascata entre Ollama local, Ollama via túnel e DeepSeek cloud.",
  },
  {
    icon: <Mic size={20} />,
    title: "Voz neural pt-BR",
    desc: "Síntese de voz com edge-tts (Francisca, Antonio, Thalita) e reconhecimento de voz com push-to-talk real, barge-in e supressão de eco.",
  },
  {
    icon: <Lightbulb size={20} />,
    title: "Memória persistente",
    desc: "Fatos permanentes, memória por sessão, fila de sugestões revisáveis manualmente e memória por usuário aprovada via palavra-chave.",
  },
  {
    icon: <Thermometer size={20} />,
    title: "Painel holográfico",
    desc: "Interface com reator animado, monitor de áudio em tempo real e telemetria de latência, modelo e tokens.",
  },
  {
    icon: <Eye size={20} />,
    title: "Detecção de acordes",
    desc: "Web Audio API com FFT, chromagram, template matching e 15 tipos de acorde para análise musical em tempo real.",
  },
  {
    icon: <Lock size={20} />,
    title: "Hardening de segurança",
    desc: "HSTS, CSP, CSRF, rate limit, upload validado com finfo/getimagesize e tokens Sanctum revogados em deploy.",
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
            IA Aplicada · Em Produção
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
              IA aplicada em{" "}
              <span className="gradient-text">produtos</span>
              <br />
              que <span className="gradient-text-warm">já rodam</span>.
            </h2>

            <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-8">
              A <span className="text-text-primary font-semibold">NextWave</span> integra modelos de linguagem, voz neural pt-BR, visão computacional e memória persistente em produtos que já estão em produção — <span className="text-accent-cyan font-semibold">do LOGAN no Raspberry Pi ao Minhas Cifras na web</span>.
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
                    "A mesma base de IA que orquestra o LOGAN já é usada no detector de acordes do Minhas Cifras, no mascote Scot do Next Gestão e no Jarvis local."
                  </p>
                  <p className="text-text-muted text-xs">
                    — Filosofia NextWave · IA aplicada
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