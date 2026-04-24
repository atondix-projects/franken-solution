# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Franken Solution is a German-language B2B website for an IT security and managed services company based in Nuremberg (Franken region). Built with Next.js 16 App Router, React 19, TypeScript 5, and Tailwind CSS 4.

**Important:** This uses Next.js 16.2.3 which has breaking changes from earlier versions. When a Next.js behavior is unclear, check `node_modules/next/dist/docs/` before changing APIs or file conventions.

## Commands

```bash
npm run dev       # Start dev server (localhost:3000)
npm run build     # Production build
npm run lint      # ESLint (core-web-vitals + typescript configs)
```

## Code Lookup Rules

Before searching for functions, methods, or APIs in the project code:

1. Check TypeScript definitions first (`.d.ts` files, `node_modules/<pkg>/types`)
2. Run `npx eslint --print-config <file>` to see active rules
3. For Next.js/React components: look at the library's official type
   definition, not the project code, if the function comes from a package
4. Only if none of that works: grep through the project code

## Before every commit / end of a task

- Run `npm run lint` and fix all errors
- Run `npm run type-check` (or `tsc --noEmit`)
- No task is considered "done" while linter or TS compiler still reports errors

## Architecture

### Content-Driven Components

Content is separated from presentation. Page copy lives in `src/content/` as typed TypeScript objects (e.g., `homepage.ts`), not hardcoded in components. Components receive content via imports, not props from parent pages.

### Page Composition

Pages use a `SiteFrame` wrapper (`Navbar` + `main` + `Footer`) and compose section components inside it. Routes: `/` (homepage), `/leistungen` (services), `/kontakt` (contact). Content for each route lives in `src/content/` (homepage.ts, leistungen.ts, kontakt.ts).

### Client vs Server Components

Server Components are the default. Only add `"use client"` when interactivity requires it (e.g., `InteractiveNetworkBackground`, `TypewriterAccent`).

### Styling

- **Tailwind CSS 4** with CSS-first config via `@theme inline` in `globals.css`
- Design tokens defined as CSS custom properties: `--background`, `--foreground`, `--accent` (#E30613), `--background-muted`, `--foreground-muted`
- Custom animations (hero-load, feature-card-flow, brand-logo) defined in `globals.css` with `prefers-reduced-motion` fallbacks
- `@utility glass-card` for frosted-glass card surfaces
- Typography: IBM Plex Sans (body), IBM Plex Mono (technical/accent), loaded via `next/font/google` with CSS variable strategy

### Key Design Tokens

| Token                  | Value         |
| ---------------------- | ------------- |
| `--accent` (brand red) | `#E30613`     |
| `--background`         | `#FFFFFF`     |
| `--background-muted`   | `#22232B`     |
| `--foreground`         | `#050505`     |
| Font body              | IBM Plex Sans |
| Font accent/mono       | IBM Plex Mono |

## Brand & Copy Rules

All website copy is in German. Comprehensive brand documentation lives in `docs/brand/` (8 files covering context, positioning, voice, visual identity, terminology).

Key rules:

- Display name is always `Franken Solution` (not `FrankenSolution` or `FrankenSolution Systems`)
- Never invent testimonials, certifications, SLAs, or pricing claims
- Use `Leistungen` not `Portfolio`; avoid `360 Grad`, `garantiert`, `Allround-IT`
- Mark unconfirmed content with `Placeholder:` or `Offen:`
- When writing copy: apply positioning first, then scope, then voice

## Local Skills

This project is configured for two AI tools with separate skill locations:
- **Claude Code** reads from `.claude/skills/` — this is where skill invocation resolves
- **Codex** reads from `.agents/skills/` — canonical source; synced to `~/.codex/skills/` via `scripts/sync-codex-skills.ps1`

When adding or modifying a skill, update `.agents/skills/` first, then run `scripts/sync-claude-skills.ps1` to mirror changes to `.claude/skills/`. Mobile skills (`mobile-design`, `mobile-developer`) are excluded from the Claude mirror.

Active skills for this project: brainstorming, copywriting, scroll-experience, tailwind-patterns, ui-ux-pro-max, nextjs-best-practices, react-best-practices, seo-optimizer, webapp-testing, web-performance-optimization, marketing-psychology, error-resolver, clean-code.
