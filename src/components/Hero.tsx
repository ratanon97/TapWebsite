"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax: each layer moves at a different rate
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const subtitleY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const ctaY = useTransform(scrollYProgress, [0, 1], [0, -10]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-8 pb-32 pt-24 md:px-12 sm:pb-40 sm:pt-28"
    >
      <motion.div className="relative mx-auto max-w-6xl" style={{ opacity: bgOpacity }}>
        <motion.h1
          className="max-w-4xl text-5xl font-semibold leading-[1.1] tracking-[-0.03em] sm:text-6xl md:text-[4.5rem] lg:text-[5rem]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ y: titleY }}
        >
          <span className="text-gradient">Hi I&apos;m Tap, I build</span>
          <br />
          <motion.span
            className="rounded-md px-1"
            initial={{ backgroundSize: "0% 100%" }}
            animate={{ backgroundSize: "100% 100%" }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            style={{
              backgroundImage: "linear-gradient(var(--color-highlight), var(--color-highlight))",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "left",
            }}
          >digital products</motion.span>
          <br />
          <span className="text-gradient">that turn complexity into clarity.</span>
        </motion.h1>

        <motion.p
          className="mt-8 max-w-xl text-base leading-relaxed text-[var(--color-muted)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          style={{ y: subtitleY }}
        >
          I&apos;m a Product Manager who loves turning complex problems into
          simple, delightful experiences. I care deeply about &ldquo;why&rdquo;
          behind what we build.
        </motion.p>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          style={{ y: ctaY }}
        >
          <MagneticButton
            href="#work"
            className="inline-block rounded-lg bg-[var(--color-accent-warm)] px-8 py-4 text-base font-medium text-white transition-colors hover:bg-[var(--color-accent-hover)]"
            strength={0.35}
          >
            See my work
          </MagneticButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
