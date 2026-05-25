<script setup lang="ts">
import { ref } from 'vue'

const skills = ref([
  {
    familyName: 'Javascript',
    items: ['Angular', 'Vue.JS 3'],
  },
  {
    familyName: '.NET',
    items: ['.NET MAUI', 'C#', 'ASP.NET CORE', 'WPF', 'Blazor'],
  },
  {
    familyName: 'Deploiement',
    items: ['Github', 'Azure Web Apps', 'Docker', 'Vercel'],
  },
  {
    familyName: 'Databases',
    items: ['MySQL', 'PostgreSQL'],
  },
])
</script>

<template>
  <section id="skills" class="w-full flex flex-col justify-center">
    <h2 class="text-yellow-300 text-xl tracking-widest my-2">Key skills</h2>
    <div class="flex md:flex-row flex-wrap gap-16 justify-center text-left">
      <article v-for="skill in skills" :key="skill.familyName">
        <h3 class="my-2">{{ skill.familyName }}</h3>
        <ul class="list-disc">
          <li v-for="item in skill.items" :key="item">{{ item }}</li>
        </ul>
      </article>
    </div>
  </section>
</template>
