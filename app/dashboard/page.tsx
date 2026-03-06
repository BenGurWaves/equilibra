"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import DailyPracticeCard from "@/components/DailyPracticeCard";
import CommunityFeed from "@/components/CommunityFeed";
import { practices } from "@/lib/practices";

type Tab = "home" | "practices" | "community" | "progress";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<Tab>("home");
  const [completedDays, setCompletedDays] = useState<Set<number>>(new Set());

  const currentDay = completedDays.size + 1;
  const streakCount = completedDays.size;
  const resilienceScore = Math.round((completedDays.size / 7) * 100);

  const handleComplete = (day: number, _reflection: string) => {
    setCompletedDays((prev) => new Set(prev).add(day));
  };

  const tabs: { key: Tab; label: string }[] = [
    { key: "home", label: "Home" },
    { key: "practices", label: "Practices" },
    { key: "community", label: "Community" },
    { key: "progress", label: "Progress" },
  ];

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/5 p-6 hidden md:flex flex-col">
        <Link href="/" className="mb-12">
          <Image src="/logo.svg" alt="Equilibra" width={140} height={56} />
        </Link>

        <nav className="space-y-2 flex-1">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`w-full text-left px-4 py-3 text-sm font-body tracking-wide transition-colors ${
                activeTab === tab.key
                  ? "text-white bg-white/[0.05]"
                  : "text-white/30 hover:text-white/60"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        <div className="border-t border-white/5 pt-6 mt-6">
          <p className="text-white/20 text-xs font-body">Free Tier</p>
          <Link
            href="#"
            className="text-white/40 text-xs font-body hover:text-white/60 transition-colors mt-1 block"
          >
            Upgrade to Full Access →
          </Link>
        </div>
      </aside>

      {/* Mobile nav */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 border-t border-white/5 bg-black z-50 flex">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex-1 py-4 text-xs font-body tracking-wide transition-colors ${
              activeTab === tab.key ? "text-white" : "text-white/30"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Main content */}
      <main className="flex-1 p-6 md:p-12 pb-24 md:pb-12">
        {/* Home tab */}
        {activeTab === "home" && (
          <div>
            <h1 className="font-heading text-3xl md:text-4xl font-bold tracking-tight mb-2">
              Welcome back
            </h1>
            <p className="text-white/40 font-body text-sm mb-12">
              Day {currentDay > 7 ? 7 : currentDay} of your 7-Day Resilience
              Reset
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 mb-12">
              <div className="border border-white/10 p-6">
                <p className="text-white/20 text-xs font-body uppercase tracking-widest mb-2">
                  Streak
                </p>
                <p className="font-heading text-3xl font-bold">
                  {streakCount}
                </p>
              </div>
              <div className="border border-white/10 p-6">
                <p className="text-white/20 text-xs font-body uppercase tracking-widest mb-2">
                  Resilience
                </p>
                <p className="font-heading text-3xl font-bold">
                  {resilienceScore}%
                </p>
              </div>
              <div className="border border-white/10 p-6">
                <p className="text-white/20 text-xs font-body uppercase tracking-widest mb-2">
                  Days Left
                </p>
                <p className="font-heading text-3xl font-bold">
                  {Math.max(0, 7 - completedDays.size)}
                </p>
              </div>
            </div>

            {/* Today's practice */}
            <h2 className="font-heading text-lg font-bold mb-4">
              Today&apos;s Practice
            </h2>
            {currentDay <= 7 ? (
              <DailyPracticeCard
                practice={practices[currentDay - 1]}
                completed={completedDays.has(currentDay)}
                onComplete={handleComplete}
              />
            ) : (
              <div className="border border-white/10 p-8 text-center">
                <p className="font-heading text-xl font-bold mb-2">
                  7-Day Reset Complete! 🎉
                </p>
                <p className="text-white/40 text-sm font-body">
                  Upgrade to continue your mental fitness journey.
                </p>
              </div>
            )}
          </div>
        )}

        {/* Practices tab */}
        {activeTab === "practices" && (
          <div>
            <h1 className="font-heading text-3xl font-bold tracking-tight mb-2">
              7-Day Resilience Reset
            </h1>
            <p className="text-white/40 font-body text-sm mb-12">
              Complete each day in order to unlock the next.
            </p>
            <div className="space-y-6">
              {practices.map((practice) => (
                <DailyPracticeCard
                  key={practice.day}
                  practice={practice}
                  completed={completedDays.has(practice.day)}
                  locked={
                    practice.day > 1 && !completedDays.has(practice.day - 1)
                  }
                  onComplete={handleComplete}
                />
              ))}
            </div>
          </div>
        )}

        {/* Community tab */}
        {activeTab === "community" && (
          <div>
            <h1 className="font-heading text-3xl font-bold tracking-tight mb-2">
              Community
            </h1>
            <p className="text-white/40 font-body text-sm mb-12">
              See what others are winning at today.
            </p>
            <CommunityFeed />
          </div>
        )}

        {/* Progress tab */}
        {activeTab === "progress" && (
          <div>
            <h1 className="font-heading text-3xl font-bold tracking-tight mb-2">
              Your Progress
            </h1>
            <p className="text-white/40 font-body text-sm mb-12">
              Track your resilience journey.
            </p>

            {/* Progress visualization */}
            <div className="flex gap-2 mb-12">
              {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                <div
                  key={day}
                  className={`flex-1 h-16 border flex items-center justify-center text-sm font-heading font-bold transition-colors ${
                    completedDays.has(day)
                      ? "border-white/30 bg-white/10 text-white"
                      : "border-white/5 text-white/20"
                  }`}
                >
                  {day}
                </div>
              ))}
            </div>

            <div className="border border-white/10 p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-heading font-bold">Resilience Score</h3>
                <span className="font-heading text-2xl font-bold">
                  {resilienceScore}%
                </span>
              </div>
              <div className="w-full h-1 bg-white/5">
                <div
                  className="h-full bg-white/40 transition-all duration-500"
                  style={{ width: `${resilienceScore}%` }}
                />
              </div>
              <p className="text-white/30 text-xs font-body mt-4">
                Complete all 7 days to reach 100% and unlock your 30-day plan.
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
