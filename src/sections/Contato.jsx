import { motion } from "framer-motion";
import { useState } from "react";
import { MessageCircle, Mail, Phone, MapPin, Loader2, CheckCircle2 } from "lucide-react";
import { siteConfig, whatsappLink } from "../config";

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | sent

  const handleWhatsApp = (e) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    const msg = `Olá! Meu nome é ${formData.nome || "visitante"}.${formData.mensagem ? `\n\n${formData.mensagem}` : "\n\nGostaria de saber mais sobre as soluções da Next Wave."}`;
    window.open(whatsappLink(msg), "_blank", "noopener,noreferrer");
    setTimeout(() => {
      setStatus("sent");
      setTimeout(() => setStatus("idle"), 2500);
    }, 400);
  };

  return (
    <section
      id="contato"
      className="py-24 md:py-32 px-6 bg-bg-secondary relative overflow-hidden"
    >
      <div className="absolute inset-0 mesh-gradient" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-4">
            Vamos <span className="gradient-text">conversar?</span>
          </h2>
          <p className="text-text-secondary text-base md:text-lg max-w-xl mx-auto">
            Conte seu desafio. Da gestão industrial ao repertório de banda, da obra civil ao cartão NFC — {siteConfig.contact.city}-{siteConfig.contact.state}.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleWhatsApp} className="p-6 md:p-8 rounded-2xl glass border border-border">
              <div className="space-y-5">
                <div>
                  <label htmlFor="nome" className="block text-text-secondary text-sm mb-2">
                    Nome
                  </label>
                  <input
                    id="nome"
                    name="nome"
                    type="text"
                    autoComplete="name"
                    required
                    value={formData.nome}
                    onChange={(e) =>
                      setFormData({ ...formData, nome: e.target.value })
                    }
                    placeholder="Seu nome"
                    className="w-full px-4 py-3 rounded-lg bg-bg-primary border border-border text-text-primary placeholder-text-muted text-sm focus:outline-none focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/30 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-text-secondary text-sm mb-2">
                    E-mail
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="seu@email.com"
                    className="w-full px-4 py-3 rounded-lg bg-bg-primary border border-border text-text-primary placeholder-text-muted text-sm focus:outline-none focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/30 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="mensagem" className="block text-text-secondary text-sm mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={(e) =>
                      setFormData({ ...formData, mensagem: e.target.value })
                    }
                    placeholder="Descreva seu projeto ou necessidade..."
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-bg-primary border border-border text-text-primary placeholder-text-muted text-sm focus:outline-none focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/30 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full flex items-center justify-center gap-3 px-6 py-3.5 bg-[#25d366] text-white font-semibold rounded-lg hover:bg-[#20bd5a] transition-all shadow-lg shadow-[#25d366]/20 hover:shadow-[#25d366]/40 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === "sending" && <Loader2 size={20} className="animate-spin" />}
                  {status === "sent" && <CheckCircle2 size={20} />}
                  {status === "idle" && <MessageCircle size={20} />}
                  {status === "sent" ? "Abrindo WhatsApp..." : "Enviar pelo WhatsApp"}
                </button>

                <p className="text-text-muted text-xs text-center">
                  Ou se preferir, envie um e-mail direto para{" "}
                  <a href={`mailto:${siteConfig.contact.email}`} className="text-accent-primary hover:underline">
                    {siteConfig.contact.email}
                  </a>
                </p>
              </div>
            </form>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 rounded-2xl glass border border-border flex-1 hover:border-[#25d366]/40 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-[#25d366]/10 flex items-center justify-center mb-4">
                <MessageCircle size={24} className="text-[#25d366]" />
              </div>
              <h4 className="text-text-primary font-semibold mb-2">WhatsApp</h4>
              <p className="text-text-muted text-sm mb-3">
                Resposta rápida em horário comercial
              </p>
              <span className="text-[#25d366] text-sm font-medium hover:underline">
                {siteConfig.contact.whatsappDisplay} &rarr;
              </span>
            </a>

            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="block p-6 rounded-2xl glass border border-border flex-1 hover:border-accent-primary/40 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-primary/10 flex items-center justify-center mb-4">
                <Mail size={24} className="text-accent-primary" />
              </div>
              <h4 className="text-text-primary font-semibold mb-2">E-mail</h4>
              <p className="text-text-muted text-sm mb-3">
                Para propostas e documentos
              </p>
              <span className="text-accent-primary text-sm font-medium hover:underline">
                {siteConfig.contact.email}
              </span>
            </a>

            <div className="p-6 rounded-2xl glass border border-border flex-1">
              <div className="w-12 h-12 rounded-xl bg-accent-cyan/10 flex items-center justify-center mb-4">
                <MapPin size={24} className="text-accent-cyan" />
              </div>
              <h4 className="text-text-primary font-semibold mb-2">Localização</h4>
              <p className="text-text-muted text-sm mb-3">
                Atendemos todo o Brasil
              </p>
              <span className="text-accent-cyan text-sm font-medium">
                {siteConfig.contact.city} - {siteConfig.contact.state}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
