import { motion } from "framer-motion";
import { Instagram, Linkedin, Youtube } from "lucide-react";
import { siteConfig, whatsappLink } from "../config";

const footerLinks = {
  produtos: [
    { label: "ServOS", href: "#ecossistema" },
    { label: "ServObras", href: "#ecossistema" },
    { label: "Next Gestão", href: "#ecossistema" },
    { label: "ServOS Church", href: "#ecossistema" },
    { label: "Minhas Cifras", href: "#ecossistema" },
    { label: "Smart Card", href: "#ecossistema" },
  ],
  empresa: [
    { label: "Tecnologias", href: "#tech" },
    { label: "Contato", href: "#contato" },
  ],
  legal: [
    { label: "Privacidade", href: "#" },
    { label: "Termos de Uso", href: "#" },
  ],
};

const socialLinks = [
  { key: "instagram", Icon: Instagram, label: "Instagram" },
  { key: "linkedin", Icon: Linkedin, label: "LinkedIn" },
  { key: "youtube", Icon: Youtube, label: "YouTube" },
].filter((s) => siteConfig.social[s.key]);

export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-border bg-bg-primary">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16"
        >
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-4">
              <img src="./3.webp" alt="Next" className="h-10 w-auto" />
            </a>
            <p className="text-text-muted text-sm leading-relaxed">
              Engenharia e Automação Além do Óbvio. Transformando negócios com
              tecnologia inteligente.
            </p>
          </div>

          <div>
            <h4 className="text-text-primary font-semibold mb-4">Produtos</h4>
            <ul className="space-y-2.5">
              {footerLinks.produtos.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-text-muted hover:text-accent-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-text-primary font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2.5">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-text-muted hover:text-accent-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-text-primary font-semibold mb-4">Legal</h4>
            <ul className="space-y-2.5">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-text-muted hover:text-accent-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <div className="pt-8 border-t border-border flex flex-col items-center gap-2 text-center">
          <p className="text-text-muted text-sm">
            &copy; 2026 Next Engenharia e Automação. Todos os direitos
            reservados.
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-text-muted text-sm text-center sm:text-left">
            &copy; {new Date().getFullYear()} {siteConfig.brand.name} Engenharia e Automação.
            Todos os direitos reservados.
          </span>
          <div className="flex items-center gap-2">
            {socialLinks.map(({ key, Icon, label }) => (
              <a
                key={key}
                href={siteConfig.social[key]}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-text-muted hover:text-accent-cyan hover:border-accent-cyan/40 transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-3">
          <span className="text-text-muted text-sm">
            Desenvolvido por{" "}
            <span className="text-text-primary font-semibold">Bruno Ferreira</span>
          </span>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-accent-primary to-accent-cyan text-white text-xs font-semibold rounded-full hover:opacity-90 transition-opacity"
          >
            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 14.5v-9l7 4.5-7 4.5z" />
            </svg>
            {siteConfig.brand.short}
          </a>
        </div>
      </div>
    </footer>
  );
}
