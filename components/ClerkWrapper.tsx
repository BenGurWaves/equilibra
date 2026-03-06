"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const clerkAppearance = {
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
    socialButtonsBlockButton: "border-white/10 text-white hover:bg-white/5",
    formFieldInput:
      "bg-[#1a1a1a] border-white/10 text-white placeholder:text-white/20",
    formButtonPrimary:
      "bg-white text-black hover:bg-white/90 uppercase tracking-[0.15em] font-heading font-bold",
    footerActionLink: "text-white/60 hover:text-white",
  },
} as const;

export default function ClerkWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider appearance={clerkAppearance}>{children}</ClerkProvider>
  );
}
