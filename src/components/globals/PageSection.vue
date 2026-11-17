<script setup lang="ts">
defineProps<{
  id: string
  title: string
  /** One short, plain sentence shown under the title. */
  note?: string
}>()
</script>

<template>
  <!-- Title in a narrow left column (sticks while you scroll on desktop), content on the right. -->
  <section
    :id="id"
    class="grid gap-8 border-t border-white/10 py-16 md:grid-cols-[11rem_1fr] md:gap-12 md:py-24"
  >
    <header class="md:sticky md:top-24 md:self-start">
      <h2 class="text-2xl font-semibold tracking-tight text-white">{{ title }}</h2>
      <p v-if="note" class="mt-2 text-sm leading-relaxed text-white/55">{{ note }}</p>
    </header>
    <div class="min-w-0">
      <slot />
    </div>
  </section>
</template>
