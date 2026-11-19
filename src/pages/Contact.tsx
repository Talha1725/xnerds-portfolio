import { usePageMeta } from "@/hooks/use-page-meta";
import { useState, type FormEvent, type ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import {
  EMAIL,
  EMAIL_URL,
  GITHUB_URL,
  LINKEDIN_URL,
  PHONE_DISPLAY,
  WHATSAPP_NUMBER,
  WHATSAPP_URL,
} from "@/lib/contact";
import { Container, PageHeader, PrimaryAction, Reveal, SecondaryAction } from "@/components/site";
import { cn } from "@/lib/utils";

const budgets = ["Under $5,000", "$5,000 – $10,000", "$10,000 – $25,000", "$25,000 – $50,000", "Over $50,000"];

const field =
  "w-full rounded-lg border border-ink-strong bg-ink px-4 text-[16px] text-fg placeholder:text-fg-faint transition-colors duration-200 hover:border-white/25 focus:border-signal-soft focus:outline-none focus:ring-2 focus:ring-signal-soft/25 focus-visible:outline-none [&:user-invalid]:border-danger [&:user-invalid]:ring-danger/20";

function Field({ id, label, hint, children }: { id: string; label: string; hint?: string; children: ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="flex items-baseline justify-between text-[14px] font-medium text-fg">
        {label}
        {hint && <span className="text-[13px] font-normal text-fg-faint">{hint}</span>}
      </label>
      <div className="mt-2">{children}</div>
    </div>
  );
}

function DetailRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="grid grid-cols-[96px_1fr] gap-4 border-b border-ink-line py-5 first:border-t">
      <dt className="text-[13px] text-fg-faint">{label}</dt>
      <dd className="text-[15px] text-fg">{children}</dd>
    </div>
  );
}

const linkCls = "inline-flex items-center gap-1.5 hover:text-signal-soft";

const Contact = () => {
  usePageMeta("/contact");
  const [form, setForm] = useState({ name: "", email: "", budget: "", details: "" });
  const [opened, setOpened] = useState(false);

  const set = (k: keyof typeof form) => (v: string) => setForm((f) => ({ ...f, [k]: v }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = `Project enquiry from ${form.name}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.budget ? `Budget: ${form.budget}` : null,
      "",
      form.details,
    ]
      .filter((l) => l !== null)
      .join("\n");
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  };

  return (
    <main>
      <PageHeader
        title="Tell us what you're building."
        lead="WhatsApp is the fastest way to reach us. You can also email, call, or fill in the form below."
      >
        <div className="flex flex-wrap items-center gap-3">
          <PrimaryAction />
          <SecondaryAction href={EMAIL_URL}>{EMAIL}</SecondaryAction>
        </div>
      </PageHeader>

      <section className="border-t border-ink-line py-20 md:py-28">
        <Container className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-5">
            <h2 className="text-[22px] font-semibold leading-tight tracking-[-0.02em] text-fg">Direct contact</h2>
            <dl className="mt-6">
              <DetailRow label="WhatsApp">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={linkCls}>
                  {PHONE_DISPLAY}
                  <ArrowUpRight className="h-3.5 w-3.5 text-fg-faint" aria-hidden />
                </a>
              </DetailRow>
              <DetailRow label="Email">
                <a href={EMAIL_URL} className={linkCls}>
                  {EMAIL}
                </a>
              </DetailRow>
              <DetailRow label="Phone">
                <a href={`tel:+${WHATSAPP_NUMBER}`} className={cn(linkCls, "tabular")}>
                  {PHONE_DISPLAY}
                </a>
              </DetailRow>
              <DetailRow label="Elsewhere">
                <span className="flex flex-wrap gap-x-5 gap-y-1">
                  <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className={linkCls}>
                    LinkedIn
                    <ArrowUpRight className="h-3.5 w-3.5 text-fg-faint" aria-hidden />
                  </a>
                  <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className={linkCls}>
                    GitHub
                    <ArrowUpRight className="h-3.5 w-3.5 text-fg-faint" aria-hidden />
                  </a>
                </span>
              </DetailRow>
            </dl>

            <div className="mt-10 overflow-hidden rounded-xl border border-ink-strong">
              <iframe
                title="xNerds office location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.1130927899044!2d74.26498137629807!3d31.521053674213658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919031d26c1a607%3A0x12265c8b47c7643c!2sISOSS%20House!5e0!3m2!1sen!2s!4v1750163847712!5m2!1sen!2s"
                className="block aspect-[16/9] w-full lg:aspect-[4/3] [filter:invert(0.92)_hue-rotate(180deg)_saturate(0.6)_brightness(0.95)]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          <Reveal d={120} className="relative lg:col-span-7">
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-x-10 -inset-y-12 -z-0"
              style={{
                background:
                  "radial-gradient(45% 50% at 70% 30%, rgba(47,111,207,0.28), transparent 70%), radial-gradient(35% 40% at 20% 85%, rgba(130,191,233,0.12), transparent 70%)",
              }}
            />
            <form
              onSubmit={onSubmit}
              className="relative rounded-2xl border border-white/10 bg-white/[0.035] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_30px_60px_-30px_rgba(0,0,0,0.7)] backdrop-blur-2xl backdrop-saturate-150 sm:p-10"
            >
              <h2 className="text-[22px] font-semibold leading-tight tracking-[-0.02em] text-fg">Project details</h2>
              <p className="mt-2 text-[16px] leading-relaxed text-fg-muted">
                Sending opens your email app with everything filled in, ready to send to {EMAIL}.
              </p>

              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <Field id="name" label="Name">
                  <input
                    id="name"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => set("name")(e.target.value)}
                    className={cn(field, "h-12")}
                    placeholder="Your full name"
                  />
                </Field>
                <Field id="email" label="Email">
                  <input
                    id="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) => set("email")(e.target.value)}
                    className={cn(field, "h-12")}
                    placeholder="you@company.com"
                  />
                </Field>
              </div>

              <div className="mt-6">
                <Field id="budget" label="Budget" hint="Optional">
                  <select
                    id="budget"
                    value={form.budget}
                    onChange={(e) => set("budget")(e.target.value)}
                    className={cn(
                      field,
                      "h-12 appearance-none pr-10",
                      !form.budget && "text-fg-faint"
                    )}
                    style={{
                      backgroundColor: "#0A0B0E",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 1rem center",
                      backgroundSize: "16px",
                      backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%239A9FAB' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
                    }}
                  >
                    <option value="">Select a range</option>
                    {budgets.map((b) => (
                      <option key={b} value={b} className="text-fg">
                        {b}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              <div className="mt-6">
                <Field id="details" label="What are you building?">
                  <textarea
                    id="details"
                    required
                    rows={6}
                    value={form.details}
                    onChange={(e) => set("details")(e.target.value)}
                    className={cn(field, "resize-y py-3 leading-relaxed")}
                    placeholder="The product, where it stands today, and what you need from us."
                  />
                </Field>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-signal px-6 text-[15px] font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_8px_24px_-8px_rgba(29,95,192,0.6)] transition-colors duration-300 hover:bg-signal-hover"
                >
                  Send via email
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </button>
                <p className="text-[13px] text-fg-faint" aria-live="polite">
                  {opened ? "Your email app should now be open. If it isn't, write to us directly." : "Prefer chat? WhatsApp is faster."}
                </p>
              </div>
            </form>
          </Reveal>
        </Container>
      </section>
    </main>
  );
};

export default Contact;
