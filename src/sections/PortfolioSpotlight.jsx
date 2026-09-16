import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import PortfolioFlow from "../components/PortfolioFlow";

export default function PortfolioSpotlight() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="portfolio-spotlight" aria-labelledby="portfolio-spotlight-title">
      <div className="portfolio-spotlight__glow" aria-hidden="true" />
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 32 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="portfolio-spotlight__inner"
      >
        <div className="portfolio-spotlight__content">
          <span className="portfolio-kicker">
            <Sparkles size={14} aria-hidden="true" />
            Portfólio NextW Sistemas
          </span>
          <h2 id="portfolio-spotlight-title">
            Tecnologia sob medida. <span>Inteligência que potencializa.</span>
          </h2>
          <p>
            Software, automação, integrações, IA, IoT, AIoT e RFID unidos para transformar operações sem tirar você do controle.
          </p>
          <Link className="portfolio-spotlight__button" to="/portfolio">
            Conheça nosso portfólio
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>

        <Link
          to="/portfolio"
          className="portfolio-spotlight__art"
          aria-label="Conheça o portfólio da NextW Sistemas"
        >
          <div className="portfolio-spotlight__art-head">
            <img src="/nextw-symbol.png" alt="" width="44" height="44" />
            <div>
              <span>NextW Intelligence Layer</span>
              <strong>Você continua no controle</strong>
            </div>
            <ArrowUpRight className="portfolio-spotlight__art-arrow" size={22} aria-hidden="true" />
          </div>
          <PortfolioFlow compact />
          <div className="portfolio-spotlight__art-footer" aria-hidden="true">
            <span>Software</span>
            <span>Automação</span>
            <span>IA</span>
            <span>IoT + AIoT</span>
            <span>RFID</span>
          </div>
        </Link>
      </motion.div>
    </section>
  );
}
