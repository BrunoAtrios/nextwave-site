export const siteConfig = {
  brand: {
    name: "Next Sistemas",
    short: "NextW",
    tagline: "Soluções inteligentes. Resultados reais.",
    description:
      "A NextW Sistemas desenvolve software sob medida, automação, integrações, Inteligência Artificial, IoT, AIoT e soluções RFID para operações privadas e públicas.",
    url: "https://www.nextw.com.br",
    logo: "/nextw-logo.png",
  },
  contact: {
    whatsappNumber: "5519991240130",
    whatsappDisplay: "(19) 99124-0130",
    email: "contato@nextw.com.br",
    phone: "(19) 99124-0130",
    city: "Americana",
    state: "SP",
    country: "Brasil",
  },
  social: {
    instagram: "",
    linkedin: "",
    youtube: "",
  },
  seo: {
    author: "Next Sistemas",
    keywords:
      "Next Sistemas, NextW, ServOS, ServObras, Next Gestão, ServOS Church, Minhas Cifras, Smart Card, gestão empresarial, ERP, obras, igrejas, música, NFC, IA, Americana, São Paulo",
    ogImage: "/nextw-identity-hero.png",
    locale: "pt_BR",
  },
};

export const whatsappLink = (message = "Olá! Gostaria de saber mais sobre as soluções da Next Sistemas.") =>
  `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
