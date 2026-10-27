import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";

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
        <span className="section-tag">CONTACT</span>
        <h2>
          Let&apos;s build
          <br />
          something loud.
        </h2>
        <p>
          Best fit is CRMs/dashboards or a marketing site with real
          conversion mechanics — but I take on general frontend work too.
          Reach out and I&apos;ll follow up with questions, not a sales
          pitch.
        </p>

        <div className="contact-meta">
          <div>
            <span className="contact-meta-label">Availability</span>
            <span>Open to new freelance work now</span>
          </div>
          <div>
            <span className="contact-meta-label">Response time</span>
            <span>Within 24 hours</span>
          </div>
          <div>
            <span className="contact-meta-label">Best fit</span>
            <span>CRMs &amp; dashboards, marketing sites, general frontend</span>
          </div>
        </div>

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
          <Link href="/projects">See the work first ↗</Link>
        </div>
      </div>

      <div className="contact-form-wrap reveal">
        <h3>Or send the details directly</h3>
        <p>
          Fills in project type, budget, and your message, then opens it as
          a pre-filled email to me — nothing is sent anywhere else.
        </p>
        <ContactForm />
      </div>
    </section>
  );
}
