"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative px-8 py-10 md:px-12">
      {/* Gradient divider line */}
      <div className="absolute left-0 right-0 top-0 h-px">
        <div className="mx-auto h-full max-w-6xl bg-gradient-to-r from-transparent via-accent-warm/40 to-transparent" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-muted sm:flex-row">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-medium text-foreground/60">
            Turning{" "}
            <span className="font-[family-name:var(--font-playfair)] italic text-accent-warm/70">
              complexity
            </span>{" "}
            into{" "}
            <span className="font-[family-name:var(--font-playfair)] italic text-accent-warm/70">
              clarity
            </span>
            .
          </p>
          <p className="mt-1 text-xs">&copy; {new Date().getFullYear()} Tap. All rights reserved.</p>
        </motion.div>
        <motion.div
          className="flex gap-6"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <a
            href="#"
            className="transition-colors hover:text-accent-warm"
          >
            Top
          </a>
          <a
            href="https://www.linkedin.com/in/ratanon-suksumrun"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent-warm"
          >
            LinkedIn
          </a>
        </motion.div>
      </div>
    </footer>
  );
}
