---
name: portfolio-design
description: Design guideline for this portfolio. Use BEFORE creating or restyling any Vue component, Astro section, or UI element in this repo (new section, card, nav item, button, list, hero, footer, etc.), so new UI matches the established look, tokens and UX rules.
---

# Portfolio design guideline

Read this whole file before writing UI. Then build the element, then run the checklist at the bottom.

## 1. Identity (do not drift from it)

- **Dark, calm, single accent.** Background `bg-gray-800`, surfaces `bg-gray-900/40`, borders `border-gray-700`.
  Body text `text-gray-300`, headings `text-gray-100`, secondary/meta `text-gray-400`, muted `text-gray-500`.
  Accent is **`yellow-300` only** (hover `yellow-200`). Never add a second accent hue.
- **Font:** default Tailwind sans stack. No extra web fonts unless the user asks.
- **Approved style is the "card" redesign** (rounded cards, pill tags, timeline, filled primary CTA).
  A stripped résumé/minimal variant was tried and rejected by the user. Don't swing to that unless asked.
- One page, anchor-navigated. A portfolio does not need sub-pages (Pierre Burel, Matt Farley references).

## 2. Building blocks: reuse these exact patterns

| Element | Classes / component |
|---|---|
| Page container | `<main class="mx-auto max-w-5xl px-4 md:px-8">` (already in `index.astro`) |
| Section | `<section id="…" class="py-16">` + `<SectionHeading eyebrow="…" title="…" />` from `@/components/globals/SectionHeading.vue` |
| Card | `rounded-2xl border border-gray-700 bg-gray-900/40 p-6` |
| Card title | `text-lg font-semibold text-gray-100` (project cards: `text-xl`) |
| Tag / chip | `<li class="rounded-full bg-gray-700/60 px-3 py-1 text-xs text-gray-200">` inside `<ul class="flex flex-wrap gap-2">` (`text-sm` for skills) |
| Primary button | `rounded-lg bg-yellow-300 px-5 py-3 font-semibold text-gray-900 hover:bg-yellow-200` |
| Secondary button | `rounded-lg border border-gray-600 px-5 py-3 font-semibold text-gray-100 hover:border-yellow-300 hover:text-yellow-300` |
| Inline/text link | `text-yellow-300` or `hover:text-yellow-300` |
| Grid of cards | `grid gap-6 sm:grid-cols-2` or `md:grid-cols-3` |
| Dates | `text-sm text-gray-400 tabular-nums`, format `02/2025 — Present` |

Every interactive element also gets
`transition-colors focus-visible:ring-2 focus-visible:ring-yellow-300 focus-visible:outline-none`.

If a pattern is needed twice or more, extract a component in `src/components/globals/` instead of copy-pasting long class strings.

## 3. Layout & spacing rules

- Mobile first: design for ~360px, then add `sm:`/`md:` columns. No horizontal page scroll, ever.
- Vertical rhythm: sections `py-16`, heading→content `mb-10` (handled by SectionHeading), card internals `gap-4`, grids `gap-6`.
- Text blocks: `leading-relaxed`, cap width (`max-w-xl` … `max-w-3xl`). **Never `text-justify`.**
- Left-align content. Center only short standalone blocks (contact CTA, footer).
- New section → add its `id` and, if it belongs in the nav, a matching link in `AppMenu.vue` **in page order**.

## 4. UX rules (learned from the reference portfolios)

- **The first screen answers "who, what, next step"**: name, role, one-sentence pitch, a primary CTA. (Matt Farley: the offer is clear immediately.)
- **Projects are the proof.** Each project shows name, one-line outcome-focused description, stack tags, and a working link (live and/or repo). Whole card clickable via a stretched link (`after:absolute after:inset-0`). With many projects, add tech filters (caferati.me). Give each project something visually distinct when screenshots exist (Raoul Gaillard).
- **Easy navigation:** sticky nav, `scroll-pt-*` offset so headings aren't hidden, nothing that needs a map to understand.
- **Contact is always one click away**: GitHub, LinkedIn, email in the hero or nav *and* at the bottom.
- **Show, don't claim.** Prefer real artefacts (live links, repos, certificates, a CV download) over adjectives. **No skill-percentage bars.** They mean nothing to recruiters (seen on mbitu-portfolio, avoid).
- **Personality through details, not gimmicks.** Small touches that reflect a developer (a subtle code-flavoured detail, a meaningful hover) are good. Games or heavy canvas effects (peteroravec, caferati) only if the user explicitly asks; they must never block access to content.
- **No dead UI.** No placeholder `#` links, fake newsletter forms, empty "Services" lists, stale copyright years (use `new Date().getFullYear()`). These were the weak spots on mbitu-portfolio.

## 5. Motion & interactivity

- Default is **zero JS**: Vue components render static. Only add `client:*` in `index.astro` when the element truly needs browser state, and say so.
- Motion is small and purposeful: `transition` on color/border, `hover:-translate-y-1` on cards, arrow `group-hover:translate-x-1`. Always pair with `motion-reduce:` overrides.
- No auto-playing carousels/sliders for content people need to read (the old skills slider was removed for this reason).

## 6. Copy tone

- First person, plain English, short sentences. Specific over generic ("Built two apps with Blazor and .NET MAUI for offline time tracking" beats "passionate about creating pixel-perfect experiences").
- No emoji, no hype words (passionate, pixel-perfect, cutting-edge, ninja, rockstar).
- Proofread: the site had many typos before. Check spelling of tech names (ASP.NET Core, Vue.js, GitHub, PostgreSQL).

## 7. Accessibility (non-negotiable)

- Semantic tags: `section`/`article`/`ul`/`ol`/`h2`→`h3` in order; one `h1` (hero).
- Contrast: body text never darker than `gray-400` on `gray-800`.
- Every icon-only control has `aria-label`; decorative elements `aria-hidden="true"`.
- External links: `target="_blank" rel="noopener noreferrer"` + `sr-only` hint when the link text is ambiguous.
- Images: real `alt`, never `src=""`.
- Tap targets ≥ ~40px tall (`py-2`+ on nav links, `py-3` on buttons).

## 8. Code conventions

- `<script setup lang="ts">`, typed plain arrays for static content (`const projects: Project[] = […]`), not `ref()` unless reactive.
- Prettier style: no semicolons, single quotes, width 100. Imports via `@/`.
- After building: `npm run type-check` and `npm run build` must pass.

## Checklist before finishing a UI change

- [ ] Uses only the palette and patterns from §1–2 (no new colors, radii, or shadows invented ad hoc)
- [ ] Looks right at 360px, 768px, 1280px; no horizontal scroll
- [ ] Keyboard: every interactive element reachable and shows the yellow focus ring
- [ ] No `text-justify`, no placeholder links, no empty `src`, no emoji/hype copy
- [ ] Section `id` ↔ `AppMenu` link in sync, in page order
- [ ] No `client:*` added unless required (and explained)
- [ ] Type-check and build pass

References used to build this guide: see `references.md`.
