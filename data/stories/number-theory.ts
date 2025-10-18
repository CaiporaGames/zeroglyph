import type { Story } from "@/domain/stories";

export const numberTheory: Story =
{
  slug: "number-theory",
  title: "Number Theory",
  tagline: "Tally before symbols. Marks before numbers.",
  coverEmoji: "🧺",
  nights: [
    {
      id: "prologue",
      title: "🏕️ Prologue",
      contentMd: `
We are going to a time *before scrolls and symbols, before numbers and names, there were bone marks, wall marks, and tallys. In a quiet cave lit by fire and thoughts, we meet a merchant and his son began to ask: what are marks? How to make them represent the reality?*

🧔 **🧔 Orlan** – the elder merchant, keeper of trade and tales  
🧒 **🧒 Taro** – his son, bright-eyed, sorting berries by moonlight
      `.trim(),
    },

    {
      id: "night-1",
      title: "🌒 Night 1: The Birth of Tally",
      contentMd: `
🌌 *The cave is quiet. Rain hasn’t come in days. Taro scratches a mark into the bone wall, one for each day without water.*

**🧒Taro** (*counting marks with his finger*): “Father, I’ve made 17 scratches. But it’s hard to see the count.”

**🧔Orlan** (*examining the wall*): “They blur together. You need a way to group them.”

**🧒Taro** (*etching five vertical lines, then a diagonal slash across them*): “This feels easier. One crossed bundle means five.”

**🧔Orlan** (*smiling*): “That’s a system. You’ve made counting visible.”

They begin to define:

- \`|\` = 1
- \`||\` = 2
- \`|||\` = 3
- \`||||\` = 4
- \`/\` = 5 (crossed or slashed)
- \`/ ||\` = 7
- \`/ ||||\` = 9

**🧒Taro**: “Now I can track animals, berries, and dry days. Each mark means something.”

**🧔Orlan**: “And bundles mean more. You’ve invented grouping.”

**🧺  Tally and Grouping**

A mark can track an event. Bundles of marks make counting easier. Grouping is the first step toward numbers.

They call it the **Marking Ritual**. Apprentices chant: “Scratch to track, bundle to count.”

🌌 *The fire dims. The bone wall glows with fresh scratches—some single, some bundled. The cave begins to whisper the rhythm of quantity. Morning will bring new marks—and the first questions of comparison.*
      `.trim(),
    },
     {
      id: "night-2",
      title: "🌒 Night 2: Combining and Comparing",
      contentMd: `

🌌 *The cave is busy. Taro returns from the valley with a bundle of tally sticks—some marked from morning, some from afternoon.*

**🧒Taro** (*laying the sticks on the stone floor*): “Three animals passed in the morning. Six in the afternoon. I marked them separately.”

**🧔Orlan** (*examining the bundles*): “Then let’s see them together.”

They align the marks:

- Morning: \`|||\`
- Afternoon: \`/ |\` → (5 crossed + 1)
- Total: \`/ ||||\` → 9 animals

**🧒Taro** (*nodding*): “I didn’t add. I just combined the records.”

**🧔Orlan**: “That is addition. Not a trick—just a merging of experience.”

Later, they compare berries and animals.

**🧒Taro** (*scratching his head*): “I gathered more berries than animals. But how many more?”

**🧔Orlan** (*gesturing to the wall*): “Then remove the animal marks from the berry marks. What’s left is the difference.”

They lay it out:

- Berries: \`/ / |\` → 11
- Animals: \`/ | | |\` → 9
- What’s left: \`| |\` → 2 more berries

**🧒Taro**: “So subtraction is not just taking away. It’s asking: what’s the gap between these two stories?”

**🧔Orlan**: “Exactly. Subtraction is a question. Addition is a joining.”

🧺 **Combining and Comparing**

To find a total, combine marks. To find a difference, remove one set from another. Addition merges experience. Subtraction reveals the gap.

They call it the **Joining Ritual**. Apprentices chant: “Together to count, apart to compare.”

🌌 *The fire dims. The tally sticks rest in bundles—some joined, some split. The cave wall now holds the rhythm of merging and undoing. Morning will bring new records—and the first whispers of equations.*
      `.trim(),
    },
      {
      id: "night-3",
      title: "🌌 Night 3: The Repeated Gathering",
      contentMd: `

🌒 *The cave is quiet. Taro returns from the forest with a fresh bundle of berries. He kneels beside the ledger stone, carving marks for the third day in a row.*

**Taro** (*etching carefully*): “Four berries on the first day. Four on the second. Four again today.”

**🧔Orlan** (*watching the rows grow*): “You’ve carved the same tally three times.”

**🧒Taro** (*frowning*): “It feels like I’m repeating the same thought. Over and over.”

**🧔Orlan** (*smiling*): “Then maybe the thought has a shape.”

They look at the tallies:

- Morning 1: \`| | | |\`
- Morning 2: \`| | | |\`
- Morning 3: \`| | | |\`

**🧒Taro**: “Instead of writing them all, I could say: three times four berries.”

**🧔Orlan**: “A new kind of mark. Not just how many—but how often.”

They invent a new idea:

- \`⊕\` = combine
- \`×\` = repeat combining

So:

- \`3 × 4\` = \`⊕⊕⊕ of | | | |\` = \`| | | | | | | | | | | |\` → 12 berries

**🧒Taro** (*grinning*): “I didn’t just add, I multiplied. I built the total from a rhythm.”

**🧔Orlan**: “Multiplication is a shortcut. A way to speak many additions at once.”

🧺 Repetition Becomes Multiplication

When the same group repeats, we can combine them faster. Multiplication is repeated addition—a rhythm of sameness.

They call it the **Gathering Chant**. Apprentices chant: “Again and again, the same becomes more.”

🌌 *The fire dims. The ledger stone now holds rows of repeated tallies—and beside them, the first × mark. The cave begins to hum with rhythm and structure. Morning will bring new bundles—and the first whispers of patterns.*
      `.trim(),
    },
  ],    
};
