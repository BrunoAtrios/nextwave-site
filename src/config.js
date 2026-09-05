export const siteConfig = {
  brand: {
    name: "Next Sistemas",
    short: "NextW",
    tagline: "Soluções inteligentes. Resultados reais.",
    description:
      "Next Sistemas transforma operações com soluções personalizadas, automação e software inteligente para empresas que querem avançar.",
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
