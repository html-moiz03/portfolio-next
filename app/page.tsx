import CursorFX from "@/components/CursorFX";
import Footer from "@/components/Footer";
import GlowOrbs from "@/components/GlowOrbs";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <>
      <div className="noise" />
      <CursorFX />

      <header>
        <a href="#top" className="logo">
          MOIZ//
        </a>
        <nav>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-blob" />
        <span className="hero-eyebrow">
          <span className="dot" /> AVAILABLE FOR FREELANCE WORK
        </span>
        <h1>
          <span className="line">
            <span>MALIK</span>
          </span>
          <span className="line">
            <span>ABDUL MOIZ</span>
          </span>
          <span className="line">
            <span>BUILDS WEB.</span>
          </span>
        </h1>
        <p className="lead">
          Frontend developer in Rawalpindi, Pakistan — turning loud ideas
          into fast, accessible, and genuinely fun-to-use interfaces.
          Vanilla JS, React, and a habit of over-animating everything.
        </p>
        <div className="hero-ctas">
          <a href="#work" className="btn">
            See the work ↓
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
        <div className="scroll-cue">
          <div className="bar" /> Scroll
        </div>
      </section>

      <div className="marquee-wrap">
        <div className="marquee">
          <span>
            REACT <em>•</em> NEXT.JS <em>•</em> JAVASCRIPT <em>•</em>{" "}
            ACCESSIBLE UI <em>•</em> ANIMATION <em>•</em> VITE <em>•</em>{" "}
            FREELANCE READY <em>•</em>
          </span>
          <span>
            REACT <em>•</em> NEXT.JS <em>•</em> JAVASCRIPT <em>•</em>{" "}
            ACCESSIBLE UI <em>•</em> ANIMATION <em>•</em> VITE <em>•</em>{" "}
            FREELANCE READY <em>•</em>
          </span>
        </div>
      </div>

      <section id="about">
        <GlowOrbs variant="a" />
        <span className="section-tag reveal">01 / ABOUT</span>
        <h2 className="section-title reveal">
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
            <p>
              Currently building <strong>Warrantix</strong>, a full CRM for
              my own warranty sales team — leads, customers, callbacks,
              tasks — before I take on new freelance clients.
            </p>
          </div>
          <div className="stat-cards">
            <div className="stat-card">
              <div className="num">9+</div>
              <div className="label">Public repos</div>
            </div>
            <div className="stat-card">
              <div className="num">3</div>
              <div className="label">Internships completed</div>
            </div>
            <div className="stat-card">
              <div className="num">6</div>
              <div className="label">Shipped projects</div>
            </div>
            <div className="stat-card">
              <div className="num">100%</div>
              <div className="label">Self-taught momentum</div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills">
        <span className="section-tag reveal">02 / TOOLKIT</span>
        <h2 className="section-title reveal">
          What I <span className="accent">reach for.</span>
        </h2>
        <div className="skills-wrap">
          {[
            "HTML5",
            "CSS3 / Animations",
            "JavaScript (ES6+)",
            "React + Vite",
            "Next.js",
            "Prisma + Supabase",
            "Vercel / Netlify",
            "ARIA Accessibility",
            "Responsive / Mobile-first",
            "Git & GitHub",
            "Recharts / Data Viz",
            "Form Validation & UX",
          ].map((skill) => (
            <span className="skill-pill reveal" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="work">
        <GlowOrbs variant="b" />
        <span className="section-tag reveal">03 / SELECTED WORK</span>
        <h2 className="section-title reveal">
          Projects that <span className="accent">actually ship.</span>
        </h2>

        <div className="project-grid">
          {projects.map((p) => (
            <ProjectCard p={p} key={p.title} />
          ))}
        </div>

        <div className="more-strip reveal">
          <div>
            <strong>Also on the bench:</strong> GymTrack PWA w/ AI coaching
            (FitBot), a Mario-style Canvas platformer, VOID STRIKER space
            shooter, AIM LAB aim trainer, and a Calc calculator app.
          </div>
          <div className="chips">
            <span className="chip">GymTrack</span>
            <span className="chip">Canvas Games</span>
            <span className="chip">Calc</span>
          </div>
        </div>
      </section>

      <section id="process">
        <span className="section-tag reveal">04 / HOW I GOT HERE</span>
        <h2 className="section-title reveal">
          The <span className="accent">winding path.</span>
        </h2>
        <div className="timeline">
          <div className="t-item reveal">
            <span className="t-tag">Before code</span>
            <h4>Business Development &amp; Sales</h4>
            <p>
              Years in BPO sales closing, team leadership, medical
              billing/credentialing, and Umrah travel consulting — where I
              learned how to actually talk to clients and close.
            </p>
          </div>
          <div className="t-item reveal">
            <span className="t-tag">Foundation</span>
            <h4>Meta Front-End Developer Certificate</h4>
            <p>
              Coursera certification, plus ongoing BSc in Computer Science —
              building the fundamentals underneath the projects.
            </p>
          </div>
          <div className="t-item reveal">
            <span className="t-tag">Internships</span>
            <h4>CodeAlpha → DecodeLabs → Zynvex Solutions</h4>
            <p>
              Shipped an image gallery, music player, and portfolio at
              CodeAlpha; a full restaurant site with reservations at
              DecodeLabs; and a React CRM plus warranty site at Zynvex.
            </p>
          </div>
          <div className="t-item reveal">
            <span className="t-tag">Now</span>
            <h4>Building Warrantix, hunting freelance clients</h4>
            <p>
              Finishing my own CRM for my warranty sales office, then
              rolling straight into the next portfolio piece — this site
              included.
            </p>
          </div>
        </div>
      </section>

      <section id="contact">
        <GlowOrbs variant="c" />
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
