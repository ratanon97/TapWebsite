"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

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
      className={`fixed top-0 z-50 w-full bg-background/90 backdrop-blur-sm px-8 py-6 md:px-12 transition-transform duration-300 ease-in-out ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <a
          href="#"
          className="text-xl font-semibold tracking-tight text-accent"
        >
          Tap.
        </a>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#contact"
            className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-accent-warm"
          >
            Get in touch
          </a>
        </div>
      </div>
    </nav>
  );
}
