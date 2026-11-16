<script lang="ts" setup>
import AppCard from '@/components/globals/AppCard.vue'
import SectionHeading from '@/components/globals/SectionHeading.vue'
import TagList from '@/components/globals/TagList.vue'

interface Project {
  name: string
  description: string
  githubLinks: Array<{ name: string; url: string }>
  liveLink?: string
  skills: string[]
}

const projects: Project[] = [
  {
    name: 'Sumptum',
    description: 'Track and manage your expenses.',
    liveLink: 'https://www.sumptum.be',
    githubLinks: [{ name: 'all', url: 'https://github.com/cyrilauq/shuppi' }],
    skills: ['ASP.NET Core', 'Vue.js 3'],
  },
  {
    name: 'Career Vault',
    description: 'Keep track of your job applications.',
    liveLink: 'https://career-vault-258c9.web.app',
    githubLinks: [],
    skills: ['Firebase', 'Vue.js 3'],
  },
  {
    name: 'Inkukan',
    description: 'Manage your manga collection.',
    liveLink: 'https://inkukan.be',
    githubLinks: [
      { name: 'api', url: 'https://github.com/cyrilauq/inkukan.api' },
      { name: 'front', url: 'https://github.com/cyrilauq/inkukan.web' },
    ],
    skills: ['Vue.js 3', 'ASP.NET Core'],
  },
  {
    name: 'Portfolio',
    description: 'Manage your manga collection.',
    liveLink: 'https://cyrilauquier.dev',
    githubLinks: [{ name: 'front', url: 'https://github.com/cyrilauq/portfolio' }],
    skills: ['Vue.js 3', 'Astro.JS'],
  },
]

const repoLabels: Record<string, string> = { all: 'Code', api: 'API code', front: 'Front-end code' }
const repoLabel = (name: string) => `GitHub: ${repoLabels[name] ?? name}`

const host = (url: string) => new URL(url).hostname.replace(/^www\./, '')
</script>

<template>
  <section id="projects" class="py-16">
    <SectionHeading eyebrow="Side projects, all live" title="Projects" />
    <div class="grid gap-6 sm:grid-cols-2">
      <AppCard
        v-for="project in projects"
        :key="project.name"
        :interactive="!!project.liveLink"
        class="flex flex-col gap-4"
      >
        <div>
          <h3 class="text-xl font-semibold text-gray-100 group-hover:text-yellow-300">
            {{ project.name }}
          </h3>
          <p v-if="project.liveLink" class="mt-1 text-sm text-gray-400">
            {{ host(project.liveLink) }}
          </p>
        </div>
        <p class="flex-1 leading-relaxed">{{ project.description }}</p>
        <TagList :items="project.skills" label="Technologies" />
        <div class="flex flex-wrap items-center gap-x-6 gap-y-1">
          <!-- Stretched link: the whole card opens the live site -->
          <a
            v-if="project.liveLink"
            :href="project.liveLink"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1 py-2 font-medium text-yellow-300 after:absolute after:inset-0 after:rounded-2xl focus-visible:outline-none focus-visible:after:ring-2 focus-visible:after:ring-yellow-300"
          >
            Visit site
            <span
              aria-hidden="true"
              class="transition-transform group-hover:translate-x-1 motion-reduce:transition-none"
              >→</span
            >
            <span class="sr-only">(opens {{ project.name }} in a new tab)</span>
          </a>
          <span v-else class="py-2 text-sm text-gray-400">Not live yet</span>
          <!-- relative z-10 lifts repo links above the stretched link so they stay clickable -->
          <a
            v-for="repo in project.githubLinks"
            :key="repo.url"
            :href="repo.url"
            target="_blank"
            rel="noopener noreferrer"
            class="relative z-10 rounded-md py-2 text-sm text-gray-400 transition-colors hover:text-yellow-300 focus-visible:ring-2 focus-visible:ring-yellow-300 focus-visible:outline-none"
          >
            {{ repoLabel(repo.name) }}
            <span class="sr-only">for {{ project.name }} (opens in a new tab)</span>
          </a>
        </div>
      </AppCard>
    </div>
  </section>
</template>
