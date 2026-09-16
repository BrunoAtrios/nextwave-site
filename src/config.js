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

// Metadados por rota. São a fonte única usada em tempo de execução pelo
// componente Seo e em tempo de build pelo scripts/postbuild.mjs, que gera o
// HTML estático de cada rota para rastreadores e previews de link.
export const routeMeta = {
  home: {
    title: "Next Sistemas | Soluções Inteligentes, Resultados Reais — Americana/SP",
    description:
      "Next Sistemas cria soluções personalizadas de automação, gestão e software para empresas que querem operar melhor e crescer. Atendimento em todo o Brasil, base em Americana-SP.",
    canonicalPath: "/",
    image: "/nextw-identity-hero.png",
  },
  portfolio: {
    title: "Portfólio NextW Sistemas | Software, IA, IoT e RFID",
    description:
      "Conheça as competências e soluções da NextW Sistemas em software sob medida, automação, integração, Inteligência Artificial, IoT, AIoT e RFID.",
    canonicalPath: "/portfolio",
    image: "/nextw-identity-hero.png",
    noscriptHeading: "Portfólio NextW Sistemas",
    noscriptBody:
      "A NextW Sistemas desenvolve software sob medida, automação de processos, integração de plataformas, Inteligência Artificial aplicada, IoT, AIoT e projetos de RFID. Atuamos com empresas privadas e temos capacidade para colaborar com órgãos públicos e governos municipais e estaduais.",
  },
};
