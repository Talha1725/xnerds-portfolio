# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: overseas startup founders and CTOs (US, EU, Gulf) who need a product built end to end, or need vetted engineers added to their own team. They are evaluating whether a remote software house can be trusted with real production work, usually by comparing several vendors.

Secondary: businesses in Pakistan that need enterprise systems (ERP, CRM, FBR-compliant POS).

## Product Purpose

The marketing site for xNerds Solutions, a software and AI company based in Lahore, Pakistan. It exists to turn a visiting founder into a conversation: an inquiry through the contact page, email or phone. Success means a qualified lead who has already seen shipped work and believes the team can deliver.

## Positioning

A small senior team (7+ years of individual experience) that has shipped live products across AI, fintech, analytics, process automation and gaming, and can work either as the full build team or as embedded engineers.

## Operating Context

Visitors arrive from referrals, LinkedIn and outreach, and check the portfolio and the live product URLs before getting in touch. The site is usually opened on a desktop during vendor evaluation, and on a phone when someone forwards the link.

## Capabilities and Constraints

- Services: custom software development (web apps, APIs, integrations), mobile apps (iOS/Android, React Native, Flutter), enterprise solutions (ERP, CRM, POS), cloud & DevOps (AWS/Azure, CI/CD, IaC), AI & data analytics, staff augmentation.
- Routes: Home, Services, Portfolio, About, Contact, 404. Vite + React + TypeScript + Tailwind + shadcn/ui, deployed on Vercel (SPA rewrite in `vercel.json`).
- The contact form does not send anywhere yet (`handleSubmit` only logs and shows a toast), so it may not promise a real response until it is wired up. The demo chatbot was removed in November 2026.
- Primary contact path: WhatsApp (wa.me/923234314748), then email.
- Contact: info@xnerds.com, +92-323-4314748, Lahore, Pakistan. GitHub: XnerdsORG. LinkedIn: xnerds-solutions.

## Brand Commitments

- Name: xNerds / xNerds Solutions.
- The logo (`public/logo.png`, an X built from light and dark blue chevrons with small code-bracket marks) is fixed and stays as it is. `public/mark.png` is a tight crop of it for the nav and footer.
- The location (Lahore, Pakistan) appears only in the footer. Page copy, headings and CTAs never mention it (user decision, November 2026).
- Visual register, chosen by the user in November 2026: the premium software-company standard, done straight. The craft bar is Linear, Vercel and Stripe.

## Evidence on Hand

Confirmed facts:
- xNerds was founded in 2023, and the team has 7+ years of experience.
- 50+ clients, 70+ projects.

Shipped work, with screenshots in `public/work/*.webp` (originals in `public/`):
- ACTFlow (actflow.ai): process automation
- Antaragame (antaragame.io): AI gaming
- Bitlenz (bitlenz.com): analytics dashboard
- BasedAgent (basedagent.co): AI assistant
- FIGMENT (figment.trade): fintech trading backend
- Smart POS Pro (`work/pos.webp`, no public URL): FBR-compliant POS

Not on hand, so never invent: testimonials, client logos, named team members, case-study metrics, awards, "100% satisfaction" claims, or pricing.

## Product Principles

1. Prove it with shipped work. Live products and real links persuade more than adjectives.
2. Every claim must match. One set of numbers and dates across every page.
3. Talk like engineers to founders: specific, plain and confident, without hype.
4. Overseas founders come first. Local enterprise work is shown, but secondary.
