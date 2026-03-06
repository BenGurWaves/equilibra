export const dynamic = "force-dynamic";
export const runtime = "edge";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6">
      <h1 className="font-heading text-6xl font-bold tracking-tight mb-4">
        404
      </h1>
      <p className="text-white/40 font-body text-sm mb-8">
        This page doesn&apos;t exist yet.
      </p>
      <a
        href="/"
        className="px-8 py-3 text-xs font-heading font-bold uppercase tracking-[0.15em] text-black bg-white hover:bg-white/90 transition-colors"
      >
        Go Home
      </a>
    </main>
  );
}
