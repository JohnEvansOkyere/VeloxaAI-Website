"use client";

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

export default function Enhance() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("vx-js");

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let cancelled = false;
    const cleanups: Array<() => void> = [];

    async function boot() {
      try {
        await loadScript("/scrollcraft.js");
      } catch {
        /* engine optional — folio/spine + native scroll still work */
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

      // Safety net: scrollcraft.css hides [data-sc-in] / reveal content until the
      // engine reveals it. If the engine never loaded, show everything so the
      // page is never blank.
      if (!main || main.dataset.scMounted !== "1") {
        document.querySelectorAll<HTMLElement>("[data-sc-in]").forEach((el) => {
          el.classList.add("sc-in");
          Array.from(el.children).forEach((k) => (k as HTMLElement).classList.add("sc-in"));
        });
        document.querySelectorAll<HTMLElement>("[data-sc-reveal]").forEach((el) => {
          el.style.clipPath = "none";
        });
      }

      wireMarginChrome();
    }

    function wireMarginChrome() {
      if (window.innerWidth < 1180) return; // desktop-only enhancement
      const spine = document.getElementById("vx-spine");
      const folio = document.getElementById("vx-folio");
      const folioNum = folio?.querySelector<HTMLElement>(".vx-folio__num");
      const folioTitle = folio?.querySelector<HTMLElement>(".vx-folio__title");
      const nodes = spine ? Array.from(spine.querySelectorAll<HTMLElement>(".vx-spine__node")) : [];
      const chapters = Array.from(document.querySelectorAll<HTMLElement>("[data-chapter]"));
      const darkBand = document.querySelector<HTMLElement>(".band--dark");
      if (!chapters.length) return;

      spine?.classList.add("is-live");
      folio?.classList.add("is-live");

      const firstTop = () => chapters[0].getBoundingClientRect().top + window.scrollY;
      const endEl = document.getElementById("vx-colophon") ?? chapters[chapters.length - 1];
      const lastTop = () => endEl.getBoundingClientRect().top + window.scrollY;

      let activeIndex = -1;

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const el = entry.target as HTMLElement;
            const idx = Number(el.dataset.chapter);
            if (Number.isNaN(idx)) return;
            activeIndex = idx;
            if (folioNum) folioNum.textContent = String(idx).padStart(2, "0");
            if (folioTitle) folioTitle.textContent = el.dataset.title ?? "";
            nodes.forEach((n, i) => n.classList.toggle("is-on", i <= idx - 1));
            spine?.classList.toggle("branch-open", idx === 3);
          });
        },
        { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
      );
      chapters.forEach((c) => io.observe(c));
      cleanups.push(() => io.disconnect());

      const onScroll = () => {
        if (raf) return;
        raf = requestAnimationFrame(() => {
          raf = 0;
          const start = firstTop() - window.innerHeight * 0.5;
          const end = lastTop() - window.innerHeight * 0.5;
          const p = end > start ? (window.scrollY - start) / (end - start) : 0;
          spine?.style.setProperty("--vx-p", String(Math.max(0, Math.min(1, p))));

          if (darkBand && spine) {
            const r = darkBand.getBoundingClientRect();
            const coverage =
              Math.max(0, Math.min(r.bottom, window.innerHeight) - Math.max(r.top, 0)) /
              window.innerHeight;
            const onDark = coverage > 0.55;
            spine.classList.toggle("on-dark", onDark);
            folio?.classList.toggle("on-dark", onDark);
          }
        });
      };
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll, { passive: true });
      cleanups.push(() => {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
      });

      // above chapter 1: reset folio to the title state
      const topIo = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && activeIndex !== 0) {
              activeIndex = 0;
              if (folioNum) folioNum.textContent = "00";
              if (folioTitle) folioTitle.textContent = "Field report";
              nodes.forEach((n) => n.classList.remove("is-on"));
              spine?.classList.remove("branch-open");
            }
          });
        },
        { threshold: 0.6 }
      );
      const title = document.getElementById("vx-title");
      if (title) {
        topIo.observe(title);
        cleanups.push(() => topIo.disconnect());
      }

      // fade the chrome away once the reading is done (notes + colophon)
      const tail = document.getElementById("faq");
      if (tail) {
        const tailIo = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              const fade = entry.isIntersecting;
              folio?.classList.toggle("is-fading", fade);
              spine?.classList.toggle("is-fading", fade);
            });
          },
          { rootMargin: "-30% 0px 0px 0px", threshold: 0 }
        );
        tailIo.observe(tail);
        cleanups.push(() => tailIo.disconnect());
      }
    }

    boot();

    return () => {
      cancelled = true;
      if (raf) cancelAnimationFrame(raf);
      cleanups.forEach((fn) => fn());
      root.classList.remove("vx-js");
    };
  }, []);

  return null;
}
