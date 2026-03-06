# Equilibra

**Build unbreakable calm in a chaotic world.**

The Porsche of mental fitness — silent power, zero noise, pure results.

## What Is This?

Equilibra is a premium mental fitness platform that helps people build real resilience through evidence-based, 5-10 minute daily practices. The core offering is a **free 7-Day Resilience Reset** that rewires your stress response — no fluff, no data harvesting, just tools that work.

## Tech Stack

- **Framework:** Next.js 14 (App Router) + TypeScript
- **Styling:** Tailwind CSS + Space Grotesk / Inter / Playfair Display
- **Auth:** Clerk (placeholder — add your keys)
- **Database:** Supabase (placeholder — add your keys)
- **Payments:** Stripe (placeholder — add your keys)
- **Email:** Resend (placeholder — add your keys)
- **Deployment:** Cloudflare Pages

## Getting Started

```bash
# Install dependencies
npm install

# Copy env template and add your API keys
cp .env.local.example .env.local

# Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
equilibra/
├── app/
│   ├── (auth)/          ← Sign-in / sign-up pages (Clerk placeholders)
│   ├── dashboard/       ← Mental Lab main page
│   ├── reset/           ← 7-Day Reset overview
│   ├── layout.tsx       ← Global layout with grain + fonts
│   ├── page.tsx         ← Public hero (homepage)
│   └── globals.css      ← Tailwind + grain animation
├── components/
│   ├── Hero.tsx
│   ├── GrainOverlay.tsx
│   ├── DailyPracticeCard.tsx
│   └── CommunityFeed.tsx
├── lib/
│   ├── practices.ts     ← All 7 days of content
│   └── supabase.ts      ← DB client + SQL schema
├── public/
│   └── logo.svg
└── types.ts
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Public hero — full-screen black + grain, CTA to sign up |
| `/sign-up` | Clerk sign-up (placeholder until keys added) |
| `/sign-in` | Clerk sign-in (placeholder until keys added) |
| `/dashboard` | Mental Lab — today's practice, streak, community, progress |
| `/reset` | 7-Day Reset overview with all day summaries |

## 7-Day Resilience Reset (Free Tier)

1. **Nervous System Reset** — Physiological sigh technique
2. **Boundary Script Builder** — Write and practice one boundary sentence
3. **Thought Reframe Drill** — Stress-test 3 negative thoughts
4. **Micro-Win Tracker** — Log 3 small victories
5. **Values Anchor Exercise** — 5-minute purpose reconnection
6. **Connection Prompt** — Reach out to one person
7. **Weekly Review** — Lock in progress + 30-day plan

## Environment Variables

Copy `.env.local.example` to `.env.local` and fill in:

- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` / `CLERK_SECRET_KEY`
- `NEXT_PUBLIC_SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` / `STRIPE_SECRET_KEY` / `STRIPE_PRICE_ID`
- `RESEND_API_KEY`

## Pricing

- **Free:** 7-Day Resilience Reset + read-only community
- **Full Access:** $29/mo or $290/year (7-day free trial)

## Disclaimer

Equilibra is not therapy or a substitute for professional mental health treatment. If you are in crisis, call or text **988** (Suicide and Crisis Lifeline).

## License

All rights reserved.
