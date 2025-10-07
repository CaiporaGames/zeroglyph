"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useDeps } from "@/config/DepsContext";
import StoryPage from "@/features/stories/pages/StoryPage/StoryPage";
import type { Story } from "@/domain/stories";

type Props = {
  slug: string;
};

export default function StoryRouteClient({ slug }: Props) {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page") || "1");
  const { stories } = useDeps();
  const [story, setStory] = useState<Story | null>(null);

  useEffect(() => {
    let isMounted = true;
    stories.getStory(slug).then((data) => {
      if (isMounted) setStory(data);
    });
    return () => {
      isMounted = false;
    };
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