// Ambient, oversized, softly-blurred gradient orbs — the atmospheric
// background treatment used across react-spring.dev. Pure CSS: cheap to
// paint once and left alone (no animation loop), so it never touches
// scroll performance.
export default function GlowOrbs({ variant = "a" }: { variant?: "a" | "b" | "c" }) {
  return <div className={`glow-orbs glow-orbs-${variant}`} aria-hidden="true" />;
}
