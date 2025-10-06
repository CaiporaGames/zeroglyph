"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useDeps } from "@/config/DepsContext";
import StoryPage from "@/features/stories/pages/StoryPage/StoryPage";
import type { Story } from "@/domain/stories";

export default function StoryRouteClient({ slug }: { slug: string }) {
  const sp = useSearchParams();
  const page = Number(sp.get("page") || "1");
  const { stories } = useDeps();
  const [story, setStory] = useState<Story | null>(null);

  useEffect(() => {
    stories.getStory(slug).then(setStory);
  }, [slug, stories]);

  if (!story) {
    return (
      <main style={{ maxWidth: 900, margin: "24px auto", padding: 16 }}>
        Loading…
      </main>
    );
  }

  return (
    <StoryPage
      story={story}
      page={Number.isFinite(page) ? page : 1}
    />
  );
}
