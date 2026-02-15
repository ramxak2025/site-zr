"use client";

import { useEffect, useRef } from "react";

/* ── Types ────────────────────────────────────────── */
interface SmokePuff {
  x: number; y: number;
  vx: number; vy: number;
  radius: number;
  maxRadius: number;
  life: number;
  maxLife: number;
  color: [number, number, number];
  wobblePhase: number;
  wobbleAmp: number;
  wobbleSpeed: number;
}

interface SteamWisp {
  x: number; y: number;
  vx: number; vy: number;
  size: number;
  life: number;
  maxLife: number;
  alpha: number;
}

interface VaporOrb {
  cx: number; cy: number;
  r: number;
  color: [number, number, number];
  phaseX: number; phaseY: number;
  speedX: number; speedY: number;
  ampX: number; ampY: number;
  baseAlpha: number;
}

/* ── Preset vapor orbs (background haze) ───────── */
const ORB_PRESETS: Omit<VaporOrb, "cx" | "cy">[] = [
  { r: 0.35, color: [225, 29, 36],  phaseX: 0,   phaseY: 0.7, speedX: 0.0003,  speedY: 0.00025, ampX: 0.12, ampY: 0.08, baseAlpha: 0.06 },
  { r: 0.28, color: [249, 115, 22], phaseX: 1.2, phaseY: 0,   speedX: 0.00035, speedY: 0.0003,  ampX: 0.10, ampY: 0.12, baseAlpha: 0.04 },
  { r: 0.22, color: [200, 200, 220],phaseX: 2.4, phaseY: 1.5, speedX: 0.00028, speedY: 0.00032, ampX: 0.15, ampY: 0.08, baseAlpha: 0.035 },
  { r: 0.18, color: [180, 185, 200],phaseX: 0.5, phaseY: 2.0, speedX: 0.0004,  speedY: 0.00028, ampX: 0.08, ampY: 0.10, baseAlpha: 0.03 },
];

/* ── Smoke colors ────────────────────────────────── */
const SMOKE_COLORS: [number, number, number][] = [
  [220, 220, 230], // near-white
  [200, 200, 215], // light grey
  [180, 185, 200], // medium grey
  [225, 80, 80],   // subtle red
  [240, 150, 90],  // subtle orange
  [255, 255, 255], // pure white
];

/* ── Props ────────────────────────────────────────── */
interface LiveBgProps {
  className?: string;
  smokeIntensity?: number;   // 0-100, default 70
  accentMix?: number;        // 0-100, default 15
  speed?: number;            // 0-100, default 50
  particleDensity?: number;  // 0-100, default 60
}

