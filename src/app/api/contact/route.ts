import { NextResponse } from "next/server";

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export async function POST(req: Request) {
  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  // Bots fill the hidden field — pretend success.
  if (body.company_website) return NextResponse.json({ ok: true });

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const message = (body.message ?? "").trim();
  if (!name || !isEmail(email) || !message) {
    return NextResponse.json({ error: "Please provide your name, a valid email and a message." }, { status: 422 });
  }

  // TODO: deliver the enquiry. Set CONTACT_WEBHOOK_URL (e.g. Zapier/Make/Formspree endpoint)
  // or swap this block for an email provider such as Resend.
  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (webhook) {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: body.title, name, email, phone: body.phone, message }),
    });
    if (!res.ok) return NextResponse.json({ error: "Could not send right now. Please email us." }, { status: 502 });
  } else {
    console.info("[contact] enquiry received (no CONTACT_WEBHOOK_URL set):", { name, email });
  }

  return NextResponse.json({ ok: true });
}
