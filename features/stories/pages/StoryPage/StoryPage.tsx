"use client";
import Night from "@/features/stories/components/Night/Night";
import StoryPagination from "@/features/stories/components/Pagination/StoryPagination";
import { useStoryPageController } from "@/features/stories/controllers/useStoryPageController";
import type { Story } from "@/domain/stories";
import styles from "./StoryPage.module.css";

export default function StoryPage({ story, page }: { story: Story; page?: number }) {
  const { current, totalPages, nightsForPage } = useStoryPageController(story, page);

  return (
    <main className={styles.shell}>
      <header className={styles.header}>
        <h1 className={styles.h1}>{story.title}</h1>
        {story.tagline && <p className={styles.tagline}>{story.tagline}</p>}
      </header>

      <div className={styles.nights}>
        {nightsForPage.map((n) => (
          <Night key={n.id} title={n.title} contentMd={n.contentMd} />
        ))}
      </div>

      <StoryPagination
        current={current}
        totalPages={totalPages}
        baseHref={`/stories/${story.slug}`}
      />
    </main>
  );
}
