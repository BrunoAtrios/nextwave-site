import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Building2,
  Check,
  CheckCircle2,
  CloudCog,
  Database,
  Factory,
  Landmark,
  Loader2,
  Mail,
  MessageCircle,
  Radio,
  ScanLine,
  ShieldCheck,
  Tags,
  UserCheck,
  Workflow,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import PortfolioFlow from "../components/PortfolioFlow";
import PortfolioNavigation from "../components/PortfolioNavigation";
import Seo from "../components/Seo";
import { capabilities, controlPrinciples, processSteps, solutions } from "../content/portfolio";
import { routeMeta, siteConfig, whatsappLink } from "../config";

const reveal = (reduceMotion, delay = 0) => ({
  initial: reduceMotion ? false : { opacity: 0, y: 28 },
  whileInView: reduceMotion ? undefined : { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.62, delay },
});

function SectionHeading({ eyebrow, title, description, align = "left", id }) {
  return (
    <div className={`portfolio-heading portfolio-heading--${align}`}>
      <span className="portfolio-eyebrow">{eyebrow}</span>
      <h2 id={id}>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function PortfolioHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="portfolio-hero" aria-labelledby="portfolio-title">
      <div className="portfolio-hero__grid" aria-hidden="true" />
      <div className="portfolio-hero__orb portfolio-hero__orb--one" aria-hidden="true" />
      <div className="portfolio-hero__orb portfolio-hero__orb--two" aria-hidden="true" />

      <div className="portfolio-shell portfolio-hero__inner">
        <motion.div
          className="portfolio-hero__copy"
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.12 } },
          }}
        >
          <motion.span
            className="portfolio-kicker"
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
          >
            Portfólio institucional · NextW Sistemas
          </motion.span>
          <motion.h1
            id="portfolio-title"
            variants={{ hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } }}
          >
            Tecnologia sob medida.
            <span> Inteligência que potencializa.</span>
          </motion.h1>
          <motion.p
            className="portfolio-hero__lead"
            variants={{ hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } }}
          >
            Desenvolvemos sistemas, automações e operações conectadas que transformam dados em ação — da plataforma ao sensor, da IA à decisão.
          </motion.p>
          <motion.blockquote
            variants={{ hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } }}
          >
            “Aqui, a inteligência é você. A tecnologia amplia sua capacidade — e você continua no controle.”
          </motion.blockquote>
          <motion.div
            className="portfolio-hero__actions"
            variants={{ hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0 } }}
          >
            <a className="portfolio-button portfolio-button--primary" href="#competencias">
              Explorar competências
              <ArrowDown size={18} aria-hidden="true" />
            </a>
            <a className="portfolio-button portfolio-button--secondary" href="#contato-portfolio">
              Conte seu desafio
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </motion.div>
          <motion.div
            className="portfolio-hero__areas"
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            aria-label="Áreas de especialidade"
          >
            <span>Software</span>
            <span>Automação</span>
            <span>Integração</span>
            <span>IA</span>
            <span>IoT · AIoT</span>
            <span>RFID</span>
          </motion.div>
        </motion.div>

        <motion.div
          className="portfolio-hero__visual"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.3 }}
          aria-hidden="true"
        >
          <div className="portfolio-orbit">
            <div className="portfolio-orbit__ring portfolio-orbit__ring--outer" />
            <div className="portfolio-orbit__ring portfolio-orbit__ring--inner" />
            <div className="portfolio-orbit__line portfolio-orbit__line--one" />
            <div className="portfolio-orbit__line portfolio-orbit__line--two" />
            <div className="portfolio-orbit__core">
              <img src="/nextw-symbol.png" alt="" width="112" height="112" />
              <span>NextW</span>
              <small>Intelligence layer</small>
            </div>
            <div className="portfolio-orbit__chip portfolio-orbit__chip--software">
              <Workflow size={18} /> Software
            </div>
            <div className="portfolio-orbit__chip portfolio-orbit__chip--iot">
              <Radio size={18} /> IoT / AIoT
            </div>
            <div className="portfolio-orbit__chip portfolio-orbit__chip--rfid">
              <Tags size={18} /> RFID
            </div>
            <div className="portfolio-orbit__chip portfolio-orbit__chip--data">
              <Database size={18} /> Dados + IA
            </div>
          </div>
          <div className="portfolio-hero__control">
            <UserCheck size={19} />
            <div>
              <span>Camada de decisão</span>
              <strong>Controle humano preservado</strong>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CapabilitiesSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="competencias" className="portfolio-section portfolio-capabilities" aria-labelledby="competencias-title">
      <div className="portfolio-shell">
        <SectionHeading
          eyebrow="O que fazemos"
          id="competencias-title"
          title="Engenharia que começa no seu desafio, não em uma solução pronta."
          description="Unimos software, dados e dispositivos para construir a resposta adequada a cada contexto operacional."
        />
        <div className="portfolio-capabilities__grid">
          {capabilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article key={item.title} {...reveal(reduceMotion, index * 0.055)} className="portfolio-capability-card">
                <div className="portfolio-capability-card__top">
                  <span>{item.number}</span>
                  <Icon size={26} strokeWidth={1.6} aria-hidden="true" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <small>{item.detail}</small>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ConnectedSection() {
  const reduceMotion = useReducedMotion();
  const rfidItems = [
    "Identificação automática",
    "Rastreabilidade de ativos",
    "Inventários mais eficientes",
    "Logística e movimentação",
    "Controle de acesso",
    "Monitoramento inteligente",
  ];

  return (
    <section id="inteligencia-conectada" className="portfolio-section portfolio-connected" aria-labelledby="connected-title">
      <div className="portfolio-shell">
        <SectionHeading
          eyebrow="Inteligência conectada"
          id="connected-title"
          title="Do evento no mundo físico à decisão no painel."
          description="Conectamos equipamentos, sensores, sistemas e pessoas em uma arquitetura contínua de informação e ação."
          align="center"
        />
        <motion.div {...reveal(reduceMotion)} className="portfolio-connected__flow">
          <PortfolioFlow />
        </motion.div>

        <div className="portfolio-connected__columns">
          <motion.article {...reveal(reduceMotion)} className="portfolio-rfid-card">
            <div className="portfolio-rfid-card__visual" aria-hidden="true">
              <div className="portfolio-rfid-card__scan" />
              <ScanLine size={74} strokeWidth={1.1} />
              <span>RFID UNIT</span>
            </div>
            <div className="portfolio-rfid-card__copy">
              <span className="portfolio-eyebrow">Unidade especializada</span>
              <h3>RFID que identifica, acompanha e dá contexto.</h3>
              <p>
                Projetamos a jornada completa — tags, leitores, regras, integrações e painéis — para que cada leitura se transforme em informação útil.
              </p>
              <ul>
                {rfidItems.map((item) => (
                  <li key={item}><Check size={16} aria-hidden="true" /> {item}</li>
                ))}
              </ul>
            </div>
          </motion.article>

          <motion.aside {...reveal(reduceMotion, 0.12)} className="portfolio-architecture-card">
            <CloudCog size={30} aria-hidden="true" />
            <span className="portfolio-eyebrow">Arquitetura adequada</span>
            <h3>Local, cloud ou híbrida.</h3>
            <p>
              A infraestrutura acompanha requisitos de privacidade, latência, disponibilidade e escala. Não forçamos um modelo único para todos os projetos.
            </p>
            <div>
              <span><ShieldCheck size={16} /> Segurança</span>
              <span><Radio size={16} /> Tempo real</span>
              <span><Database size={16} /> Continuidade</span>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

function SolutionsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="solucoes" className="portfolio-section portfolio-solutions" aria-labelledby="solutions-title">
      <div className="portfolio-shell">
        <div className="portfolio-solutions__intro">
          <SectionHeading
            eyebrow="Soluções em operação"
            id="solutions-title"
            title="Produtos que nasceram de necessidades reais."
            description="Nosso portfólio mostra como transformamos desafios específicos em ferramentas que apoiam a rotina, a gestão e a evolução de diferentes operações."
          />
          <p className="portfolio-solutions__note">
            <span>06</span>
            soluções próprias que demonstram nossa capacidade de construir do processo à interface.
          </p>
        </div>

        <div className="portfolio-solutions__grid">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <motion.article key={solution.name} {...reveal(reduceMotion, (index % 2) * 0.08)} className="portfolio-solution-card">
                <header>
                  <div className="portfolio-solution-card__icon"><Icon size={27} strokeWidth={1.6} aria-hidden="true" /></div>
                  <div>
                    <span>{solution.category}</span>
                    <h3>{solution.name}</h3>
                  </div>
                  <small>0{index + 1}</small>
                </header>
                <div className="portfolio-solution-card__body">
                  <div>
                    <span>O desafio</span>
                    <p>{solution.challenge}</p>
                  </div>
                  <div>
                    <span>A solução</span>
                    <p>{solution.solution}</p>
                  </div>
                </div>
                <ul>
                  {solution.capabilities.map((capability) => (
                    <li key={capability}>{capability}</li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function MethodSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="metodo" className="portfolio-section portfolio-method" aria-labelledby="method-title">
      <div className="portfolio-shell">
        <SectionHeading
          eyebrow="Como trabalhamos"
          id="method-title"
          title="Uma construção conjunta, do entendimento à evolução."
          description="A tecnologia entra depois da escuta. Cada etapa mantém o negócio envolvido nas escolhas que definem a solução."
        />

        <ol className="portfolio-method__steps">
          {processSteps.map((step, index) => (
            <motion.li key={step.title} {...reveal(reduceMotion, index * 0.07)}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
              {index < processSteps.length - 1 && <ArrowRight size={17} aria-hidden="true" />}
            </motion.li>
          ))}
        </ol>

        <motion.div {...reveal(reduceMotion)} className="portfolio-control-panel">
          <div className="portfolio-control-panel__intro">
            <span className="portfolio-eyebrow">Você no controle</span>
            <h3>A tecnologia executa. A decisão continua sendo sua.</h3>
            <p>
              Projetamos transparência e governança desde o início, para que automação e inteligência ampliem a equipe sem substituir a responsabilidade humana.
            </p>
          </div>
          <ul>
            {controlPrinciples.map((principle) => (
              <li key={principle}><CheckCircle2 size={18} aria-hidden="true" /> {principle}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

function MarketsSection() {
  const reduceMotion = useReducedMotion();

  const markets = [
    {
      icon: Factory,
      label: "Empresas privadas",
      title: "Eficiência que acompanha o ritmo do negócio.",
      text: "Soluções para integrar operações, automatizar rotinas, ampliar a rastreabilidade e transformar dados em decisões mais rápidas.",
      items: ["Integração com processos existentes", "Visibilidade operacional", "Escala e evolução contínua"],
    },
    {
      icon: Landmark,
      label: "Setor público",
      title: "Tecnologia preparada para servir com responsabilidade.",
      text: "Capacidade técnica para colaborar com órgãos públicos e governos municipais e estaduais em projetos seguros, auditáveis e interoperáveis.",
      items: ["Interoperabilidade e auditabilidade", "Continuidade e segurança", "Privacidade e princípios da LGPD"],
    },
  ];

  return (
    <section id="atuacao" className="portfolio-section portfolio-markets" aria-labelledby="markets-title">
      <div className="portfolio-shell">
        <SectionHeading
          eyebrow="Onde podemos atuar"
          id="markets-title"
          title="Tecnologia com contexto para operações privadas e públicas."
          description="Cada ambiente tem responsabilidades e ritmos próprios. Nossa abordagem se adapta a eles."
          align="center"
        />
        <div className="portfolio-markets__grid">
          {markets.map((market, index) => {
            const Icon = market.icon;
            return (
              <motion.article key={market.label} {...reveal(reduceMotion, index * 0.1)}>
                <div className="portfolio-markets__icon"><Icon size={31} strokeWidth={1.5} aria-hidden="true" /></div>
                <span>{market.label}</span>
                <h3>{market.title}</h3>
                <p>{market.text}</p>
                <ul>
                  {market.items.map((item) => <li key={item}><Check size={16} aria-hidden="true" /> {item}</li>)}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const reduceMotion = useReducedMotion();
  const [formData, setFormData] = useState({ name: "", email: "", challenge: "" });
  const [status, setStatus] = useState("idle");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    const message = [
      `Olá! Meu nome é ${formData.name}.`,
      formData.email ? `Meu e-mail é ${formData.email}.` : "",
      "",
      formData.challenge || "Gostaria de conversar sobre um projeto com a NextW Sistemas.",
    ].filter((line, index, lines) => line || (index === 2 && lines[index + 1])).join("\n");

    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
    setTimeout(() => {
      setStatus("sent");
      setTimeout(() => setStatus("idle"), 2600);
    }, 350);
  };

  return (
    <section id="contato-portfolio" className="portfolio-contact" aria-labelledby="portfolio-contact-title">
      <div className="portfolio-contact__grid" aria-hidden="true" />
      <div className="portfolio-shell portfolio-contact__inner">
        <motion.div {...reveal(reduceMotion)} className="portfolio-contact__copy">
          <span className="portfolio-kicker">Vamos construir o próximo passo</span>
          <h2 id="portfolio-contact-title">Conte seu desafio.<br /><span>Nós conectamos as possibilidades.</span></h2>
          <p>
            Começamos entendendo sua operação. A partir dela, desenhamos a combinação certa entre software, dados, inteligência e dispositivos conectados.
          </p>
          <div className="portfolio-contact__channels">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={20} aria-hidden="true" />
              <span>WhatsApp<strong>{siteConfig.contact.whatsappDisplay}</strong></span>
            </a>
            <a href={`mailto:${siteConfig.contact.email}`}>
              <Mail size={20} aria-hidden="true" />
              <span>E-mail<strong>{siteConfig.contact.email}</strong></span>
            </a>
          </div>
        </motion.div>

        <motion.form {...reveal(reduceMotion, 0.12)} onSubmit={handleSubmit} className="portfolio-contact__form">
          <div>
            <label htmlFor="portfolio-name">Nome</label>
            <input
              id="portfolio-name"
              type="text"
              autoComplete="name"
              required
              value={formData.name}
              onChange={(event) => setFormData({ ...formData, name: event.target.value })}
              placeholder="Como podemos chamar você?"
            />
          </div>
          <div>
            <label htmlFor="portfolio-email">E-mail</label>
            <input
              id="portfolio-email"
              type="email"
              autoComplete="email"
              value={formData.email}
              onChange={(event) => setFormData({ ...formData, email: event.target.value })}
              placeholder="voce@empresa.com.br"
            />
          </div>
          <div>
            <label htmlFor="portfolio-challenge">Qual é o desafio?</label>
            <textarea
              id="portfolio-challenge"
              rows="5"
              required
              value={formData.challenge}
              onChange={(event) => setFormData({ ...formData, challenge: event.target.value })}
              placeholder="Conte brevemente sobre a operação, processo ou ideia..."
            />
          </div>
          <button type="submit" disabled={status === "sending"}>
            {status === "sending" && <Loader2 className="portfolio-spin" size={19} aria-hidden="true" />}
            {status === "sent" && <CheckCircle2 size={19} aria-hidden="true" />}
            {status === "idle" && <MessageCircle size={19} aria-hidden="true" />}
            {status === "sent" ? "WhatsApp aberto" : "Conversar pelo WhatsApp"}
          </button>
          <p className="portfolio-contact__status" aria-live="polite">
            {status === "sending" ? "Preparando sua mensagem..." : status === "sent" ? "Sua conversa foi aberta em uma nova aba." : "Você revisa a mensagem antes de enviá-la."}
          </p>
        </motion.form>
      </div>
    </section>
  );
}

function PortfolioFooter() {
  return (
    <footer className="portfolio-footer">
      <div className="portfolio-shell portfolio-footer__inner">
        <div>
          <img src="/nextw-logo-compact.png" alt="NextW Sistemas" width="150" height="44" />
          <p>Tecnologia sob medida. Inteligência que potencializa. Você no controle.</p>
        </div>
        <nav aria-label="Links do rodapé do portfólio">
          <a href="#competencias">Competências</a>
          <a href="#solucoes">Soluções</a>
          <a href="#atuacao">Atuação</a>
          <a href="#contato-portfolio">Contato</a>
        </nav>
        <div className="portfolio-footer__meta">
          <Link to="/">Voltar ao site principal <ArrowUpRight size={14} aria-hidden="true" /></Link>
          <span>© {new Date().getFullYear()} {siteConfig.brand.name}</span>
        </div>
      </div>
    </footer>
  );
}

export default function PortfolioPage() {
  return (
    <div className="portfolio-page">
      <Seo
        title={routeMeta.portfolio.title}
        description={routeMeta.portfolio.description}
        canonicalPath={routeMeta.portfolio.canonicalPath}
        image={routeMeta.portfolio.image}
      />
      <a href="#portfolio-main" className="skip-link">Pular para o conteúdo</a>
      <PortfolioNavigation />
      <main id="portfolio-main">
        <PortfolioHero />
        <CapabilitiesSection />
        <ConnectedSection />
        <SolutionsSection />
        <MethodSection />
        <MarketsSection />
        <ContactSection />
      </main>
      <PortfolioFooter />
    </div>
  );
}
