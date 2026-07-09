"use client";

import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";
import { cardVariants, easeOutExpo } from "@/lib/motion";

const roles = [
  {
    title: "Project Manager",
    company: "Omise",
    period: "March 2025 — June 2026",
    description:
      "Led cross-functional delivery of fintech projects at the Omise Pro business unit, managing sprint planning, backlog execution, and stakeholder alignment across product, engineering, clients and external partners. Spearheaded a multi-partner digital wallet program serving 250K+ users with ~$420K projected 3-year revenue, delivered the Report Engine project plan scoping a $300K annual opportunity, and coordinated the CYBS REST API rollout for Thai banks that drove ~$150K/month in savings.",
    size: "large" as const,
    tags: ["Fintech", "Digital Wallets", "Agile", "Stakeholder Management"],
  },
  {
    title: "Digital Project Manager",
    company: "Indorama Ventures PCL",
    period: "June 2020 — March 2025",
    description:
      "Managed the data integration of Workday’s Adaptive Planning module. Contributed to solution design and data modeling for procurement analytics. Initiated the COMA App for customer and product profitability data. Developed user-centric Tableau dashboards and managed vendor partnerships for supply chain analytics software.",
    size: "small" as const,
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
      "Analysed a competing country’s export data to identify its target countries and presented findings to the team leader.",
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

export default function PreviousWork() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-surface)] px-8 py-24 sm:py-32 md:px-12">
      {/* Atmospheric depth layer */}
      <div
        className="pointer-events-none absolute left-[-10%] top-[10%] h-96 w-96 rounded-full blur-3xl"
        style={{ backgroundColor: 'color-mix(in oklab, var(--color-accent-warm) 7%, transparent)' }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-[-5%] bottom-[5%] h-80 w-80 rounded-full blur-3xl"
        style={{ backgroundColor: 'color-mix(in oklab, var(--color-accent-warm) 6%, transparent)' }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl">
        <SectionLabel number="02" label="Previously" />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {roles.map((role, i) => (
            <motion.div
              key={role.title + role.company}
              className={`card-ring group relative overflow-hidden rounded-2xl bg-[var(--color-card)] p-7 sm:p-9 transition-transform duration-300 hover:-translate-y-1.5 ${
                role.size === "large" ? "sm:col-span-2" : ""
              }`}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: easeOutExpo,
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
                      ? "text-3xl sm:text-4xl lg:text-5xl"
                      : "text-xl sm:text-2xl"
                  }`}
                  style={role.size === "large" ? { lineHeight: 1.1, letterSpacing: '-0.02em' } : undefined}
                >
                  {role.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--color-muted)]">{role.company}</p>
                <p
                  className={`mt-5 leading-relaxed text-[var(--color-fg)] ${
                    role.size === "large"
                      ? "text-lg max-w-xl"
                      : "text-sm"
                  }`}
                >
                  {role.description}
                </p>

                {/* Tags revealed on hover */}
                <div className="mt-auto pt-4">
                  <div className="flex flex-wrap gap-2 transition-all duration-300 lg:translate-y-2 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
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
