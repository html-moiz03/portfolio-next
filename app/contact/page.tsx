import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Malik Abdul Moiz",
};

export default function Contact() {
  return (
    <section
      className="contact-section"
      style={{ minHeight: "100vh", paddingTop: 160 }}
    >
      <div className="contact-box reveal">
        <h2>
          Let&apos;s build
          <br />
          something loud.
        </h2>
        <p>
          Open to freelance frontend work — landing pages, dashboards, CRMs,
          or anything that needs to feel alive. Reach out and let&apos;s talk
          about it.
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
  );
}
