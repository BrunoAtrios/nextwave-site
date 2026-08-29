import { useEffect, useRef } from "react";
import { Brain } from "lucide-react";

export default function NeuralBiological() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    let raf;
    let running = true;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const size = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };
    size();
    window.addEventListener("resize", size);

    const W = () => canvas.clientWidth;
    const H = () => canvas.clientHeight;
    const cx = () => W() / 2;
    const cy = () => H() / 2;

    // === SINAPSES — pulsos viajando ===
    const pulses = Array.from({ length: 24 }, () => ({
      t: Math.random(),
      speed: 0.002 + Math.random() * 0.003,
      fromIdx: 0,
      toIdx: 0,
      color: ["#a78bfa", "#22d3ee", "#ec4899", "#f472b6"][Math.floor(Math.random() * 4)],
    }));

    // === DENDRITOS — galhos orgânicos saindo do núcleo ===
    const dendrites = Array.from({ length: 14 }, (_, i) => {
      const angle = (i / 14) * Math.PI * 2 + Math.random() * 0.2;
      const length = 60 + Math.random() * 80;
      const branches = [];
      let x = cx();
      let y = cy();
      let dir = angle;
      const points = [{ x, y }];
      const steps = 8;
      for (let s = 0; s < steps; s++) {
        dir += (Math.random() - 0.5) * 0.6;
        const seg = length / steps;
        x += Math.cos(dir) * seg;
        y += Math.sin(dir) * seg;
        points.push({ x, y });
        if (s > 3 && Math.random() < 0.3) {
          branches.push({ start: s, angle: dir + (Math.random() - 0.5) * 1.2, len: seg * (0.5 + Math.random() * 0.5) });
        }
      }
      return { points, branches, hue: 250 + Math.random() * 60 };
    });

    // === NEURÔNIOS TERMINAIS ===
    const terminals = dendrites.flatMap((d) => {
      const last = d.points[d.points.length - 1];
      return [{ x: last.x, y: last.y, hue: d.hue, phase: Math.random() * Math.PI * 2 }];
    });

    function drawSynapse(p1, p2, progress, color) {
      const x = p1.x + (p2.x - p1.x) * progress;
      const y = p1.y + (p2.y - p1.y) * progress;
      const size = 4 + Math.sin(progress * Math.PI) * 3;
      const grad = ctx.createRadialGradient(x, y, 0, x, y, size * 4);
      grad.addColorStop(0, color);
      grad.addColorStop(0.4, color.replace(")", ", 0.5)").replace("rgb", "rgba"));
      grad.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(x, y, size * 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#fff";
      ctx.beginPath();
      ctx.arc(x, y, size * 0.6, 0, Math.PI * 2);
      ctx.fill();
    }

    const draw = (t) => {
      if (!running) return;
      ctx.clearRect(0, 0, W(), H());

      // ===== DENDRITOS =====
      ctx.lineCap = "round";
      dendrites.forEach((d) => {
        ctx.strokeStyle = `hsla(${d.hue}, 70%, 70%, 0.4)`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(d.points[0].x, d.points[0].y);
        d.points.forEach((p, i) => {
          if (i > 0) ctx.lineTo(p.x, p.y);
        });
        ctx.stroke();

        // Branches
        d.branches.forEach((b) => {
          const start = d.points[b.start];
          const end = {
            x: start.x + Math.cos(b.angle) * b.len,
            y: start.y + Math.sin(b.angle) * b.len,
          };
          ctx.strokeStyle = `hsla(${d.hue}, 70%, 70%, 0.3)`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(start.x, start.y);
          ctx.lineTo(end.x, end.y);
          ctx.stroke();
        });
      });

      // ===== NEURÔNIOS TERMINAIS (pontas brilhantes) =====
      terminals.forEach((term) => {
        const pulse = 0.7 + Math.sin(t * 0.004 + term.phase) * 0.3;
        const grad = ctx.createRadialGradient(term.x, term.y, 0, term.x, term.y, 8);
        grad.addColorStop(0, `hsla(${term.hue}, 90%, 80%, ${pulse})`);
        grad.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(term.x, term.y, 8, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "#fff";
        ctx.beginPath();
        ctx.arc(term.x, term.y, 2, 0, Math.PI * 2);
        ctx.fill();
      });

      // ===== PULSOS VIAJANDO =====
      pulses.forEach((p) => {
        p.t += p.speed;
        if (p.t > 1) {
          p.t = 0;
          p.fromIdx = p.toIdx;
          p.toIdx = Math.floor(Math.random() * terminals.length);
          p.color = ["#a78bfa", "#22d3ee", "#ec4899", "#f472b6"][Math.floor(Math.random() * 4)];
        }
        const from = terminals[p.fromIdx];
        const to = terminals[p.toIdx];
        if (from && to) drawSynapse(from, to, p.t, p.color);
      });

      // ===== NÚCLEO CENTRAL — CÉREBRO PULSANTE =====
      const breath = 1 + Math.sin(t * 0.002) * 0.06;
      const radius = 32 * breath;

      // Camadas de glow
      for (let i = 5; i >= 0; i--) {
        const r = radius + i * 12;
        const alpha = 0.15 - i * 0.02;
        const grad = ctx.createRadialGradient(cx(), cy(), 0, cx(), cy(), r);
        grad.addColorStop(0, `rgba(167, 139, 250, ${alpha})`);
        grad.addColorStop(0.5, `rgba(236, 72, 153, ${alpha * 0.7})`);
        grad.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(cx(), cy(), r, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);
    const onVis = () => {
      running = !document.hidden;
      if (running) raf = requestAnimationFrame(draw);
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", size);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return (
    <div className="neural-core neural-biological" aria-hidden="true">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="scanlines-bio" />
    </div>
  );
}