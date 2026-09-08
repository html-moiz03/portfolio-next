"use client";

import { useSpring, animated } from "@react-spring/web";
import { useRef } from "react";
import type { Project } from "@/data/projects";

// Watermelon-UI-style glass card + a real spring-physics tilt/lift on hover,
// the way react-spring.dev demonstrates its own library: motion driven by
// mass/tension/friction rather than a fixed-duration CSS transition, so it
// settles with a touch of natural overshoot instead of easing to a stop.
export default function ProjectCard({ p }: { p: Project }) {
  const ref = useRef<HTMLDivElement>(null);

  const [style, api] = useSpring(() => ({
    transform: "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)",
    boxShadowOffset: 9,
    config: { mass: 1, tension: 320, friction: 22 },
  }));

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    api.start({
      transform: `perspective(900px) rotateX(${py * -6}deg) rotateY(${
        px * 8
      }deg) translateY(-6px) scale(1.015)`,
      boxShadowOffset: 15,
    });
  };

  const onLeave = () => {
    api.start({
      transform:
        "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)",
      boxShadowOffset: 9,
    });
  };

  return (
    <animated.div
      ref={ref}
      className="project-card reveal"
      style={{
        ["--accent" as string]: p.accent,
        transform: style.transform,
        boxShadow: style.boxShadowOffset.to(
          (v) => `${v}px ${v}px 0 var(--ink)`
        ),
      }}
      onMouseMove={onMouseMove}
      onMouseLeave={onLeave}
    >
      <span className="project-index">
        {p.index} / {p.category}
      </span>
      <h3>{p.title}</h3>
      <p>{p.description}</p>
      <div className="tag-row">
        {p.tags.map((t) => (
          <span className="tag" key={t}>
            {t}
          </span>
        ))}
      </div>
      <div className="project-links">
        {p.liveUrl && (
          <a href={p.liveUrl} target="_blank" rel="noopener">
            Live Demo ↗
          </a>
        )}
        {p.codeUrl && (
          <a href={p.codeUrl} target="_blank" rel="noopener" className="ghost">
            {p.codeLabel ?? "Code"} ↗
          </a>
        )}
      </div>
    </animated.div>
  );
}
