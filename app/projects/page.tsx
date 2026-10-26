import type { Metadata } from "next";
import WorkTile from "@/components/WorkTile";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects — Malik Abdul Moiz",
};

export default function Projects() {
  return (
    <section className="work-section" style={{ paddingTop: 160 }}>
      <span className="section-tag reveal">01 / LATEST WORK</span>
      <h2 className="section-title-huge reveal">Latest work</h2>
      <p className="work-lead reveal">
        Five projects, from a warranty-office CRM to a client-facing BPO
        site. Each tile opens the live build.
      </p>
      <div className="work-grid">
        {projects.map((p) => (
          <WorkTile p={p} key={p.title} />
        ))}
      </div>
    </section>
  );
}
