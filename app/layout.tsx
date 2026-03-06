import type { Metadata } from "next";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  Show,
  UserButton,
} from "@clerk/nextjs";
import { dark } from "@clerk/themes";
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
        <ClerkProvider
          appearance={{
            baseTheme: dark,
            variables: {
              colorPrimary: "#ffffff",
              colorBackground: "#0a0a0a",
              colorText: "#ffffff",
              colorTextSecondary: "#a0a0a0",
              colorInputBackground: "#1a1a1a",
              colorInputText: "#ffffff",
              borderRadius: "0px",
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "14px",
            },
            elements: {
              card: "bg-[#0a0a0a] border border-white/10 shadow-none",
              headerTitle: "font-heading text-white",
              headerSubtitle: "text-white/40",
              socialButtonsBlockButton:
                "border-white/10 text-white hover:bg-white/5",
              formFieldInput:
                "bg-[#1a1a1a] border-white/10 text-white placeholder:text-white/20",
              formButtonPrimary:
                "bg-white text-black hover:bg-white/90 uppercase tracking-[0.15em] font-heading font-bold",
              footerActionLink: "text-white/60 hover:text-white",
            },
          }}
        >
          {/* Navigation */}
          <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-black/80 backdrop-blur-sm border-b border-white/5">
            <a href="/" className="font-heading text-sm font-bold uppercase tracking-[0.3em] text-white">
              Equilibra
            </a>
            <div className="flex items-center gap-4">
              <Show when="signed-out">
                <SignInButton mode="modal">
                  <button className="text-white/50 text-xs font-body uppercase tracking-widest hover:text-white transition-colors">
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="px-5 py-2 text-xs font-heading font-bold uppercase tracking-[0.15em] text-black bg-white hover:bg-white/90 transition-colors">
                    Start Free
                  </button>
                </SignUpButton>
              </Show>
              <Show when="signed-in">
                <a
                  href="/dashboard"
                  className="text-white/50 text-xs font-body uppercase tracking-widest hover:text-white transition-colors"
                >
                  Dashboard
                </a>
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox: "w-8 h-8 border border-white/20",
                    },
                  }}
                />
              </Show>
            </div>
          </nav>

          <div className="grain-overlay" />
          <div className="pt-14">{children}</div>
        </ClerkProvider>
      </body>
    </html>
  );
}
