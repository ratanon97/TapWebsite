"use client";

import { motion } from "framer-motion";

const slideIn = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const roles = [
  {
    title: "Digital Project Manager",
    company: "Indorama Ventures PCL",
    period: "June 2020 — March 2025",
    description:
      "Managed the data integration of Workday\u2019s Adaptive Planning module. Contributed to solution design and data modeling for procurement analytics. Initiated the COMA App for customer and product profitability data. Developed user-centric Tableau dashboards and managed vendor partnerships for supply chain analytics software.",
    size: "large" as const,
    tags: ["Workday", "Tableau", "Data Modeling", "Vendor Management"],
  },
  {
    title: "Summer Analyst",
    company: "Finnomena",
    period: "September 2018",
    description:
      "Worked with the Investment Advisory team in data research for advising investment strategies to clients.",
    size: "small" as const,
    tags: ["Investment Research", "Data Analysis"],
  },
  {
    title: "Summer Marketing Analyst",
    company: "IRPC Public Company Limited",
    period: "August 2018",
    description:
      "Analysed a competing country\u2019s export data to identify its target countries and presented findings to the team leader.",
    size: "small" as const,
    tags: ["Market Analysis", "Export Data"],
  },
  {
    title: "Summer Analyst",
    company: "Thai Oil Public Company Limited",
    period: "August 2017 — September 2017",
    description:
      "Evaluated crude oil prices and product values to optimize procurement decisions.",
    size: "small" as const,
    tags: ["Procurement", "Price Analysis"],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

export default function PreviousWork() {
  return (
    <section className="bg-[var(--color-surface)] px-8 py-16 sm:py-20 md:px-12">
      <div className="mx-auto max-w-6xl">
        <motion.p
          className="text-sm font-medium uppercase tracking-widest text-[var(--color-muted)]"
          variants={slideIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-[var(--color-accent-warm)]">02</span> / Previously
        </motion.p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {roles.map((role, i) => (
            <motion.div
              key={role.title + role.company}
              className={`group relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] p-6 sm:p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 hover:border-[var(--color-accent-warm)] ${
                role.size === "large"
                  ? "sm:col-span-2 lg:col-span-2 lg:row-span-2"
                  : ""
              }`}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              {/* Accent line */}
              <div className="absolute left-0 top-0 h-full w-1 bg-transparent transition-all duration-300 group-hover:bg-[var(--color-accent-warm)]" />

              <div className="flex h-full flex-col">
                <p className="text-xs font-medium uppercase tracking-wider text-[var(--color-accent-warm)]">
                  {role.period}
                </p>
                <h3
                  className={`mt-3 font-[family-name:var(--font-playfair)] tracking-tight ${
                    role.size === "large"
                      ? "text-2xl sm:text-3xl"
                      : "text-xl sm:text-2xl"
                  }`}
                >
                  {role.title}
                </h3>
                <p className="mt-1 text-sm text-[var(--color-muted)]">{role.company}</p>
                <p
                  className={`mt-4 leading-relaxed text-[var(--color-muted)] ${
                    role.size === "large"
                      ? "text-base max-w-xl"
                      : "text-sm"
                  }`}
                >
                  {role.description}
                </p>

                {/* Tags revealed on hover */}
                <div className="mt-auto pt-4">
                  <div className="flex flex-wrap gap-2 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    {role.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full px-3 py-1 text-xs font-medium text-[var(--color-accent-warm)]"
                        style={{ backgroundColor: 'color-mix(in oklab, var(--color-accent-warm) 15%, transparent)' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
