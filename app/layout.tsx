export const metadata = { title: "Math Stories", description: "Orlan & Taro’s cave nights" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "system-ui, Segoe UI, Arial, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
