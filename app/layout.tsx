import "./../ui/theme/global.css";
import Header from "@/ui/components/Header/Header";
import { ThemeProvider } from "@/ui/theme/ThemeProvider";

export const metadata = {
  title: "Zeroglyph: Math Stories",
  description: "Orlan & Taro’s cave nights",
};

const initialThemeScript = `
;(() => {
  try {
    const key = 'theme';
    const stored = localStorage.getItem(key);
    if (stored === 'light' || stored === 'dark') {
      document.documentElement.setAttribute('data-theme', stored);
      return;
    }
  } catch {}
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Set the theme ASAP to avoid a flash */}
        <script dangerouslySetInnerHTML={{ __html: initialThemeScript }} />
        <meta name="theme-color" content="#0b0d10" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#fafafa" media="(prefers-color-scheme: light)" />

      </head>
      <body>
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
