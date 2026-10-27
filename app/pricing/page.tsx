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
    q: "How much does a project typically cost?",
    a: "Project-based work usually starts around $300–$800 (roughly PKR 85,000–225,000, depending on the exchange rate) — a small marketing site sits at the low end, a CRM module or a multi-step form flow sits higher. These are rough starting ranges, not a quote: I'll always send a written quote with the actual scope and price before anything starts.",
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
    q: "How does ongoing support actually work?",
    a: "It's a monthly retainer, typically $150–$400/mo (roughly PKR 42,000–112,000) for an agreed scope or number of hours. Availability, response time, and how work outside that scope gets billed are all set in writing before we start — not assumed on either side.",
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
          Two ways in — rough starting ranges below so you know if this fits
          your budget before we talk; I&apos;ll always follow up with a
          written quote and timeline before anything starts.
        </p>
        <div className="pricing-grid">
          <div className="pricing-card reveal">
            <h3>Project-based</h3>
            <p className="price-tag">
              Starting around $300–$800{" "}
              <span>(≈ PKR 85,000–225,000, varies with the exchange rate)</span>
            </p>
            <p>
              A single, scoped build — a marketing site, a CRM module, a
              feature — delivered start to finish on an agreed timeline. The
              low end covers a small marketing site; a CRM module or
              multi-step form flow runs higher, scoped after discovery.
            </p>
            <ul>
              <li>+ Fixed scope &amp; written quote upfront</li>
              <li>+ Responsive implementation across devices</li>
              <li>+ Every feature we agreed on, built and working</li>
              <li>+ Deployed to production, not handed off as a zip file</li>
              <li>
                + Handover: code/repo access, short docs, and a defined
                bug-fix window after launch, agreed per project
              </li>
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
            <p className="price-tag">
              Monthly retainer, roughly $150–$400/mo{" "}
              <span>(≈ PKR 42,000–112,000)</span>
            </p>
            <p>
              Ad-hoc or recurring work — bug fixes, new features, dashboard
              tweaks — for a product you already have live, billed monthly
              for an agreed scope.
            </p>
            <ul>
              <li>+ Monthly retainer, scope agreed upfront</li>
              <li>+ Availability and response time set in writing, not assumed</li>
              <li>+ Direct access for anything inside that scope</li>
              <li>+ No long-term lock-in — pause or stop with notice</li>
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
