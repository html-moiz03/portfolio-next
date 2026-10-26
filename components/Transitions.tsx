"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Fades + lifts each page in/out on route change, the way the Lovera
// template crossfades between its Studio/Projects/Pricing/Contact pages.
// Keyed by pathname so AnimatePresence treats every route as a distinct
// child and animates the swap instead of an instant cut.
export default function Transitions({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Each "page" (Lovera's Studio/Projects/Pricing/etc.) should open at its
  // top, not wherever the previous page's scroll happened to land.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -24 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
