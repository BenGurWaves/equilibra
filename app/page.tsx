import Hero from "@/components/Hero";

export const dynamic = "force-dynamic";
export const runtime = "edge";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Below-fold section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-24">
        <h2 className="font-heading text-3xl md:text-5xl font-bold tracking-tight text-center mb-6">
          The Mental Lab
        </h2>
        <p className="font-body text-white/50 text-center max-w-lg mb-16 leading-relaxed">
          Seven days of proven exercises that rewire your stress response.
          No fluff. No apps collecting your data. Just black &amp; white tools
          that work.
        </p>

        {/* 7-Day Preview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl w-full">
          {[
            { day: 1, title: "Nervous System Reset" },
            { day: 2, title: "Boundary Script Builder" },
            { day: 3, title: "Thought Reframe Drill" },
            { day: 4, title: "Micro-Win Tracker" },
            { day: 5, title: "Values Anchor Exercise" },
            { day: 6, title: "Connection Prompt" },
            { day: 7, title: "Weekly Review" },
          ].map((item) => (
            <div
              key={item.day}
              className="border border-white/10 p-6 hover:border-white/30 transition-colors duration-300"
            >
              <span className="text-white/20 text-xs font-body uppercase tracking-widest">
                Day {item.day}
              </span>
              <h3 className="font-heading text-lg font-bold mt-2">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Quote */}
        <blockquote className="mt-20 max-w-md text-center">
          <p className="font-quote text-xl italic text-white/70 leading-relaxed">
            &ldquo;This is the first thing that actually stuck.&rdquo;
          </p>
          <cite className="block mt-4 text-white/30 text-sm font-body not-italic">
            — Early Beta User
          </cite>
        </blockquote>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 px-6 text-center">
        <p className="text-white/20 text-xs font-body max-w-lg mx-auto">
          Equilibra is not therapy or a substitute for professional mental health
          treatment. These are skill-building tools. If you&apos;re in crisis,
          please call or text{" "}
          <a href="tel:988" className="underline hover:text-white/40">
            988
          </a>{" "}
          (Suicide &amp; Crisis Lifeline).
        </p>
        <p className="text-white/10 text-xs mt-4 font-body">
          &copy; {new Date().getFullYear()} Equilibra. All rights reserved.
        </p>
      </footer>
    </>
  );
}
