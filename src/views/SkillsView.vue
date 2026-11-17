<script setup lang="ts">
import PageSection from '@/components/globals/PageSection.vue'

interface SkillFamily {
  familyName: string
  items: string[]
}

const skills: SkillFamily[] = [
  { familyName: '.NET', items: ['C#', 'ASP.NET Core', 'Blazor', '.NET MAUI', 'WPF'] },
  { familyName: 'JavaScript', items: ['TypeScript', 'Vue.js 3', 'Angular', 'Electron'] },
  { familyName: 'Databases', items: ['PostgreSQL', 'MySQL'] },
  { familyName: 'Deployment', items: ['GitHub', 'Docker', 'Azure Web Apps', 'IIS', 'Vercel'] },
]
</script>

<template>
  <PageSection id="skills" title="Skills" note="What I use day to day.">
    <dl class="grid gap-x-10 gap-y-8 sm:grid-cols-2">
      <div v-for="skill in skills" :key="skill.familyName">
        <dt class="text-sm font-medium text-sun">{{ skill.familyName }}</dt>
        <dd class="mt-2 text-lg leading-relaxed text-white">{{ skill.items.join(', ') }}</dd>
      </div>
    </dl>
  </PageSection>
</template>
