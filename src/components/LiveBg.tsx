"use client";

import { useEffect, useRef } from "react";

/* ── Colour palette ───────────────────────────────── */
const COLORS: [number, number, number][] = [
  [225, 29, 36],   // primary red
  [249, 115, 22],  // accent orange
  [239, 68, 68],   // lighter red
  [255, 255, 255], // white (sparse)
];

/* ── Types ────────────────────────────────────────── */
interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  size: number; alpha: number;
  color: string;
}

interface Meteor {
  x: number; y: number;
  vx: number; vy: number;
  len: number; alpha: number;
  life: number;
}

interface Orb {
  ox: number; oy: number; r: number;
  c: number[]; sx: number; sy: number;
  rx: number; ry: number; px: number; py: number;
}

/* ── Aurora orb presets ───────────────────────────── */
const ORBS: Orb[] = [
  { ox: 0.25, oy: 0.3,  r: 0.38, c: [225, 29, 36],  sx: 0.0003,  sy: 0.00025, rx: 0.15, ry: 0.10, px: 0,   py: 0.7 },
  { ox: 0.75, oy: 0.5,  r: 0.30, c: [249, 115, 22], sx: 0.00038, sy: 0.00032, rx: 0.12, ry: 0.15, px: 1.2, py: 0   },
  { ox: 0.50, oy: 0.85, r: 0.24, c: [185, 28, 28],  sx: 0.00028, sy: 0.00035, rx: 0.18, ry: 0.10, px: 2.4, py: 1.5 },
  { ox: 0.15, oy: 0.7,  r: 0.20, c: [220, 38, 38],  sx: 0.00042, sy: 0.00028, rx: 0.10, ry: 0.12, px: 0.5, py: 2.0 },
];

