import { usePageMeta } from "@/hooks/use-page-meta";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Container, PrimaryAction } from "@/components/site";

const NotFound = () => {
  const { pathname } = useLocation();
  usePageMeta("Page not found — xNerds");

  return (
    <main className="relative flex min-h-[100svh] items-center overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(60% 60% at 50% -10%, rgba(47,111,207,0.16), transparent 70%)",
        }}
      />
      <Container className="relative py-32">
        <p className="font-mono text-[14px] text-signal-soft">404</p>
        <h1 className="mt-4 max-w-3xl text-[clamp(2.6rem,5.4vw,4.3rem)] font-semibold leading-[0.98] tracking-[-0.04em] text-fg">
          This page doesn't exist.
        </h1>
        <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-fg-muted">
          Nothing lives at <span className="break-all font-mono text-[15px] text-fg">{pathname}</span>. It may have
          moved, or the link may be mistyped.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Link
            to="/"
            className="inline-flex h-12 items-center gap-2 rounded-full border border-ink-strong px-6 text-[15px] font-medium text-fg transition-colors duration-300 hover:border-white/30 hover:bg-white/[0.04]"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Back to home
          </Link>
          <PrimaryAction>Ask us on WhatsApp</PrimaryAction>
        </div>
      </Container>
    </main>
  );
};

export default NotFound;
