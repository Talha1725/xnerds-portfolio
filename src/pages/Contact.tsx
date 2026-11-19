import { usePageMeta } from "@/hooks/use-page-meta";
import { useState, type FormEvent, type ReactNode } from "react";
import { ArrowUpRight, Check, Copy } from "lucide-react";
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
  const [form, setForm] = useState({ name: "", email: "", details: "" });
  const [sent, setSent] = useState<null | "whatsapp" | "email">(null);
  const [copied, setCopied] = useState(false);

  const set = (k: keyof typeof form) => (v: string) => setForm((f) => ({ ...f, [k]: v }));

  const message = [`Hi xNerds, I'm ${form.name} (${form.email}).`, "", form.details].join("\n");
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  const emailHref = `mailto:${EMAIL}?subject=${encodeURIComponent(`Project enquiry from ${form.name}`)}&body=${encodeURIComponent(message)}`;

  // Both buttons submit the form, so the browser checks the required fields first.
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const via = ((e.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null)?.value === "email" ? "email" : "whatsapp";
    if (via === "whatsapp") window.open(whatsappHref, "_blank", "noopener,noreferrer");
    else window.location.href = emailHref;
    setSent(via);
    setCopied(false);
  };

  const copyMessage = async () => {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
    } catch {
      setCopied(false);
    }
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

            <h2 className="mt-12 text-[22px] font-semibold leading-tight tracking-[-0.02em] text-fg">What to expect</h2>
            <dl className="mt-6">
              <DetailRow label="Reply">Within 6 hours</DetailRow>
              <DetailRow label="Hours">Around the clock. The team works in shifts, so someone is always online.</DetailRow>
              <DetailRow label="You talk to">A project manager or the engineers themselves</DetailRow>
              <DetailRow label="Paperwork">We sign NDAs, and you own the code</DetailRow>
            </dl>
          </Reveal>

          <Reveal d={120} className="relative lg:col-span-7">
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-x-10 -inset-y-12 -z-0"
              style={{
                background: "radial-gradient(closest-side at 72% 32%, rgba(47,111,207,0.22), transparent)",
              }}
            />
            <form
              onSubmit={onSubmit}
              className="relative rounded-2xl border border-white/10 bg-white/[0.035] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_30px_60px_-30px_rgba(0,0,0,0.7)] backdrop-blur-2xl backdrop-saturate-150 sm:p-10"
            >
              <h2 className="text-[22px] font-semibold leading-tight tracking-[-0.02em] text-fg">Project details</h2>
              <p className="mt-2 text-[16px] leading-relaxed text-fg-muted">
                Write it once, then send it on WhatsApp or by email. We reply within 6 hours.
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
                <Field id="details" label="What are you building?">
                  <textarea
                    id="details"
                    required
                    rows={6}
                    value={form.details}
                    onChange={(e) => set("details")(e.target.value)}
                    className={cn(field, "resize-y py-3 leading-relaxed")}
                    placeholder="The problem you're facing or what you want to build, and where it stands today."
                  />
                </Field>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  type="submit"
                  value="whatsapp"
                  className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-signal px-6 text-[15px] font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_8px_24px_-8px_rgba(29,95,192,0.6)] transition-colors duration-300 hover:bg-signal-hover"
                >
                  Send on WhatsApp
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </button>
                <button
                  type="submit"
                  value="email"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-ink-strong px-6 text-[15px] font-medium text-fg transition-colors duration-300 hover:border-white/30 hover:bg-white/[0.04]"
                >
                  Send by email
                </button>
              </div>

              <div aria-live="polite">
                {sent && (
                  <div className="mt-6 rounded-xl border border-white/10 bg-ink/60 p-5">
                    <p className="text-[15px] font-medium text-fg">
                      {sent === "whatsapp"
                        ? "WhatsApp should have opened in a new tab with your message."
                        : "Your email app should have opened with your message."}
                    </p>
                    <p className="mt-1 text-[14px] leading-relaxed text-fg-muted">
                      Nothing opened? Copy the message and send it yourself to {EMAIL}, or try the other option.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <button
                        type="button"
                        onClick={copyMessage}
                        className="inline-flex h-10 items-center gap-2 rounded-full border border-ink-strong px-4 text-[14px] font-medium text-fg transition-colors hover:border-white/30"
                      >
                        {copied ? <Check className="h-4 w-4 text-signal-soft" aria-hidden /> : <Copy className="h-4 w-4" aria-hidden />}
                        {copied ? "Copied" : "Copy message"}
                      </button>
                      {sent === "email" ? (
                        <a
                          href={whatsappHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex h-10 items-center gap-2 rounded-full border border-ink-strong px-4 text-[14px] font-medium text-fg transition-colors hover:border-white/30"
                        >
                          Send on WhatsApp instead
                          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                        </a>
                      ) : (
                        <a
                          href={emailHref}
                          className="inline-flex h-10 items-center gap-2 rounded-full border border-ink-strong px-4 text-[14px] font-medium text-fg transition-colors hover:border-white/30"
                        >
                          Send by email instead
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </form>
          </Reveal>
        </Container>
      </section>
    </main>
  );
};

export default Contact;
