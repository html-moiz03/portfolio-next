"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

// One continuous swing pass across the name block, then a pause off-screen
// before looping. The overall arc (position/lean) is computed every frame
// in JS from the wrapper's live size, so it stays correct at any width.
// On top of that, the arm and legs are separate image layers (cut from the
// same source art) that rotate independently around their own shoulder/hip
// pivot — a simple cutout-puppet rig — so he visibly pumps his arm and
// kicks his legs while he swings, instead of the whole body just sliding
// as one rigid rectangle.
const CYCLE_MS = 5600;
const ACTIVE_FRACTION = 0.66;
const ARM_AMPLITUDE = 34; // degrees
const ARM_FREQUENCY = 7; // pumps across one full pass — "every letter"
const LEG_AMPLITUDE = 22;
const LEG_FREQUENCY = 7;

export default function SpiderSwing() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const charRef = useRef<HTMLDivElement>(null);
  const armRef = useRef<HTMLImageElement>(null);
  const legsRef = useRef<HTMLImageElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const char = charRef.current;
    const arm = armRef.current;
    const legs = legsRef.current;
    const path = pathRef.current;
    if (!wrap || !char || !arm || !legs || !path) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    let raf = 0;
    const start = performance.now();

    function frame(now: number) {
      const rect = wrap!.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      const charRect = char!.getBoundingClientRect();
      const cw = charRect.width || w * 0.1;
      const ch = charRect.height || cw * (1536 / 746);

      const activeMs = CYCLE_MS * ACTIVE_FRACTION;
      const elapsed = (now - start) % CYCLE_MS;

      let shown = false;
      let cx = w * 1.15;
      let cy = -h * 0.15;
      let angle = 0;
      let t = 0;

      if (elapsed < activeMs) {
        shown = true;
        t = elapsed / activeMs; // 0 -> 1 across the whole sweep
        const xPct = 1.15 - t * 1.35; // enters right, exits left
        const yPct = -0.12 + Math.sin(Math.PI * t) * 0.68; // dips through the middle
        cx = xPct * w - cw / 2;
        cy = yPct * h - ch / 2;

        // tangent of the path -> lean angle, like a real pendulum swing
        const dx = -1.35 * w;
        const dy = Math.PI * Math.cos(Math.PI * t) * 0.68 * h;
        angle = Math.atan2(dy, dx) * (180 / Math.PI) - 90;
        angle = Math.max(Math.min(angle, 55), -55);
      }

      char!.style.transform = `translate3d(${cx}px, ${cy}px, 0) rotate(${angle}deg)`;
      char!.style.opacity = shown ? "1" : "0";

      // limb puppetry: independent rotation around shoulder/hip pivots
      const armAngle =
        18 + ARM_AMPLITUDE * Math.sin(t * ARM_FREQUENCY * Math.PI * 2);
      const legAngle =
        LEG_AMPLITUDE * Math.sin(t * LEG_FREQUENCY * Math.PI * 2 + Math.PI);
      arm!.style.transform = `rotate(${armAngle}deg)`;
      legs!.style.transform = `rotate(${legAngle}deg)`;

      // web strand: anchored slightly above + ahead of his raised hand,
      // re-"attaching" each frame so it never trails into an absurd length
      const handX = cx + cw * 0.62;
      const handY = cy + ch * 0.22;
      const anchorX = handX + w * 0.04;
      const anchorY = -h * 0.12;
      const midX = (anchorX + handX) / 2;
      const midY = Math.min(anchorY, handY) - h * 0.08;

      path!.setAttribute(
        "d",
        `M ${anchorX} ${anchorY} Q ${midX} ${midY} ${handX} ${handY}`
      );
      path!.style.opacity = shown ? "1" : "0";

      raf = requestAnimationFrame(frame);
    }

    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="spider-swing" ref={wrapRef} aria-hidden="true">
      <svg className="spider-web-svg">
        <path ref={pathRef} className="spider-web-line" />
      </svg>
      <div className="spider-char" ref={charRef}>
        <Image
          ref={legsRef}
          src="/spider-legs.png"
          alt=""
          width={746}
          height={396}
          className="spider-part spider-legs"
        />
        <Image
          src="/spider-torso.png"
          alt=""
          width={746}
          height={1536}
          className="spider-part spider-torso"
        />
        <Image
          ref={armRef}
          src="/spider-arm.png"
          alt=""
          width={230}
          height={710}
          className="spider-part spider-arm"
        />
      </div>
    </div>
  );
}
