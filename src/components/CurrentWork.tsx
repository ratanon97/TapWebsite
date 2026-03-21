"use client";

import { motion } from "framer-motion";

const slideIn = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

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
    <section id="work" className="px-8 py-16 sm:py-20 md:px-12 border-t border-[var(--color-border)]">
      <div className="mx-auto max-w-6xl">
        <motion.p
          className="text-sm font-medium uppercase tracking-widest text-[var(--color-muted)]"
          variants={slideIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-[var(--color-accent-warm)]">01</span> / Currently
        </motion.p>

        <motion.div
          className="mt-8"
          variants={slideInContent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="text-4xl font-[family-name:var(--font-playfair)] tracking-tight sm:text-5xl">
            Project Manager at Omise
          </h2>
          <p className="mt-2 text-sm text-[var(--color-muted)]">March 2025 &mdash; Present</p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--color-muted)]">
            Leading cross-functional delivery of fintech projects at the Omise
            Pro business unit, managing sprint planning, backlog execution, and
            stakeholder alignment across product, engineering, clients and
            external partners.
          </p>
          <ul className="mt-8 max-w-2xl space-y-3 pl-5 text-sm leading-relaxed text-[var(--color-muted)]">
            {[
              "Led multi-partner digital wallet program serving 250K+ users and generating ~$420K in projected 3-year revenue, managing parallel integrations of open-loop wallet solutions with regulatory compliance",
              "Delivered the Report Engine project plan, scoping $300K annual opportunity to enhance merchant reporting capabilities",
              "Coordinated CYBS REST API rollout for Thai banks, enabling major client migration to Cybersource that drove ~$150K/month in savings",
              "Established structured Agile cadences, streamlined documentation and reporting processes",
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
