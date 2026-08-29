import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const navLinks = [
  { href: "#ecossistema", label: "Ecossistema" },
  { href: "#produtos", label: "Produtos" },
  { href: "#automacao", label: "Automação IA" },
  { href: "#tech", label: "Tecnologias" },
  { href: "#contato", label: "Contato" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleAnchorClick = useCallback((e, href) => {
    if (!href.startsWith("#")) return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    const headerOffset = 80;
    const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top, behavior: "smooth" });
    setMobileOpen(false);
    target.setAttribute("tabindex", "-1");
    target.focus({ preventScroll: true });
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-strong py-3 shadow-lg shadow-black/20"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between" aria-label="Navegação principal">
        <a href="#" className="flex items-center gap-3 group" aria-label="Next Wave — página inicial">
          <img
            src="./3.webp"
            alt="Next Wave"
            width="36"
            height="36"
            loading="eager"
            decoding="async"
            className="h-9 w-auto transition-transform group-hover:scale-105"
          />
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleAnchorClick(e, link.href)}
                className="text-text-secondary hover:text-text-primary transition-colors duration-200 text-sm font-medium relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-accent-primary after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contato"
          onClick={(e) => handleAnchorClick(e, "#contato")}
          className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-accent-primary to-accent-cyan text-white text-sm font-medium rounded-lg hover:shadow-lg hover:shadow-accent-primary/25 transition-all duration-300 hover:scale-105"
        >
          Fale Conosco
        </a>

        <button
          className="lg:hidden text-text-primary p-2"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glass-strong border-t border-border overflow-hidden"
          >
            <ul className="px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleAnchorClick(e, link.href)}
                    className="block text-text-secondary hover:text-text-primary transition-colors text-base py-2"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#contato"
                  onClick={(e) => handleAnchorClick(e, "#contato")}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-accent-primary to-accent-cyan text-white text-sm font-medium rounded-lg w-full justify-center"
                >
                  Fale Conosco
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
