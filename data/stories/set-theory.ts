import type { Story } from "@/domain/stories";

/**
 * Paste your nights as Markdown strings.
 * Keep each Night small-ish; the pagination slices this array by NIGHTS_PER_PAGE.
 * You can copy straight from your HTML, but Markdown reads nicer and keeps CSS separate.
 */
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

    // --- Keep adding your nights here (Night 7, 8, 9, 10, 11, 12…) ---

    {
      id: "night-7",
      title: "🌒 Night 7: The Gatherer Crate",
      contentMd: `
They pour multiple piles into one *gatherer crate* and later sort them back.

**Law IV — Union**  
From many piles, build one that contains all their berries.

A chant is born: *“Gather, pour, deliver.”*
      `.trim(),
    },
    {
      id: "night-8",
      title: "🌒 Night 8: The Berry Ledger and Power Piles",
      contentMd: `
They list **every sub-pile** of {🍓, 🫐, 🍋} — eight in all.

**Law V — Power Pile**  
For any proper pile, you can list all its sub-piles. (Size: \(2^n\))

They mark the spiral 🌀 for induction.
      `.trim(),
    },
    {
      id: "night-9",
      title: "🌒 Night 9: The Forbidden Berry",
      contentMd: `
Thornroot wants red or yellow, **no blue**. They filter by rule.

**Law VI — Separation**  
From any pile, build a new one by selecting berries that follow a rule.

Filtering never grows a pile; it only trims it.
      `.trim(),
    },
    {
      id: "night-10",
      title: "🌒 Night 10: The Berry Alchemist",
      contentMd: `
Emberroot demands **red berries that were once blue**. They transform 🫐 → 🍓 by rule.

**Law VII — Replacement**  
Apply a rule to each berry; obtain a new pile.

They carve 🔁 for contrapositive.
      `.trim(),
    },
    {
      id: "night-11",
      title: "🌒 Night 11: The Equal Trade",
      contentMd: `
Two crates of 12, different berries, matched **one-to-one**.

**Matching Ritual**  
Equal size by perfect pairing (🧩). Fairness by pairing, not by weight.
      `.trim(),
    },
    {
      id: "night-12",
      title: "🌒 Night 12: The Endless Crate",
      contentMd: `
A crate that never empties; counting fails but matching works.

**Infinite Matching**  
Some piles are uncountable, yet equal in size if they can be paired one-to-one. They carve ∞.
      `.trim(),
    },
  ],
};
