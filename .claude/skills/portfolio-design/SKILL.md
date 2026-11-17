---
name: portfolio-design
description: Design guideline for this portfolio. Use BEFORE creating or restyling any Vue component, Astro section, or UI element in this repo (new section, card, nav item, button, list, hero, footer, etc.), so new UI matches the established look, tokens and UX rules.
---

# Portfolio design guideline

Read this whole file before writing UI. Then build the element, then run the checklist at the bottom.

## 1. Identity (do not drift from it)

- **Black and yellow, 2 shades each, nothing else** (user requirement). Tokens are in `src/styles/global.css`
  (`@theme`; Tailwind's default palette is removed, so `gray-*` / `yellow-*` classes don't exist):
  `ink` (page bg), `ink-raised` (raised surfaces, if ever needed), `sun` (accent), `sun-light` (accent hover).
  Text and borders are white with opacity: headings `text-white`, body `text-white/70` (set on `body`),
  meta `text-white/55`–`/60`, borders `border-white/10`. Text on yellow: `text-ink`.
  Never add a new color token or hue.
- **Font:** default Tailwind sans stack. No extra web fonts unless the user asks.
- **Approved style: "human, editorial"** (2026-11, user asked for "less AI, more human"). Sections are
  separated by a thin rule with the title in a left column; content is prose and plain lists, not cards.
  Avoid AI-template tells: uppercase numbered eyebrows (`01 —— ABOUT`), pulsing "available" pills,
  fake code/terminal windows, identical card grids, pill tags everywhere, ↗ icon circles, gradients.
  The experience **timeline stays** (user requirement). History: a card-grid version preceded this one;
  an earlier stripped résumé variant was rejected, so keep structure, hierarchy and the yellow accents.
- One page, anchor-navigated. A portfolio does not need sub-pages (Pierre Burel, Matt Farley references).

## 2. Building blocks: reuse these exact patterns

| Element | Classes / component |
|---|---|
| Page container | `<main class="mx-auto max-w-5xl px-4 md:px-8">` (already in `index.astro`) |
| Section | `<PageSection id="…" title="…" note?="…">` (`@/components/globals/PageSection.vue`): top rule, title in a sticky left column on `md`, content on the right |
| Item title | `text-xl`/`text-2xl font-semibold tracking-tight text-white` |
| List of items | `<ul class="divide-y divide-white/10">`, items `py-10 first:pt-0 last:pb-0` (projects) |
| Stack / tech list | Plain text, `text-sm text-white/55`, joined with ` · `. No pill tags. |
| Bullet notes | `relative pl-5` + a short yellow dash (`before:h-px before:w-2.5 before:bg-sun`) |
| Primary button | `AppButton variant="primary"` (`bg-sun text-ink hover:bg-sun-light`). One per screen at most (hero "Email me"). |
| Text link | `text-white underline decoration-white/30 underline-offset-4 hover:text-sun hover:decoration-sun`; live-site links `text-sun` |
| Experience | Vertical timeline in `ExperiencesView`: line on the left, filled dot = job, hollow dot = school |
| Dates | `text-sm text-white/60 tabular-nums`, format `02/2025 – Present` |
| External-link arrow | `&#x2197;&#xFE0E;` (the `FE0E` stops Windows rendering it as a blue emoji) |

Every interactive element also gets
`transition-colors focus-visible:ring-2 focus-visible:ring-sun focus-visible:outline-none`.

Nav: the active link gets `aria-current="true"` from the small script in `index.astro` and is styled with `aria-[current=true]:`.

If a pattern is needed twice or more, extract a component in `src/components/globals/` instead of copy-pasting long class strings.

## 3. Layout & spacing rules

- Mobile first: design for ~360px, then add `sm:`/`md:` columns. No horizontal page scroll, ever.
- Vertical rhythm: sections `py-16 md:py-24` (handled by `PageSection`), items `py-10`, grids `gap-8`+.
- Page order follows what recruiters look for: hero → projects → experience → skills → about → contact.
- Text blocks: `leading-relaxed`, cap width (`max-w-xl` … `max-w-3xl`). **Never `text-justify`.**
- Left-align content. Center only short standalone blocks (contact CTA, footer).
- New section → add its `id` and, if it belongs in the nav, a matching link in `AppMenu.vue` **in page order**.

## 4. UX rules (learned from the reference portfolios)

- **The first screen answers "who, what, next step"**: name, role, one-sentence pitch, a primary CTA. (Matt Farley: the offer is clear immediately.)
- **Projects are the proof.** Each project shows name, a one-line summary, short factual build notes (problem / approach / how it's built, only things that are true in the repo, never invented), the stack, and working links (live and repo). With many projects, add tech filters (caferati.me). Give each project something visually distinct when screenshots exist (Raoul Gaillard).
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
- Contrast: body text never below `text-white/55` on `ink`.
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
