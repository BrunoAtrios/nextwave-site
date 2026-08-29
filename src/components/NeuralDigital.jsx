import { useEffect, useRef } from "react";

export default function NeuralDigital() {
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

    // Grid hexagonal lógico
    const HEX = 36;
    const hexHeight = HEX * Math.sqrt(3);
    const cols = Math.ceil(W() / (HEX * 1.5)) + 2;
    const rows = Math.ceil(H() / hexHeight) + 2;

    // Nós ativos (variação aleatória)
    const cells = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = c * HEX * 1.5;
        const y = r * hexHeight + (c % 2 ? hexHeight / 2 : 0);
        const dist = Math.hypot(x - W() / 2, y - H() / 2);
        const intensity = Math.max(0, 1 - dist / (Math.min(W(), H()) * 0.55));
        if (intensity > 0.05) {
          cells.push({
            x,
            y,
            phase: Math.random() * Math.PI * 2,
            baseIntensity: intensity,
            active: Math.random() < intensity * 0.4,
          });
        }
      }
    }

    // Circuitos — linhas ortogonais saindo do núcleo
    const circuits = Array.from({ length: 8 }, () => {
      const angle = Math.random() * Math.PI * 2;
      const steps = 4 + Math.floor(Math.random() * 4);
      const points = [{ x: W() / 2, y: H() / 2 }];
      let dir = angle;
      for (let i = 0; i < steps; i++) {
        const last = points[points.length - 1];
        const dist = 40 + Math.random() * 50;
        if (Math.random() < 0.5) {
          points.push({ x: last.x + Math.cos(dir) * dist, y: last.y });
        } else {
          points.push({ x: last.x, y: last.y + Math.sin(dir) * dist });
        }
        dir = Math.random() < 0.5 ? 0 : Math.PI / 2;
      }
      return { points, phase: Math.random() * Math.PI * 2 };
    });

    // Bits de dados viajando
    const bits = Array.from({ length: 18 }, () => ({
      circuitIdx: Math.floor(Math.random() * circuits.length),
      t: Math.random(),
      speed: 0.004 + Math.random() * 0.004,
    }));

    function hexPath(x, y, r) {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const a = (i / 6) * Math.PI * 2 + Math.PI / 6;
        const px = x + r * Math.cos(a);
        const py = y + r * Math.sin(a);
        i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
      }
      ctx.closePath();
    }

    const draw = (t) => {
      if (!running) return;
      ctx.clearRect(0, 0, W(), H());

      // ===== CIRCUITOS =====
      circuits.forEach((c) => {
        ctx.strokeStyle = "rgba(34, 211, 238, 0.18)";
        ctx.lineWidth = 1;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(c.points[0].x, c.points[0].y);
        c.points.forEach((p, i) => i > 0 && ctx.lineTo(p.x, p.y));
        ctx.stroke();

        // Nós do circuito
        c.points.forEach((p, i) => {
          ctx.fillStyle = "rgba(34, 211, 238, 0.4)";
          ctx.beginPath();
          ctx.arc(p.x, p.y, i === 0 ? 3 : 2, 0, Math.PI * 2);
          ctx.fill();
        });
      });

      // ===== BITS VIAJANDO =====
      bits.forEach((b) => {
        b.t += b.speed;
        if (b.t > 1) {
          b.t = 0;
          b.circuitIdx = Math.floor(Math.random() * circuits.length);
        }
        const circuit = circuits[b.circuitIdx];
        const seg = Math.floor(b.t * (circuit.points.length - 1));
        const localT = b.t * (circuit.points.length - 1) - seg;
        const p1 = circuit.points[seg];
        const p2 = circuit.points[seg + 1];
        if (!p1 || !p2) return;
        const x = p1.x + (p2.x - p1.x) * localT;
        const y = p1.y + (p2.y - p1.y) * localT;
        const grad = ctx.createRadialGradient(x, y, 0, x, y, 10);
        grad.addColorStop(0, "#fff");
        grad.addColorStop(0.3, "#22d3ee");
        grad.addColorStop(1, "rgba(34, 211, 238, 0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "#fff";
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fill();
      });

      // ===== GRADE HEXAGONAL =====
      cells.forEach((cell) => {
        const pulse = 0.5 + Math.sin(t * 0.003 + cell.phase) * 0.5;
        const alpha = cell.baseIntensity * (cell.active ? pulse : 0.25);
        const r = HEX * 0.45 * cell.baseIntensity;

        ctx.strokeStyle = `rgba(34, 211, 238, ${alpha * 0.4})`;
        ctx.lineWidth = 0.6;
        hexPath(cell.x, cell.y, r);
        ctx.stroke();

        if (cell.active && pulse > 0.7) {
          ctx.fillStyle = `rgba(167, 139, 250, ${alpha * 0.5})`;
          hexPath(cell.x, cell.y, r * 0.7);
          ctx.fill();
          // Núcleo brilhante
          ctx.fillStyle = `rgba(255, 255, 255, ${pulse * 0.8})`;
          ctx.beginPath();
          ctx.arc(cell.x, cell.y, 2, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // ===== NÚCLEO CENTRAL — CORE DIGITAL =====
      const cx = W() / 2;
      const cy = H() / 2;
      const breath = 1 + Math.sin(t * 0.002) * 0.05;

      for (let i = 4; i >= 0; i--) {
        const r = (40 + i * 12) * breath;
        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
        grad.addColorStop(0, `rgba(34, 211, 238, ${0.3 - i * 0.05})`);
        grad.addColorStop(0.6, `rgba(167, 139, 250, ${0.15 - i * 0.02})`);
        grad.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fill();
      }

      // Anel girando
      const angle = t * 0.0008;
      ctx.strokeStyle = "rgba(34, 211, 238, 0.6)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(cx, cy, 60, angle, angle + 1.5);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(cx, cy, 60, angle + Math.PI, angle + Math.PI + 1.5);
      ctx.stroke();

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
    <div className="neural-core neural-digital" aria-hidden="true">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="scanlines-digital" />
    </div>
  );
}