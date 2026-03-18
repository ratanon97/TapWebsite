"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const links = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ratanon-suksumrun" },
  { label: "GitHub", href: "https://github.com/ratanon97" },
  { label: "Email", href: "mailto:ratanon97@hotmail.com" },
];

export default function Contact() {
  return (
    <section id="contact" className="px-8 py-24 sm:py-32 md:px-12">
      <div className="mx-auto max-w-6xl">
        <motion.p
          className="text-sm font-medium uppercase tracking-widest text-muted"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          Get in touch
        </motion.p>

        <motion.div
          className="mt-8"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-3xl font-[family-name:var(--font-playfair)] tracking-tight sm:text-4xl">
            Let&apos;s connect.
          </h2>
          <p className="mt-4 max-w-xl leading-relaxed text-muted">
            Whether you have a project in mind, want to chat about product, or
            just want to say hi &mdash; I&apos;d love to hear from you.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium text-accent transition-colors hover:border-foreground hover:bg-foreground hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              className="rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium text-accent transition-colors hover:border-foreground hover:bg-foreground hover:text-white"
            >
              Download CV
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
