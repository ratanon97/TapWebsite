"use client";

import { motion } from "framer-motion";
import CountUp from "./CountUp";

const slideIn = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0 },
};

const stats = [
  { end: 6, suffix: "+", label: "Years Experience" },
  { end: 15, suffix: "+", label: "Projects Delivered" },
  { end: 3, suffix: "", label: "Industries" },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden px-8 py-24 sm:py-32 md:px-12">
      {/* Subtle warm atmospheric glow */}
      <div
        className="pointer-events-none absolute right-[10%] top-[30%] h-80 w-80 rounded-full blur-3xl"
        style={{ backgroundColor: 'color-mix(in oklab, var(--color-accent-warm) 5%, transparent)' }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl">
        <motion.p
          className="text-sm font-medium uppercase tracking-widest text-[var(--color-muted)]"
          variants={slideIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-[var(--color-accent-warm)]">05</span> / About
        </motion.p>

        {/* Stats row */}
        <div className="mt-12 grid grid-cols-3 gap-8 border-b border-[var(--color-border)] pb-14">
          {stats.map((stat) => (
            <CountUp key={stat.label} {...stat} />
          ))}
        </div>

        <div className="mt-14 max-w-2xl space-y-7 border-l-2 border-[var(--color-accent-warm)] pl-10">
          <motion.p
            className="text-xl font-light leading-relaxed text-[var(--color-muted)]"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            I&apos;m a Product Manager with a background in Chemical Engineering
            (BEng from Lancaster University, MSc from Imperial College London).
            I transitioned into digital transformation and software delivery,
            and I&apos;ve spent the last 6 years leading projects across fintech
            and chemicals industries.
          </motion.p>
          <motion.p
            className="text-xl font-light leading-relaxed text-[var(--color-muted)]"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I care deeply about bridging the gap between business needs and
            technical execution. Whether it&apos;s integrating enterprise platforms
            like Workday, building fintech payment solutions, or designing
            analytics dashboards &mdash; I focus on making the complex feel simple.
          </motion.p>
          <motion.p
            className="text-xl font-light leading-relaxed text-[var(--color-muted)]"
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            I&apos;m always open to interesting conversations about{" "}
            <span className="font-[family-name:var(--font-playfair)] italic text-[var(--color-fg)]">
              product, technology, and the future of how we work
            </span>
            .
          </motion.p>
        </div>
      </div>
    </section>
  );
}
