import {
  Bot,
  BrainCircuit,
  Cable,
  Church,
  Code2,
  CreditCard,
  Factory,
  HardHat,
  Music,
  Radio,
  Server,
  Tags,
} from "lucide-react";

export const capabilities = [
  {
    number: "01",
    icon: Code2,
    title: "Sistemas sob medida",
    description:
      "Plataformas desenhadas a partir do seu processo, com fluxos, permissões e indicadores que fazem sentido para a sua operação.",
    detail: "Web · PWA · Painéis de gestão",
  },
  {
    number: "02",
    icon: Bot,
    title: "Automação de processos",
    description:
      "Rotinas manuais se transformam em fluxos confiáveis, com alertas, validações e menos retrabalho para a equipe.",
    detail: "Workflows · Alertas · Regras",
  },
  {
    number: "03",
    icon: Cable,
    title: "Integração de plataformas",
    description:
      "Conectamos sistemas, APIs, dispositivos e bases de dados para que a informação circule sem depender de tarefas repetitivas.",
    detail: "APIs · Dados · Sistemas legados",
  },
  {
    number: "04",
    icon: BrainCircuit,
    title: "Inteligência Artificial",
    description:
      "Aplicamos IA onde ela gera valor: análise, recomendação, voz, visão e apoio à decisão, sempre com supervisão humana.",
    detail: "IA local · Cloud · Híbrida",
  },
  {
    number: "05",
    icon: Radio,
    title: "IoT e AIoT",
    description:
      "Sensores, equipamentos e inteligência conectados para monitorar eventos e agir sobre a operação em tempo real.",
    detail: "Sensores · Edge · Telemetria",
  },
  {
    number: "06",
    icon: Tags,
    title: "Unidade RFID",
    description:
      "Projetos especializados de identificação e rastreabilidade para ativos, inventários, logística, acesso e monitoramento.",
    detail: "Tags · Leitores · Rastreabilidade",
  },
];

export const solutions = [
  {
    icon: Server,
    name: "ServOS",
    category: "Gestão de serviços",
    challenge: "Centralizar uma operação de serviços que antes dependia de várias ferramentas e controles dispersos.",
    solution:
      "Gestão integrada de ordens de serviço, financeiro, agenda, comunicação, expedição e equipes em uma plataforma multiempresa.",
    capabilities: ["Kanban operacional", "WhatsApp integrado", "Expedição com GPS", "PWA instalável"],
  },
  {
    icon: HardHat,
    name: "ServObras",
    category: "Engenharia e obras",
    challenge: "Acompanhar o avanço físico, financeiro e documental de obras sem perder o histórico de cada etapa.",
    solution:
      "Ambiente de gestão com cronogramas, diário de obra, materiais, contratos, financeiro e trilhas de auditoria.",
    capabilities: ["Cronograma em 3 níveis", "Diário de obra", "Gestão financeira", "Auditoria"],
  },
  {
    icon: Factory,
    name: "Next Gestão",
    category: "Operação industrial",
    challenge: "Dar visibilidade ao chão de fábrica e conectar produção, estoque, pessoas, veículos e expedição.",
    solution:
      "ERP industrial com fluxo de produção, ponto eletrônico, expedição e rastreabilidade de ferramentas com RFID.",
    capabilities: ["Kanban de produção", "RFID em ferramentas", "Ponto eletrônico", "Expedição PWA"],
  },
  {
    icon: Church,
    name: "ServOS Church",
    category: "Gestão de comunidades",
    challenge: "Organizar membros, ministérios, agenda e financeiro em uma operação com diferentes responsáveis.",
    solution:
      "Sistema multiempresa para gestão de pessoas, células, eventos, avisos, contribuições e comunicação interna.",
    capabilities: ["Gestão de membros", "Agenda visual", "Financeiro", "Importação por CSV"],
  },
  {
    icon: Music,
    name: "Minhas Cifras",
    category: "Música e colaboração",
    challenge: "Reunir repertórios, escalas e ferramentas musicais em um único ambiente acessível à equipe.",
    solution:
      "Plataforma colaborativa com cifras, agendamento e recursos de áudio para estudo, ensaio e execução ao vivo.",
    capabilities: ["Repertórios", "Agendamento", "Ferramentas musicais", "Áudio em tempo real"],
  },
  {
    icon: CreditCard,
    name: "Smart Card",
    category: "Identidade digital e NFC",
    challenge: "Criar e ativar cartões digitais em escala sem perder o controle do processo de produção.",
    solution:
      "Plataforma para geração em lote, ativação por URL exclusiva e integração entre identidade digital, NFC e fábrica gráfica.",
    capabilities: ["Cartões NFC", "Geração em lote", "Ativação por URL", "Fluxo de produção"],
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Entender",
    text: "Mapeamos o desafio, as pessoas, os dados e as restrições reais da operação.",
  },
  {
    number: "02",
    title: "Desenhar",
    text: "Definimos a solução, as integrações e os critérios de sucesso junto com você.",
  },
  {
    number: "03",
    title: "Integrar",
    text: "Conectamos plataformas, dispositivos e informações sem criar silos desnecessários.",
  },
  {
    number: "04",
    title: "Implantar",
    text: "Entregamos em etapas, validamos com a operação e preparamos as pessoas para usar a solução.",
  },
  {
    number: "05",
    title: "Evoluir",
    text: "Acompanhamos o uso e ampliamos o sistema conforme o negócio e as necessidades avançam.",
  },
];

export const controlPrinciples = [
  "Aprovações humanas nos pontos críticos",
  "Perfis e permissões por responsabilidade",
  "Histórico e rastreabilidade das ações",
  "Regras configuráveis para cada operação",
  "Acesso e portabilidade dos dados",
  "Arquitetura local, cloud ou híbrida",
];
