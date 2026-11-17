<script lang="ts" setup>
import PageSection from '@/components/globals/PageSection.vue'

interface Project {
  name: string
  /** One sentence: what it is for. */
  summary: string
  /** Short factual notes on how it is built. Only write what is true and checkable in the repo. */
  details?: string[]
  stack: string[]
  liveLink?: string
  repos: Array<{ label: string; url: string }>
}

// Strongest full-stack proof first.
const projects: Project[] = [
  {
    name: 'Inkukan',
    summary: 'A web app to keep track of a manga collection.',
    details: [
      'ASP.NET Core API split into API and infrastructure projects, with a separate Vue front end.',
      'Entity Framework Core with migrations, JWT authentication and a seeded admin account.',
      'Files stored on Vercel Blob storage.',
    ],
    stack: ['ASP.NET Core', 'Entity Framework Core', 'Vue.js 3'],
    liveLink: 'https://inkukan.be',
    repos: [
      { label: 'API code', url: 'https://github.com/cyrilauq/inkukan.api' },
      { label: 'Front-end code', url: 'https://github.com/cyrilauq/inkukan.web' },
    ],
  },
  {
    name: 'Sumptum',
    summary: 'Track and manage your expenses.',
    stack: ['ASP.NET Core', 'Vue.js 3'],
    liveLink: 'https://www.sumptum.be',
    repos: [{ label: 'Code', url: 'https://github.com/cyrilauq/shuppi' }],
  },
  {
    name: 'Career Vault',
    summary: 'Keep track of your job applications.',
    stack: ['Vue.js 3', 'Firebase'],
    liveLink: 'https://career-vault-258c9.web.app',
    repos: [],
  },
  {
    name: 'This portfolio',
    summary: 'The site you are on.',
    details: [
      'Astro renders the Vue components to plain HTML, so the page only ships a few lines of JavaScript.',
    ],
    stack: ['Astro', 'Vue.js 3', 'Tailwind CSS'],
    liveLink: 'https://cyrilauquier.dev',
    repos: [{ label: 'Code', url: 'https://github.com/cyrilauq/portfolio' }],
  },
]

const host = (url: string) => new URL(url).hostname.replace(/^www\./, '')

const linkClass =
  'rounded-md py-2 transition-colors focus-visible:ring-2 focus-visible:ring-sun focus-visible:outline-none'
</script>

<template>
  <PageSection id="projects" title="Projects" note="Built on my own time. All of them are online.">
    <ul class="divide-y divide-white/10">
      <li v-for="project in projects" :key="project.name" class="py-10 first:pt-0 last:pb-0">
        <h3 class="text-2xl font-semibold tracking-tight text-white">{{ project.name }}</h3>
        <p class="mt-2 max-w-2xl text-lg leading-relaxed text-white/85">{{ project.summary }}</p>

        <ul v-if="project.details" class="mt-4 max-w-2xl space-y-2">
          <li
            v-for="detail in project.details"
            :key="detail"
            class="relative pl-5 leading-relaxed before:absolute before:top-[0.7em] before:left-0 before:h-px before:w-2.5 before:bg-sun"
          >
            {{ detail }}
          </li>
        </ul>

        <p class="mt-4 text-sm text-white/55">
          <span class="sr-only">Built with: </span>{{ project.stack.join(' · ') }}
        </p>

        <p class="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-sm">
          <a
            v-if="project.liveLink"
            :href="project.liveLink"
            target="_blank"
            rel="noopener noreferrer"
            :class="[linkClass, 'font-medium text-sun hover:text-sun-light']"
          >
            {{ host(project.liveLink) }} <span aria-hidden="true">&#x2197;&#xFE0E;</span>
            <span class="sr-only">(opens {{ project.name }} in a new tab)</span>
          </a>
          <a
            v-for="repo in project.repos"
            :key="repo.url"
            :href="repo.url"
            target="_blank"
            rel="noopener noreferrer"
            :class="[linkClass, 'text-white/70 hover:text-white']"
          >
            {{ repo.label }} on GitHub
            <span class="sr-only">for {{ project.name }} (opens in a new tab)</span>
          </a>
        </p>
      </li>
    </ul>
  </PageSection>
</template>
