import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_LEN = {
  name: 200,
  societe: 200,
  email: 320,
  phone: 60,
  type: 500,
  jur: 500,
  urgence: 200,
  message: 5000,
  contact: 200,
};

function clean(v: unknown, max: number): string {
  if (typeof v !== "string") return "";
  return v.trim().slice(0, max);
}

function isEmail(v: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function escapeHtml(s: string): string {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  // Honeypot — bots remplissent ce champ caché. Réponse 200 silencieuse pour ne pas leur signaler.
  const honeypot = typeof body.company_url === "string" ? body.company_url : "";
  if (honeypot.length > 0) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const name = clean(body.name, MAX_LEN.name);
  const email = clean(body.email, MAX_LEN.email);
  const societe = clean(body.societe, MAX_LEN.societe);
  const phone = clean(body.phone, MAX_LEN.phone);
  const type = clean(body.type, MAX_LEN.type);
  const jur = clean(body.jur, MAX_LEN.jur);
  const urgence = clean(body.urgence, MAX_LEN.urgence);
  const message = clean(body.message, MAX_LEN.message);
  const contactMode = clean(body.contact, MAX_LEN.contact);

  if (!name) return NextResponse.json({ error: "name_required" }, { status: 400 });
  if (!email || !isEmail(email))
    return NextResponse.json({ error: "email_invalid" }, { status: 400 });
  if (!message)
    return NextResponse.json({ error: "message_required" }, { status: 400 });

  const apiKey = process.env.RESEND_API_KEY;
  const toAddr = process.env.CONTACT_TO;
  const fromAddr = process.env.CONTACT_FROM || "onboarding@resend.dev";

  if (!apiKey || !toAddr) {
    return NextResponse.json(
      { error: "server_not_configured" },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);

  const subject = `[IDN Contact] ${name}${societe ? ` — ${societe}` : ""}`;

  const fields: Array<[string, string]> = [
    ["Nom", name],
    ["Société", societe || "—"],
    ["Email", email],
    ["Téléphone", phone || "—"],
    ["Nature de la situation", type || "—"],
    ["Juridictions concernées", jur || "—"],
    ["Calendrier", urgence || "—"],
    ["Mode de contact préféré", contactMode || "—"],
  ];

  const html =
    `<div style="font-family:Georgia,serif;color:#1f261f;line-height:1.55">` +
    `<h2 style="color:#0d3429;font-weight:normal">Nouvelle soumission — formulaire de contact IDN</h2>` +
    `<table style="border-collapse:collapse;margin:18px 0">` +
    fields
      .map(
        ([k, v]) =>
          `<tr><td style="padding:6px 14px 6px 0;color:#6b6b6b;vertical-align:top">${escapeHtml(
            k,
          )}</td><td style="padding:6px 0">${escapeHtml(v)}</td></tr>`,
      )
      .join("") +
    `</table>` +
    `<h3 style="color:#0d3429;font-weight:normal">Description</h3>` +
    `<p style="white-space:pre-wrap;background:#f4efe6;padding:14px;border-left:3px solid #c4a46b">${escapeHtml(
      message,
    )}</p>` +
    `<p style="color:#888;font-size:12px;margin-top:24px">Envoyé depuis idn-global-advisory.vercel.app · ${new Date().toISOString()}</p>` +
    `</div>`;

  const text =
    fields.map(([k, v]) => `${k}: ${v}`).join("\n") +
    `\n\nDescription:\n${message}\n`;

  try {
    const { data, error } = await resend.emails.send({
      from: `IDN Contact <${fromAddr}>`,
      to: [toAddr],
      replyTo: email,
      subject,
      html,
      text,
    });
    if (error) {
      return NextResponse.json(
        { error: "send_failed", detail: error.message },
        { status: 502 },
      );
    }
    return NextResponse.json({ ok: true, id: data?.id }, { status: 200 });
  } catch (e) {
    return NextResponse.json(
      { error: "send_exception", detail: e instanceof Error ? e.message : String(e) },
      { status: 502 },
    );
  }
}
