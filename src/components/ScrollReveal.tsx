"use client";

import { useRef, useEffect, useState, type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale" | "blur" | "flip";
  delay?: number;
  duration?: number;
  once?: boolean;
  threshold?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  duration = 700,
  once = true,
  threshold = 0.15,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin: "0px 0px -50px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, threshold]);

  const baseStyle: React.CSSProperties = {
    transitionProperty: "opacity, transform, filter",
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
    transitionDelay: `${delay}ms`,
  };

  const hiddenStyles: Record<string, React.CSSProperties> = {
    "fade-up": { opacity: 0, transform: "translateY(40px)" },
    "fade-down": { opacity: 0, transform: "translateY(-40px)" },
    "fade-left": { opacity: 0, transform: "translateX(-60px)" },
    "fade-right": { opacity: 0, transform: "translateX(60px)" },
    scale: { opacity: 0, transform: "scale(0.85)" },
    blur: { opacity: 0, filter: "blur(12px)", transform: "translateY(20px)" },
    flip: { opacity: 0, transform: "perspective(800px) rotateX(15deg) translateY(30px)" },
  };

  const visibleStyle: React.CSSProperties = {
    opacity: 1,
    transform: "none",
    filter: "none",
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...baseStyle,
        ...(isVisible ? visibleStyle : hiddenStyles[animation]),
      }}
    >
      {children}
    </div>
  );
}

/* Stagger wrapper - adds incremental delay to children */
export function StaggerChildren({
  children,
  className = "",
  baseDelay = 0,
  stagger = 100,
  animation = "fade-up" as ScrollRevealProps["animation"],
}: {
  children: ReactNode[];
  className?: string;
  baseDelay?: number;
  stagger?: number;
  animation?: ScrollRevealProps["animation"];
}) {
  return (
    <div className={className}>
      {children.map((child, i) => (
        <ScrollReveal key={i} animation={animation} delay={baseDelay + i * stagger}>
          {child}
        </ScrollReveal>
      ))}
    </div>
  );
}
