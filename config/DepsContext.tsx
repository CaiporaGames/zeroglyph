"use client";
import { createContext, useContext, useMemo } from "react";
import type { IStoriesService } from "@/domain/stories";
import { InMemoryStoriesService } from "@/services/stories/InMemoryStoriesService";

export interface Deps {
  stories: IStoriesService;
}

const DepsContext = createContext<Deps | null>(null);

export function DepsProvider({ children }: { children: React.ReactNode }) {
  const value = useMemo<Deps>(() => ({
    stories: new InMemoryStoriesService(),
  }), []);
  return <DepsContext.Provider value={value}>{children}</DepsContext.Provider>;
}

export function useDeps(): Deps {
  const ctx = useContext(DepsContext);
  if (!ctx) throw new Error("DepsProvider missing");
  return ctx;
}
