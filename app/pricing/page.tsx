import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing — Malik Abdul Moiz",
};

const faqs = [
  {
    q: "What's the typical process?",
    a: "A short discovery chat to scope the work, a plan with milestones, then build in visible stages so you're never waiting on a single big reveal.",
  },
  {
    q: "Do you work with existing codebases?",
    a: "Yes — plenty of my work is picking up an existing React/Next.js project, fixing bugs, or shipping new features inside it rather than starting from scratch.",
  },
  {
    q: "How do we scope cost and timeline?",
    a: "After the discovery chat I send a written quote with a timeline before anything starts, so there's no ambiguity about what's included.",
  },
  {
    q: "Can you handle the backend too?",
    a: "For CRMs and dashboards, yes — Prisma, Supabase, and API routes are part of my regular stack alongside the frontend.",
  },
];

export default function Pricing() {
  return (
    <>
      {/* ---------- WORK WITH ME / PRICING (light) ---------- */}
      <section className="pricing-section" style={{ paddingTop: 160 }}>
        <span className="section-tag reveal">01 / WORK WITH ME</span>
        <h2 className="section-title-huge reveal">
          How we can work together
        </h2>
        <p className="work-lead reveal">
          Two ways in — tell me which fits and I&apos;ll follow up with a
          written quote and timeline before anything starts.
        </p>
        <div className="pricing-grid">
          <div className="pricing-card reveal">
            <h3>Project-based</h3>
            <p>
              A single, scoped build — a marketing site, a CRM module, a
              feature — delivered start to finish on an agreed timeline.
            </p>
            <ul>
              <li>+ Fixed scope &amp; written quote upfront</li>
              <li>+ Clear milestones, no surprise work</li>
              <li>+ Great for launches, rebrands, or one-off builds</li>
            </ul>
            <a
              href="mailto:abdulmoizzaheer0997@gmail.com?subject=Project-based work"
              className="btn dark"
            >
              Get a quote
            </a>
          </div>
          <div className="pricing-card reveal highlight">
            <h3>Ongoing support</h3>
            <p>
              Ad-hoc or recurring work — bug fixes, new features, dashboard
              tweaks — for a product you already have live.
            </p>
            <ul>
              <li>+ Pause or pick back up anytime</li>
              <li>+ Direct access, fast turnaround</li>
              <li>+ Good fit for a product that keeps evolving</li>
            </ul>
            <a
              href="mailto:abdulmoizzaheer0997@gmail.com?subject=Ongoing support"
              className="btn"
            >
              Let&apos;s talk
            </a>
          </div>
        </div>
      </section>

      {/* ---------- FAQ (light) ---------- */}
      <section className="faq-section">
        <span className="section-tag reveal">FAQ</span>
        <h2 className="section-title-huge reveal">Questions, answered.</h2>
        <div className="faq-list">
          {faqs.map((f, i) => (
            <details className="faq-item reveal" key={f.q}>
              <summary>
                <span>{f.q}</span>
                <span className="faq-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
