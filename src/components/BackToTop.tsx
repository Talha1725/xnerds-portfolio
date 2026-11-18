import { useEffect, useRef, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

const R = 21;
const CIRCUMFERENCE = 2 * Math.PI * R;

/**
 * Floating glass button that returns to the top. It appears after roughly one screen of scrolling,
 * and its ring traces how far down the page the visitor is. The ring is written straight to the DOM
 * on each scroll event; React only re-renders when visibility flips.
 */
export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const ringRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    // Runs straight from the scroll event: browsers already deliver at most one scroll per frame,
    // the ring write is a single style property, and setVisible bails out when nothing changed.
    // (A rAF gate here could strand the button when frames are paused, e.g. in a background tab.)
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const y = window.scrollY;
      const progress = max > 0 ? Math.min(1, y / max) : 0;
      ringRef.current?.style.setProperty("stroke-dashoffset", String(CIRCUMFERENCE * (1 - progress)));
      setVisible(y > window.innerHeight * 0.9);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const toTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
    // Keep keyboard users oriented: move focus to the top of the page without a second jump.
    document.querySelector<HTMLElement>("header a")?.focus({ preventScroll: true });
  };

  return (
    <button
      type="button"
      onClick={toTop}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      data-visible={visible}
      className={cn(
        "back-to-top group fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-5 z-40 grid h-12 w-12 place-items-center rounded-full md:bottom-8 md:right-8",
        "border border-white/10 bg-ink/50 text-fg shadow-[inset_0_1px_0_rgba(255,255,255,0.10),0_12px_32px_-12px_rgba(0,0,0,0.8)] backdrop-blur-xl backdrop-saturate-150",
        "hover:border-white/20 hover:bg-ink/70"
      )}
    >
      <svg className="pointer-events-none absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 48 48" aria-hidden>
        <circle cx="24" cy="24" r={R} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
        <circle
          ref={ringRef}
          cx="24"
          cy="24"
          r={R}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={CIRCUMFERENCE}
          className="text-signal-soft/70 transition-colors duration-300 group-hover:text-signal-soft"
        />
      </svg>
      {/* Two stacked arrows: on hover the first leaves upward and the second rises into place. */}
      <span className="relative block h-4 w-4 overflow-hidden" aria-hidden>
        <span className="back-to-top-arrows absolute inset-x-0 top-0 flex flex-col items-center gap-2">
          <ArrowUp className="h-4 w-4" strokeWidth={2} />
          <ArrowUp className="h-4 w-4" strokeWidth={2} />
        </span>
      </span>
    </button>
  );
}