/* ── Component ────────────────────────────────────── */
export default function LiveBg({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse     = useRef({ x: -9999, y: -9999 });
  const frame     = useRef(0);
  const particles = useRef<Particle[]>([]);
  const meteors   = useRef<Meteor[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0, h = 0, rafId = 0;

    const isMobile       = window.innerWidth < 768;
    const PARTICLE_COUNT = isMobile ? 35 : 75;
    const CONN_DIST      = isMobile ? 100 : 140;

    /* ── Resize ── */
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width  = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initParticles();
    };

    /* ── Create particles ── */
    const initParticles = () => {
      particles.current = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        const ci = Math.random() < 0.12 ? 3 : Math.floor(Math.random() * 3);
        const c  = COLORS[ci];
        particles.current.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size:  ci === 3 ? Math.random() * 1.2 + 0.3 : Math.random() * 1.8 + 0.5,
          alpha: Math.random() * 0.5 + 0.15,
          color: `${c[0]},${c[1]},${c[2]}`,
        });
      }
    };

    /* ── Spawn meteor ── */
    const spawnMeteor = () => {
      const angle = Math.PI * 0.2 + Math.random() * Math.PI * 0.15;
      const speed = 3 + Math.random() * 5;
      meteors.current.push({
        x: Math.random() * w * 0.7 + w * 0.1,
        y: -20,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        len: 50 + Math.random() * 80,
        alpha: 0.6 + Math.random() * 0.4,
        life: 1,
      });
    };

    /* ── Mouse tracking (on document so canvas stays pointer-events:none) ── */
    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
    };
    const onTouchMove = (e: TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      const t = e.touches[0];
      mouse.current.x = t.clientX - rect.left;
      mouse.current.y = t.clientY - rect.top;
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("touchmove", onTouchMove, { passive: true });

    resize();
    window.addEventListener("resize", resize);

    /* ══════════════ DRAW LOOP ══════════════ */
    const draw = () => {
      frame.current++;
      const t = frame.current;
      ctx.clearRect(0, 0, w, h);

      const mx = mouse.current.x;
      const my = mouse.current.y;
      const mouseIn = mx > 0 && mx < w && my > 0 && my < h;

      /* ── Layer 1 : Aurora orbs ── */
      ORBS.forEach((o) => {
        const cx = (o.ox + Math.sin(t * o.sx + o.px) * o.rx) * w;
        const cy = (o.oy + Math.cos(t * o.sy + o.py) * o.ry) * h;
        const r  = o.r * Math.min(w, h);
        const g  = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
        g.addColorStop(0,   `rgba(${o.c.join(",")}, 0.14)`);
        g.addColorStop(0.4, `rgba(${o.c.join(",")}, 0.04)`);
        g.addColorStop(1,   `rgba(${o.c.join(",")}, 0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fill();
      });

      /* ── Layer 2 : Mouse glow ── */
      if (mouseIn) {
        const mg = ctx.createRadialGradient(mx, my, 0, mx, my, 220);
        mg.addColorStop(0,   "rgba(225, 29, 36, 0.07)");
        mg.addColorStop(0.4, "rgba(249, 115, 22, 0.025)");
        mg.addColorStop(1,   "rgba(0, 0, 0, 0)");
        ctx.fillStyle = mg;
        ctx.beginPath();
        ctx.arc(mx, my, 220, 0, Math.PI * 2);
        ctx.fill();
      }

      /* ── Layer 3 : Particles ── */
      const pts = particles.current;

      // Update positions
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        // Organic sine drift
        p.x += p.vx + Math.sin(t * 0.005 + p.y * 0.008) * 0.08;
        p.y += p.vy + Math.cos(t * 0.004 + p.x * 0.008) * 0.06;

        // Mouse repulsion
        if (mouseIn) {
          const dx = p.x - mx;
          const dy = p.y - my;
          const d  = Math.sqrt(dx * dx + dy * dy);
          if (d < 140 && d > 0) {
            const f = (140 - d) / 140 * 0.7;
            p.vx += (dx / d) * f;
            p.vy += (dy / d) * f;
          }
        }

        // Damping
        p.vx *= 0.985;
        p.vy *= 0.985;

        // Wrap
        if (p.x < -30) p.x = w + 30;
        if (p.x > w + 30) p.x = -30;
        if (p.y < -30) p.y = h + 30;
        if (p.y > h + 30) p.y = -30;
      }

      // Connection lines (optimise with squared distance)
      const cd2 = CONN_DIST * CONN_DIST;
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const d2 = dx * dx + dy * dy;
          if (d2 < cd2) {
            const alpha = (1 - Math.sqrt(d2) / CONN_DIST) * 0.12;
            ctx.strokeStyle = `rgba(225, 29, 36, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.stroke();
          }
        }
      }

      // Mouse connection to nearby particles
      if (mouseIn) {
        for (let i = 0; i < pts.length; i++) {
          const dx = pts[i].x - mx;
          const dy = pts[i].y - my;
          const d  = Math.sqrt(dx * dx + dy * dy);
          if (d < 180) {
            const alpha = (1 - d / 180) * 0.18;
            ctx.strokeStyle = `rgba(249, 115, 22, ${alpha})`;
            ctx.lineWidth = 0.4;
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(mx, my);
            ctx.stroke();
          }
        }
      }

      // Draw particle glows + cores
      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];
        // Outer glow
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 6);
        g.addColorStop(0, `rgba(${p.color}, ${p.alpha * 0.2})`);
        g.addColorStop(1, `rgba(${p.color}, 0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 6, 0, Math.PI * 2);
        ctx.fill();

        // Core
        ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      /* ── Layer 4 : Meteors (shooting stars) ── */
      if (Math.random() < 0.004) spawnMeteor();

      meteors.current = meteors.current.filter((m) => {
        m.x += m.vx;
        m.y += m.vy;
        m.life -= 0.007;
        if (m.life <= 0 || m.x > w + 120 || m.y > h + 120) return false;

        const speed = Math.sqrt(m.vx * m.vx + m.vy * m.vy);
        const tailX = m.x - (m.vx / speed) * m.len;
        const tailY = m.y - (m.vy / speed) * m.len;

        const grad = ctx.createLinearGradient(tailX, tailY, m.x, m.y);
        grad.addColorStop(0,   "rgba(225, 29, 36, 0)");
        grad.addColorStop(0.6, `rgba(249, 115, 22, ${m.alpha * m.life * 0.35})`);
        grad.addColorStop(1,   `rgba(255, 255, 255, ${m.alpha * m.life * 0.85})`);

        ctx.strokeStyle = grad;
        ctx.lineWidth   = 1.5;
        ctx.lineCap     = "round";
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(m.x, m.y);
        ctx.stroke();

        // Head glow
        const hg = ctx.createRadialGradient(m.x, m.y, 0, m.x, m.y, 8);
        hg.addColorStop(0, `rgba(255, 255, 255, ${m.alpha * m.life * 0.7})`);
        hg.addColorStop(1, "rgba(255, 255, 255, 0)");
        ctx.fillStyle = hg;
        ctx.beginPath();
        ctx.arc(m.x, m.y, 8, 0, Math.PI * 2);
        ctx.fill();

        return true;
      });

      rafId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("touchmove", onTouchMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
    />
  );
}
