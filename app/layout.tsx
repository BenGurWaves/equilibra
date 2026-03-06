import type { Metadata } from "next";
import ClerkWrapper from "@/components/ClerkWrapper";
import AuthNav from "@/components/AuthNav";
import "./globals.css";

export const metadata: Metadata = {
  title: "Equilibra — Build Unbreakable Calm",
  description:
    "Mental fitness that actually works. Build resilience with evidence-based tools in just 7 days.",
  keywords: ["mental fitness", "resilience", "calm", "mindfulness", "burnout"],
  openGraph: {
    title: "Equilibra — Build Unbreakable Calm",
    description: "Mental fitness that actually works. Build resilience in 7 days.",
    type: "website",
  },
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
        <ClerkWrapper>
          {/* Navigation */}
          <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-black/80 backdrop-blur-sm border-b border-white/5">
            <a href="/" className="font-heading text-sm font-bold uppercase tracking-[0.3em] text-white">
              Equilibra
            </a>
            <AuthNav />
          </nav>

          <div className="grain-overlay" />
          <div className="pt-14">{children}</div>
        </ClerkWrapper>
      </body>
    </html>
  );
}
