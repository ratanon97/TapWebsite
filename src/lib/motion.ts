import type { Variants } from "framer-motion";

/**
 * Shared framer-motion variants used across landing-page sections.
 *
 * These were previously redeclared (identically) in nearly every section
 * component. Importing from one place keeps the animation language consistent
 * and makes a global tweak a one-line change.
 */

/** Eyebrow / label slide-in from the left. */
export const slideIn: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

/** Standard content fade-up. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

/** Bento / story card entrance. */
export const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

/** Shared easing curve for the more deliberate section reveals. */
export const easeOutExpo = [0.25, 0.1, 0.25, 1] as const;
