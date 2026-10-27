"use client";

import { useState } from "react";

const PROJECT_TYPES = [
  "CRM / dashboard",
  "Marketing or warranty site",
  "Ongoing support",
  "Something else",
];

const BUDGETS = [
  "Project-based — $300–$800",
  "Ongoing retainer — $150–$400/mo",
  "Not sure yet",
];

// No backend on this site, so this doesn't silently POST anywhere — it
// composes a pre-filled email and opens the visitor's own mail client on
// submit. What you see here is exactly what gets sent, nothing hidden.
export default function ContactForm() {
  const [projectType, setProjectType] = useState(PROJECT_TYPES[0]);
  const [budget, setBudget] = useState(BUDGETS[0]);
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Project inquiry — ${projectType}`;
    const body = `Project type: ${projectType}\nBudget range: ${budget}\n\n${message}`;
    window.location.href = `mailto:abdulmoizzaheer0997@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        <span>Project type</span>
        <select
          value={projectType}
          onChange={(e) => setProjectType(e.target.value)}
        >
          {PROJECT_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </label>

      <label>
        <span>Budget range</span>
        <select value={budget} onChange={(e) => setBudget(e.target.value)}>
          {BUDGETS.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </label>

      <label>
        <span>What do you need built?</span>
        <textarea
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="A couple of sentences on the project is plenty."
        />
      </label>

      <button type="submit" className="btn">
        Open email with these details
      </button>
    </form>
  );
}
