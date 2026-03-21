"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const roles = [
  {
    title: "Digital Project Manager",
    company: "Indorama Ventures PCL",
    period: "June 2020 \u2014 March 2025",
    description:
      "Managed the data integration of Workday\u2019s Adaptive Planning module. Contributed to solution design and data modeling for procurement analytics. Initiated the COMA App for customer and product profitability data. Developed user-centric Tableau dashboards and managed vendor partnerships for supply chain analytics software.",
  },
  {
    title: "Summer Analyst",
    company: "Finnomena",
    period: "September 2018",
    description:
      "Worked with the Investment Advisory team in data research for advising investment strategies to clients.",
  },
  {
    title: "Summer Marketing Analyst",
    company: "IRPC Public Company Limited",
    period: "August 2018",
    description:
      "Analysed a competing country\u2019s export data to identify its target countries and presented findings to the team leader.",
  },
  {
    title: "Summer Analyst",
    company: "Thai Oil Public Company Limited",
    period: "August 2017 \u2014 September 2017",
    description:
      "Evaluated crude oil prices and product values to optimize procurement decisions.",
  },
];

export default function PreviousWork() {
  return (
    <section className="bg-surface px-8 py-16 sm:py-20 md:px-12">
      <div className="mx-auto max-w-6xl">
        <motion.p
          className="text-sm font-medium uppercase tracking-widest text-muted"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-accent-hover">02</span> / Previously
        </motion.p>

        <div className="mt-10 space-y-12">
          {roles.map((role, i) => (
            <motion.div
              key={role.title + role.company}
              className="group border-l-2 border-black/10 pl-8 transition-colors hover:border-accent-hover"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <p className="text-sm text-muted">{role.period}</p>
              <h3 className="mt-1 text-2xl font-[family-name:var(--font-playfair)] tracking-tight">
                {role.title}
              </h3>
              <p className="text-sm text-muted">{role.company}</p>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/70">
                {role.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
