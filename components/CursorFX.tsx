"use client";

import { useEffect, useRef } from "react";
import { useSpring, animated } from "@react-spring/web";

const INTERACTIVE_SELECTOR =
  "a, .btn, .work-tile, .pricing-card, .faq-item summary";

export default function CursorFX() {
  const dotRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  // The outer ring trails the pointer with real spring physics (a light,
  // slightly-underdamped spring) for the fluid, lagging-behind feel
  // react-spring.dev uses on its own cursor/hero motion — the dot stays
  // glued to the pointer for precision, the ring drifts a beat behind it.
  const [ringStyle, ringApi] = useSpring(() => ({
    x: 0,
    y: 0,
    scale: 1,
    config: { mass: 0.6, tension: 280, friction: 20 },
  }));

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    const onMove = (e: MouseEvent) => {
      dot.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      ringApi.start({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    // Event delegation instead of a one-time querySelectorAll: this site
    // now has multiple routes (page transitions swap the DOM under this
    // component, which lives in the root layout and never remounts), so
    // binding hover listeners to specific nodes once would go stale the
    // moment you navigate. Delegating to document + closest() keeps
    // working no matter what content is currently mounted.
    const onPointerOver = (e: PointerEvent) => {
      if ((e.target as Element)?.closest?.(INTERACTIVE_SELECTOR)) {
        ringApi.start({ scale: 2.4 });
      }
    };
    const onPointerOut = (e: PointerEvent) => {
      const related = e.relatedTarget as Element | null;
      if (
        (e.target as Element)?.closest?.(INTERACTIVE_SELECTOR) &&
        !related?.closest?.(INTERACTIVE_SELECTOR)
      ) {
        ringApi.start({ scale: 1 });
      }
    };
    document.addEventListener("pointerover", onPointerOver);
    document.addEventListener("pointerout", onPointerOut);

    // rAF-batched scroll: at most one style write per animation frame
    let scrollFrame = 0;
    const applyScroll = () => {
      const h = document.documentElement;
      const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      if (progressRef.current) progressRef.current.style.width = pct + "%";
      scrollFrame = 0;
    };
    const onScroll = () => {
      if (!scrollFrame) scrollFrame = requestAnimationFrame(applyScroll);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // Same reasoning for scroll-reveal: a MutationObserver watches for any
    // `.reveal` element entering the DOM (initial load AND every later
    // page transition) and hands it to the IntersectionObserver, instead
    // of a single querySelectorAll that only ever sees the first page.
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const observeReveal = (root: ParentNode) => {
      root.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    };
    observeReveal(document);

    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) return;
          if (node.matches(".reveal")) io.observe(node);
          observeReveal(node);
        });
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("pointerover", onPointerOver);
      document.removeEventListener("pointerout", onPointerOut);
      io.disconnect();
      mo.disconnect();
      if (scrollFrame) cancelAnimationFrame(scrollFrame);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="progress" ref={progressRef} />
      <animated.div
        className="cursor"
        style={{
          left: 0,
          top: 0,
          x: ringStyle.x,
          y: ringStyle.y,
          scale: ringStyle.scale,
        }}
      />
      <div className="cursor-dot" ref={dotRef} />
    </>
  );
}
