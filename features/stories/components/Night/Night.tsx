"use client";
import React from "react";
import ReactMarkdown from "react-markdown";
import styles from "./Night.module.css";

export type NightProps = { title: string; contentMd: string };

export default function Night({ title, contentMd }: NightProps) {
  return (
    <section className={styles.night}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.body}>
        <ReactMarkdown>{contentMd}</ReactMarkdown>
      </div>
    </section>
  );
}
