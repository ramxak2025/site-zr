"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";

type ThemeMode = "light" | "dark" | "system";
type ResolvedTheme = "light" | "dark";

interface ThemeCtxValue {
  mode: ThemeMode;
  resolved: ResolvedTheme;
  toggle: () => void;
  setMode: (m: ThemeMode) => void;
}

const ThemeCtx = createContext<ThemeCtxValue>({
  mode: "system",
  resolved: "dark",
  toggle: () => {},
  setMode: () => {},
});

export const useTheme = () => useContext(ThemeCtx);

function resolveTheme(mode: ThemeMode): ResolvedTheme {
  if (mode === "system") {
    if (typeof window === "undefined") return "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  return mode;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = useState<ThemeMode>("system");
  const [resolved, setResolved] = useState<ResolvedTheme>("dark");

  /* Load saved preference */
  useEffect(() => {
    try {
      const saved = localStorage.getItem("zr-theme") as ThemeMode | null;
      if (saved && ["light", "dark", "system"].includes(saved)) {
        setModeState(saved);
      }
    } catch {}
  }, []);

  /* Apply theme class whenever mode changes */
  useEffect(() => {
    const r = resolveTheme(mode);
    setResolved(r);
    document.documentElement.classList.toggle("dark", r === "dark");
    try { localStorage.setItem("zr-theme", mode); } catch {}

    /* Listen for OS changes when in system mode */
    if (mode === "system") {
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      const handler = () => {
        const newR = mq.matches ? "dark" : "light";
        setResolved(newR);
        document.documentElement.classList.toggle("dark", newR === "dark");
      };
      mq.addEventListener("change", handler);
      return () => mq.removeEventListener("change", handler);
    }
  }, [mode]);

  const setMode = useCallback((m: ThemeMode) => setModeState(m), []);

  const toggle = useCallback(() => {
    setModeState((prev) => {
      const current = resolveTheme(prev);
      return current === "dark" ? "light" : "dark";
    });
  }, []);

  return (
    <ThemeCtx.Provider value={{ mode, resolved, toggle, setMode }}>
      {children}
    </ThemeCtx.Provider>
  );
}
