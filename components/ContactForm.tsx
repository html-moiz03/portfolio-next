"use client";

import { useEffect, useRef, useState } from "react";

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

// A native <select>'s closed state takes our CSS fine, but the dropdown
// POPUP is drawn by the browser/OS using its own color scheme — setting
// `color-scheme: dark` on the element doesn't reliably override that
// (confirmed against real desktop Chrome: popup stayed white-on-white).
// So instead of fighting native select theming, this is a small
// custom dropdown built from a button + an absolutely-positioned list,
// styled entirely with our own CSS — same look in every browser.
function Dropdown({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDocClick = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <label>
      <span>{label}</span>
      <div className="dropdown" ref={rootRef}>
        <button
          type="button"
          className={`dropdown-trigger${open ? " is-open" : ""}`}
          aria-haspopup="listbox"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span>{value}</span>
          <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
            <path
              d="M3 5l4 4 4-4"
              stroke="currentColor"
              strokeWidth="1.6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {open && (
          <ul className="dropdown-menu" role="listbox">
            {options.map((opt) => (
              <li
                key={opt}
                role="option"
                aria-selected={opt === value}
                className={opt === value ? "is-selected" : undefined}
                onClick={() => {
                  onChange(opt);
                  setOpen(false);
                }}
              >
                {opt}
              </li>
            ))}
          </ul>
        )}
      </div>
    </label>
  );
}

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
      <Dropdown
        label="Project type"
        options={PROJECT_TYPES}
        value={projectType}
        onChange={setProjectType}
      />

      <Dropdown
        label="Budget range"
        options={BUDGETS}
        value={budget}
        onChange={setBudget}
      />

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
