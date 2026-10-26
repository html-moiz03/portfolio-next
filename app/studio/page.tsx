import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Studio — Malik Abdul Moiz",
};

export default function Studio() {
  return (
    <>
      {/* ---------- ABOUT QUOTE (light) ---------- */}
      <section className="about-quote-section" style={{ paddingTop: 160 }}>
        <span className="section-tag reveal">01 / ABOUT</span>
        <h2 className="quote-heading reveal">
          Built the skills, <span className="accent">shipped the proof.</span>
        </h2>
        <div className="about-grid">
          <div className="about-text reveal">
            <p>
              I switched into frontend development chasing one instinct:
              figure out what people actually need and ship it. That turned
              into a <strong>BSc in Computer Science</strong> — completed —
              and a habit of building real, working projects instead of just
              studying them.
            </p>
            <p>
              A restaurant site with full reservation validation, a CRM used
              in a warranty sales office, internship builds across three
              different programs. Still early in the climb, but moving fast
              and shipping in public.
            </p>
          </div>
          <div className="about-fact reveal">
            <span className="fact-label">Fact 01</span>
            <div className="fact-number">
              Latest ship: <span className="accent">HN Solutions</span>
            </div>
            <p>
              Client-facing site for an outbound sales BPO — services,
              process, team, and standards pages, built end to end and
              shipped.
            </p>
            <a
              href="https://hn-solutions-nine.vercel.app"
              target="_blank"
              rel="noopener"
            >
              See it live ↗
            </a>
          </div>
        </div>
      </section>

      {/* ---------- PROCESS (peach accent) ---------- */}
      <section id="process" className="process-section">
        <span className="section-tag reveal">02 / HOW I GOT HERE</span>
        <h2 className="section-title-huge reveal">The winding path.</h2>
        <div className="process-list">
          <div
            className="process-row reveal"
            style={{ ["--pbg" as string]: "#ffe3d1" }}
          >
            <span className="process-num">01</span>
            <div>
              <h4>Business development &amp; sales</h4>
              <p>
                Years in BPO sales closing, team leadership, medical
                billing/credentialing, and Umrah travel consulting — where I
                learned how to actually talk to clients and close.
              </p>
            </div>
          </div>
          <div
            className="process-row reveal"
            style={{ ["--pbg" as string]: "#ffd4bd" }}
          >
            <span className="process-num">02</span>
            <div>
              <h4>Meta Front-End Developer Certificate</h4>
              <p>
                Coursera certification, plus a completed BSc in Computer
                Science — building the fundamentals underneath the projects.
              </p>
            </div>
          </div>
          <div
            className="process-row reveal"
            style={{ ["--pbg" as string]: "#ffc4a3" }}
          >
            <span className="process-num">03</span>
            <div>
              <h4>CodeAlpha → DecodeLabs → Zynvex Solutions</h4>
              <p>
                Shipped an image gallery, music player, and portfolio at
                CodeAlpha; a full restaurant site with reservations at
                DecodeLabs; and a React CRM plus warranty site at Zynvex.
              </p>
            </div>
          </div>
          <div
            className="process-row reveal"
            style={{ ["--pbg" as string]: "#ffb389" }}
          >
            <span className="process-num">04</span>
            <div>
              <h4>Building Warrantix, hunting freelance clients</h4>
              <p>
                Finishing my own CRM for my warranty sales office, then
                rolling straight into the next portfolio piece — this site
                included.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
