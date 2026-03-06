// Supabase client - configure with your project keys
// Uncomment and configure once you have your Supabase project set up

// import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
// const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Placeholder export until Supabase is configured
export const supabase = null;

/*
SQL to create tables in Supabase:

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

-- Enable Row Level Security
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE community_posts ENABLE ROW LEVEL SECURITY;

-- Policies (adjust based on your auth setup)
CREATE POLICY "Users can read own progress" ON user_progress FOR SELECT USING (true);
CREATE POLICY "Users can insert own progress" ON user_progress FOR INSERT WITH CHECK (true);
CREATE POLICY "Users can update own progress" ON user_progress FOR UPDATE USING (true);
CREATE POLICY "Anyone can read posts" ON community_posts FOR SELECT USING (true);
CREATE POLICY "Authenticated users can post" ON community_posts FOR INSERT WITH CHECK (true);
*/
