"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const threshold = 80; // px before hiding kicks in (roughly nav height)

    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY <= threshold) {
        // Always show at top of page
        setHidden(false);
      } else if (currentY > lastScrollY) {
        // Scrolling down
        setHidden(true);
      } else {
        // Scrolling up
        setHidden(false);
      }

      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 z-50 w-full backdrop-blur-sm px-8 py-6 md:px-12 transition-transform duration-300 ease-in-out ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
      style={{ backgroundColor: 'color-mix(in oklab, var(--color-bg) 90%, transparent)' }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <a
          href="#"
          className="text-xl font-semibold tracking-tight text-[var(--color-accent-warm)]"
        >
          Tap.
        </a>

        <div className="flex items-center gap-5">
          <Link
            href="/stories"
            className="hidden text-sm font-medium text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent-warm)] sm:inline"
          >
            Stories
          </Link>
          <a
            href="#contact"
            className="rounded-lg bg-[var(--color-fg)] px-5 py-2.5 text-sm font-medium text-[var(--color-bg)] transition-opacity hover:opacity-90"
          >
            Get in touch
          </a>
        </div>
      </div>
    </nav>
  );
}
