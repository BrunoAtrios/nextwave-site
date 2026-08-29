import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Cpu } from "lucide-react";
import NeuralBiological from "./NeuralBiological";
import NeuralDigital from "./NeuralDigital";

const variants = [
  { id: "biological", label: "Biológica", Icon: Brain, hint: "Sinapses · Dendritos · Pulsos neurais" },
  { id: "digital", label: "Digital", Icon: Cpu, hint: "Hex grid · Circuitos · Bits de dados" },
];

export default function NeuralSelector() {
  const [active, setActive] = useState("biological");

  return (
    <div className="relative w-full">
      {/* Switcher */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-30">
        <div className="inline-flex p-1 rounded-full glass-strong border border-purple-500/30 shadow-lg shadow-purple-500/20">
          {variants.map((v) => {
            const isActive = active === v.id;
            return (
              <button
                key={v.id}
                onClick={() => setActive(v.id)}
                aria-pressed={isActive}
                aria-label={`Visualização ${v.label}`}
                className={`relative px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-2 transition-all duration-300 ${
                  isActive
                    ? "text-white"
                    : "text-text-muted hover:text-text-primary"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="neural-tab-bg"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg shadow-purple-500/40"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <v.Icon size={14} />
                  {v.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Hint ativo */}
      <div className="absolute -top-3 right-4 z-30 hidden md:block">
        <span className="text-[10px] uppercase tracking-widest text-text-muted/70 font-mono">
          {variants.find((v) => v.id === active)?.hint}
        </span>
      </div>

      {/* Visualização */}
      <div className="relative pt-4">
        <AnimatePresence mode="wait">
          {active === "biological" ? (
            <motion.div
              key="biological"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
            >
              <NeuralBiological />
            </motion.div>
          ) : (
            <motion.div
              key="digital"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
            >
              <NeuralDigital />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Núcleo comum — cérebro / processador central */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: "spring" }}
            className="relative"
          >
            <div className="neural-orb">
              {active === "biological" ? (
                <Brain size={64} className="text-white drop-shadow-2xl" strokeWidth={1.5} />
              ) : (
                <Cpu size={64} className="text-white drop-shadow-2xl" strokeWidth={1.5} />
              )}
              <div className="absolute inset-0 rounded-full neural-orb-shine" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}