import {
  BrainCircuit,
  Cable,
  Cpu,
  Database,
  LayoutDashboard,
  Radio,
  Tags,
  UserCheck,
} from "lucide-react";

const stages = [
  {
    icon: Radio,
    eyebrow: "Origem",
    title: "Operação",
    description: "Sensores, equipamentos e sistemas",
  },
  {
    icon: Cable,
    eyebrow: "Conexão",
    title: "Integração",
    description: "APIs, RFID e fluxo de dados",
  },
  {
    icon: BrainCircuit,
    eyebrow: "Inteligência",
    title: "Automação + IA",
    description: "Análise, regras e recomendações",
  },
  {
    icon: UserCheck,
    eyebrow: "Resultado",
    title: "Você decide",
    description: "Visibilidade e controle humano",
  },
];

export default function PortfolioFlow({ compact = false }) {
  return (
    <div className={`portfolio-flow ${compact ? "portfolio-flow--compact" : ""}`} aria-label="Fluxo da inteligência conectada">
      <div className="portfolio-flow__status" aria-hidden="true">
        <span className="portfolio-flow__status-dot" />
        Sistemas conectados
      </div>

      <div className="portfolio-flow__grid">
        {stages.map((stage, index) => {
          const Icon = stage.icon;
          return (
            <div className="portfolio-flow__stage" key={stage.title}>
              <div className="portfolio-flow__node">
                <Icon size={compact ? 20 : 24} strokeWidth={1.7} aria-hidden="true" />
              </div>
              <div className="portfolio-flow__copy">
                <span>{stage.eyebrow}</span>
                <strong>{stage.title}</strong>
                {!compact && <p>{stage.description}</p>}
              </div>
              {index < stages.length - 1 && (
                <div className="portfolio-flow__connector" aria-hidden="true">
                  <span />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {!compact && (
        <div className="portfolio-flow__signals" aria-hidden="true">
          <span><Tags size={15} /> RFID</span>
          <span><Cpu size={15} /> Edge</span>
          <span><Database size={15} /> Dados</span>
          <span><LayoutDashboard size={15} /> Gestão</span>
        </div>
      )}
    </div>
  );
}
