export const siteConfig = {
  brand: {
    name: "Next Wave",
    short: "NextWave",
    tagline: "Engenharia e Automação Além do Óbvio",
    description:
      "NextWave é o centro que orquestra o ecossistema ServOS. Automação residencial com IA, gestão empresarial, obras e infraestrutura inteligente.",
    url: "https://www.nextw.com.br",
    logo: "/3.webp",
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
    author: "Next Wave Engenharia e Automação",
    keywords:
      "automação, IA, gestão empresarial, obras, ERP, infraestrutura, NFC, UHF, ESP32, automação residencial, inteligência artificial, Americana, São Paulo, ServOS",
    ogImage: "/3.webp",
    locale: "pt_BR",
  },
};

export const whatsappLink = (message = "Olá! Gostaria de saber mais sobre as soluções da Next Wave.") =>
  `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;