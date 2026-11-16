<script lang="ts" setup>
import AppCard from '@/components/globals/AppCard.vue'
import SectionHeading from '@/components/globals/SectionHeading.vue'
import TagList from '@/components/globals/TagList.vue'

interface Project {
  name: string
  description: string
  liveLink?: string
  skills: string[]
}

const projects: Project[] = [
  {
    name: 'Sumptum',
    description: 'Track and manage your expenses.',
    liveLink: 'https://www.sumptum.be',
    skills: ['ASP.NET Core', 'Vue.js 3'],
  },
  {
    name: 'Career Vault',
    description: 'Keep track of your job applications.',
    liveLink: 'https://career-vault-258c9.web.app',
    skills: ['Firebase', 'Vue.js 3'],
  },
  {
    name: 'Inkukan',
    description: 'Manage your manga collection.',
    liveLink: 'https://inkukan.be',
    skills: ['Astro', 'Vue.js 3', 'ASP.NET Core'],
  },
]

const host = (url: string) => new URL(url).hostname.replace(/^www\./, '')
</script>

<template>
  <section id="projects" class="py-16">
    <SectionHeading eyebrow="Side projects, all live" title="Projects" />
    <div class="grid gap-6 md:grid-cols-3">
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
        <a
          v-if="project.liveLink"
          :href="project.liveLink"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-1 font-medium text-yellow-300 after:absolute after:inset-0 after:rounded-2xl focus-visible:outline-none focus-visible:after:ring-2 focus-visible:after:ring-yellow-300"
        >
          Visit site
          <span
            aria-hidden="true"
            class="transition-transform group-hover:translate-x-1 motion-reduce:transition-none"
            >→</span
          >
          <span class="sr-only">(opens {{ project.name }} in a new tab)</span>
        </a>
        <span v-else class="text-sm text-gray-400">Not live yet</span>
      </AppCard>
    </div>
  </section>
</template>
