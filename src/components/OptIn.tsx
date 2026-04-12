"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { motion } from "framer-motion";

import { initialSubscribeState, subscribe } from "@/app/actions/subscribe";

const slideIn = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="btn-glow inline-flex shrink-0 items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-[#3A1F05] transition-transform hover:scale-[1.03] disabled:cursor-not-allowed disabled:opacity-70"
    >
      {pending ? "Sending…" : "Join the list"}
    </button>
  );
}

export default function OptIn() {
  const [state, formAction] = useActionState(subscribe, initialSubscribeState);

  return (
    <section
      id="subscribe"
      className="relative overflow-hidden border-t border-[var(--color-border)] bg-[var(--color-surface-deep)] px-8 py-24 sm:py-32 md:px-12"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{ backgroundColor: "color-mix(in oklab, var(--color-accent-warm) 7%, transparent)" }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-3xl">
        <motion.p
          className="text-sm font-medium uppercase tracking-widest text-[var(--color-muted)]"
          variants={slideIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-[var(--color-accent-warm)]">07</span> / Join the list
        </motion.p>

        <motion.h2
          className="mt-6 text-4xl font-[family-name:var(--font-playfair)] tracking-tight sm:text-5xl md:text-6xl"
          style={{ lineHeight: 1.05, letterSpacing: "-0.02em" }}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Get the next field note in your inbox.
        </motion.h2>
        <motion.p
          className="mt-6 max-w-xl text-lg font-light leading-relaxed text-[var(--color-muted)]"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          One story at a time on fintech, product management, and the process of turning complexity into clarity. No spam — and the Personal Brand Test for technical PMs when it ships.
        </motion.p>

        <motion.form
          action={formAction}
          className="mt-10 flex flex-col gap-3 sm:flex-row"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <label htmlFor="optin-email" className="sr-only">
            Email address
          </label>
          <input
            id="optin-email"
            type="email"
            name="email"
            required
            placeholder="you@domain.com"
            className="flex-1 rounded-full border border-[var(--color-border)] bg-[var(--color-card)] px-5 py-3 text-base text-[var(--color-fg)] outline-none transition-colors placeholder:text-[var(--color-muted)] focus:border-[var(--color-accent-warm)]"
          />
          <SubmitButton />
        </motion.form>

        {state.status !== "idle" && (
          <p
            className={`mt-4 text-sm ${
              state.status === "success"
                ? "text-[var(--color-accent-warm)]"
                : "text-[var(--color-muted)]"
            }`}
            role="status"
            aria-live="polite"
          >
            {state.message}
          </p>
        )}
      </div>
    </section>
  );
}
