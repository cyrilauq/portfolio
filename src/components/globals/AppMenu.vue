<script setup lang="ts">
import { ref } from 'vue'

const links = ref([
  {
    path: '#home',
    name: 'Home',
  },
  {
    path: '#skills',
    name: 'Skills',
  },
  {
    path: '#projects',
    name: 'Projects',
  },
  {
    path: '#contact',
    name: 'Contact',
  },
])
</script>
<template>
  <nav class="w-full flex justify-center py-4 top-0 sticky bg-gray-800">
    <ul class="flex flex-row">
      <li
        v-for="link in links"
        :key="link.name"
        class="hover:text-yellow-300 w-24 px-4 py-2 hover:bg-gray-50/50 rounded-md"
      >
        <a :href="link.path">{{ link.name }}</a>
      </li>
    </ul>
  </nav>
</template>
