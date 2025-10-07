"use client";

import { useEffect, useState } from "react";
import type { StoryMeta } from "@/domain/stories";
import { DepsProvider, useDeps } from "@/config/DepsContext";
import StoryCard from "@/ui/components/StoryCard/StoryCard";

function HomeInner() {
  const { stories } = useDeps();
  const [list, setList] = useState<StoryMeta[]>([]);

  useEffect(() => {
    stories.listStories().then(setList);
  }, [stories]);

  return (
    <main style={{ maxWidth: 900, margin: "24px auto", padding: 16 }}>
      <h1 style={{ marginTop: 0, fontSize: 34 }}>Zeroglyph: Math Stories</h1>
      <p style={{ opacity: 0.7, marginTop: 4 }}>Foundations told by firelight.</p>

      <div style={{ display: "grid", gap: 12, marginTop: 16 }}>
        {list.map((m) => (
          <StoryCard
            key={m.slug}
            slug={m.slug}
            title={`${m.coverEmoji ?? "📘"} ${m.title}`}
            tagline={m.tagline}
            emoji={m.coverEmoji}
          />
        ))}
      </div>
    </main>
  );
}

export default function Home() {
  return (
    <DepsProvider>
      <HomeInner />
    </DepsProvider>
  );
}
