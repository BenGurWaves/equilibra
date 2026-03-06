"use client";

import type { CommunityPost } from "@/types";

const placeholderPosts: CommunityPost[] = [
  {
    id: "1",
    user_id: "u1",
    username: "Anonymous",
    content: "Completed Day 3 — the reframe drill changed how I see my morning anxiety.",
    emoji: "🧠",
    likes: 12,
    created_at: new Date().toISOString(),
  },
  {
    id: "2",
    user_id: "u2",
    username: "Anonymous",
    content: "Finally set a boundary at work today. Small step, huge feeling.",
    emoji: "⚡",
    likes: 8,
    created_at: new Date().toISOString(),
  },
  {
    id: "3",
    user_id: "u3",
    username: "Anonymous",
    content: "Day 1 physiological sighs are no joke. Felt the difference in 60 seconds.",
    emoji: "🌊",
    likes: 15,
    created_at: new Date().toISOString(),
  },
];

export default function CommunityFeed() {
  return (
    <div className="space-y-4">
      <h3 className="font-heading text-lg font-bold tracking-tight mb-6">
        Today&apos;s Wins
      </h3>
      {placeholderPosts.map((post) => (
        <div
          key={post.id}
          className="border border-white/10 p-6 hover:border-white/20 transition-colors duration-300"
        >
          <div className="flex items-start gap-4">
            <span className="text-2xl">{post.emoji}</span>
            <div className="flex-1">
              <p className="text-white/70 text-sm font-body leading-relaxed">
                {post.content}
              </p>
              <div className="flex items-center gap-4 mt-3">
                <span className="text-white/20 text-xs font-body">
                  {post.username}
                </span>
                <button className="text-white/20 text-xs font-body hover:text-white/40 transition-colors">
                  ♡ {post.likes}
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
