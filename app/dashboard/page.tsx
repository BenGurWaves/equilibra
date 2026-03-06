"use client";

import { useState, useEffect, useCallback } from "react";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import DailyPracticeCard from "@/components/DailyPracticeCard";
import CommunityFeed from "@/components/CommunityFeed";
import { practices } from "@/lib/practices";

type Tab = "home" | "practices" | "community" | "progress";

export default function Dashboard() {
  const { user, isLoaded } = useUser();
  const [activeTab, setActiveTab] = useState<Tab>("home");
  const [completedDays, setCompletedDays] = useState<Set<number>>(new Set());
  const [loading, setLoading] = useState(true);

  const fetchProgress = useCallback(async () => {
    try {
      const res = await fetch("/api/progress");
      if (res.ok) {
        const data = await res.json();
        const days = new Set<number>(
          data
            .filter((p: { completed: boolean }) => p.completed)
            .map((p: { day: number }) => p.day)
        );
        setCompletedDays(days);
      }
    } catch {
      // Supabase tables may not exist yet — use local state
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (isLoaded && user) {
      fetchProgress();
    } else if (isLoaded) {
      setLoading(false);
    }
  }, [isLoaded, user, fetchProgress]);

  const currentDay = completedDays.size + 1;
  const streakCount = completedDays.size;
  const resilienceScore = Math.round((completedDays.size / 7) * 100);

  const handleComplete = async (day: number, reflection: string) => {
    setCompletedDays((prev) => new Set(prev).add(day));

    try {
      await fetch("/api/progress", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ day, reflection }),
      });
    } catch {
      // Save locally even if API fails
    }
  };

  const tabs: { key: Tab; label: string; icon: string }[] = [
    { key: "home", label: "Home", icon: "/icon-wave.svg" },
    { key: "practices", label: "Practices", icon: "/icon-brain.svg" },
    { key: "community", label: "Community", icon: "/icon-connection.svg" },
    { key: "progress", label: "Progress", icon: "/icon-streak.svg" },
  ];

  if (!isLoaded || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-white/20 text-sm font-body animate-pulse">
          Loading your Mental Lab...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/5 p-6 hidden md:flex flex-col">
        <Link href="/" className="mb-12">
          <Image src="/logo.svg" alt="Equilibra" width={140} height={56} />
        </Link>

        <nav className="space-y-1 flex-1">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`w-full text-left px-4 py-3 text-sm font-body tracking-wide transition-colors flex items-center gap-3 ${
                activeTab === tab.key
                  ? "text-white bg-white/[0.05]"
                  : "text-white/30 hover:text-white/60"
              }`}
            >
              <Image
                src={tab.icon}
                alt=""
                width={16}
                height={16}
                className={activeTab === tab.key ? "opacity-60" : "opacity-20"}
              />
              {tab.label}
            </button>
          ))}
        </nav>

        <div className="border-t border-white/5 pt-6 mt-6">
          <p className="text-white/20 text-xs font-body">Free Tier</p>
          {user && (
            <p className="text-white/10 text-xs font-body mt-1 truncate">
              {user.primaryEmailAddress?.emailAddress}
            </p>
          )}
        </div>
      </aside>

      {/* Mobile nav */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 border-t border-white/5 bg-black z-50 flex">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex-1 py-4 text-xs font-body tracking-wide transition-colors flex flex-col items-center gap-1 ${
              activeTab === tab.key ? "text-white" : "text-white/30"
            }`}
          >
            <Image
              src={tab.icon}
              alt=""
              width={14}
              height={14}
              className={activeTab === tab.key ? "opacity-60" : "opacity-20"}
            />
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
              {user?.firstName ? `Welcome, ${user.firstName}` : "Welcome back"}
            </h1>
            <p className="text-white/40 font-body text-sm mb-12">
              Day {currentDay > 7 ? 7 : currentDay} of your 7-Day Resilience
              Reset
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 mb-12">
              <div className="border border-white/10 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Image src="/icon-streak.svg" alt="" width={14} height={14} className="opacity-30" />
                  <p className="text-white/20 text-xs font-body uppercase tracking-widest">
                    Streak
                  </p>
                </div>
                <p className="font-heading text-3xl font-bold">
                  {streakCount}
                </p>
              </div>
              <div className="border border-white/10 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Image src="/icon-shield.svg" alt="" width={14} height={14} className="opacity-30" />
                  <p className="text-white/20 text-xs font-body uppercase tracking-widest">
                    Resilience
                  </p>
                </div>
                <p className="font-heading text-3xl font-bold">
                  {resilienceScore}%
                </p>
              </div>
              <div className="border border-white/10 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Image src="/icon-compass.svg" alt="" width={14} height={14} className="opacity-30" />
                  <p className="text-white/20 text-xs font-body uppercase tracking-widest">
                    Days Left
                  </p>
                </div>
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
                <Image
                  src="/icon-shield.svg"
                  alt=""
                  width={32}
                  height={32}
                  className="opacity-30 mx-auto mb-4"
                />
                <p className="font-heading text-xl font-bold mb-2">
                  7-Day Reset Complete
                </p>
                <p className="text-white/40 text-sm font-body">
                  You built the foundation. Full access coming soon.
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
