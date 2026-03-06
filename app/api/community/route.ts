import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { supabase } from "@/lib/supabase";

export async function GET() {
  const { data, error } = await supabase
    .from("community_posts")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(20);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}

export async function POST(req: NextRequest) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { content, emoji, username } = await req.json();

  if (!content || content.length > 280) {
    return NextResponse.json(
      { error: "Content must be 1-280 characters" },
      { status: 400 }
    );
  }

  const { data, error } = await supabase
    .from("community_posts")
    .insert({
      user_id: userId,
      username: username || "Anonymous",
      content,
      emoji: emoji || "✨",
    })
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}
