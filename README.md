# xNerds website

Marketing site for xNerds Solutions: product engineering for ambitious founders.

**Live:** https://xnerds.co

## Stack

Vite, React 18, TypeScript and Tailwind CSS, deployed on Vercel. `vercel.json` rewrites every route to the SPA.

## Develop

```sh
npm install
npm run dev      # http://localhost:8080
npm run build    # production build in dist/
npm run preview  # serve the build locally
```

## Where things live

| What | Where |
|---|---|
| Pages | `src/pages/` (Home, Services, Work, About, Contact, 404) |
| Shared building blocks | `src/components/site.tsx`, `src/components/expertise.tsx` |
| Project list (Work page, hero, skills) | `src/utils/data.ts` |
| Contact details (WhatsApp, email, socials) | `src/lib/contact.ts` |
| Project screenshots | `public/work/*.webp` |
| Share image and icons | `public/og-image.jpg`, `public/favicon.ico`, `public/icon-*.png`, `public/apple-touch-icon.png` |

## Design system

- `DESIGN.md` holds the visual rules: colour, type, spacing, motion and where glass is allowed. Read it before changing the look.
- `PRODUCT.md` holds the product facts: who the site is for, the confirmed numbers, and what must never be invented.

## Adding a project

1. Save a 16:9 screenshot to `public/work/<name>.webp`, about 1800px wide.
2. Add an entry to `projects` in `src/utils/data.ts` with a title, description, category, url, sector and tags.
3. Never publish screenshots that show a real person's name or account details. Blur them first, and keep unredacted originals in `.private/`, which is gitignored.
