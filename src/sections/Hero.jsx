import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Badge from "../components/Badge";
import Button from "../components/Button";

function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationId;
    let particles = [];
    let running = true;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.opacity = Math.random() * 0.5 + 0.1;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99, 102, 241, ${this.opacity})`;
        ctx.fill();
      }
    }

    for (let i = 0; i < 60; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      if (!running) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.06 * (1 - dist / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animationId = requestAnimationFrame(animate);
    };
    animate();

    const onVisibility = () => {
      running = !document.hidden;
      if (running) animate();
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      running = false;
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-canvas" aria-hidden="true" />;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />

      {/* Gradient Orbs */}
      <div className="absolute top-[10%] left-[10%] w-[400px] h-[400px] rounded-full bg-gradient-to-br from-indigo-500/15 to-transparent blur-3xl animate-float" />
      <div className="absolute top-[60%] right-[10%] w-[300px] h-[300px] rounded-full bg-gradient-to-br from-cyan-500/10 to-transparent blur-3xl animate-float-delayed" />
      <div
        className="absolute bottom-[10%] left-[40%] w-[250px] h-[250px] rounded-full bg-gradient-to-br from-purple-500/10 to-transparent blur-3xl animate-float"
        style={{ animationDelay: "4s" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="mb-8 flex justify-center"
          >
            <img
              src="./3.webp"
              alt="Next"
              className="h-28 md:h-40 w-auto drop-shadow-2xl"
            />
          </motion.div>

          <motion.div variants={itemVariants} className="mb-8">
            <Badge>NextWave · Ecossistema ServOS</Badge>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-[1.1] tracking-tight"
          >
            <span className="text-text-primary">NextWave</span>
            <br />
            <span className="gradient-text">Engenharia e</span>
            <br />
            <span className="text-text-primary">Automação</span>
            <br />
            <span className="text-text-muted text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              Além do Óbvio
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-text-secondary text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            A <span className="text-text-primary font-semibold">NextWave</span> é o centro de tudo — orquestra o ecossistema <span className="text-accent-cyan font-semibold">ServOS</span>, conectando o <span className="text-text-primary font-medium">ServOS</span>, o <span className="text-text-primary font-medium">ServObras</span>, o <span className="text-text-primary font-medium">Next Gestão</span>, o <span className="text-text-primary font-medium">ServOS Church</span>, o <span className="text-text-primary font-medium">Minhas Cifras</span> e o <span className="text-text-primary font-medium">Smart Card</span> em uma plataforma única.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button href="#produtos" size="lg">
              Conhecer Soluções
            </Button>
            <Button href="#contato" variant="secondary" size="lg">
              Falar com Especialista
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-text-muted/30 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-accent-primary"
          />
        </div>
      </motion.div>
    </section>
  );
}
