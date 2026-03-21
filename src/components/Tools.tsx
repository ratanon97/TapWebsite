"use client";

import { motion } from "framer-motion";

const slideIn = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const tools = [
  "Jira",
  "Confluence",
  "Figma",
  "Tableau",
  "Workday",
  "SQL",
  "Agile / Scrum",
  "Stakeholder Management",
  "Data Analytics",
  "API Integration",
  "Product Strategy",
  "User Research",
];

export default function Tools() {
  return (
    <section className="bg-surface px-8 py-16 sm:py-20 md:px-12">
      <div className="mx-auto max-w-6xl">
        <motion.p
          className="text-sm font-medium uppercase tracking-widest text-muted"
          variants={slideIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-accent-warm">04</span> / Tools &amp; Methods
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap gap-3"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {tools.map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-foreground/15 px-4 py-2 text-sm text-foreground/70 transition-colors hover:border-accent-warm hover:text-accent-warm"
            >
              {tool}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
