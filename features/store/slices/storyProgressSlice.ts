import type { StateCreator } from "zustand";

export type StoryProgressSlice = {
  lastPageBySlug: Record<string, number>;
  setLastPage: (slug: string, page: number) => void;
  getLastPage: (slug: string) => number;
};

export const createStoryProgressSlice: StateCreator<
  StoryProgressSlice,
  [],
  [],
  StoryProgressSlice
> = (set, get) => ({
  lastPageBySlug: {},
  setLastPage(slug, page) {
    set((s) => ({
      lastPageBySlug: { ...s.lastPageBySlug, [slug]: page },
    }));
  },
  getLastPage(slug) {
    return get().lastPageBySlug[slug] ?? 1;
  },
});
