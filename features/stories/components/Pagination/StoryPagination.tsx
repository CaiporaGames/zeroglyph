"use client";
import styles from "./StoryPagination.module.css";
import { useRouter, useSearchParams } from "next/navigation";

type Props = {
  current: number;
  totalPages: number;
  baseHref: string; // e.g., `/stories/set-theory`
};

export default function StoryPagination({ current, totalPages, baseHref }: Props) {
  const router = useRouter();
  const sp = useSearchParams();

  function goTo(page: number) {
    const params = new URLSearchParams(sp.toString());
    params.set("page", String(page));
    router.push(`${baseHref}?${params.toString()}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <nav className={styles.bar} aria-label="pagination">
      <button
        className={styles.next}
        disabled={current >= totalPages}
        onClick={() => goTo(current + 1)}
      >
        Next →
      </button>

      <ul className={styles.pages}>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
          <li key={n}>
            <button
              className={`${styles.pageBtn} ${n === current ? styles.active : ""}`}
              aria-current={n === current ? "page" : undefined}
              onClick={() => goTo(n)}
            >
              {n}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
