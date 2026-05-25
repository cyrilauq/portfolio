<script lang="ts" setup>
import { ref } from 'vue'

const projects = ref([
  {
    name: 'Shuppi',
    description: 'An app for manage expenses',
    liveLink: 'https://www.shuppi.be',
    skills: ['ASP.NET CORE', 'Vue.JS 3'],
  },
  {
    name: 'Career vault',
    description: 'An app for keeping track of job application',
    liveLink: 'https://career-vault-258c9.web.app',
    skills: ['Firebase', 'Vue.JS 3'],
  },
  {
    name: 'Inkshelf',
    description: 'An app for managing manga collection',
    liveLink: undefined,
    skills: ['Astro.JS', 'Vue.JS 3', 'ASP.NET CORE'],
  },
])
</script>
<template>
  <section id="projects" class="w-full flex flex-col justify-center">
    <h2 class="text-yellow-300 text-xl tracking-widest my-2">Recent projects</h2>
    <div class="flex md:flex-row flex-wrap gap-8 justify-center text-left">
      <article
        class="flex flex-col items-center w-80 gap-2"
        v-for="project in projects"
        :key="project.name"
      >
        <h3>{{ project.name }}</h3>
        <p class="justify-start">{{ project.description }}</p>
        <div class="flex flex-row gap-8">
          <span v-for="skill in project.skills" :key="skill">{{ skill }}</span>
        </div>
        <a
          :href="project.liveLink"
          class="hover:text-yellow-300"
          target="_blank"
          v-if="project.liveLink"
          >Go live</a
        >
        <span v-else>Not live yet</span>
      </article>
    </div>
  </section>
</template>
