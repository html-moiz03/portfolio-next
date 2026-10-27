"use client";

import { useEffect, useRef, useState } from "react";

// Animates a number counting up from 0 to `end` once its wrapper scrolls
// into view. The real, final number is always the default render value —
// the animation is a pure visual enhancement layered on top of it, never
// a prerequisite for it. That matters because this is what a screen
// reader, a crawler, or anyone reading the page before JS finishes (or if
// it errors out) actually sees: the correct figure, not a stuck "0".
export default function CountUp({
  end,
  suffix = "",
  duration = 1400,
}: {
  end: number;
  suffix?: string;
  duration?: number;
}) {
  const [value, setValue] = useState(end);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced-motion: skip the animation, keep the real number.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            setValue(0);
            const start = performance.now();

            const tick = (now: number) => {
              const progress = Math.min((now - start) / duration, 1);
              // ease-out cubic
              const eased = 1 - Math.pow(1 - progress, 3);
              setValue(
                progress < 1 ? Math.round(eased * end) : end
              );
              if (progress < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [end, duration]);

  return (
    <div className="stat-big-number" ref={ref}>
      {value}
      {suffix}
    </div>
  );
}
