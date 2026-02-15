"use client";

import { useRef, useEffect, useState } from "react";

export default function FuelGauge() {
  const ref = useRef<SVGSVGElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate to 50% savings
          setTimeout(() => setProgress(50), 300);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const radius = 80;
  const circumference = Math.PI * radius; // half circle
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative w-full max-w-[280px] mx-auto">
      <svg
        ref={ref}
        viewBox="0 0 200 130"
        className="w-full drop-shadow-lg"
      >
        {/* Background arc */}
        <path
          d="M 20 110 A 80 80 0 0 1 180 110"
          fill="none"
          stroke="#e5e5ea"
          strokeWidth="12"
          strokeLinecap="round"
        />

        {/* Animated fill arc */}
        <path
          d="M 20 110 A 80 80 0 0 1 180 110"
          fill="none"
          stroke="url(#gaugeGrad)"
          strokeWidth="12"
          strokeLinecap="round"
          strokeDasharray={`${circumference}`}
          strokeDashoffset={offset}
          style={{
            transition: "stroke-dashoffset 2s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        />

        {/* Gradient def */}
        <defs>
          <linearGradient id="gaugeGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#e11d24" />
            <stop offset="100%" stopColor="#ff3b3b" />
          </linearGradient>
        </defs>

        {/* Tick marks */}
        {[0, 25, 50, 75, 100].map((tick) => {
          const angle = Math.PI - (tick / 100) * Math.PI;
          const x1 = 100 + 68 * Math.cos(angle);
          const y1 = 110 - 68 * Math.sin(angle);
          const x2 = 100 + 74 * Math.cos(angle);
          const y2 = 110 - 74 * Math.sin(angle);
          return (
            <line key={tick} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#d1d5db" strokeWidth="1.5" />
          );
        })}

        {/* Needle */}
        <g
          style={{
            transform: `rotate(${-90 + (progress / 100) * 180}deg)`,
            transformOrigin: "100px 110px",
            transition: "transform 2s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          <line x1="100" y1="110" x2="100" y2="40" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" />
        </g>

        {/* Center dot */}
        <circle cx="100" cy="110" r="6" fill="#1a1a1a" />
        <circle cx="100" cy="110" r="3" fill="#e11d24" />

        {/* Labels */}
        <text x="22" y="125" fontSize="9" fill="#9ca3af" fontWeight="600">0%</text>
        <text x="165" y="125" fontSize="9" fill="#9ca3af" fontWeight="600">100%</text>
      </svg>

      {/* Center value */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center">
        <div className="text-4xl font-black text-text text-display leading-none"
          style={{ transition: "all 2s" }}
        >
          {progress}%
        </div>
        <div className="text-text-muted text-xs tracking-wider uppercase mt-1">экономии</div>
      </div>
    </div>
  );
}
