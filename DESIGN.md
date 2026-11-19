---
name: xNerds
description: Product engineering for ambitious founders. A senior engineering team whose shipped products are the proof.
colors:
  ink: "#0A0B0E"
  ink-raised: "#111318"
  ink-line: "rgba(255,255,255,0.08)"
  ink-strong: "rgba(255,255,255,0.14)"
  fg: "#EDEEF1"
  fg-muted: "#9A9FAB"
  fg-faint: "#80869A"
  signal: "#1D5FC0"
  signal-hover: "#174FA0"
  signal-soft: "#82BFE9"
  signal-light: "#2F6FCF"
typography:
  display:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 4.9vw, 4.3rem)"
    fontWeight: 600
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4vw, 3.25rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  statement:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "clamp(1.9rem, 4.4vw, 3.6rem)"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-0.035em"
  title-lg:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "clamp(1.6rem, 2.6vw, 2.25rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "22px"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.02em"
  lead:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "clamp(1.05rem, 1.4vw, 1.2rem)"
    fontWeight: 400
    lineHeight: 1.625
  body-lg:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.625
  body:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.625
  small:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.5
  ui:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 500
    lineHeight: 1.5
  label:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.5
  mono:
    fontFamily: "Geist Mono, ui-monospace, monospace"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  sm: "6px"
  frame: "12px"
  panel: "16px"
  pill: "9999px"
spacing:
  gutter-sm: "20px"
  gutter: "32px"
  stack: "40px"
  section: "112px"
  section-lg: "144px"
  container: "1240px"
components:
  button-primary:
    backgroundColor: "{colors.signal}"
    textColor: "#FFFFFF"
    typography: "{typography.body}"
    rounded: "{rounded.pill}"
    padding: "0 20px 0 24px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.signal-hover}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.fg}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "48px"
  button-nav:
    backgroundColor: "{colors.fg}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 16px"
    height: "36px"
  browser-frame:
    backgroundColor: "{colors.ink-raised}"
    rounded: "{rounded.frame}"
  browser-frame-url:
    backgroundColor: "rgba(255,255,255,0.05)"
    textColor: "{colors.fg-faint}"
    typography: "{typography.mono}"
    rounded: "{rounded.sm}"
    padding: "2px 12px"
  domain-chip:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.fg}"
    rounded: "{rounded.pill}"
    padding: "6px 12px"
  panel:
    backgroundColor: "{colors.ink-raised}"
    rounded: "{rounded.panel}"
    padding: "48px"
  nav-link:
    textColor: "{colors.fg-muted}"
    rounded: "{rounded.pill}"
    padding: "8px 14px"
  nav-link-active:
    textColor: "{colors.fg}"
---

# Design System: xNerds

## Overview

**Creative North Star: "The Shipped Product Floor"**

xNerds reads like a premium software company in the Linear, Vercel and Stripe tier, done straight: a near-black ground tinted toward the logo's navy, hairline structure, one action blue, and real products in real browser frames doing the persuading. The work is the hero. Typography is a single grotesk set large and tight, the chrome is quiet, and anything that is not a product, a claim or an action recedes into muted grey.

Density is low and confident. Sections breathe on tall vertical rhythm (112 to 160px), content sits on a 12-column grid inside a 1240px container, and each section says one thing. Light is used once per moment: a soft blue wash falling from the top of the hero, and a matching one rising behind the closing call to action. Everything else is flat ink separated by 8% white hairlines.

The system rejects the gradient-blob, neon-badge "AI agency" template the site carried before. No glow loops, no floating blobs, no slate-and-gradient cards.

**One size per role.** Prose reads at 16px minimum, which makes light-on-dark copy legible, and so do form inputs (anything smaller makes iOS zoom in on focus). Buttons, nav links and list points use the 15px `ui` role. Every title-large element shares one size: featured project names, service and expertise group headings, and the About mission. The closing call to action uses the display size, the same as the page headlines. Titles always set their own line height (1.05–1.25); they never inherit body leading.

**One sanctioned loop.** Below the homepage hero, a strip of selected project names scrolls slowly. It pauses on hover and focus, has a visible pause/play button, and does not move at all for reduced-motion visitors. It is the only continuous motion on the site; no other loops.

**Thumb-reach CTA on phones.** Below the `sm` breakpoint, a WhatsApp pill appears next to the back-to-top button once the hero has scrolled away, and the footer is padded so the pill never covers content.

