import Image from "next/image";
import Link from "next/link";
import CountUp from "@/components/CountUp";

export default function Home() {
  return (
    <>
      {/* ---------- HERO (full-bleed sculpture photo) ---------- */}
      <section className="hero" id="top">
        <div className="hero-bg">
          <Image
            src="/sculpture.jpg"
            alt="Marble bust sculpture portrait"
            fill
            priority
            sizes="100vw"
            className="hero-bg-img"
          />
          <div className="hero-bg-overlay" />
        </div>

        <div className="hero-top-row">
          <span className="hero-eyebrow">
            <span className="dot" /> AVAILABLE FOR FREELANCE WORK
          </span>
          <ul className="hero-tags">
            <li>Frontend engineering</li>
            <li>CRMs &amp; dashboards</li>
            <li>Marketing sites</li>
            <li>UI polish &amp; fixes</li>
          </ul>
        </div>

        <div className="hero-bottom-row">
          <h1 className="hero-heading">
            <span className="line">
              <span>MALIK</span>
            </span>
            <span className="line line-moiz">
              <span>ABDUL MOIZ</span>
            </span>
            <span className="line">
              <span>BUILDS WEB.</span>
            </span>
          </h1>
          <div className="hero-side">
            <p className="hero-lead">
              Frontend developer in Rawalpindi, Pakistan — I build fast,
              accessible interfaces, CRMs, and marketing sites for founders
              who need to ship.
            </p>
            <div className="hero-ctas">
              <Link href="/pricing" className="btn">
                See how we can work together
              </Link>
              <a
                href="https://github.com/html-moiz03"
                target="_blank"
                rel="noopener"
                className="btn alt"
              >
                GitHub ↗
              </a>
            </div>
          </div>
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
            <CountUp end={9} suffix="+" />
            <p>Public repos shipped and documented on GitHub.</p>
          </div>
          <div className="stat-big reveal">
            <CountUp end={3} />
            <p>Internships completed — CodeAlpha, DecodeLabs, Zynvex.</p>
          </div>
          <div className="stat-big reveal">
            <CountUp end={6} />
            <p>Full projects shipped end to end, live in production.</p>
          </div>
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

      {/* ---------- HOME CTA (dark, big type) ---------- */}
      <section className="contact-section">
        <div className="contact-box reveal">
          <h2>
            See the work,
            <br />
            then let&apos;s talk.
          </h2>
          <p>
            Five shipped projects — CRMs, marketing sites, and client-facing
            builds — plus how we can work together if something here fits
            what you need.
          </p>
          <div className="contact-links">
            <Link href="/projects" className="solid">
              View projects ↗
            </Link>
            <Link href="/contact">Get in touch ↗</Link>
          </div>
        </div>
      </section>
    </>
  );
}
