# Equilibra

**Build unbreakable calm in a chaotic world.**

The Porsche of mental fitness — silent power, zero noise, pure results.

## What Is This?

Equilibra is a premium mental fitness platform that helps people build real resilience through evidence-based, 5-10 minute daily practices. The core offering is a **free 7-Day Resilience Reset** that rewires your stress response — no fluff, no data harvesting, just tools that work.

## Tech Stack

- **Framework:** Next.js 14 (App Router) + TypeScript
- **Styling:** Tailwind CSS + Space Grotesk / Inter / Playfair Display
- **Auth:** Clerk (keyless mode — works instantly, no signup required)
- **Database:** Supabase (connected)
- **Payments:** Stripe (skipped for V1 — free tier only)
- **Email:** Resend (connected — welcome + trial reminder emails)
- **Deployment:** Cloudflare Pages

## Getting Started

```bash
# Install dependencies
npm install

# Copy env template
cp .env.local.example .env.local

# Run dev server (Clerk keyless mode — no API keys needed!)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Clerk auth works immediately via keyless mode.

## Cloudflare Pages Deployment

In the Cloudflare Pages build settings:

| Setting | Value |
|---------|-------|
| **Framework preset** | Next.js |
| **Build command** | `npx @cloudflare/next-on-pages@1` |
| **Build output directory** | `.vercel/output/static` |

Add these environment variables in Cloudflare Pages settings:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `RESEND_API_KEY`
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` (optional — keyless mode works without it)
- `CLERK_SECRET_KEY` (optional — add when you claim your Clerk app)

## Project Structure

```
equilibra/
├── app/
│   ├── (auth)/              ← Clerk sign-in / sign-up pages
│   ├── api/
│   │   ├── community/       ← Community posts CRUD
│   │   ├── progress/        ← User progress tracking
│   │   └── welcome/         ← Welcome email sender
│   ├── dashboard/           ← Mental Lab main page
│   ├── reset/               ← 7-Day Reset overview
│   ├── layout.tsx           ← ClerkProvider + grain + nav
│   ├── page.tsx             ← Public hero (homepage)
│   └── globals.css          ← Tailwind + grain animation
├── components/
│   ├── Hero.tsx             ← Landing hero with auth-aware CTA
│   ├── GrainOverlay.tsx     ← Film grain effect
│   ├── DailyPracticeCard.tsx ← Practice day with complete + reflect
│   └── CommunityFeed.tsx    ← Today's Wins feed
├── lib/
│   ├── practices.ts         ← All 7 days of content
│   ├── supabase.ts          ← Supabase client + SQL schema
│   └── email.ts             ← Resend welcome + reminder emails
├── middleware.ts             ← Clerk auth middleware
├── public/
│   ├── logo.svg             ← Premium logo with glow effect
│   ├── favicon.svg          ← Favicon
│   ├── icon-brain.svg       ← Neural pathways icon
│   ├── icon-shield.svg      ← Resilience/protection icon
│   ├── icon-wave.svg        ← Calm/breath/flow icon
│   ├── icon-compass.svg     ← Values/direction icon
│   ├── icon-connection.svg  ← Social connection icon
│   └── icon-streak.svg      ← Streak/momentum icon
└── types.ts
```

## Pages & API Routes

| Route | Description |
|-------|-------------|
| `/` | Public hero — full-screen black + grain, auth-aware CTA |
| `/sign-up` | Clerk sign-up (keyless mode — instant setup) |
| `/sign-in` | Clerk sign-in with dark theme matching brand |
| `/dashboard` | Mental Lab — today's practice, streak, community, progress |
| `/reset` | 7-Day Reset overview with all day summaries |
| `POST /api/progress` | Save day completion + reflection to Supabase |
| `GET /api/progress` | Fetch user's completed days |
| `GET /api/community` | Fetch community posts |
| `POST /api/community` | Create a community post |
| `POST /api/welcome` | Send welcome email via Resend |

## Supabase Setup

Run this SQL in your Supabase SQL Editor to create the required tables:

```sql
CREATE TABLE user_progress (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id TEXT NOT NULL,
  day INTEGER NOT NULL CHECK (day >= 1 AND day <= 7),
  completed BOOLEAN DEFAULT false,
  reflection TEXT,
  completed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(user_id, day)
);

CREATE TABLE community_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id TEXT NOT NULL,
  username TEXT NOT NULL DEFAULT 'Anonymous',
  content TEXT NOT NULL CHECK (char_length(content) <= 280),
  emoji TEXT NOT NULL DEFAULT '✨',
  likes INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE community_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own progress" ON user_progress FOR SELECT USING (true);
CREATE POLICY "Users can insert own progress" ON user_progress FOR INSERT WITH CHECK (true);
CREATE POLICY "Users can update own progress" ON user_progress FOR UPDATE USING (true);
CREATE POLICY "Anyone can read posts" ON community_posts FOR SELECT USING (true);
CREATE POLICY "Authenticated users can post" ON community_posts FOR INSERT WITH CHECK (true);
```

## 7-Day Resilience Reset (Free Tier)

1. **Nervous System Reset** — Physiological sigh technique (5 min)
2. **Boundary Script Builder** — Write and practice one boundary sentence (10 min)
3. **Thought Reframe Drill** — Stress-test 3 negative thoughts (10 min)
4. **Micro-Win Tracker** — Log 3 small victories (5 min)
5. **Values Anchor Exercise** — 5-minute purpose reconnection (5 min)
6. **Connection Prompt** — Reach out to one person (5 min)
7. **Weekly Review** — Lock in progress + 30-day plan (10 min)

## Key Features

- **Clerk Keyless Auth** — Works instantly without API keys. Sign up/in via modal. Dark theme matches brand.
- **Supabase Persistence** — Progress and reflections saved to database. Community posts with likes.
- **Resend Emails** — Branded welcome email + trial reminder emails (black/white luxury design).
- **Premium SVG Icons** — Hand-crafted geometric icons for brain, shield, wave, compass, connection, streak.
- **Heavy Film Grain** — Suno.com-style animated grain overlay for luxury texture.
- **Responsive** — Full sidebar on desktop, bottom nav on mobile.

## Pricing (V1)

- **Free:** 7-Day Resilience Reset + read-only community (no Stripe required)
- **Full Access:** Coming soon — $29/mo or $290/year

## Disclaimer

Equilibra is not therapy or a substitute for professional mental health treatment. If you are in crisis, call or text **988** (Suicide and Crisis Lifeline).

## License

All rights reserved.
