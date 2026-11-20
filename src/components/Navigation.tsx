import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/contact";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;

    // Move focus into the menu, close on Escape, keep Tab inside while it covers the page.
    menuRef.current?.querySelector<HTMLElement>("a")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (e.key !== "Tab" || !menuRef.current) return;
      const items = [toggleRef.current, ...menuRef.current.querySelectorAll<HTMLElement>("a")].filter(
        Boolean
      ) as HTMLElement[];
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300",
        open
          ? "border-b border-ink-line bg-ink/60 backdrop-blur-2xl backdrop-saturate-150"
          : scrolled
            ? "border-b border-ink-line bg-ink/80 backdrop-blur-xl backdrop-saturate-150"
            : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-[1240px] items-center justify-between px-5 md:px-8" aria-label="Main">
        <Link to="/" className="group flex items-center gap-2.5" aria-label="xNerds home">
          <img src="/mark.webp" alt="" width={28} height={28} className="h-7 w-7" />
          <span className="text-[17px] font-semibold tracking-[-0.02em] text-fg">xNerds</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                cn(
                  "rounded-full px-3.5 py-2 text-[14px] transition-colors duration-200",
                  isActive ? "text-fg" : "text-fg-muted hover:text-fg"
                )
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-9 items-center gap-1.5 rounded-full bg-fg px-4 text-[14px] font-medium text-ink transition-colors duration-200 hover:bg-white sm:inline-flex"
          >
            Let's talk
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
          </a>
          <button
            ref={toggleRef}
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-fg md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div ref={menuRef} id="mobile-menu" className="h-[calc(100dvh-4rem)] border-t border-white/10 px-5 pb-8 pt-4 md:hidden">
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
              end={item.path === "/"}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center justify-between border-b border-ink-line py-4 text-2xl font-medium tracking-[-0.02em]",
                      isActive ? "text-fg" : "text-fg-muted"
                    )
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 flex h-12 items-center justify-center gap-2 rounded-full bg-signal text-[15px] font-medium text-white"
          >
            Message us on WhatsApp
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </a>
        </div>
      )}
    </header>
  );
};
