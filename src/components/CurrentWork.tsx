"use client";

import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";
import { easeOutExpo } from "@/lib/motion";

const slideInContent = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
};

const staggerUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function CurrentWork() {
  return (
    <section id="work" className="relative px-8 py-24 sm:py-32 md:px-12 border-t border-[var(--color-border)]">
      {/* Subtle atmospheric blob */}
      <div
        className="pointer-events-none absolute right-[5%] top-[20%] h-72 w-72 rounded-full blur-3xl"
        style={{ backgroundColor: 'color-mix(in oklab, var(--color-accent-warm) 6%, transparent)' }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl">
        <SectionLabel number="01" label="Currently" />

        <motion.div
          className="mt-10"
          variants={slideInContent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: easeOutExpo }}
        >
          <h2
            className="text-5xl font-[family-name:var(--font-playfair)] tracking-tight sm:text-6xl md:text-7xl"
            style={{ lineHeight: 1.05, letterSpacing: '-0.02em' }}
          >
            Associate Technical Product Manager at Omise
          </h2>
          <p className="mt-3 text-sm text-[var(--color-muted)]">At Omise since June 2026</p>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[var(--color-fg)]">
            Leading Omise&rsquo;s Wallet as a Service (WaaS) product, owning
            strategy, roadmap, and execution across product, engineering, and
            partner teams.
          </p>
          <ul className="mt-8 max-w-2xl space-y-3 pl-5 text-sm leading-relaxed text-[var(--color-fg)]">
            {[
              "Driving the Wallet as a Service (WaaS) product end-to-end, defining strategy, roadmap, and partner integrations for open-loop digital wallet solutions",
            ].map((item, i) => (
              <motion.li
                key={i}
                className="list-disc marker:text-[var(--color-accent-warm)]"
                variants={staggerUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

