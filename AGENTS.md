<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Project Snapshot

- Stack: Next.js 16.2.3 App Router, React 19.2.4, TypeScript 5, Tailwind CSS 4
- App routes: `/` (homepage), `/leistungen` (services), `/kontakt` (contact)
- Entrypoints in `src/app`; shared components in `src/components`
- Content separated from components: page copy lives in `src/content/` (homepage.ts, leistungen.ts, kontakt.ts)
- Key homepage sections: Hero, ServicePillars, Trust, About, Process, FinalCta
- Key leistungen components: LeistungenHero, FeaturedPillarCard, SituationMatrix, OngoingLoop
- Global typography and metadata configured in `src/app/layout.tsx`

## Commands

- `npm run dev` starts the local dev server
- `npm run build` builds the production bundle
- `npm run lint` runs ESLint
- `powershell -ExecutionPolicy Bypass -File scripts/sync-codex-skills.ps1` installs repo skills into the local Codex skill directory

## Codex Working Rules

- Prefer Server Components by default and add client boundaries only when interactivity requires them.
- Preserve the existing IBM Plex Sans and IBM Plex Mono typography direction unless the task is a redesign.
- When a Next.js behavior is unclear, check `node_modules/next/dist/docs/` before changing APIs or file conventions.
- Treat `.agents/skills` as the canonical project skill library for Codex.
- Treat `.claude/skills` as a mirrored copy for Claude tooling, not the primary Codex source.

## Local Skills

Project skills live in `.agents/skills/<skill-name>/SKILL.md`.

Use the matching local skill when the task fits:

- `brainstorming`
- `clean-code`
- `code-reviewer`
- `content-creator`
- `copywriting`
- `error-resolver`
- `marketing-psychology`
- `nextjs-best-practices`
- `react-best-practices`
- `scroll-experience`
- `senior-architect`
- `senior-backend`
- `senior-frontend`
- `senior-prompt-engineer`
- `seo-optimizer`
- `tailwind-patterns`
- `ui-ux-pro-max`
- `web-performance-optimization`
- `webapp-testing`
