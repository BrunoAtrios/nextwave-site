import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    if (typeof console !== "undefined") {
      console.error("App error:", error, info);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-6">
          <div className="max-w-md text-center p-8 rounded-sm glass border border-border">
            <h1 className="text-2xl font-bold text-text-primary mb-3">
              Algo deu errado
            </h1>
            <p className="text-text-secondary mb-6">
              Recarregue a página. Se o problema persistir, fale conosco pelo WhatsApp.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-5 py-2.5 bg-accent-primary text-white rounded-sm text-xs uppercase tracking-[0.1em] font-bold hover:bg-accent-glow transition-colors"
            >
              Recarregar
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
