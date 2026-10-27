"use client";

import { useSpring, animated } from "@react-spring/web";
import { useRef } from "react";
import Image from "next/image";
import type { Project } from "@/data/projects";

// Big full-bleed photo tile with an overlay title, the way Lovera's
// "Latest projects" grid works — the image IS the card. A soft spring
// lift/zoom on hover (same mass/tension/friction physics as the rest of
// the site) stands in for their hover-reveal motion. Below the image: an
// explicit live-demo / source-code link row (never just "click the image
// and hope"), plus an expandable case study so a reviewer can tell what
// was actually built versus what's just claimed.
export default function WorkTile({ p }: { p: Project }) {
  const ref = useRef<HTMLDivElement>(null);

  const [style, api] = useSpring(() => ({
    scale: 1,
    y: 0,
    config: { mass: 1, tension: 300, friction: 26 },
  }));

  const cs = p.caseStudy;

  return (
    <div
      ref={ref}
      className="work-card reveal"
      style={{ ["--accent" as string]: p.accent }}
    >
      <a
        href={p.liveUrl ?? p.codeUrl ?? "#"}
        target="_blank"
        rel="noopener"
        className="work-tile"
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
      </a>

      <div className="work-card-footer">
        <div className="work-card-links">
          {p.liveUrl && (
            <a href={p.liveUrl} target="_blank" rel="noopener">
              {p.demoNote ?? "Live demo ↗"}
            </a>
          )}
          {p.codeUrl && (
            <a href={p.codeUrl} target="_blank" rel="noopener">
              Source code ↗
            </a>
          )}
        </div>

        <details className="work-case-study">
          <summary>
            <span>Case study</span>
            <span className="work-case-study-arrow">↓</span>
          </summary>
          <dl>
            <dt>Problem</dt>
            <dd>{cs.problem}</dd>
            <dt>My contribution</dt>
            <dd>{cs.contribution}</dd>
            <dt>Technical decisions</dt>
            <dd>{cs.decisions}</dd>
            <dt>Challenges</dt>
            <dd>{cs.challenges}</dd>
            <dt>Outcome</dt>
            <dd>{cs.outcome}</dd>
          </dl>
        </details>
      </div>
    </div>
  );
}
