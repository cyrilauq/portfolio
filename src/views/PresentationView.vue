<script setup lang="ts">
import AppButton from '@/components/globals/AppButton.vue'
import { contactLinks } from '@/data/contact'

const email = contactLinks.find((link) => link.label === 'Email')
const otherLinks = contactLinks.filter((link) => link.label !== 'Email')
</script>

<template>
  <section id="home" class="pt-16 pb-20 md:pt-28 md:pb-28">
    <p class="text-white/60">Cyril Auquier, software developer</p>
    <h1
      class="mt-4 max-w-3xl text-4xl leading-[1.1] font-semibold tracking-tight text-balance text-white sm:text-5xl md:text-6xl"
    >
      I build web and desktop apps with
      <span class="underline decoration-sun decoration-[3px] underline-offset-[0.18em]"
        >.NET and Vue</span
      >, from the database to the deployment.
    </h1>
    <p class="mt-6 max-w-2xl text-lg leading-relaxed">
      Most recently at EDPI, where I worked on Electron and Angular tools, connected third-party
      services like GLS, and kept existing apps running. Before that, a Bachelor's in Application
      Development at HELMO.
    </p>

    <p class="mt-8 flex items-center gap-3 text-white">
      <span aria-hidden="true" class="size-2 shrink-0 rounded-full bg-sun" />
      I'm looking for my next developer role.
    </p>

    <div class="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
      <AppButton v-if="email" :href="email.href" variant="primary">Email me</AppButton>
      <a
        v-for="link in otherLinks"
        :key="link.label"
        :href="link.href"
        target="_blank"
        rel="noopener noreferrer"
        class="rounded-md py-2 text-white underline decoration-white/30 underline-offset-4 transition-colors hover:text-sun hover:decoration-sun focus-visible:ring-2 focus-visible:ring-sun focus-visible:outline-none"
      >
        {{ link.label }}
        <span class="sr-only">(opens in a new tab)</span>
      </a>
    </div>
  </section>
</template>
