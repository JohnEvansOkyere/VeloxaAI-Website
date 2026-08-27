import { chromium } from 'playwright-core';

const WIDTHS = [320, 360, 390, 430, 768];
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome' });

for (const w of WIDTHS) {
  const ctx = await b.newContext({
    viewport: { width: w, height: 844 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1',
  });
  const p = await ctx.newPage();
  await p.goto('http://localhost:4500/', { waitUntil: 'networkidle' });
  await p.waitForTimeout(1200);
  // walk the page so lazy/scroll-driven content settles
  await p.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 600) {
      window.scrollTo(0, y); await new Promise(r => setTimeout(r, 30));
    }
    window.scrollTo(0, 0); await new Promise(r => setTimeout(r, 200));
  });

  const r = await p.evaluate(() => {
    const vw = window.innerWidth;
    const overflow = [];
    document.querySelectorAll('body *').forEach(el => {
      const b = el.getBoundingClientRect();
      if (b.width === 0 || b.height === 0) return;
      const st = getComputedStyle(el);
      if (st.position === 'fixed') return;
      // an element whose own box pokes past the viewport, ignoring ones inside
      // a deliberate horizontal scroll region
      let par = el.parentElement, inScroller = false;
      while (par && par !== document.body) {
        const ps = getComputedStyle(par);
        if (ps.overflowX === 'auto' || ps.overflowX === 'scroll' || ps.overflowX === 'hidden' || ps.overflowX === 'clip') { inScroller = true; break; }
        par = par.parentElement;
      }
      if (inScroller) return;
      if (b.right > vw + 1 || b.left < -1) {
        overflow.push({ tag: el.tagName.toLowerCase(), cls: (el.className || '').toString().slice(0, 48), left: Math.round(b.left), right: Math.round(b.right) });
      }
    });

    // tap targets
    const small = [];
    document.querySelectorAll('a, button, input, textarea, summary, [role=button]').forEach(el => {
      const b = el.getBoundingClientRect();
      if (b.width === 0 || b.height === 0) return;
      if (b.height < 40 || b.width < 40) {
        small.push({ tag: el.tagName.toLowerCase(), txt: (el.textContent || el.getAttribute('aria-label') || '').trim().slice(0, 34), w: Math.round(b.width), h: Math.round(b.height) });
      }
    });

    // smallest rendered font on real text
    let minFont = 99, minSample = '';
    document.querySelectorAll('p, span, li, td, th, a, label, summary, h1, h2, h3').forEach(el => {
      if (!el.textContent || !el.textContent.trim()) return;
      if (el.children.length) return;
      const fs = parseFloat(getComputedStyle(el).fontSize);
      if (fs < minFont) { minFont = fs; minSample = el.textContent.trim().slice(0, 30); }
    });

    return {
      vw,
      docScrollW: document.documentElement.scrollWidth,
      bodyScrollW: document.body.scrollWidth,
      horizontalOverflow: document.documentElement.scrollWidth > vw + 1,
      offenders: overflow.slice(0, 8),
      offenderCount: overflow.length,
      smallTargets: small.slice(0, 10),
      smallTargetCount: small.length,
      minFont, minSample,
      pageVh: +(document.body.scrollHeight / window.innerHeight).toFixed(1),
      railVisible: getComputedStyle(document.getElementById('vx-rail')).display,
      wiresVisible: getComputedStyle(document.querySelector('.vx-board__wires')).display,
    };
  });
  console.log(JSON.stringify({ width: w, ...r }, null, 1));
  await ctx.close();
}
await b.close();
