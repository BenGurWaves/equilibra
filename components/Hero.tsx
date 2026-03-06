"use client";

import Image from "next/image";
import Link from "next/link";

const proofCards = [
  { icon: "🧠", text: "Evidence-based practices" },
  { icon: "⚡", text: "5–10 minutes per day" },
  { icon: "🔒", text: "Private & secure" },
];

export default function Hero() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-6">
      {/* Logo */}
      <div className="mb-8">
        <Image
          src="/logo.svg"
          alt="Equilibra"
          width={240}
          height={96}
          priority
          className="invert-0"
        />
      </div>

      {/* Tagline */}
      <p className="font-body text-white/60 text-lg md:text-xl tracking-wide mb-12 text-center max-w-md">
        Build unbreakable calm in a chaotic world
      </p>

      {/* CTA */}
      <Link
        href="/sign-up"
        className="group relative inline-flex items-center justify-center px-10 py-4 text-sm font-heading font-bold uppercase tracking-[0.2em] text-black bg-white rounded-none transition-all duration-300 hover:bg-white/90 hover:tracking-[0.25em]"
      >
        Start Free 7-Day Reset
      </Link>

      {/* Proof cards */}
      <div className="mt-20 flex flex-col sm:flex-row gap-6 sm:gap-12 items-center">
        {proofCards.map((card) => (
          <div
            key={card.text}
            className="flex items-center gap-3 text-white/40 text-sm font-body"
          >
            <span className="text-lg">{card.icon}</span>
            <span>{card.text}</span>
          </div>
        ))}
      </div>

      {/* Social proof */}
      <p className="mt-8 text-white/20 text-xs font-body tracking-widest uppercase">
        Join 247 others building resilience today
      </p>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 animate-bounce">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="text-white/20"
        >
          <path
            d="M12 5v14M5 12l7 7 7-7"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </main>
  );
}
