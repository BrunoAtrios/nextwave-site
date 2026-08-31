import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import { Building2, Church, Music, Factory } from "lucide-react";

const cases = [
  {
    icon: <Building2 size={20} />,
    context: "Obra civil",
    title: "Engenheiro acompanha uma obra por dia",
    text: "No ServObras, o engenheiro abre o checklist de 32 etapas, marca o diário do dia com presença de terceirizados, ajusta o cronograma em 3 níveis e fecha o caixa da semana — tudo sem trocar de tela.",
    product: "ServObras",
  },
  {
    icon: <Factory size={20} />,
    context: "Chão de fábrica",
    title: "ERP que entende o ritmo da produção",
    text: "No Next Gestão, a equipe move ordens de serviço pelo Kanban, consulta o estoque de facas via RFID, registra o ponto dos funcionários pelo totem e dispara notificações automáticas quando o material entra em estoque baixo.",
    product: "Next Gestão",
  },
  {
    icon: <Church size={20} />,
    context: "Igreja",
    title: "Membros, ministérios e agenda em um só lugar",
    text: "No ServOS Church, a secretaria importa uma lista nova de membros por CSV, agenda os eventos da semana com flyers, registra os avisos com imagem e responde dízimos com comprovante no financeiro.",
    product: "ServOS Church",
  },
  {
    icon: <Music size={20} />,
    context: "Equipe de música",
    title: "Repertório e 14 ferramentas do músico",
    text: "No Minhas Cifras, o líder da banda monta a agenda do próximo culto pelo agendamento automático, transpõe a cifra na hora, afina o violão com o afinador por autocorrelação e roda um pad ao vivo no tom certo.",
    product: "Minhas Cifras",
  },
];

export default function Depoimentos() {
  return (
    <section className="py-24 md:py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionTitle
          title="Onde os produtos da NextWave já rodam"
          subtitle="Cenários reais extraídos dos projetos em produção"
          gradient
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative p-6 md:p-8 rounded-2xl glass border border-border hover:border-accent-primary/20 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent-primary/10 text-accent-primary flex items-center justify-center">
                  {c.icon}
                </div>
                <span className="text-xs uppercase tracking-wider text-accent-cyan font-semibold">
                  {c.context}
                </span>
              </div>

              <h3 className="text-lg md:text-xl font-bold text-text-primary mb-3 leading-snug">
                {c.title}
              </h3>

              <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-6">
                {c.text}
              </p>

              <div className="flex items-center justify-end">
                <span className="text-xs px-2.5 py-1 rounded-full bg-accent-primary/10 text-accent-primary font-medium">
                  {c.product}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}