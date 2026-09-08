"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState("");
  useEffect(() => setYear(String(new Date().getFullYear())), []);

  return (
    <footer>
      <span>© {year} Malik Abdul Moiz Awan.</span>
      <span>Built with Next.js, React, and way too much CSS.</span>
    </footer>
  );
}
