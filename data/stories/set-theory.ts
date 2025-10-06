import type { Story } from "@/domain/stories";

export const setTheory: Story = {
  slug: "set-theory",
  title: "Set Theory",
  tagline: "Berries before numbers. Rituals before rules.",
  coverEmoji: "🧺",
  nights: [
    {
      id: "night-1",
      title: "🌒 Night 1: The Pile That Eats Itself",
      contentMd: `
🧒 **Taro**: “I've been sorting berry piles all day… a pile of red berries, a pile of blue ones… and a *pile of all piles*.”

🧔 **Orlan**: “A pile of all piles? That’s clever.”

> They test the idea with baskets nesting inside baskets.
> Each time they try to include the whole in itself, logic loops forever.

**Law I — The Law of Simplicity (Foundation)**  
*No pile may contain itself. Every pile must be built from simpler piles.*

They carve it in stone and sleep by the fire, relieved that the tail has stopped eating itself.
      `.trim(),
    },
    {
      id: "night-2",
      title: "🌒 Night 2: The Mystery of the Missing Pile",
      contentMd: `
Taro places an **empty basket** between them. It holds nothing—and yet it holds *place*.

**Law II — The Empty Pile Exists**  
There exists a pile with no berries.

> The empty basket is a promise: a slot where berries could be. Space is sacred.
      `.trim(),
    },
    {
      id: "night-3",
      title: "🌒 Night 3: The Tale of the Twin Berries",
      contentMd: `
Three baskets:  
- A: {🍓, 🫐}  
- B: {🫐, 🍓}  
- C: {🍓, 🫐, 🍋}

They swap containers and learn: **a pile is its berries, not its basket**.

**Law III — Extensionality**  
Piles are equal if they contain the same berries.

> Identity is about contents, not labels.
      `.trim(),
    },
  ],
};
