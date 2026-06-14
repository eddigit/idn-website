import { NextRequest, NextResponse } from "next/server";
import { replyAsRaphaelPublic, type PublicChatMessage } from "@/lib/raphaelPublic";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function cleanMessage(message: unknown): PublicChatMessage | null {
  if (!message || typeof message !== "object") return null;
  const candidate = message as Record<string, unknown>;
  const role = candidate.role === "assistant" ? "assistant" : candidate.role === "user" ? "user" : null;
  const content = typeof candidate.content === "string" ? candidate.content.trim().slice(0, 3000) : "";
  if (!role || !content) return null;
  return { role, content };
}

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const messages = Array.isArray(body.messages)
    ? body.messages.map(cleanMessage).filter((message): message is PublicChatMessage => Boolean(message)).slice(-12)
    : [];

  if (messages.length === 0) {
    return NextResponse.json({ error: "message_required" }, { status: 400 });
  }

  const lang = body.lang === "en" ? "en" : "fr";
  const result = replyAsRaphaelPublic({ lang, messages });

  return NextResponse.json(result, { status: 200 });
}
