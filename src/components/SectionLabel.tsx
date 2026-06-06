"use client";

import { motion } from "framer-motion";
import { slideIn } from "@/lib/motion";

/**
 * The numbered "01 / Currently" eyebrow that opens every landing-page section.
 * Previously this exact motion.p block was copy-pasted into 8 components.
 */
export default function SectionLabel({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <motion.p
      className="text-sm font-medium uppercase tracking-widest text-[var(--color-muted)]"
      variants={slideIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <span className="text-[var(--color-accent-warm)]">{number}</span> / {label}
    </motion.p>
  );
}
