import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
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
        ctx.fillStyle = `rgba(89, 165, 255, ${this.opacity})`;
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
            ctx.strokeStyle = `rgba(89, 165, 255, ${0.09 * (1 - dist / 150)})`;
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
    <section className="relative min-h-screen flex items-center overflow-hidden border-b border-border">
      <ParticleBackground />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,7,10,0.96)_0%,rgba(6,7,10,0.85)_38%,rgba(6,7,10,0.4)_68%,rgba(6,7,10,0.78)_100%)] z-[1]" />
      <div className="absolute inset-0 bg-[url('/nextw-identity-hero.png')] bg-cover bg-center opacity-45 mix-blend-screen" />
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute top-[8%] left-[3%] w-[35rem] h-[35rem] rounded-full bg-accent-primary/15 blur-[130px]" />
      <div className="absolute bottom-[-18%] right-[7%] w-[28rem] h-[28rem] rounded-full bg-[#0d4da6]/25 blur-[110px]" />
      <div
        className="absolute top-[12%] right-[10%] h-[72%] w-px bg-gradient-to-b from-transparent via-accent-glow/50 to-transparent hidden lg:block"
        style={{ animationDelay: "4s" }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 pt-32 pb-24 lg:pt-40 lg:pb-28">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.div
            variants={itemVariants}
            className="mb-9"
          >
            <img
              src="/nextw-logo.png"
              alt="Next Sistemas"
              width="318"
              height="90"
              className="h-16 md:h-[4.6rem] w-auto object-contain drop-shadow-[0_0_26px_rgba(89,165,255,0.22)]"
            />
          </motion.div>

          <motion.div variants={itemVariants} className="mb-7">
            <Badge>Soluções inteligentes. Resultados reais.</Badge>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-[5.75rem] font-black mb-7 leading-[0.94] uppercase tracking-[-0.075em]"
          >
            <span className="text-text-primary">Soluções na medida</span>
            <br />
            <span className="gradient-text">certa para cada</span>
            <br />
            <span className="text-text-primary">negócio.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-text-secondary text-base sm:text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
          >
            Aqui, a inteligência é você. Nossos sistemas potencializam sua operação e colocam tecnologia para trabalhar pelo resultado do seu negócio.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Button href="#produtos" size="lg" icon>
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
        className="absolute z-10 bottom-7 right-5 sm:right-8 flex items-center gap-3 text-[10px] uppercase tracking-[0.18em] text-text-muted"
      >
        Explore
        <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ArrowDown size={15} className="text-accent-glow" />
        </motion.div>
      </motion.div>
    </section>
  );
}
