<script setup lang="ts">
// Order must match the order of the sections in index.astro.
// The active link is highlighted by the small scroll script in index.astro (sets aria-current).
// `wide`: only shown from `sm` up, so the nav fits on a 360px screen without scrolling.
const links = [
  { path: '#projects', name: 'Projects' },
  { path: '#experience', name: 'Experience' },
  { path: '#skills', name: 'Skills' },
  { path: '#about', name: 'About', wide: true },
  { path: '#contact', name: 'Contact' },
]
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-white/10 bg-ink/90 backdrop-blur">
    <nav
      aria-label="Main"
      class="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-4 md:px-8"
    >
      <a
        href="#home"
        class="shrink-0 rounded-md py-2 font-semibold text-white transition-colors hover:text-sun focus-visible:ring-2 focus-visible:ring-sun focus-visible:outline-none"
      >
        Cyril<span class="hidden sm:inline"> Auquier</span><span class="text-sun">.</span>
      </a>
      <ul class="-mr-2 flex items-center text-sm sm:gap-1">
        <li v-for="link in links" :key="link.name" :class="link.wide && 'hidden sm:block'">
          <a
            :href="link.path"
            class="block rounded-md px-2 py-2 whitespace-nowrap text-white/70 transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-sun focus-visible:outline-none aria-[current=true]:text-sun sm:px-3"
          >
            {{ link.name }}
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>
