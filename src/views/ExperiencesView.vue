<script lang="ts" setup>
import AppSlider from '@/components/sliders/AppSlider.vue'
import { ref } from 'vue'

const experiences = ref([
  {
    name: "Bachelor's Degree in Application Development",
    from: '2021',
    to: '2025',
    place: 'HELMO Campus Guillemins',
    description: '',
    skills: [
      'ASP.NET CORE',
      'PHP',
      'JavaScript',
      'Kotlin',
      'Requirements Analysis',
      'SQL',
      'MySQL',
    ],
  },
  {
    name: 'End-of-Studies Internship',
    from: '02/2025',
    to: '05/2025',
    place: 'Mission Target',
    description:
      'Development of two applications using Blazor WebAssembly and .NET MAUI, enabling service/time tracking as well as online/offline usability.',
    skills: [
      'ASP.NET CORE',
      '.NET Blazor Web Assembly',
      '.NET MAUI',
      'Azure Web Apps',
      'Requirements Analysis',
      'Troubleshooting & Quick Problem-Solving',
    ],
  },
  {
    name: 'Software Developer',
    from: '02/2026',
    place: 'EDPI',
    description:
      'Maintaining existing applications, adapting existing features to better meet client needs, integrating third-party services (e.g., GLS), and building new applications to support growing business requirements.',
    skills: [
      'ASP.NET CORE',
      'JavaScript',
      'TypeScript',
      'Electron JS',
      'Angular',
      '.NET MAUI',
      'Requirements Analysis',
      'Troubleshooting & Quick Problem-Solving',
      'PostgreSQL',
      'IIS',
      'Project Management',
    ],
  },
])
</script>

<template>
  <section id="experiences" class="w-full flex flex-col justify-center">
    <h2 class="text-yellow-300 text-xl tracking-widest my-2">My experiences</h2>
    <div class="flex flex-col gap-8 justify-center text-left items-center">
      <article
        class="flex flex-col items-center md:w-1/3 gap-2"
        v-for="experience in experiences"
        :key="experience.name"
      >
        <div class="flex flex-row self-start w-full justify-between">
          <h3 v-if="experience.name">{{ experience.name }} ({{ experience.place }})</h3>
          <h3 v-else>{{ experience.place }}</h3>
          <span class="w-40 text-right"
            >{{ experience.from }} - {{ experience.to ?? 'Today' }}</span
          >
        </div>
        <p class="justify-start">{{ experience.description }}</p>
        <AppSlider :items="experience.skills" :items-to-show="4" :auto-play-interval="3500">
          <template #card="{ item }">
            <div>
              <p>{{ item }}</p>
            </div>
          </template>
        </AppSlider>
      </article>
    </div>
  </section>
</template>
