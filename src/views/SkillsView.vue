<script setup lang="ts">
import AppCard from '@/components/globals/AppCard.vue'
import SectionHeading from '@/components/globals/SectionHeading.vue'
import TagList from '@/components/globals/TagList.vue'

interface SkillFamily {
  familyName: string
  items: string[]
}

const skills: SkillFamily[] = [
  { familyName: '.NET', items: ['C#', 'ASP.NET Core', 'Blazor', '.NET MAUI', 'WPF'] },
  { familyName: 'JavaScript', items: ['TypeScript', 'Vue.js 3', 'Angular', 'Electron'] },
  { familyName: 'Deployment', items: ['GitHub', 'Docker', 'Azure Web Apps', 'IIS', 'Vercel'] },
  { familyName: 'Databases', items: ['PostgreSQL', 'MySQL'] },
]
</script>

<template>
  <section id="skills" class="py-16">
    <SectionHeading eyebrow="What I work with" title="Skills" />
    <div class="grid gap-6 sm:grid-cols-2">
      <AppCard v-for="skill in skills" :key="skill.familyName">
        <h3 class="mb-4 text-lg font-semibold text-gray-100">{{ skill.familyName }}</h3>
        <TagList :items="skill.items" size="sm" />
      </AppCard>
    </div>
  </section>
</template>
