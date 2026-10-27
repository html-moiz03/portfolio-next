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
  const [scrolled, setScrolled] = useState(false);

  // Close the mobile menu automatically whenever a navigation completes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Once the user scrolls past the hero, give the header a solid
  // background so its white nav text never collides/blends with
  // whatever page content is scrolling underneath it.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  return (
    <header
      className={
        // Mutually exclusive on purpose: .is-scrolled carries
        // backdrop-filter (for the frosted-glass look while scrolling),
        // and backdrop-filter establishes a new containing block for any
        // `position: fixed` descendant. .nav-mobile relies on being fixed
        // relative to the viewport (`inset: 0`) to cover the full screen,
        // so if both classes land on <header> at once (e.g. user scrolls
        // THEN opens the menu), the blur breaks the mobile panel back
        // down to a small translucent box. Open always wins.
        open ? "nav-open" : scrolled ? "is-scrolled" : undefined
      }
    >
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
