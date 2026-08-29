import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Ricardo Mendes",
    role: "Diretor de Operações",
    company: "Construtora Horizonte",
    text: "A gente perdia um tempo absurdo controlando material de obra no papel. Depois que implantou o Serv Obra, a equipe toda consegue ver o estoque em tempo real. Mudou nosso dia a dia completamente.",
    product: "Serv Obra",
  },
  {
    name: "Patrícia Alves",
    role: "Gerente Industrial",
    company: "MetalTech Indústria",
    text: "O Next Gestão organizou nossa produção de um jeito que a gente nem imaginava. Hoje sei exatamente o que tá acontecendo no chão de fábrica sem sair da minha sala.",
    product: "Next Gestão",
  },
  {
    name: "Fernando Costa",
    role: "Proprietário",
    company: "Residência Inteligente",
    text: "Pedi uma automação que fosse simples de usar. A IA entende minha rotina e já deixa tudo pronto quando chego em casa. Minha família toda usa sem dificuldade.",
    product: "Automação IA",
  },
  {
    name: "Marcos Oliveira",
    role: "Coordenador de Logística",
    company: "TransLog Express",
    text: "Com o sistema UHF, a gente rastreia toda a frota sem precisar parar o veículo. Economizou horas por semana e reduziu erro humano a quase zero.",
    product: "NFC & UHF",
  },
];

export default function Depoimentos() {
  return (
    <section className="py-24 md:py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionTitle
          title="O que dizem nossos clientes"
          subtitle="Resultados reais de quem confia na Next"
          gradient
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative p-6 md:p-8 rounded-2xl glass border border-border hover:border-accent-primary/20 transition-all duration-300 group"
            >
              <Quote
                size={32}
                className="text-accent-primary/20 absolute top-6 right-6"
              />

              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    size={14}
                    className="text-amber-400 fill-amber-400"
                  />
                ))}
              </div>

              <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-text-primary font-semibold text-sm">
                    {t.name}
                  </p>
                  <p className="text-text-muted text-xs">
                    {t.role} &mdash; {t.company}
                  </p>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-full bg-accent-primary/10 text-accent-primary font-medium">
                  {t.product}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
