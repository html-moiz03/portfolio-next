import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services — Malik Abdul Moiz",
};

const services = [
  {
    name: "Frontend engineering",
    tags: ["React", "Next.js", "Vite", "TypeScript", "Accessible UI"],
  },
  {
    name: "CRMs & dashboards",
    tags: ["Prisma", "Supabase", "Recharts", "Auth", "Role-based access"],
  },
  {
    name: "Marketing sites",
    tags: ["Multi-step forms", "SEO basics", "Responsive", "Animation"],
  },
  {
    name: "UI polish & fixes",
    tags: ["Bug fixes", "Performance", "Design handoff", "Refactors"],
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
      {services.map((s) => (
        <div className="service-row reveal" key={s.name}>
          <h3>{s.name}</h3>
          <div className="service-tags">
            {s.tags.map((t) => (
              <span key={t}>
                <span className="plus">+</span> {t}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
