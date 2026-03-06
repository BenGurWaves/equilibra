"use client";

import { useState } from "react";
import type { DailyPractice } from "@/types";

interface Props {
  practice: DailyPractice;
  completed?: boolean;
  locked?: boolean;
  onComplete?: (day: number, reflection: string) => void;
}

export default function DailyPracticeCard({
  practice,
  completed = false,
  locked = false,
  onComplete,
}: Props) {
  const [reflection, setReflection] = useState("");
  const [isComplete, setIsComplete] = useState(completed);

  const handleComplete = () => {
    setIsComplete(true);
    onComplete?.(practice.day, reflection);
  };

  if (locked) {
    return (
      <div className="border border-white/5 p-8 opacity-40">
        <div className="flex items-center justify-between mb-4">
          <span className="text-white/20 text-xs font-body uppercase tracking-widest">
            Day {practice.day}
          </span>
          <span className="text-white/20 text-xs font-body">🔒 Locked</span>
        </div>
        <h3 className="font-heading text-xl font-bold">{practice.title}</h3>
        <p className="text-white/30 text-sm mt-2 font-body">
          Complete the previous day to unlock.
        </p>
      </div>
    );
  }

  return (
    <div
      className={`border p-8 transition-colors duration-300 ${
        isComplete ? "border-white/30 bg-white/[0.02]" : "border-white/10"
      }`}
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-white/20 text-xs font-body uppercase tracking-widest">
          Day {practice.day}
        </span>
        <span className="text-white/40 text-xs font-body">
          {practice.duration}
        </span>
      </div>

      <h3 className="font-heading text-xl font-bold mb-1">{practice.title}</h3>
      <p className="text-white/40 text-sm font-body mb-6">
        {practice.subtitle}
      </p>

      <p className="text-white/60 text-sm font-body leading-relaxed mb-6">
        {practice.description}
      </p>

      {/* Steps */}
      <ol className="space-y-3 mb-8">
        {practice.steps.map((step, i) => (
          <li key={i} className="flex gap-3 text-sm font-body text-white/50">
            <span className="text-white/20 font-heading font-bold">
              {String(i + 1).padStart(2, "0")}
            </span>
            {step}
          </li>
        ))}
      </ol>

      {/* Reflection */}
      {!isComplete && (
        <>
          <label className="block text-white/30 text-xs font-body uppercase tracking-widest mb-3">
            {practice.reflection_prompt}
          </label>
          <textarea
            value={reflection}
            onChange={(e) => setReflection(e.target.value)}
            placeholder="Write your reflection..."
            className="w-full bg-white/[0.03] border border-white/10 p-4 text-sm font-body text-white/80 placeholder:text-white/20 resize-none h-24 focus:outline-none focus:border-white/30 transition-colors"
          />
          <button
            onClick={handleComplete}
            className="mt-4 w-full py-3 text-sm font-heading font-bold uppercase tracking-[0.15em] bg-white text-black hover:bg-white/90 transition-colors"
          >
            Mark Complete
          </button>
        </>
      )}

      {isComplete && (
        <div className="flex items-center gap-2 text-white/40 text-sm font-body">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M13.5 4.5L6 12L2.5 8.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Completed
        </div>
      )}
    </div>
  );
}
