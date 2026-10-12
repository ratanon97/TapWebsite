"use client";

import Script from "next/script";
import { useEffect, useRef } from "react";

type ScrollCraftApi = {
  layout: () => void;
  read: () => void;
  acts: unknown[];
  worlds: unknown[];
  clips: unknown[];
};

declare global {
  interface Window {
    ScrollCraft?: {
      mount: (root: Element | string) => ScrollCraftApi;
      instances: ScrollCraftApi[];
    };
  }
}

const ROOT_ID = "sc-root";

/**
 * Mounts the untouched scrollcraft engine (public/scrollcraft.js) onto the home
 * page once the DOM is hydrated.
 *
 * The engine has no teardown API: it registers scroll, resize and focusin
 * listeners and runs its own rAF loop. On client-side navigation away from the
 * home page the DOM it collected is gone, so the cleanup empties the instance's
 * act and clip lists. The stale listeners then iterate nothing, and a fresh
 * mount on return collects the new DOM. The `data-sc-mounted` flag on <html>
 * stops React Strict Mode's double effect from mounting twice.
 */
export default function ScrollCraftMount() {
  const api = useRef<ScrollCraftApi | null>(null);

  const mount = () => {
    const html = document.documentElement;
    if (html.dataset.scMounted === "1") return;
    const root = document.getElementById(ROOT_ID);
    if (!root || !window.ScrollCraft) return;
    api.current = window.ScrollCraft.mount(root);
    html.dataset.scMounted = "1";
  };

  useEffect(() => {
    // The script may already be in the page from a previous visit.
    mount();

    // Keyboard: a link inside a staggered flow reveal can receive focus while
    // its paragraph is still fading in. Open the reveal at once so focus never
    // lands on an invisible control.
    const onFocus = (e: FocusEvent) => {
      const el = e.target as HTMLElement | null;
      const block = el?.closest?.<HTMLElement>("[data-sc-in]");
      if (!block) return;
      block.classList.add("sc-in");
      block.querySelectorAll<HTMLElement>("[data-sc-stagger] > *, :scope > *").forEach((kid) => {
        kid.style.transitionDelay = "0ms";
        kid.classList.add("sc-in");
      });
    };
    document.addEventListener("focusin", onFocus);

    return () => {
      document.removeEventListener("focusin", onFocus);
      const inst = api.current;
      if (inst) {
        inst.acts.length = 0;
        inst.worlds.length = 0;
        inst.clips.length = 0;
        api.current = null;
      }
      delete document.documentElement.dataset.scMounted;
    };
  }, []);

  return <Script src="/scrollcraft.js" strategy="afterInteractive" onReady={mount} />;
}
