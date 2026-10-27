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
              The hardest part of building <strong>Warrantix</strong> wasn&apos;t
              the screens — it was modeling a sales pipeline where one lead
              moves through calls, quotes, and callbacks without losing its
              history. A flat table couldn&apos;t hold that. I split it into
              a relational schema — leads, activities, and outcomes as
              separate linked tables in Prisma — so the whole team can open
              one customer and see their entire timeline, not just their
              current status.
            </p>

            <div className="evidence-list">
              <div className="evidence-item">
                <div className="evidence-head">
                  <h4>Warrantix — CRM</h4>
                  <span className="status-tag status-progress">
                    Personal project · Built, rollout to team in progress
                  </span>
                </div>
                <p>
                  Built solo end to end: the Prisma data model connecting
                  leads/customers/callbacks, the pipeline board, and the
                  dashboard views. Live now; still finishing the rollout to
                  my own sales office.
                </p>
                <a
                  href="https://warrantix-peach.vercel.app"
                  target="_blank"
                  rel="noopener"
                >
                  View live ↗
                </a>
              </div>

              <div className="evidence-item">
                <div className="evidence-head">
                  <h4>Freelancer Proposal Tracker</h4>
                  <span className="status-tag status-internship">
                    Internship project · Zynvex · Completed
                  </span>
                </div>
                <p>
                  Built the Kanban drag-and-drop board, the Recharts revenue
                  dashboard, and the jsPDF report generator — the three
                  pieces that actually moved it from &quot;list of
                  proposals&quot; to a tool a freelancer would open daily.
                </p>
                <a
                  href="https://freelancer-proposal-tracker.netlify.app"
                  target="_blank"
                  rel="noopener"
                >
                  View live ↗
                </a>{" "}
                <a
                  href="https://github.com/html-moiz03/freelancer-proposal-tracker"
                  target="_blank"
                  rel="noopener"
                >
                  Code ↗
                </a>
              </div>

              <div className="evidence-item">
                <div className="evidence-head">
                  <h4>Coastal Spoon — restaurant site</h4>
                  <span className="status-tag status-internship">
                    Internship project · DecodeLabs · Completed
                  </span>
                </div>
                <p>
                  Built the table-reservation form with full field validation
                  and ARIA labeling, then went back later and split a single
                  monolithic file into separate CSS/JS during a refactor
                  pass.
                </p>
                <a
                  href="https://the-coastal-spoon4.netlify.app/"
                  target="_blank"
                  rel="noopener"
                >
                  View live ↗
                </a>{" "}
                <a
                  href="https://github.com/html-moiz03/decodelabs_task4"
                  target="_blank"
                  rel="noopener"
                >
                  Code ↗
                </a>
              </div>
            </div>
          </div>
          <div className="about-fact reveal">
            <span className="fact-label">Fact 01</span>
            <div className="fact-number">
              Latest ship: <span className="accent">HN Solutions</span>
            </div>
            <span className="status-tag status-personal" style={{ marginBottom: 14, display: "inline-block" }}>
              Personal project · Completed
            </span>
            <p>
              Client-facing site for an outbound sales BPO I co-founded —
              services, process, team, and standards pages, built end to end
              and shipped.
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
              <div className="process-head">
                <h4>Meta Front-End Developer Certificate</h4>
                <span className="status-tag status-done">Completed</span>
              </div>
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
              <div className="process-head">
                <h4>CodeAlpha → DecodeLabs → Zynvex Solutions</h4>
                <span className="status-tag status-done">
                  3 internships · Completed
                </span>
              </div>
              <p>
                Shipped an image gallery, music player, and portfolio at
                CodeAlpha; a full restaurant site with reservations at
                DecodeLabs; and a proposal-tracker CRM at Zynvex.
              </p>
            </div>
          </div>
          <div
            className="process-row reveal"
            style={{ ["--pbg" as string]: "#ffb389" }}
          >
            <span className="process-num">04</span>
            <div>
              <div className="process-head">
                <h4>Building Warrantix, hunting freelance clients</h4>
                <span className="status-tag status-progress">
                  In progress
                </span>
              </div>
              <p>
                Rolling my own CRM out to my warranty sales office, then
                moving straight into the next portfolio piece — this site
                included.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- HOW I WORK (light) ---------- */}
      <section className="how-section">
        <span className="section-tag reveal">03 / HOW I WORK</span>
        <h2 className="section-title-huge reveal">From brief to live.</h2>
        <div className="how-list">
          <div className="how-row reveal">
            <span className="how-num">01</span>
            <div>
              <h4>Requirements</h4>
              <p>
                I write down exactly what has to work, in plain language —
                what breaks today, what should happen instead. For
                Warrantix that meant sitting down with my own sales team and
                mapping their actual call-to-close workflow before writing a
                line of code.
              </p>
            </div>
          </div>
          <div className="how-row reveal">
            <span className="how-num">02</span>
            <div>
              <h4>Prototyping</h4>
              <p>
                I rough out screens and flows with static mock data first, so
                layout and navigation decisions get tested fast without
                waiting on a real backend or real data to exist yet.
              </p>
            </div>
          </div>
          <div className="how-row reveal">
            <span className="how-num">03</span>
            <div>
              <h4>Implementation</h4>
              <p>
                For anything with real data — a CRM, a dashboard — I build
                the schema and API routes first, then the UI on top. Getting
                the data model right before touching a pixel is what made
                Warrantix&apos;s pipeline actually hold up.
              </p>
            </div>
          </div>
          <div className="how-row reveal">
            <span className="how-num">04</span>
            <div>
              <h4>Testing</h4>
              <p>
                I click through every flow myself as the end user would —
                bad input, empty states, a slow connection — before calling
                anything done, not just the happy path I built it for.
              </p>
            </div>
          </div>
          <div className="how-row reveal">
            <span className="how-num">05</span>
            <div>
              <h4>Deployment</h4>
              <p>
                I deploy early and keep deploying — most of what I build goes
                live on Vercel from the first working version, so I&apos;m
                testing against the real production environment from day
                one instead of finding deployment issues at the end.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
