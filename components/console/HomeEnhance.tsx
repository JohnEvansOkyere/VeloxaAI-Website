"use client";

/**
 * Mounts the scrollcraft engine on the home page after hydration, and drives
 * the two pieces of app chrome the engine knows nothing about: the subsystem
 * rail's active item, and the status bar's section readout.
 *
 * The engine is optional. If /scrollcraft.js fails to load, the safety net
 * below shows every cued element so the page is a plain, complete document
 * rather than a blank one.
 */

import { useEffect } from "react";

declare global {
  interface Window {
    ScrollCraft?: { mount: (el: Element, opts?: unknown) => unknown };
  }
}

function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(`script[data-src="${src}"]`);
    if (existing) {
      if (existing.dataset.loaded === "1") resolve();
      else existing.addEventListener("load", () => resolve());
      return;
    }
    const s = document.createElement("script");
    s.src = src;
    s.async = true;
    s.dataset.src = src;
    s.addEventListener("load", () => {
      s.dataset.loaded = "1";
      resolve();
    });
    s.addEventListener("error", () => reject(new Error(`failed to load ${src}`)));
    document.body.appendChild(s);
  });
}

export default function HomeEnhance() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("vx-js");

    let cancelled = false;
    const cleanups: Array<() => void> = [];

    async function boot() {
      try {
        await loadScript("/scrollcraft.js");
      } catch {
        /* engine optional — the bespoke board and native scroll still work */
      }
      if (cancelled) return;

      if (document.fonts?.ready) {
        try {
          await document.fonts.ready;
        } catch {
          /* ignore */
        }
      }
      if (cancelled) return;

      const main = document.getElementById("sc-root");
      if (main && window.ScrollCraft && main.dataset.scMounted !== "1") {
        try {
          window.ScrollCraft.mount(main);
          main.dataset.scMounted = "1";
        } catch {
          /* ignore engine mount failure */
        }
      }

      if (!main || main.dataset.scMounted !== "1") {
        document.querySelectorAll<HTMLElement>("[data-sc-cue]").forEach((el) => {
          el.style.opacity = "1";
          el.style.transform = "none";
        });
        document.querySelectorAll<HTMLElement>("[data-sc-reveal]").forEach((el) => {
          el.style.clipPath = "none";
        });
        document.querySelectorAll<HTMLElement>("[data-sc-in]").forEach((el) => {
          el.classList.add("sc-in");
          Array.from(el.children).forEach((k) => (k as HTMLElement).classList.add("sc-in"));
        });
      }

      wireChrome();
    }

    function wireChrome() {
      const rail = document.getElementById("vx-rail");
      const label = document.getElementById("vx-st-section");
      const items = rail ? Array.from(rail.querySelectorAll<HTMLLIElement>("li[data-for]")) : [];
      const targets = items
        .map((li) => document.getElementById(li.dataset.for || ""))
        .filter((el): el is HTMLElement => Boolean(el));
      if (!targets.length) return;

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const id = entry.target.id;
            items.forEach((li) => li.classList.toggle("is-on", li.dataset.for === id));
            const on = items.find((li) => li.dataset.for === id);
            if (label && on) label.textContent = on.dataset.label || id;
            // The modules act pans cards across the full viewport, straight
            // under the fixed rail. Nothing can sit there, so the rail steps
            // aside for that one act.
            rail?.classList.toggle("is-hidden", id === "modules");
          });
        },
        { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
      );
      targets.forEach((t) => io.observe(t));
      cleanups.push(() => io.disconnect());
    }

    boot();

    return () => {
      cancelled = true;
      cleanups.forEach((fn) => fn());
      root.classList.remove("vx-js");
    };
  }, []);

  return null;
}
