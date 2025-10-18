import type { Story, StoryMeta } from "@/domain/stories";
import { setTheory } from "./set-theory";
import { numberTheory } from "./number-theory";

export const storiesIndex: StoryMeta[] = 
[
  { slug: "set-theory", title: "Set Theory", tagline: "Piles, baskets, and the birth of order.", coverEmoji: "🧺" },
  { slug: "number-theory", title: "Number Theory", tagline: "Marks, matches, and the idea of number.", coverEmoji: "🔢" },
];

export function loadStoryBySlug(slug: string): Story | null 
{
  switch (slug) {
    case "set-theory": return setTheory;
    case "number-theory": return numberTheory;
    default: return null;
  }
}
