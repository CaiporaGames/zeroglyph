"use client";
import Link from "next/link";
import styles from "./StoryCard.module.css";
import { useTheme } from "@/ui/theme/ThemeProvider";
export type StoryCardProps = {
  slug: string;
  title: string;
  tagline?: string;
  emoji?: string;
};

export default function StoryCard({ slug, title, tagline, emoji }: StoryCardProps) 
{
  const { theme } = useTheme();
  const cardClass = `${styles.card} ${theme === "dark" ? styles.cardDark : styles.cardLight}`;
  return (
    <Link href={`/stories/${slug}`} className={cardClass}>
      <div className={styles.emoji}>{emoji ?? "📘"}</div>
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        {tagline && <p className={styles.tagline}>{tagline}</p>}
      </div>
    </Link>
  );
}
