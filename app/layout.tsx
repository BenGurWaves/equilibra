import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Equilibra — Build Unbreakable Calm",
  description:
    "Mental fitness that actually works. Build resilience with evidence-based tools in just 7 days.",
  keywords: ["mental fitness", "resilience", "calm", "mindfulness", "burnout"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:ital,wght@0,700;1,700&family=Space+Grotesk:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg text-white antialiased">
        <div className="grain-overlay" />
        {children}
      </body>
    </html>
  );
}
