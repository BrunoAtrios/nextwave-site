import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import {
  Server,
  HardHat,
  Factory,
  Church,
  Music,
  CreditCard,
} from "lucide-react";

const products = [
  {
    icon: <Server size={28} />,
    title: "ServOS",
    tagline: "Gestão integrada para empresas",
    description:
      "Plataforma multi-tenant com ordens de serviço, financeiro, agenda, WhatsApp integrado, expedição com GPS, controle de veículos, lembretes de pagamento e RBAC granular.",
    features: [
      "Kanban de ordens de serviço",
      "Fluxo de caixa automático",
      "WhatsApp via gateway AWAH",
      "Expedição com validação GPS",
      "PWA instalável",
    ],
    color: "from-indigo-500 to-purple-600",
    borderColor: "border-indigo-500/20 hover:border-indigo-500/40",
  },
  {
    icon: <HardHat size={28} />,
    title: "ServObras",
    tagline: "Gestão de obras de engenharia",
    description:
      "Plataforma para engenheiros com checklist de 32 etapas, cronograma em 3 níveis, fluxograma, diário de obra, materiais, financeiro com fechamento mensal, contratos e auditoria.",
    features: [
      "Cronograma Etapa › Subetapa › Tarefa",
      "Diário de obra com presença",
      "Múltiplas contas e fechamento mensal",
      "Perfil supervisor com auditoria",
    ],
    color: "from-amber-500 to-orange-600",
    borderColor: "border-amber-500/20 hover:border-amber-500/40",
  },
  {
    icon: <Factory size={28} />,
    title: "Next Gestão",
    tagline: "ERP para chão de fábrica",
    description:
      "ERP industrial com clientes, materiais, produtos, facas com RFID, ordens de serviço, RH com ponto eletrônico, veículos, expedição de correios com PWA online-first e notificações in-app.",
    features: [
      "Kanban de produção",
      "RH com ponto eletrônico",
      "Expedição PWA online-first",
      "Mascote Scot no login",
      "HSTS + CSP + CSRF",
    ],
    color: "from-blue-500 to-cyan-600",
    borderColor: "border-blue-500/20 hover:border-blue-500/40",
  },
  {
    icon: <Church size={28} />,
    title: "ServOS Church",
    tagline: "Gestão para igrejas",
    description:
      "Sistema multi-tenant para igrejas com membros, ministérios, células, agenda, financeiro com comprovantes, avisos, devocionais, notificações internas e busca global.",
    features: [
      "Membros com perfil e histórico",
      "Agenda com calendário visual",
      "Importação de membros por CSV",
      "PWA instalável",
    ],
    color: "from-emerald-500 to-teal-600",
    borderColor: "border-emerald-500/20 hover:border-emerald-500/40",
  },
  {
    icon: <Music size={28} />,
    title: "Minhas Cifras",
    tagline: "Repertório e ferramentas do músico",
    description:
      "Sistema para equipes de música com repertórios, agendamento automático, 14 ferramentas do músico (afinador, detector de acordes, metrônomo, treino de ouvido, círculo de quintas, compositor assistido), chat walkie-talkie e PWA.",
    features: [
      "14 ferramentas do músico",
      "Detector de acordes com Meyda.js",
      "Pads ao vivo por tonalidade",
      "Reprodução sincronizada de stems",
    ],
    color: "from-pink-500 to-rose-600",
    borderColor: "border-pink-500/20 hover:border-pink-500/40",
  },
  {
    icon: <CreditCard size={28} />,
    title: "Smart Card",
    tagline: "Cartão digital com NFC",
    description:
      "Plataforma de cartão digital com geração de cartões NFC em lote, ativação por URL única, preview em formato iPhone, ícones sociais dinâmicos e fluxo de fábrica gráfica integrada.",
    features: [
      "Cartões NFC em lote",
      "Ativação por URL curta",
      "Fluxo para fábrica gráfica",
      "Versionamento via version.json",
    ],
    color: "from-cyan-500 to-sky-600",
    borderColor: "border-cyan-500/20 hover:border-cyan-500/40",
  },
];

export default function Produtos() {
  return (
    <section
      id="produtos"
      className="py-24 md:py-32 px-6 bg-bg-secondary relative overflow-hidden"
    >
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionTitle
          title="Nossas Soluções"
          subtitle="Cada produto foi construído a partir de uso real — em obra, fábrica, igreja, banda e gráfica"
          gradient
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className={`relative p-6 rounded-2xl glass card-shine border ${product.borderColor} transition-all duration-300 group`}
            >
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center text-white mb-5 shadow-lg group-hover:scale-110 transition-transform`}
              >
                {product.icon}
              </div>

              <h3 className="text-xl font-bold text-text-primary mb-1 group-hover:text-white transition-colors">
                {product.title}
              </h3>
              <p className="text-accent-cyan text-sm font-medium mb-3">
                {product.tagline}
              </p>
              <p className="text-text-secondary text-sm leading-relaxed mb-5">
                {product.description}
              </p>

              <ul className="space-y-2">
                {product.features.map((feature, j) => (
                  <li
                    key={j}
                    className="flex items-center gap-2 text-text-muted text-xs"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-primary flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}