**Glass only over moving content.** Frosted glass (backdrop blur plus saturate, a white/10 hairline and an inset top highlight) is used in exactly six places, each sitting over something that moves or glows: the scrolled nav, the open mobile menu, the sticky Work filter bar, the "Visit <domain>" label on project screenshots (shown on hover or focus), the Contact form panel over a single blue wash (one closest-side radial at ≤0.22 behind the panel, so it never shows a hard edge), and the floating back-to-top button, whose ring traces scroll progress. Never put glass on static rows, cards or panels over flat ink, where it only lowers contrast.

**Action blue comes from the logo.** The logo uses #174FA0 (cobalt) and #82BFE9 (sky). Buttons use #1D5FC0, the logo cobalt lifted for the dark ground, which passes AA with white. Hover uses the exact logo cobalt, and links and live dots use the exact logo sky.

**Rollout status.** Every route (Home, Services, Portfolio, About, Contact, 404) plus the navigation and footer is built on this system. Shared building blocks live in `src/components/site.tsx` (PageHeader, Container, SectionTitle, Reveal, BrowserFrame, ProjectMeta, PrimaryAction, SecondaryAction, Engagement, Record, Close). The legacy gradient tokens and animations were removed from `tailwind.config.ts`; `primary` and the shadcn HSL variables remain only for the unused `components/ui` primitives. The `small` step (14px) is used for navigation, footer links and inline links.

**Key Characteristics:**
- Near-black ink ground with hairline borders, no grid overlay.
- One action blue, reserved for actions; a pale sky blue for live dots and links.
- Hanken Grotesk for every role, with tight negative tracking at display sizes; Geist Mono only for domains, URLs and the live clock.
- Real product screenshots in browser frames as the primary visual material.
- One ease for every motion, one orchestrated load in the hero, one quiet reveal per section below.

## Colors

A cool, near-monochrome dark palette with a single disciplined blue.

### Primary
- **Action Blue** (signal): the fill of every primary action ("Message us on WhatsApp"), passing AA with white text. Its hover deepens to **Pressed Blue** (signal-hover). Carries a soft blue under-glow on the primary button only.
- **Sky Signal** (signal-soft): live indicators (the dot in the domain chip), domain links on project entries, the short rule beside list points, and the focus ring.
- **Hero Light** (signal-light): never a fill. Used only at low alpha: the radial wash at the top of the hero (20% fading to 6%), the wash behind the closing call to action (22%), and text selection (35%).

### Neutral
- **Ink** (ink): the page ground everywhere, also the nav when scrolled (at 80% with backdrop blur) and the mobile menu sheet.
- **Raised Ink** (ink-raised): browser frames and engagement panels (panels at 60%).
- **Hairline** (ink-line): section dividers, list rules, frame title-bar rule, nav border once scrolled.
- **Strong Hairline** (ink-strong): borders on interactive outlines and frames: secondary buttons, browser frames, the domain chip.
- **Paper White** (fg): headlines, primary text, emphasized figures inside muted copy, and the fill of the nav "Let's talk" button.
- **Muted Grey** (fg-muted): body copy, nav links at rest, secondary links.
- **Faint Grey** (fg-faint): labels, metadata lines, URL bars, footnotes, and the de-emphasized words of the record statement.

### Named Rules
**The Blue Means Act Rule.** Action Blue fills only things the visitor can press to start a conversation. It never colors a heading, an icon decoration, a background panel or a badge.

**The One Light Rule.** A section gets at most one soft radial wash of Hero Light, anchored off-edge (top of the hero, bottom of the close). Washes never animate, never stack, and never become blobs.

## Typography

**Display Font:** Hanken Grotesk (with system-ui, sans-serif)
**Body Font:** Hanken Grotesk (with system-ui, sans-serif)
**Label/Mono Font:** Geist Mono (with ui-monospace, monospace)

**Character:** One sturdy grotesk does every job, gaining authority through size and tight tracking rather than through a second display face. The mono is a material, not a voice: it appears only where the content is literally machine text.

