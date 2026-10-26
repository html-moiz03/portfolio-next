import Image from "next/image";
import CursorFX from "@/components/CursorFX";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import WorkTile from "@/components/WorkTile";
import { projects } from "@/data/projects";

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

export default function Home() {
  return (
    <>
      <div className="noise" />
      <SmoothScroll />
      <CursorFX />

      <header>
        <a href="#top" className="logo">
          MOIZ//
        </a>
        <nav>
          <a href="#about">Studio</a>
          <a href="#work">Projects</a>
          <a href="#services">Services</a>
          <a href="#work-with-me">Pricing</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* ---------- HERO (dark) ---------- */}
      <section className="hero" id="top">
        <span className="hero-watermark" aria-hidden="true">
          MOIZ
        </span>
        <span className="hero-eyebrow">
          <span className="dot" /> AVAILABLE FOR FREELANCE WORK
        </span>
        <h1>
          <span className="line">
            <span>MALIK</span>
          </span>
          <span className="line line-moiz">
            <span>ABDUL MOIZ</span>
          </span>
          <span className="line">
            <span>BUILDS WEB.</span>
          </span>
          <span className="hero-pop-wrap">
            <Image
              src="/sculpture.jpg"
              alt="Marble bust sculpture portrait"
              width={1536}
              height={1024}
              priority
              className="hero-pop"
            />
          </span>
        </h1>
        <p className="hero-lead">
          Frontend developer in Rawalpindi, Pakistan — I build fast,
          accessible interfaces, CRMs, and marketing sites for founders who
          need to ship.
        </p>
        <div className="hero-ctas">
          <a href="#work-with-me" className="btn">
            See how we can work together
          </a>
          <a
            href="https://github.com/html-moiz03"
            target="_blank"
            rel="noopener"
            className="btn alt"
          >
            GitHub ↗
          </a>
        </div>
      </section>

      {/* ---------- STATS (light) ---------- */}
      <section className="stats-section">
        <div className="stats-grid">
          <div className="stats-copy reveal">
            <span className="section-tag">MOIZ™</span>
            <h2>
              I help founders ship <span className="accent">strategic</span>{" "}
              products that are thoughtful, fast, and built to last.
            </h2>
          </div>
          <div className="stat-big reveal">
            <div className="stat-big-number">9+</div>
            <p>Public repos shipped and documented on GitHub.</p>
          </div>
          <div className="stat-big reveal">
            <div className="stat-big-number">3</div>
            <p>Internships completed — CodeAlpha, DecodeLabs, Zynvex.</p>
          </div>
          <div className="stat-big reveal">
            <div className="stat-big-number">6</div>
            <p>Full projects shipped end to end, live in production.</p>
          </div>
        </div>
      </section>

      {/* ---------- ABOUT QUOTE (light) ---------- */}
      <section id="about" className="about-quote-section">
        <span className="section-tag reveal">01 / ABOUT</span>
        <h2 className="quote-heading reveal">
          Not a <span className="accent">&quot;vibecoder.&quot;</span>
        </h2>
        <div className="about-grid">
          <div className="about-text reveal">
            <p>
              I switched into frontend development after years in{" "}
              <strong>
                business development, BPO sales, and team leadership
              </strong>{" "}
              — plus stretches in medical billing/credentialing and Umrah
              travel consulting. Different world, same instinct: figure out
              what people actually need and ship it.
            </p>
            <p>
              Now I&apos;m working through a{" "}
              <strong>BSc in Computer Science</strong> while building real,
              working projects — a restaurant site with full reservation
              validation, a CRM used in a warranty sales office, internship
              builds for three different programs. I know the basics well
              and I&apos;m climbing fast, on purpose, in public.
            </p>
          </div>
          <div className="about-fact reveal">
            <span className="fact-label">Fact 01</span>
            <div className="fact-number">
              Currently <span className="accent">building Warrantix</span>
            </div>
            <p>
              A full CRM for my own warranty sales team — leads, customers,
              callbacks, tasks — before I take on new freelance clients.
            </p>
            <a
              href="https://warrantix-peach.vercel.app"
              target="_blank"
              rel="noopener"
            >
              See it live ↗
            </a>
          </div>
        </div>
      </section>

      <div className="marquee-wrap">
        <div className="marquee">
          <span>
            REACT <em>✦</em> NEXT.JS <em>✦</em> JAVASCRIPT <em>✦</em>{" "}
            ACCESSIBLE UI <em>✦</em> ANIMATION <em>✦</em> VITE <em>✦</em>{" "}
            FREELANCE READY <em>✦</em>
          </span>
          <span>
            REACT <em>✦</em> NEXT.JS <em>✦</em> JAVASCRIPT <em>✦</em>{" "}
            ACCESSIBLE UI <em>✦</em> ANIMATION <em>✦</em> VITE <em>✦</em>{" "}
            FREELANCE READY <em>✦</em>
          </span>
        </div>
      </div>

      {/* ---------- LATEST WORK (light) ---------- */}
      <section id="work" className="work-section">
        <span className="section-tag reveal">02 / LATEST WORK</span>
        <h2 className="section-title-huge reveal">Latest work</h2>
        <p className="work-lead reveal">
          Six projects, from a warranty-office CRM to a restaurant site with
          a full reservation flow. Each tile opens the live build.
        </p>
        <div className="work-grid">
          {projects.map((p) => (
            <WorkTile p={p} key={p.title} />
          ))}
        </div>
      </section>

      {/* ---------- SERVICES (dark, huge type) ---------- */}
      <section id="services" className="services-section">
        <div className="services-intro">
          <span className="section-tag">SERVICES</span>
          <h2>
            Work built to help founders move faster and ship with
            confidence.
          </h2>
          <a href="#work-with-me" className="inline-link">
            See how we can work together ↗
          </a>
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

      {/* ---------- PROCESS (peach accent) ---------- */}
      <section id="process" className="process-section">
        <span className="section-tag reveal">03 / HOW I GOT HERE</span>
        <h2 className="section-title-huge reveal">The winding path.</h2>
        <div className="process-list">
          <div className="process-row reveal" style={{ ["--pbg" as string]: "#ffe3d1" }}>
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
          <div className="process-row reveal" style={{ ["--pbg" as string]: "#ffd4bd" }}>
            <span className="process-num">02</span>
            <div>
              <h4>Meta Front-End Developer Certificate</h4>
              <p>
                Coursera certification, plus ongoing BSc in Computer Science
                — building the fundamentals underneath the projects.
              </p>
            </div>
          </div>
          <div className="process-row reveal" style={{ ["--pbg" as string]: "#ffc4a3" }}>
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
          <div className="process-row reveal" style={{ ["--pbg" as string]: "#ffb389" }}>
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

      {/* ---------- WORK WITH ME / PRICING (light) ---------- */}
      <section id="work-with-me" className="pricing-section">
        <span className="section-tag reveal">04 / WORK WITH ME</span>
        <h2 className="section-title-huge reveal">How we can work together</h2>
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
                <span className="faq-num">{String(i + 1).padStart(2, "0")}</span>
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* ---------- CONTACT (dark, big type) ---------- */}
      <section id="contact" className="contact-section">
        <div className="contact-box reveal">
          <h2>
            Let&apos;s build
            <br />
            something loud.
          </h2>
          <p>
            Open to freelance frontend work — landing pages, dashboards,
            CRMs, or anything that needs to feel alive. Reach out and
            let&apos;s talk about it.
          </p>
          <div className="contact-links">
            <a href="mailto:abdulmoizzaheer0997@gmail.com" className="solid">
              Email Me ↗
            </a>
            <a
              href="https://github.com/html-moiz03"
              target="_blank"
              rel="noopener"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/malik-abdul-moiz-zaheer-awan-6a9997259"
              target="_blank"
              rel="noopener"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
