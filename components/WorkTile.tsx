"use client";

import { useSpring, animated } from "@react-spring/web";
import { useRef } from "react";
import Image from "next/image";
import type { Project } from "@/data/projects";

// Big full-bleed photo tile with an overlay title, the way Lovera's
// "Latest projects" grid works — the image IS the card. A soft spring
// lift/zoom on hover (same mass/tension/friction physics as the rest of
// the site) stands in for their hover-reveal motion.
export default function WorkTile({ p }: { p: Project }) {
  const ref = useRef<HTMLAnchorElement>(null);

  const [style, api] = useSpring(() => ({
    scale: 1,
    y: 0,
    config: { mass: 1, tension: 300, friction: 26 },
  }));

  return (
    <animated.a
      ref={ref}
      href={p.liveUrl ?? p.codeUrl ?? "#"}
      target="_blank"
      rel="noopener"
      className="work-tile reveal"
      style={{ ["--accent" as string]: p.accent }}
      onMouseEnter={() => api.start({ scale: 1.04, y: -4 })}
      onMouseLeave={() => api.start({ scale: 1, y: 0 })}
    >
      <animated.div
        className="work-tile-img"
        style={{
          transform: style.scale.to(
            (s) => `scale(${s}) translateY(${style.y.get()}px)`
          ),
        }}
      >
        <Image
          src={p.image}
          alt={`${p.title} screenshot`}
          fill
          sizes="(max-width: 860px) 100vw, 50vw"
          style={{ objectFit: "cover", objectPosition: "top" }}
        />
      </animated.div>
      <div className="work-tile-overlay" />
      <div className="work-tile-meta">
        <span className="work-tile-index">
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
      </div>
    </animated.a>
  );
}
