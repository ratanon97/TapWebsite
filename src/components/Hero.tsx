"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col justify-center px-8 pb-24 pt-20 md:px-12">
      <div className="mx-auto max-w-6xl">
        <motion.h1
          className="max-w-4xl text-5xl leading-[1.4] tracking-tight sm:text-6xl md:text-[4rem]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="font-[family-name:var(--font-playfair)] font-normal">Hi I&apos;m Tap, I build</span>
          <br />
          <motion.span
            className="px-1 font-[family-name:var(--font-playfair)] font-bold"
            initial={{ backgroundSize: "0% 100%" }}
            animate={{ backgroundSize: "100% 100%" }}
            transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            style={{
              backgroundImage: "linear-gradient(#bfdbfe, #bfdbfe)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "left",
            }}
          >digital products</motion.span>
          <br />
          <span className="font-[family-name:var(--font-playfair)] font-normal">that turn </span>
          <span className="font-[family-name:var(--font-playfair)] font-bold italic">complexity </span>
          <span className="font-[family-name:var(--font-playfair)] font-normal">into </span>
          <span className="font-[family-name:var(--font-playfair)] font-bold italic">clarity</span>
          <span className="font-[family-name:var(--font-playfair)]">.</span>
        </motion.h1>

        <motion.p
          className="mt-8 max-w-xl text-base leading-relaxed text-muted"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
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
        >
          <a
            href="#work"
            className="inline-block rounded-full bg-accent-warm px-8 py-4 text-base font-medium text-white transition-all hover:scale-105 hover:opacity-90"
          >
            See my work
          </a>
        </motion.div>
      </div>
    </section>
  );
}
