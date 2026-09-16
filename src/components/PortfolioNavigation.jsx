import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Menu, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const links = [
  { href: "#competencias", label: "Competências" },
  { href: "#inteligencia-conectada", label: "Inteligência conectada" },
  { href: "#solucoes", label: "Soluções" },
  { href: "#metodo", label: "Como trabalhamos" },
  { href: "#atuacao", label: "Atuação" },
];

export default function PortfolioNavigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const triggerRef = useRef(null);
  const firstLinkRef = useRef(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 36);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key !== "Escape") return;
      setMobileOpen(false);
      requestAnimationFrame(() => triggerRef.current?.focus());
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileOpen]);

  const handleAnchorClick = useCallback((event, href) => {
    const target = document.querySelector(href);
    if (!target) return;
    event.preventDefault();
    setMobileOpen(false);
    const top = target.getBoundingClientRect().top + window.scrollY - 88;
    window.scrollTo({ top, behavior: reduceMotion ? "auto" : "smooth" });
  }, [reduceMotion]);

  return (
    <header className={`portfolio-nav ${scrolled ? "portfolio-nav--scrolled" : ""}`}>
      <nav className="portfolio-nav__inner" aria-label="Navegação do portfólio">
        <Link to="/" className="portfolio-nav__brand" aria-label="Voltar para a página inicial da NextW Sistemas">
          <img src="/nextw-logo-compact.png" alt="NextW Sistemas" width="150" height="44" />
        </Link>

        <ul className="portfolio-nav__links">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={(event) => handleAnchorClick(event, link.href)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="portfolio-nav__actions">
          <Link to="/" className="portfolio-nav__back">
            <ArrowLeft size={16} aria-hidden="true" />
            Site principal
          </Link>
          <a href="#contato-portfolio" onClick={(event) => handleAnchorClick(event, "#contato-portfolio")} className="portfolio-nav__cta">
            Fale conosco
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>

        <button
          ref={triggerRef}
          type="button"
          className="portfolio-nav__toggle"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileOpen}
          aria-controls="portfolio-mobile-menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="portfolio-mobile-menu"
            className="portfolio-nav__mobile"
            initial={reduceMotion ? false : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
          >
            <ul>
              {links.map((link, index) => (
                <li key={link.href}>
                  <a
                    ref={index === 0 ? firstLinkRef : undefined}
                    href={link.href}
                    onClick={(event) => handleAnchorClick(event, link.href)}
                  >
                    <span>0{index + 1}</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a href="#contato-portfolio" onClick={(event) => handleAnchorClick(event, "#contato-portfolio")} className="portfolio-nav__mobile-cta">
              Conte seu desafio
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <Link to="/" className="portfolio-nav__mobile-back">
              <ArrowLeft size={16} aria-hidden="true" />
              Voltar ao site principal
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
