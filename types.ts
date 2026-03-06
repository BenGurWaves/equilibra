export interface UserProgress {
  id: string;
  user_id: string;
  day: number;
  completed: boolean;
  reflection: string | null;
  completed_at: string | null;
}

export interface CommunityPost {
  id: string;
  user_id: string;
  username: string;
  content: string;
  emoji: string;
  likes: number;
  created_at: string;
}

export interface DailyPractice {
  day: number;
  title: string;
  subtitle: string;
  duration: string;
  description: string;
  steps: string[];
  reflection_prompt: string;
}
