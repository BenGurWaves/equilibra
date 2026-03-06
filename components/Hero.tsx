"use client";

import Image from "next/image";
import { SignUpButton, SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";

export default function Hero() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-6">
      {/* Logo */}
      <div className="mb-8">
        <Image
          src="/logo.svg"
          alt="Equilibra"
          width={280}
          height={112}
          priority
        />
      </div>

      {/* Tagline */}
      <p className="font-body text-white/60 text-lg md:text-xl tracking-wide mb-12 text-center max-w-md">
        Build unbreakable calm in a chaotic world
      </p>

      {/* CTA — changes based on auth state */}
      <SignedOut>
        <SignUpButton mode="modal">
          <button className="group relative inline-flex items-center justify-center px-10 py-4 text-sm font-heading font-bold uppercase tracking-[0.2em] text-black bg-white rounded-none transition-all duration-300 hover:bg-white/90 hover:tracking-[0.25em]">
            Start Free 7-Day Reset
          </button>
        </SignUpButton>
      </SignedOut>
      <SignedIn>
        <Link
          href="/dashboard"
          className="group relative inline-flex items-center justify-center px-10 py-4 text-sm font-heading font-bold uppercase tracking-[0.2em] text-black bg-white rounded-none transition-all duration-300 hover:bg-white/90 hover:tracking-[0.25em]"
        >
          Go to Mental Lab
        </Link>
      </SignedIn>

      {/* Proof cards */}
      <div className="mt-20 flex flex-col sm:flex-row gap-6 sm:gap-12 items-center">
        <div className="flex items-center gap-3 text-white/40 text-sm font-body">
          <Image src="/icon-brain.svg" alt="" width={20} height={20} className="opacity-40" />
          <span>Evidence-based practices</span>
        </div>
        <div className="flex items-center gap-3 text-white/40 text-sm font-body">
          <Image src="/icon-streak.svg" alt="" width={20} height={20} className="opacity-40" />
          <span>5-10 minutes per day</span>
        </div>
        <div className="flex items-center gap-3 text-white/40 text-sm font-body">
          <Image src="/icon-shield.svg" alt="" width={20} height={20} className="opacity-40" />
          <span>Private &amp; secure</span>
        </div>
      </div>

      {/* Social proof */}
      <p className="mt-8 text-white/20 text-xs font-body tracking-widest uppercase">
        Join others building resilience today
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
