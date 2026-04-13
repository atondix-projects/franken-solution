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

## Architecture

### Content-Driven Components

Content is separated from presentation. Page copy lives in `src/content/` as typed TypeScript objects (e.g., `homepage.ts`), not hardcoded in components. Components receive content via imports, not props from parent pages.

### Page Composition

Pages use a `SiteFrame` wrapper (`Navbar` + `main` + `Footer`) and compose section components inside it. The homepage currently renders only `Hero` inside `SiteFrame`.

### Client vs Server Components

Server Components are the default. Only add `"use client"` when interactivity requires it (e.g., `InteractiveNetworkBackground`, `TypewriterAccent`).

### Styling

- **Tailwind CSS 4** with CSS-first config via `@theme inline` in `globals.css`
- Design tokens defined as CSS custom properties: `--background`, `--foreground`, `--accent` (#E30613), `--background-muted`, `--foreground-muted`
- Custom animations (hero-load, feature-card-flow, brand-logo) defined in `globals.css` with `prefers-reduced-motion` fallbacks
- `@utility glass-card` for frosted-glass card surfaces
- Typography: IBM Plex Sans (body), IBM Plex Mono (technical/accent), loaded via `next/font/google` with CSS variable strategy

### Key Design Tokens

| Token | Value |
|-------|-------|
| `--accent` (brand red) | `#E30613` |
| `--background` | `#FFFFFF` |
| `--background-muted` | `#F7F5F2` |
| `--foreground` | `#050505` |
| Font body | IBM Plex Sans |
| Font accent/mono | IBM Plex Mono |

## Brand & Copy Rules

All website copy is in German. Comprehensive brand documentation lives in `docs/brand/` (8 files covering context, positioning, voice, visual identity, terminology).

Key rules:
- Display name is always `Franken Solution` (not `FrankenSolution` or `FrankenSolution Systems`)
- Never invent testimonials, certifications, SLAs, or pricing claims
- Use `Leistungen` not `Portfolio`; avoid `360 Grad`, `garantiert`, `Allround-IT`
- Mark unconfirmed content with `Placeholder:` or `Offen:`
- When writing copy: apply positioning first, then scope, then voice

## Local Skills

Project skills live in `.agents/skills/<skill-name>/SKILL.md` and are also mirrored in `.claude/skills/`. Use the matching skill when the task fits (brainstorming, copywriting, scroll-experience, tailwind-patterns, ui-ux-pro-max, etc.).
