"use client";

import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export default function AuthNav() {
  return (
    <div className="flex items-center gap-4">
      <SignedOut>
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
      </SignedOut>
      <SignedIn>
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
      </SignedIn>
    </div>
  );
}
