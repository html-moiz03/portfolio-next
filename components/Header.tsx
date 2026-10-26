"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { href: "/studio", label: "Studio" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu automatically whenever a navigation completes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header>
      <Link href="/" className="logo">
        MOIZ//
      </Link>

      <nav className="nav-desktop">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={pathname === item.href ? "active" : undefined}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <button
        type="button"
        className={`nav-toggle${open ? " is-open" : ""}`}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
      </button>

      <nav className={`nav-mobile${open ? " is-open" : ""}`}>
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={pathname === item.href ? "active" : undefined}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
