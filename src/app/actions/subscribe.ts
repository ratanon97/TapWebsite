"use server";

import { headers } from "next/headers";

export type SubscribeState = {
  status: "idle" | "success" | "error";
  message: string;
};

export const initialSubscribeState: SubscribeState = {
  status: "idle",
  message: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_EMAIL_LENGTH = 254; // RFC 5321 upper bound

// Per-instance, in-memory rate limit. Serverless instances each keep their
// own window, so this is a soft cap — enough to blunt naive abuse of the
// upstream Buttondown quota without external state.
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const attempts = new Map<string, { count: number; windowStart: number }>();

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const entry = attempts.get(key);

  if (!entry || now - entry.windowStart > RATE_LIMIT_WINDOW_MS) {
    attempts.set(key, { count: 1, windowStart: now });
    return false;
  }

  entry.count += 1;
  if (attempts.size > 5000) attempts.clear();
  return entry.count > RATE_LIMIT_MAX;
}

export async function subscribe(
  _prev: SubscribeState,
  formData: FormData,
): Promise<SubscribeState> {
  const email = String(formData.get("email") ?? "")
    .trim()
    .toLowerCase();

  if (!email || email.length > MAX_EMAIL_LENGTH || !EMAIL_RE.test(email)) {
    return { status: "error", message: "That doesn't look like a valid email." };
  }

  const requestHeaders = await headers();
  const ip =
    requestHeaders.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return {
      status: "error",
      message: "Too many attempts. Try again in a few minutes.",
    };
  }

  const apiKey = process.env.BUTTONDOWN_API_KEY;
  if (!apiKey) {
    console.warn("[subscribe] BUTTONDOWN_API_KEY is not set — skipping provider call.");
    return {
      status: "error",
      message: "Subscribing isn't wired up yet. Check back soon.",
    };
  }

  try {
    const res = await fetch("https://api.buttondown.email/v1/subscribers", {
      method: "POST",
      headers: {
        Authorization: `Token ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email_address: email }),
      signal: AbortSignal.timeout(10_000),
    });

    if (res.ok) {
      return {
        status: "success",
        message: "You're in. The next field note will land in your inbox.",
      };
    }

    if (res.status === 400) {
      const body = (await res.json().catch(() => null)) as { detail?: string } | null;
      if (body?.detail?.toLowerCase().includes("already")) {
        return { status: "success", message: "You're already on the list — thank you." };
      }
    }

    console.error("[subscribe] Buttondown returned", res.status);
    return {
      status: "error",
      message: "Something went wrong on our side. Try again in a minute?",
    };
  } catch (err) {
    console.error("[subscribe] fetch failed", err instanceof Error ? err.message : err);
    return {
      status: "error",
      message: "Network error. Try again in a minute?",
    };
  }
}
