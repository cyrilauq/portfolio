# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-page personal portfolio site built with **Astro 6** (server output, deployed on **Vercel**) using **Vue 3** components for the UI and **Tailwind CSS v4** for styling. Content is in English (`<html lang="en">`).

## Commands

```sh
npm install
npm run dev         # astro dev server on 0.0.0.0:4321
npm run build       # astro build (Vercel adapter output)
npm run preview     # preview the production build
npm run lint        # runs oxlint then eslint, both with --fix (modifies files)
npm run type-check  # vue-tsc --build (covers .ts/.vue only, not .astro)
npm run format      # prettier on src/
```

There is no test suite. Note that `astro` itself is not listed in `package.json`; it is pulled in transitively by the `@astrojs/*` packages.

## Architecture

- **`astro.config.mjs` is the real build config.** It wires the Vue integration, the Tailwind Vite plugin, the Vercel adapter (`output: 'server'`), and the `@` → `./src` alias. `vite.config.ts` and the README are leftovers from the original `create-vue` template and are not used by the Astro build — change settings in `astro.config.mjs`.
- **Page composition:** `src/pages/index.astro` is the only page. It wraps everything in `src/layouts/Layout.astro` (which imports `src/styles/global.css` → `@import 'tailwindcss'`) and stacks the section components from `src/views/` (Presentation, Skills, Projects, Experiences). Some sections (Strengths, Links/contact) are written inline in `index.astro`.
- **Hydration:** Vue components render as static HTML by default. Only components given a `client:*` directive in `index.astro` are interactive — currently none, so the page ships no JS. The generic auto-playing `AppSlider` (`src/components/sliders/`) is kept but unused. Any new component that needs reactivity/events in the browser must get a `client:` directive.
- **Navigation:** `src/components/globals/AppMenu.vue` is a sticky nav of in-page anchor links (`#home`, `#skills`, `#projects`, …) that must match the `id` attributes of the section elements. Update both when adding/renaming a section.
- **Content as data:** Portfolio content (projects, skills, experiences) is hardcoded as plain typed arrays inside each view's `<script setup>` (strengths live in the frontmatter of `index.astro`; contact links in `src/data/contact.ts`, shared by the hero and contact section). Edit those arrays to update content. Shared UI building blocks (`AppCard`, `AppButton`, `TagList`, `SectionHeading`) are in `src/components/globals/`.

## Conventions

- Vue SFCs use `<script setup lang="ts">`; TS has `noUncheckedIndexedAccess` enabled.
- Prettier: no semicolons, single quotes, print width 100.
- Linting is oxlint (correctness rules) + ESLint (`vue/flat/essential` + Vue TS recommended), with `eslint-plugin-oxlint` disabling ESLint rules oxlint already covers.
- Styling is Tailwind utility classes inline in templates (gray-800 background, yellow-300 accents).

## UI work

**Before creating or restyling any component, section or UI element, invoke the `portfolio-design` skill** (`.claude/skills/portfolio-design/`) and follow its patterns and checklist.
