"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

type Theme = "light" | "dark";
type ThemeCtx = { theme: Theme; toggle: () => void; setTheme: (t: Theme) => void };

const Ctx = createContext<ThemeCtx | null>(null);
const STORAGE_KEY = "theme";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Initial theme comes from the SSR inline script via <html data-theme="...">
  const initial = (typeof document !== "undefined" &&
    (document.documentElement.getAttribute("data-theme") as Theme)) || "light";

  const [theme, setThemeState] = useState<Theme>(initial);
  const setTheme = (t: Theme) => {
    setThemeState(t);
    document.documentElement.setAttribute("data-theme", t);
    try { localStorage.setItem(STORAGE_KEY, t); } catch {}
  };
  const toggle = () => setTheme(theme === "light" ? "dark" : "light");

  // Hydration guard: ensure DOM reflects state after mount
  useEffect(() => { setTheme(theme); /* sync */ }, []); // eslint-disable-line

  const value = useMemo(() => ({ theme, toggle, setTheme }), [theme]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useTheme() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("ThemeProvider missing");
  return ctx;
}