### Hierarchy
- **Display** (600, clamp 2.6rem to 4.3rem, 0.98, -0.04em): the hero headline only. Explicit line breaks at lg so each phrase holds one line.
- **Headline** (600, clamp 2rem to 3.25rem, 1.02, -0.035em): section headings. The closing call to action steps up to clamp 2.25rem to 4rem at 1.0 and -0.04em.
- **Statement** (500, clamp 1.9rem to 3.6rem, 1.08, -0.035em): a large-type proof sentence set in Faint Grey with the facts in Paper White; max 22 to 26ch.
- **Title Large** (600, clamp 1.75rem to 2.5rem, 1.05, -0.03em): featured project names.
- **Title** (600, 22px, tight, -0.02em): service names and secondary project names; engagement panel titles run at 26px, -0.03em.
- **Lead** (400, clamp 1.05rem to 1.2rem, 1.625): the hero subcopy, max 34rem.
- **Body Large / Body** (400, 17px / 15px, 1.625): section intros and descriptive copy, in Muted Grey, held to roughly max-w-md / max-w-lg.
- **Label** (400 or 500, 13px): metadata lines joined with spaced middots, footer column headings (500, Paper White), row labels like "Shipped and running". Sentence case, no tracking, no uppercase.
- **Mono** (400, 12px in URL bars, 12 to 14px for domains and years).

### Named Rules
**The Tight Display Rule.** Anything 22px and up is semibold with negative tracking (-0.02em to -0.04em, tighter as it grows). Body sizes keep default tracking.

**The Machine Text Rule.** Geist Mono appears only for domains, URLs, and live clock readouts. Never for labels, numbers in prose, or decoration.

## Layout

A 1240px container centered with 20px gutters on mobile and 32px from md. Two-part compositions use a 12-column grid at lg: hero copy 7 / mosaic 5, featured work 8 / meta 4 (alternating sides), services intro 4 (sticky at top 112px) / list 8. Secondary work drops to a 2-column grid with 40px column and 80px row gaps.

Vertical rhythm is generous: sections pad 112px top and bottom, 144px from md (the record statement and close reach 160px). Sections are divided by a single Hairline border-top, not by background changes. Inside sections, heading-to-content gaps run 56 to 80px; featured work items are spaced 96 to 128px apart.

The hero fills the viewport on desktop (min of 100svh and 960px) and keeps a bordered row of shipped-product names inside the fold. Below lg it stacks: copy first, then the mosaic at full strength with frames dropping their window dots so each domain reads in full.

Motion is part of layout here and runs on one ease, cubic-bezier(.16,1,.3,1). The hero plays one orchestrated load (copy lines rising and un-blurring 14px over 900ms, staggered 0 to 300ms; then frames settling up 40px from 0.97 scale over 1200ms, staggered 380 to 600ms). Below the hero, each block reveals once on scroll (16px rise and fade over 900ms; media additionally un-clips from 12% top inset over 1100ms), staggered 40 to 120ms. Content already in view at mount, and all content under reduced motion, is shown without animation.

## Elevation & Depth

Flat ink by default, with depth reserved for product frames and the primary action. Frames are the only lifted objects: they carry a 1px inner top highlight and a long, soft drop shadow so screenshots sit forward of the ground. Hover adds lift through transform (2px up, 1.5% scale) rather than heavier shadow. The scrolled nav uses translucency and blur, not shadow.

### Shadow Vocabulary
- **Frame lift** (`box-shadow: inset 0 1px 0 rgba(255,255,255,0.06), 0 40px 80px -30px rgba(0,0,0,0.85), 0 12px 24px -12px rgba(0,0,0,0.6)`): every browser frame.
- **Action glow** (`box-shadow: 0 8px 24px -8px rgba(29,95,192,0.6)`, hover `0 12px 32px -8px rgba(29,95,192,0.75)`): the primary blue button only.

### Named Rules
**The Only Frames Float Rule.** Shadows belong to product frames and the primary action. Panels, cards, list rows and nav sit flat on hairlines.

## Shapes

Square-ish and calm. Frames use gently rounded 12px corners, engagement panels and the reveal clip use 16px, and the URL bar inside a frame uses 6px. Every interactive control (buttons, nav links, chips) is a full pill. Borders are always 1px hairlines in white at 8% (structure) or 14% (interactive and frame edges). The focus ring is a 2px Sky Signal outline offset 3px with 6px corners.

## Components

