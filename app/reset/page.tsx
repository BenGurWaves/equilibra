import Link from "next/link";
import { practices } from "@/lib/practices";

export const dynamic = "force-dynamic";
export const runtime = "edge";

export default function ResetPage() {
  return (
    <main className="min-h-screen px-6 py-16 max-w-3xl mx-auto">
      <Link
        href="/"
        className="text-white/30 text-xs font-body uppercase tracking-widest hover:text-white/60 transition-colors"
      >
        ← Back
      </Link>

      <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mt-8 mb-4">
        7-Day Resilience Reset
      </h1>
      <p className="text-white/50 font-body leading-relaxed mb-16 max-w-lg">
        Seven days of evidence-based exercises designed to rewire your stress
        response. Each day builds on the last. Complete them in order. 5–10
        minutes is all it takes.
      </p>

      {/* Day overview cards */}
      <div className="space-y-4 mb-16">
        {practices.map((p) => (
          <div
            key={p.day}
            className="border border-white/10 p-6 hover:border-white/20 transition-colors flex items-start gap-6"
          >
            <span className="font-heading text-3xl font-bold text-white/10">
              {String(p.day).padStart(2, "0")}
            </span>
            <div>
              <h3 className="font-heading text-lg font-bold">{p.title}</h3>
              <p className="text-white/40 text-sm font-body mt-1">
                {p.subtitle}
              </p>
              <p className="text-white/20 text-xs font-body mt-2">
                {p.duration}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center py-16 border-t border-white/5">
        <p className="font-quote text-xl italic text-white/50 mb-8">
          &ldquo;The best time to build resilience is before you need it.&rdquo;
        </p>
        <Link
          href="/sign-up"
          className="inline-flex items-center justify-center px-10 py-4 text-sm font-heading font-bold uppercase tracking-[0.2em] text-black bg-white hover:bg-white/90 transition-all"
        >
          Start the Reset — Free
        </Link>
      </div>
    </main>
  );
}
