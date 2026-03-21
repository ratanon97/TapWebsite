"use client";

import { motion } from "framer-motion";

const slideIn = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const pillVariant = {
  hidden: { opacity: 0, scale: 0.8, y: 10 },
  visible: { opacity: 1, scale: 1, y: 0 },
};

const tools = [
  { name: "Jira", context: "Sprint planning & backlog" },
  { name: "Confluence", context: "Documentation & specs" },
  { name: "Figma", context: "Design collaboration" },
  { name: "Tableau", context: "Data visualization" },
  { name: "Workday", context: "Enterprise integration" },
  { name: "SQL", context: "Data querying & modeling" },
  { name: "Agile / Scrum", context: "Delivery methodology" },
  { name: "Stakeholder Management", context: "Cross-functional alignment" },
  { name: "Data Analytics", context: "Insights & reporting" },
  { name: "API Integration", context: "System connectivity" },
  { name: "Product Strategy", context: "Roadmap & vision" },
  { name: "User Research", context: "Discovery & validation" },
];

export default function Tools() {
  return (
    <section className="bg-surface px-8 py-16 sm:py-20 md:px-12 dark:bg-foreground/[0.03]">
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

        <div className="mt-8 flex flex-wrap gap-3">
          {tools.map((tool, i) => (
            <motion.span
              key={tool.name}
              className="group relative cursor-default rounded-full border border-foreground/15 px-4 py-2 font-[family-name:var(--font-mono)] text-xs tracking-wide text-foreground/70 transition-all duration-200 hover:scale-[1.05] hover:rotate-[0.5deg] hover:border-accent-warm hover:text-accent-warm hover:shadow-sm"
              variants={pillVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.3,
                delay: 0.1 + i * 0.04,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              {tool.name}
              {/* Tooltip */}
              <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-foreground px-3 py-1 text-xs font-sans text-background opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100 dark:bg-card dark:text-foreground">
                {tool.context}
              </span>
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
