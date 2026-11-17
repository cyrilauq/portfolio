<script lang="ts" setup>
import PageSection from '@/components/globals/PageSection.vue'

interface Experience {
  kind: 'work' | 'education'
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
    kind: 'work',
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
    kind: 'work',
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
    kind: 'education',
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
  <PageSection id="experience" title="Experience" note="Work and school, most recent first.">
    <!--
      Timeline: the line runs along the left edge.
      Filled dot = job, hollow dot = school.
    -->
    <ol>
      <li
        v-for="(experience, i) in experiences"
        :key="experience.name"
        :class="[
          'relative border-l pl-8',
          i < experiences.length - 1 ? 'border-white/15 pb-12' : 'border-transparent',
        ]"
      >
        <span
          aria-hidden="true"
          :class="[
            'absolute top-1 -left-[7px] size-[13px] rounded-full border-2 border-sun',
            experience.kind === 'work' ? 'bg-sun' : 'bg-ink',
          ]"
        />
        <p class="text-sm text-white/60 tabular-nums">
          <time>{{ experience.from }}</time> – <time>{{ experience.to ?? 'Present' }}</time>
          <span class="sr-only">, {{ experience.kind === 'work' ? 'job' : 'school' }}</span>
        </p>
        <h3 class="mt-1 text-xl font-semibold tracking-tight text-white">
          {{ experience.name }}
        </h3>
        <p class="text-sun">{{ experience.place }}</p>
        <p v-if="experience.description" class="mt-3 max-w-2xl leading-relaxed">
          {{ experience.description }}
        </p>
        <p class="mt-3 max-w-2xl text-sm leading-relaxed text-white/55">
          <span class="sr-only">Skills used: </span>{{ experience.skills.join(' · ') }}
        </p>
      </li>
    </ol>
  </PageSection>
</template>
