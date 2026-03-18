"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section id="about" className="px-8 py-24 sm:py-32 md:px-12">
      <div className="mx-auto max-w-6xl">
        <motion.p
          className="text-sm font-medium uppercase tracking-widest text-muted"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          About
        </motion.p>

        <motion.div
          className="mt-8 max-w-2xl space-y-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="text-lg leading-relaxed text-muted">
            I&apos;m a Product Manager with a background in Chemical Engineering
            (BEng from Lancaster University, MSc from Imperial College London).
            I transitioned into digital transformation and software delivery,
            and I&apos;ve spent the last 6 years leading projects across fintech
            and chemicals industries.
          </p>
          <p className="text-lg leading-relaxed text-muted">
            I care deeply about bridging the gap between business needs and
            technical execution. Whether it&apos;s integrating enterprise platforms
            like Workday, building fintech payment solutions, or designing
            analytics dashboards &mdash; I thrive on turning complexity into clarity.
          </p>
          <p className="text-lg leading-relaxed text-muted">
            I&apos;m always open to interesting conversations about product,
            technology, and the future of how we work.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
