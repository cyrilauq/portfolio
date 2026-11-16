<script setup lang="ts">
const links = [
  { path: '#skills', name: 'Skills' },
  { path: '#projects', name: 'Projects' },
  { path: '#experiences', name: 'Experience' },
  { path: '#contact', name: 'Contact' },
]
</script>

<template>
  <header
    class="sticky top-0 z-50 border-b border-gray-700/60 bg-gray-800/85 backdrop-blur supports-[backdrop-filter]:bg-gray-800/70"
  >
    <nav
      aria-label="Main"
      class="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-4 md:px-8"
    >
      <a
        href="#home"
        class="shrink-0 rounded-md font-bold tracking-wider text-yellow-300 focus-visible:ring-2 focus-visible:ring-yellow-300 focus-visible:outline-none"
      >
        CA<span class="text-gray-400">.</span>
      </a>
      <ul class="-mr-2 flex items-center gap-1 overflow-x-auto text-sm md:text-base">
        <li v-for="link in links" :key="link.name">
          <a
            :href="link.path"
            class="block rounded-md px-3 py-2 whitespace-nowrap transition-colors hover:bg-gray-700/60 hover:text-yellow-300 focus-visible:ring-2 focus-visible:ring-yellow-300 focus-visible:outline-none"
          >
            {{ link.name }}
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>
