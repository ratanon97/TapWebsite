"use client";

import { motion } from "framer-motion";

const slideIn = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section id="about" className="px-8 py-16 sm:py-20 md:px-12">
      <div className="mx-auto max-w-6xl">
        <motion.p
          className="text-sm font-medium uppercase tracking-widest text-muted"
          variants={slideIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-accent-warm">03</span> / About
        </motion.p>

        <div className="mt-8 max-w-2xl space-y-6 border-l-2 border-accent-warm/30 pl-8">
          <motion.p
            className="text-lg leading-relaxed text-muted"
            variants={fadeUp}
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
            className="text-lg leading-relaxed text-muted"
            variants={fadeUp}
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
            className="text-lg leading-relaxed text-muted"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            I&apos;m always open to interesting conversations about product,
            technology, and the future of how we work.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
