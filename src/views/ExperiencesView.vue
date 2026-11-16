<script lang="ts" setup>
import SectionHeading from '@/components/globals/SectionHeading.vue'
import TagList from '@/components/globals/TagList.vue'

interface Experience {
  name: string
  from: string
  to?: string
  place: string
  description?: string
  skills: string[]
}

// Most recent first
const experiences: Experience[] = [
  {
    name: 'Software Developer',
    from: '02/2025',
    to: '10/2026',
    place: 'EDPI',
    description:
      'I maintained existing applications, adapted features to what clients actually needed, integrated third-party services such as GLS, and built new applications as the business grew.',
    skills: [
      'ASP.NET Core',
      'TypeScript',
      'Angular',
      'Electron',
      '.NET MAUI',
      'PostgreSQL',
      'IIS',
      'Requirements analysis',
      'Project management',
    ],
  },
  {
    name: 'End-of-studies internship',
    from: '02/2024',
    to: '05/2024',
    place: 'Mission Target',
    description:
      'Built two applications with Blazor WebAssembly and .NET MAUI for service and time tracking, usable both online and offline.',
    skills: [
      'ASP.NET Core',
      'Blazor WebAssembly',
      '.NET MAUI',
      'Azure Web Apps',
      'Requirements analysis',
    ],
  },
  {
    name: "Bachelor's degree in Application Development",
    from: '2021',
    to: '2024',
    place: 'HELMO Campus Guillemins',
    skills: [
      'ASP.NET Core',
      'PHP',
      'JavaScript',
      'Kotlin',
      'SQL',
      'MySQL',
      'Requirements analysis',
    ],
  },
]
</script>

<template>
  <section id="experiences" class="py-16">
    <SectionHeading eyebrow="Work and education" title="Experience" />
    <ol class="relative ml-2 border-l border-gray-700">
      <li v-for="experience in experiences" :key="experience.name" class="relative pb-12 pl-8 last:pb-0">
        <span aria-hidden="true" :class="[
          'absolute top-1.5 -left-[7.5px] size-3.5 rounded-full ring-4 ring-gray-800',
          experience.to ? 'bg-gray-500' : 'bg-yellow-300',
        ]" />
        <div class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
          <h3 class="text-lg font-semibold text-gray-100">
            {{ experience.name }}
            <span class="font-normal text-yellow-300">· {{ experience.place }}</span>
          </h3>
          <p class="shrink-0 text-sm text-gray-400 tabular-nums">
            {{ experience.from }} — {{ experience.to ?? 'Present' }}
          </p>
        </div>
        <p v-if="experience.description" class="mt-3 max-w-3xl leading-relaxed">
          {{ experience.description }}
        </p>
        <TagList :items="experience.skills" label="Skills used" class="mt-4" />
      </li>
    </ol>
  </section>
</template>
