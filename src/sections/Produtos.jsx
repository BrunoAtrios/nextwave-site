import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import {
  Server,
  HardHat,
  Factory,
  Home,
  Radio,
  Shield,
  ArrowRight,
} from "lucide-react";

const products = [
  {
    icon: <Server size={28} />,
    title: "ServOS",
    tagline: "Plataforma Central de Gestão",
    description:
      "O cérebro do ecossistema. CRM, ERP, inventário, relatórios em tempo real e integração total com todos os módulos.",
    features: [
      "Dashboard analítico",
      "API RESTful",
      "Multi-tenant",
      "Relatórios em tempo real",
    ],
    color: "from-indigo-500 to-purple-600",
    borderColor: "border-indigo-500/20 hover:border-indigo-500/40",
  },
  {
    icon: <HardHat size={28} />,
    title: "Serv Obra",
    tagline: "Gestor de Obras Online",
    description:
      "Controle total da sua obra na palma da mão. Estoque de materiais, financeiro, cronograma e equipes em um só lugar.",
    features: [
      "Controle de estoque",
      "Financeiro integrado",
      "Gestão de equipes",
      "Módulos personalizáveis",
    ],
    color: "from-amber-500 to-orange-600",
    borderColor: "border-amber-500/20 hover:border-amber-500/40",
  },
  {
    icon: <Factory size={28} />,
    title: "Next Gestão",
    tagline: "ERP para Processo Fabril",
    description:
      "Gestão empresarial completa voltada para indústria. Produção, estoque, financeiro e personalização de módulos sob medida.",
    features: [
      "Controle de produção",
      "Gestão financeira",
      "Estoque inteligente",
      "Personalização total",
    ],
    color: "from-blue-500 to-cyan-600",
    borderColor: "border-blue-500/20 hover:border-blue-500/40",
  },
  {
    icon: <Home size={28} />,
    title: "Automação Residencial",
    tagline: "IA Integrada na sua Casa",
    description:
      "Automação inteligente com IA personalizada que aprende sua rotina. Orquestrador completo e assistente pessoal.",
    features: [
      "IA personalizada",
      "Assistente pessoal",
      "Rotinas automáticas",
      "Controle total",
    ],
    color: "from-purple-500 to-pink-600",
    borderColor: "border-purple-500/20 hover:border-purple-500/40",
  },
  {
    icon: <Radio size={28} />,
    title: "NFC & UHF",
    tagline: "Identificação e Rastreamento",
    description:
      "Tecnologias de identificação por proximidade e longo alcance. Controle de acesso, rastreamento de ativos e logística.",
    features: [
      "Alcance até 12m (UHF)",
      "Leitores ACR122U",
      "Multi-tags",
      "Integração ServOS",
    ],
    color: "from-cyan-500 to-teal-600",
    borderColor: "border-cyan-500/20 hover:border-cyan-500/40",
  },
  {
    icon: <Shield size={28} />,
    title: "Redes & Infraestrutura",
    tagline: "Segurança e Performance",
    description:
      "Redes corporativas, firewalls, VPN, servidores e monitoramento. Infraestrutura robusta para suportar seu crescimento.",
    features: [
      "Redes corporativas",
      "Firewall & VPN",
      "Monitoramento 24/7",
      "Cloud & backup",
    ],
    color: "from-green-500 to-emerald-600",
    borderColor: "border-green-500/20 hover:border-green-500/40",
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
          subtitle="Cada produto foi pensado para resolver problemas reais com tecnologia de ponta"
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
              className={`relative p-6 rounded-2xl glass card-shine border ${product.borderColor} transition-all duration-300 group cursor-pointer`}
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

              <ul className="space-y-2 mb-5">
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

              <div className="flex items-center gap-1 text-sm text-accent-primary group-hover:text-accent-cyan transition-colors">
                Saiba mais
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
