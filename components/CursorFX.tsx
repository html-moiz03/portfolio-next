"use client";

import { useEffect, useRef } from "react";
import { useSpring, animated } from "@react-spring/web";

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

    const interactive = document.querySelectorAll(
      "a, .skill-pill, .project-card"
    );
    const onEnter = () => ringApi.start({ scale: 2.4 });
    const onLeave = () => ringApi.start({ scale: 1 });
    interactive.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

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
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
      interactive.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
      io.disconnect();
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
