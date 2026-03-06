import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  "https://dicrlmsuuubnrwsgwigi.supabase.co";
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "sb_publishable_4koy0SgkwNSUAe_iHV5oXg_SDwA7SnQ";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/*
Run this SQL in the Supabase SQL Editor to create your tables:

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
*/
