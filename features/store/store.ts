"use client";

import { createStore } from "zustand/vanilla";
import { persist, createJSONStorage } from "zustand/middleware";
import { PERSIST_ENABLED } from "@/config/env";
import type { StoryProgressSlice } from "./slices/storyProgressSlice";
import { createStoryProgressSlice } from "./slices/storyProgressSlice";
import type { StateCreator } from "zustand";

export type RootState = StoryProgressSlice;

// Compose slices here if/when you add more
const initializer: StateCreator<RootState> = (set, get, _api) => ({
  ...createStoryProgressSlice(set, get, _api),
});

export const rootStore = createStore<RootState>()(
  persist(initializer, {
    name: "math-stories",
    storage: createJSONStorage(() => localStorage),
    skipHydration: !PERSIST_ENABLED,
    partialize: (s) => ({ lastPageBySlug: s.lastPageBySlug }),
    version: 1,
  })
);

