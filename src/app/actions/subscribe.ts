"use server";

export type SubscribeState = {
  status: "idle" | "success" | "error";
  message: string;
};

export const initialSubscribeState: SubscribeState = {
  status: "idle",
  message: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function subscribe(
  _prev: SubscribeState,
  formData: FormData,
): Promise<SubscribeState> {
  const email = String(formData.get("email") ?? "").trim();

  if (!email || !EMAIL_RE.test(email)) {
    return { status: "error", message: "That doesn't look like a valid email." };
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

    console.error("[subscribe] Buttondown returned", res.status, await res.text().catch(() => ""));
    return {
      status: "error",
      message: "Something went wrong on our side. Try again in a minute?",
    };
  } catch (err) {
    console.error("[subscribe] fetch failed", err);
    return {
      status: "error",
      message: "Network error. Try again in a minute?",
    };
  }
}
