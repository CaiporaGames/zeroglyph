"use client";
import { useStore } from "zustand";
import { rootStore } from "../store";

export function useStoryLastPage(slug: string) {
  return useStore(rootStore, (s) => s.lastPageBySlug[slug] ?? 1);
}

export function useStoryProgressActions() {
  return useStore(rootStore, (s) => ({
    setLastPage: s.setLastPage,
    getLastPage: s.getLastPage,
  }));
}
