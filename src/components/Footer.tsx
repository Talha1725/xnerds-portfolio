import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { EMAIL, EMAIL_URL, GITHUB_URL, LINKEDIN_URL, PHONE_DISPLAY, WHATSAPP_URL } from "@/lib/contact";

const columns = [
  {
    title: "Company",
    links: [
      { name: "Portfolio", to: "/portfolio" },
      { name: "Services", to: "/services" },
      { name: "About", to: "/about" },
      { name: "Contact", to: "/contact" },
    ],
  },
];

const external = [
  { name: "WhatsApp", href: WHATSAPP_URL },
  { name: "LinkedIn", href: LINKEDIN_URL },
  { name: "GitHub", href: GITHUB_URL },
];

export const Footer = () => {
  return (
    <footer className="border-t border-ink-line bg-ink pb-20 sm:pb-0">
      <div className="mx-auto grid max-w-[1240px] gap-12 px-5 py-16 md:grid-cols-12 md:px-8">
        <div className="md:col-span-5">
          <Link to="/" className="flex items-center gap-2.5" aria-label="xNerds home">
            <img src="/mark.webp" alt="" width={28} height={28} className="h-7 w-7" />
            <span className="text-[17px] font-semibold tracking-[-0.02em] text-fg">xNerds</span>
          </Link>
          <p className="mt-5 max-w-sm text-[16px] leading-relaxed text-fg-muted">
            Software and AI engineering for founders and teams worldwide.
          </p>
        </div>

        {columns.map((col) => (
          <div key={col.title} className="md:col-span-2">
            <h2 className="text-[13px] font-medium text-fg">{col.title}</h2>
            <ul className="mt-4 space-y-3">
              {col.links.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-[14px] text-fg-muted transition-colors hover:text-fg">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="md:col-span-2">
          <h2 className="text-[13px] font-medium text-fg">Elsewhere</h2>
          <ul className="mt-4 space-y-3">
            {external.map((l) => (
              <li key={l.name}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 text-[14px] text-fg-muted transition-colors hover:text-fg"
                >
                  {l.name}
                  <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h2 className="text-[13px] font-medium text-fg">Get in touch</h2>
          <ul className="mt-4 space-y-3 text-[14px] text-fg-muted">
            <li>
              <a href={EMAIL_URL} className="transition-colors hover:text-fg">
                {EMAIL}
              </a>
            </li>
            <li className="tabular">{PHONE_DISPLAY}</li>
            <li>Lahore, Pakistan</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-line">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-2 px-5 py-6 text-[13px] text-fg-faint sm:flex-row sm:items-center sm:justify-between md:px-8">
          <p>© {new Date().getFullYear()} xNerds Solutions. All rights reserved.</p>
          <p>Team online around the clock</p>
        </div>
      </div>
    </footer>
  );
};