/* ── Component ────────────────────────────────────── */
export default function LiveBg({
  className = "",
  smokeIntensity = 70,
  accentMix = 15,
  speed = 50,
  particleDensity = 60,
}: LiveBgProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse     = useRef({ x: -9999, y: -9999 });
  const frame     = useRef(0);
  const puffs     = useRef<SmokePuff[]>([]);
  const wisps     = useRef<SteamWisp[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0, h = 0, rafId = 0;

    const isMobile       = window.innerWidth < 768;
    const densityMul     = particleDensity / 60;       // 1.0 at default
    const speedMul       = speed / 50;                 // 1.0 at default
    const intensityMul   = smokeIntensity / 70;        // 1.0 at default
    const accentChance   = accentMix / 100;            // 0.15 at default

    const MAX_PUFFS      = Math.round((isMobile ? 18 : 40) * densityMul);
    const MAX_WISPS      = Math.round((isMobile ? 15 : 35) * densityMul);
    const PUFF_RATE      = (isMobile ? 0.04 : 0.09) * densityMul;
    const WISP_RATE      = (isMobile ? 0.06 : 0.14) * densityMul;

    /* ── Resize ── */
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width  = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    /* ── Spawn smoke puff ── */
    const spawnPuff = () => {
      if (puffs.current.length >= MAX_PUFFS) return;
      const isAccent = Math.random() < accentChance;
      const ci = isAccent ? 3 + Math.floor(Math.random() * 2) : Math.floor(Math.random() * 3);
      const maxLife = 250 + Math.random() * 350;

      puffs.current.push({
        x: Math.random() * w,
        y: h + 10 + Math.random() * 30,
        vx: (Math.random() - 0.5) * 0.25,
        vy: -(0.25 + Math.random() * 0.6) * speedMul,
        radius: 3 + Math.random() * 5,
        maxRadius: 40 + Math.random() * 80,
        life: 0,
        maxLife,
        color: SMOKE_COLORS[ci],
        wobblePhase: Math.random() * Math.PI * 2,
        wobbleAmp: 0.3 + Math.random() * 0.5,
        wobbleSpeed: 0.008 + Math.random() * 0.015,
      });
    };

    /* ── Spawn steam wisp ── */
    const spawnWisp = () => {
      if (wisps.current.length >= MAX_WISPS) return;
      wisps.current.push({
        x: Math.random() * w,
        y: h + 5,
        vx: (Math.random() - 0.5) * 0.5,
        vy: -(0.6 + Math.random() * 1.2) * speedMul,
        size: 1 + Math.random() * 2,
        life: 0,
        maxLife: 80 + Math.random() * 120,
        alpha: 0.15 + Math.random() * 0.2,
      });
    };

    /* ── Mouse tracking ── */
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

      /* ── Layer 1 : Background vapor orbs ── */
      ORB_PRESETS.forEach((o) => {
        const cx = (0.5 + Math.sin(t * o.speedX + o.phaseX) * o.ampX) * w;
        const cy = (0.5 + Math.cos(t * o.speedY + o.phaseY) * o.ampY) * h;
        const r  = o.r * Math.min(w, h);
        const g  = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
        g.addColorStop(0,   `rgba(${o.color.join(",")}, ${o.baseAlpha})`);
        g.addColorStop(0.5, `rgba(${o.color.join(",")}, ${o.baseAlpha * 0.3})`);
        g.addColorStop(1,   `rgba(${o.color.join(",")}, 0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fill();
      });

      /* ── Layer 2 : Bottom haze gradient ── */
      const haze = ctx.createLinearGradient(0, h, 0, h * 0.55);
      haze.addColorStop(0, "rgba(200, 200, 215, 0.035)");
      haze.addColorStop(0.5, "rgba(180, 185, 200, 0.015)");
      haze.addColorStop(1, "rgba(180, 185, 200, 0)");
      ctx.fillStyle = haze;
      ctx.fillRect(0, h * 0.4, w, h * 0.6);

      /* ── Layer 3 : Smoke puffs ── */
      if (Math.random() < PUFF_RATE) spawnPuff();

      puffs.current = puffs.current.filter((p) => {
        p.life++;
        if (p.life > p.maxLife) return false;

        const progress = p.life / p.maxLife;

        // Smooth fade curve: quick fade in, sustain, slow fade out
        let alpha: number;
        const baseAlpha = 0.1 * intensityMul;
        if (progress < 0.08) {
          alpha = (progress / 0.08) * baseAlpha;
        } else if (progress > 0.5) {
          alpha = ((1 - progress) / 0.5) * baseAlpha;
        } else {
          alpha = baseAlpha;
        }

        // Expand radius smoothly
        const targetR = p.maxRadius * Math.min(progress * 2, 1);
        p.radius += (targetR - p.radius) * 0.02;

        // Wobble drift
        p.wobblePhase += p.wobbleSpeed;
        p.x += p.vx + Math.sin(p.wobblePhase) * p.wobbleAmp;
        p.y += p.vy;

        // Decelerate as smoke rises
        p.vy *= 0.9985;
        p.vx *= 0.998;

        // Mouse dispersal
        if (mouseIn) {
          const dx = p.x - mx;
          const dy = p.y - my;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 160 && d > 0) {
            const f = ((160 - d) / 160) * 1.2;
            p.x += (dx / d) * f;
            p.y += (dy / d) * f;
          }
        }

        // Draw smoke puff with soft radial gradient
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
        g.addColorStop(0, `rgba(${p.color.join(",")}, ${alpha})`);
        g.addColorStop(0.4, `rgba(${p.color.join(",")}, ${alpha * 0.6})`);
        g.addColorStop(0.7, `rgba(${p.color.join(",")}, ${alpha * 0.2})`);
        g.addColorStop(1, `rgba(${p.color.join(",")}, 0)`);

        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        return true;
      });

      /* ── Layer 4 : Steam wisps (small fast particles) ── */
      if (Math.random() < WISP_RATE) spawnWisp();

      wisps.current = wisps.current.filter((w2) => {
        w2.life++;
        if (w2.life > w2.maxLife) return false;

        const progress = w2.life / w2.maxLife;
        const fadeAlpha = progress < 0.15
          ? (progress / 0.15) * w2.alpha
          : w2.alpha * (1 - (progress - 0.15) / 0.85);

        // Drift with turbulence
        w2.x += w2.vx + Math.sin(t * 0.02 + w2.y * 0.01) * 0.3;
        w2.y += w2.vy;
        w2.vy *= 0.997;

        // Mouse dispersal
        if (mouseIn) {
          const dx = w2.x - mx;
          const dy = w2.y - my;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 120 && d > 0) {
            const f = ((120 - d) / 120) * 0.8;
            w2.x += (dx / d) * f;
            w2.y += (dy / d) * f;
          }
        }

        // Draw wisp: glow + core
        const gr = ctx.createRadialGradient(w2.x, w2.y, 0, w2.x, w2.y, w2.size * 5);
        gr.addColorStop(0, `rgba(220, 220, 235, ${fadeAlpha * 0.3})`);
        gr.addColorStop(1, `rgba(220, 220, 235, 0)`);
        ctx.fillStyle = gr;
        ctx.beginPath();
        ctx.arc(w2.x, w2.y, w2.size * 5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(240, 240, 250, ${fadeAlpha})`;
        ctx.beginPath();
        ctx.arc(w2.x, w2.y, w2.size, 0, Math.PI * 2);
        ctx.fill();

        return true;
      });

      /* ── Layer 5 : Mouse gas glow ── */
      if (mouseIn) {
        const mg = ctx.createRadialGradient(mx, my, 0, mx, my, 200);
        mg.addColorStop(0,   "rgba(225, 29, 36, 0.045)");
        mg.addColorStop(0.3, "rgba(200, 200, 215, 0.025)");
        mg.addColorStop(1,   "rgba(0, 0, 0, 0)");
        ctx.fillStyle = mg;
        ctx.beginPath();
        ctx.arc(mx, my, 200, 0, Math.PI * 2);
        ctx.fill();
      }

      rafId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("touchmove", onTouchMove);
    };
  }, [smokeIntensity, accentMix, speed, particleDensity]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
    />
  );
}
