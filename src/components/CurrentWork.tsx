"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function CurrentWork() {
  return (
    <section id="work" className="px-8 py-24 sm:py-32 md:px-12">
      <div className="mx-auto max-w-6xl">
        <motion.p
          className="text-sm font-medium uppercase tracking-widest text-muted"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          Currently
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
            Project Manager at Omise
          </h2>
          <p className="mt-2 text-sm text-muted">March 2025 &mdash; Present</p>
          <p className="mt-6 max-w-2xl leading-relaxed text-muted">
            Leading cross-functional delivery of fintech projects at the Omise
            Pro business unit, managing sprint planning, backlog execution, and
            stakeholder alignment across product, engineering, clients and
            external partners.
          </p>
          <ul className="mt-6 max-w-2xl space-y-3 text-sm leading-relaxed text-muted">
            <li>Led multi-partner digital wallet program serving 250K+ users and generating ~$420K in projected 3-year revenue, managing parallel integrations of open-loop wallet solutions with regulatory compliance</li>
            <li>Delivered the Report Engine project plan, scoping $300K annual opportunity to enhance merchant reporting capabilities</li>
            <li>Coordinated CYBS REST API rollout for Thai banks, enabling major client migration to Cybersource that drove ~$150K/month in savings</li>
            <li>Established structured Agile cadences, streamlined documentation and reporting processes</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
