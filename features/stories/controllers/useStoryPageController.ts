"use client";
import { useMemo } from "react";
import { NIGHTS_PER_PAGE } from "@/config/env";
import type { Story } from "@/domain/stories";

export function useStoryPageController(story: Story, pageParam: number | undefined) {
  const totalPages = Math.max(1, Math.ceil(story.nights.length / NIGHTS_PER_PAGE));
  const current = clamp(pageParam ?? 1, 1, totalPages);

  const nightsForPage = useMemo(() => {
    const start = (current - 1) * NIGHTS_PER_PAGE;
    return story.nights.slice(start, start + NIGHTS_PER_PAGE);
  }, [story.nights, current]);

  return { current, totalPages, nightsForPage };
}

function clamp(n: number, a: number, b: number) {
  return Math.max(a, Math.min(b, n));
}
