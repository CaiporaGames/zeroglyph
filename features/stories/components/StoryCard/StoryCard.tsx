"use client";
import Link from "next/link";
import styles from "./StoryCard.module.css";

export type StoryCardProps = {
  slug: string;
  title: string;
  tagline?: string;
  emoji?: string;
};

export default function StoryCard({ slug, title, tagline, emoji }: StoryCardProps) 
{
  return (
    <Link href={`/stories/${slug}`} className={styles.card}>
      <div className={styles.emoji}>{emoji ?? "📘"}</div>
      <div className={styles.info}>
        <h3 className={styles.title}>{title}</h3>
        {tagline && <p className={styles.tagline}>{tagline}</p>}
      </div>
    </Link>
  );
}
