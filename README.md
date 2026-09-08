# Malik Abdul Moiz — Portfolio (Next.js)

A bold, animated, maximalist portfolio built with Next.js 14 (App Router) + TypeScript.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.
OR
https://portfolio-next-seven-orpin.vercel.app/

## Build for production

```bash
npm run build
npm start
```

## Structure

- `app/page.tsx` — main page (hero, about, skills, projects, process, contact)
- `app/layout.tsx` — root layout + fonts
- `app/globals.css` — all styling (maximalist design system)
- `components/CursorFX.tsx` — custom cursor, scroll progress bar, scroll-reveal animations
- `components/Footer.tsx` — footer with dynamic year
- `data/projects.ts` — project data (edit this to add/change projects)

## Deploying

Push to GitHub and import the repo on [Vercel](https://vercel.com/new) — zero config needed.
