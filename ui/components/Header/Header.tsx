"use client";
import Link from "next/link";
import { useTheme } from "@/ui/theme/ThemeProvider";
import styles from "./Header.module.css";

export default function Header() {
  const { theme, toggle } = useTheme();

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.row}>
          <Link href="/" className={styles.brand}>
            <span className={styles.logo}>🔭</span>
            <span>Zeroglyph</span>
          </Link>

          <nav className={styles.nav}>
            <Link href="/" className={styles.link}>Home</Link>
            {/* <Link href="/stories/set-theory" className={styles.link}>Set Theory</Link> */}
          </nav>

          <button
            aria-label="Toggle theme"
            className={styles.toggle}
            onClick={toggle}
            title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>
      </div>
    </header>
  );
}
