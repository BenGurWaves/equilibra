import Link from "next/link";

// Placeholder for Clerk SignUp component
// Replace with: import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <h1 className="font-heading text-2xl font-bold tracking-tight text-center mb-2">
          Start your reset
        </h1>
        <p className="text-white/40 text-sm font-body text-center mb-8">
          Free access to the 7-Day Resilience Reset.
        </p>

        {/* Replace this div with <SignUp /> from Clerk */}
        <div className="border border-white/10 p-8 text-center">
          <p className="text-white/30 text-sm font-body mb-4">
            Clerk auth will appear here once configured.
          </p>
          <p className="text-white/20 text-xs font-body">
            Add your CLERK_PUBLISHABLE_KEY to .env.local
          </p>
        </div>

        <p className="text-center mt-6 text-white/30 text-sm font-body">
          Already have an account?{" "}
          <Link
            href="/sign-in"
            className="text-white/60 hover:text-white transition-colors"
          >
            Sign in
          </Link>
        </p>
      </div>
    </main>
  );
}
