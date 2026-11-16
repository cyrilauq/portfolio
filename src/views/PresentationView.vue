<script setup lang="ts">
import AppButton from '@/components/globals/AppButton.vue'
import { contactLinks } from '@/data/contact'

const stack = ['C#', 'ASP.NET Core', 'Vue.js', 'Angular', '.NET MAUI']
</script>

<template>
  <section
    id="home"
    class="flex min-h-[calc(100svh-4rem)] flex-col justify-center gap-12 py-16 md:flex-row md:items-center md:justify-between"
  >
    <div class="flex max-w-xl flex-col gap-6">
      <p
        class="inline-flex w-fit items-center gap-2 rounded-full border border-yellow-300/40 bg-yellow-300/10 px-3 py-1 text-sm font-medium text-yellow-300"
      >
        <span aria-hidden="true" class="size-2 rounded-full bg-yellow-300" />
        Open to new opportunities
      </p>
      <h1 class="text-4xl font-extrabold tracking-tight text-gray-100 sm:text-5xl md:text-6xl">
        Cyril Auquier
      </h1>
      <p class="text-xl text-gray-400 md:text-2xl">
        Software developer, <span class="text-yellow-300">.NET &amp; Vue</span>
      </p>
      <p class="text-lg leading-relaxed">
        I build web and desktop applications with .NET and Vue, from the database to the deployment.
        Most recently at EDPI: Electron and Angular tools, third-party integrations, and keeping
        existing apps in shape.
      </p>
      <div class="flex flex-wrap gap-4 pt-2">
        <AppButton href="#contact" variant="primary">Contact me</AppButton>
        <AppButton href="#projects">See my projects</AppButton>
      </div>
      <ul class="flex gap-6 text-sm">
        <li v-for="link in contactLinks" :key="link.label">
          <a
            :href="link.href"
            :target="link.external ? '_blank' : undefined"
            :rel="link.external ? 'noopener noreferrer' : undefined"
            class="inline-block py-2 text-gray-400 transition-colors hover:text-yellow-300 focus-visible:ring-2 focus-visible:ring-yellow-300 focus-visible:outline-none"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>
    </div>

    <!-- Developer touch: a short profile written as code. Content mirrors the text on the left. -->
    <figure
      class="w-full max-w-md shrink-0 overflow-hidden rounded-2xl border border-gray-700 bg-gray-900/40 md:w-96"
    >
      <figcaption
        class="flex items-center gap-2 border-b border-gray-700 px-4 py-3 text-xs text-gray-400"
      >
        <span aria-hidden="true" class="flex gap-1.5">
          <span class="size-2.5 rounded-full bg-gray-600" />
          <span class="size-2.5 rounded-full bg-gray-600" />
          <span class="size-2.5 rounded-full bg-gray-600" />
        </span>
        <span class="ml-2 font-mono">cyril.ts</span>
      </figcaption>
      <!-- Whitespace inside <pre> is rendered as-is, so formatters must not touch it. -->
      <!-- prettier-ignore -->
      <pre class="overflow-x-auto p-5 font-mono text-sm leading-relaxed text-gray-300"><code><span class="text-gray-400">const</span> cyril = {
  role: <span class="text-yellow-300">'Software developer'</span>,
  lastJob: <span class="text-yellow-300">'EDPI'</span>,
  period: <span class="text-yellow-300">'02/2025 — 10/2026'</span>,
  stack: [
<template v-for="(tech, i) in stack" :key="tech">    <span class="text-yellow-300">'{{ tech }}'</span>{{ i < stack.length - 1 ? ',' : '' }}
</template>  ],
  degree: <span class="text-yellow-300">'Bachelor, HELMO'</span>,
  openToWork: <span class="text-yellow-300">true</span>,
}</code></pre>
    </figure>
  </section>
</template>
