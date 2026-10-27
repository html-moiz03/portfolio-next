import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Services — Malik Abdul Moiz",
};

// Pull the matching project straight from the single source of truth
// (data/projects.ts) instead of duplicating image paths/URLs here, so a
// project swap updates every page it appears on.
const byTitle = (title: string) => projects.find((p) => p.title === title)!;

const services = [
  {
    name: "Frontend engineering",
    outcome:
      "Interfaces that hold up — fast on a slow connection, usable with a keyboard or a screen reader, not a pile of divs that only works in the demo. Built in React/Next.js with TypeScript, the stack behind every project below.",
    tags: ["React", "Next.js", "Vite", "TypeScript", "Accessible UI"],
    preview: {
      project: byTitle("Freelancer Proposal Tracker"),
      note: "Kanban board, live revenue charts, PDF export",
    },
  },
  {
    name: "CRMs & dashboards",
    outcome:
      "Tools for managing leads, tracking sales activity, monitoring revenue, and organizing a team around one shared pipeline — instead of a spreadsheet everyone's afraid to touch. I design the data model myself (schema, relationships, auth, role-based access) and build the UI on top of it.",
    tags: ["Prisma", "Supabase", "Auth", "Role-based access", "Recharts"],
    preview: {
      project: byTitle("Warrantix"),
      note: "My own CRM — leads, callbacks, team workspace",
      internal: true,
    },
  },
  {
    name: "Marketing sites",
    outcome:
      "Sites built to convert — multi-step forms that don't lose a lead halfway through, clear plans/pricing pages, and copy structured to actually get a visitor to fill out the form.",
    tags: ["Multi-step forms", "SEO basics", "Responsive", "Animation"],
    preview: {
      project: byTitle("US-MAN Global Services"),
      note: "Multi-step quote flow that keeps a lead's progress",
    },
  },
  {
    name: "UI polish & fixes",
    outcome:
      "Bug fixes, performance passes, and turning a design handoff into pixel-accurate, responsive code — the unglamorous work that makes a product feel finished instead of shipped-and-abandoned.",
    tags: ["Bug fixes", "Performance", "Design handoff", "Refactors"],
    preview: {
      project: byTitle("Lens — Image Gallery"),
      note: "Currently fixing an open grid-layout bug here — exactly this kind of work",
    },
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="services-section"
      style={{ paddingTop: 160 }}
    >
      <div className="services-intro">
        <span className="section-tag">SERVICES</span>
        <h2>
          Work built to help founders move faster and ship with confidence.
        </h2>
        <Link href="/pricing" className="inline-link">
          See how we can work together ↗
        </Link>
      </div>
      {services.map((s) => {
        const p = s.preview.project;
        const href = s.preview.internal ? "/projects" : p.liveUrl ?? "/projects";
        const external = !s.preview.internal;
        return (
          <div className="service-row reveal" key={s.name}>
            <div className="service-row-top">
              <h3>{s.name}</h3>
              <div className="service-tags">
                {s.tags.map((t) => (
                  <span key={t}>
                    <span className="plus">+</span> {t}
                  </span>
                ))}
              </div>
            </div>
            <p className="service-outcome">{s.outcome}</p>
            <a
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener" : undefined}
              className="service-preview"
            >
              <span className="service-preview-thumb">
                <Image src={p.image} alt={`${p.title} screenshot`} fill sizes="80px" />
              </span>
              <span className="service-preview-text">
                <span className="service-preview-title">{p.title} ↗</span>
                <span className="service-preview-note">{s.preview.note}</span>
              </span>
            </a>
          </div>
        );
      })}
    </section>
  );
}
