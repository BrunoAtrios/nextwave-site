import { Suspense, lazy } from "react";
import Navigation from "./components/Navigation";
import ScrollProgress from "./components/ScrollProgress";
import WhatsAppFloat from "./components/WhatsAppFloat";
import Hero from "./sections/Hero";
import ErrorBoundary from "./components/ErrorBoundary";

const Numeros = lazy(() => import("./sections/Numeros"));
const Ecossistema = lazy(() => import("./sections/Ecossistema"));
const Produtos = lazy(() => import("./sections/Produtos"));
const AutomacaoIA = lazy(() => import("./sections/AutomacaoIA"));
const TechStack = lazy(() => import("./sections/TechStack"));
const Depoimentos = lazy(() => import("./sections/Depoimentos"));
const Contato = lazy(() => import("./sections/Contato"));
const Footer = lazy(() => import("./sections/Footer"));

function SectionFallback() {
  return (
    <div className="py-24 flex items-center justify-center" aria-hidden="true">
      <div className="w-8 h-8 rounded-full border-2 border-accent-primary/30 border-t-accent-primary animate-spin" />
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-bg-primary noise">
        <a href="#main" className="skip-link">Pular para o conteúdo</a>
        <ScrollProgress />
        <Navigation />
        <main id="main">
          <Hero />
          <Suspense fallback={<SectionFallback />}>
            <Numeros />
            <Ecossistema />
            <Produtos />
            <AutomacaoIA />
            <TechStack />
            <Depoimentos />
            <Contato />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
        <WhatsAppFloat />
      </div>
    </ErrorBoundary>
  );
}

export default App;