### Buttons
Confident, round and few.
- **Shape:** full pill (9999px).
- **Primary:** Action Blue fill, white 15px medium text, 48px tall, 24px left / 20px right padding, trailing up-right arrow that nudges up and right on hover. Carries the Action glow.
- **Hover / Focus:** fill deepens to Pressed Blue and glow strengthens over 300ms; focus shows the Sky Signal ring.
- **Secondary:** transparent with a Strong Hairline border, Paper White text, same height; hover lifts the border to 30% white and adds a 4% white fill. Used beside the primary ("See our work", the email address).
- **Nav action:** Paper White fill with Ink text, 36px tall, 14px medium; hover goes to pure white. Hidden below sm, where the mobile menu carries a full-width primary instead.
- **Text link with arrow:** Muted Grey 15px medium with a right arrow that slides 4px on hover ("All work", "Service details").

### Browser Frame (signature)
The site's primary visual unit. Raised Ink body, 12px corners, Strong Hairline border, Frame lift shadow. A 32px title bar with three 10px dots at 15% white, a centered mono URL pill in Faint Grey on 5% white, and a hairline rule beneath. The screenshot fills a 16:9 area anchored top. In compact contexts below xl the dots are hidden so the domain reads in full.

### Hero Mosaic (signature)
Three overlapping browser frames, each a link to its live product. The active frame (pointer hover or keyboard focus) comes to the front, lifts 8px and scales 1.5%, and reveals a domain chip beneath it; at lg the others fall back to 60% opacity and half saturation. Transitions run 700ms on the site ease. Below lg nothing is dimmed.

### Domain Chip
A pill hanging off a frame's lower-left edge: Ink at 90% with backdrop blur, Strong Hairline border, 12px text, a 6px Sky Signal live dot, the product name in Paper White medium and its domain in Muted Grey mono.

### Cards / Containers
- **Corner Style:** 16px (panel).
- **Background:** Raised Ink at 60%.
- **Shadow Strategy:** none; see The Only Frames Float Rule.
- **Border:** one Hairline around the group, with a Hairline divider between panels (top on mobile, left from md).
- **Internal Padding:** 32px, 48px from md.
- List points inside panels are led by a 16px Sky Signal rule rather than a bullet or check icon.

### Lists
Service and spec lists are hairline-ruled rows (border-top on the list, border-bottom on each row, 36px vertical padding), with a Title on the left and Body plus a Faint Grey metadata line on the right from md.

### Navigation
Fixed, 64px tall, inside the 1240px container. Transparent over the hero; after 8px of scroll it gains an Ink 80% fill, 24px backdrop blur with 150% saturation, and a Hairline bottom border (300ms). Logo mark at 28px beside "xNerds" at 17px semibold. Links are 14px pills, Muted Grey at rest and Paper White when hovered or active. Below md a menu button opens a full-height Ink sheet of 24px medium links on hairline rows, ending in a full-width primary WhatsApp button; body scroll locks while open.

### Footer
Ink ground under a Hairline. Mark and one-line description (5 cols), then link columns headed by 13px medium Paper White labels and 14px Muted Grey links; external links reveal a small up-right arrow on hover. A Hairline-divided base row in 13px Faint Grey.

## Do's and Don'ts

### Do:
- **Do** let real product screenshots in browser frames carry each page's visual weight; every frame links to its live domain when one exists.
- **Do** reserve Action Blue (#1D5FC0) for the actions that start a conversation, and keep it to one or two per viewport.
- **Do** separate sections with a single 8% white hairline and generous vertical padding (112px, 144px from md) instead of background bands.
- **Do** set every heading in Hanken Grotesk semibold with negative tracking, and keep body copy in Muted Grey at 15 to 17px.
- **Do** run all motion on cubic-bezier(.16,1,.3,1), reveal each block once, and show everything immediately under reduced motion.
- **Do** carry figures inside prose as Paper White against muted surroundings, using only the confirmed numbers.

### Don't:
- **Don't** bring back the old design's gradients, glow and pulse-glow loops, floating elements, slate cards or the #0047AB primary; they remain in the Tailwind config only until the remaining pages migrate.
- **Don't** add a second display face, uppercase tracked labels, or eyebrow text above headings.
- **Don't** use Geist Mono for anything but domains, URLs and live time.
- **Don't** put shadows on panels, rows or the nav; depth belongs to frames and the primary action.
- **Don't** add more than one soft radial wash to a section, animate it, or overlay a grid pattern.
- **Don't** use icon glyphs as decoration; arrows on links and the menu/close controls are the only icons.
