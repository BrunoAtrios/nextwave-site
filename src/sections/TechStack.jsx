import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import {
  Code2,
  Database,
  Cpu,
  Globe,
  Terminal,
  Cloud,
  Boxes,
  Cog,
} from "lucide-react";

const technologies = [
  {
    name: "Python",
    icon: <Terminal size={20} />,
    color: "from-blue-400 to-yellow-500",
  },
  {
    name: "PHP",
    icon: <Code2 size={20} />,
    color: "from-indigo-400 to-purple-600",
  },
  {
    name: "React",
    icon: <Code2 size={20} />,
    color: "from-cyan-400 to-cyan-600",
  },
  {
    name: "JavaScript",
    icon: <Globe size={20} />,
    color: "from-yellow-400 to-orange-500",
  },
  {
    name: "PostgreSQL",
    icon: <Database size={20} />,
    color: "from-blue-500 to-indigo-600",
  },
  {
    name: "Linux",
    icon: <Terminal size={20} />,
    color: "from-gray-400 to-gray-600",
  },
  {
    name: "Docker",
    icon: <Cloud size={20} />,
    color: "from-blue-400 to-cyan-500",
  },
  {
    name: "ESP32",
    icon: <Cpu size={20} />,
    color: "from-green-400 to-emerald-500",
  },
  {
    name: "Node.js",
    icon: <Boxes size={20} />,
    color: "from-green-500 to-lime-500",
  },
  { name: "IoT", icon: <Cog size={20} />, color: "from-orange-400 to-red-500" },
  {
    name: "REST APIs",
    icon: <Globe size={20} />,
    color: "from-violet-400 to-purple-500",
  },
  {
    name: "IA/ML",
    icon: <Cpu size={20} />,
    color: "from-pink-400 to-rose-500",
  },
];

export default function TechStack() {
  return (
    <section
      id="tech"
      className="py-24 md:py-32 px-6 bg-bg-secondary relative overflow-hidden"
    >
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <SectionTitle
          title="Tecnologias"
          subtitle="Domínio completo das ferramentas que impulsionam a indústria"
          gradient
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ scale: 1.08, y: -4 }}
              className="relative group"
            >
              <div className="relative p-5 rounded-xl glass border border-border hover:border-accent-primary/30 transition-all duration-300 text-center">
                <div
                  className={`w-10 h-10 rounded-lg bg-gradient-to-br ${tech.color} flex items-center justify-center mx-auto mb-3 text-white shadow-md group-hover:shadow-lg transition-shadow`}
                >
                  {tech.icon}
                </div>
                <span className="text-xs font-semibold text-text-secondary group-hover:text-text-primary transition-colors">
                  {tech.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-text-muted text-sm">
            Hardware personalizado &bull; Sistemas Embarcados &bull; Edge
            Computing &bull; Inteligência Artificial
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
