<script setup lang="ts">
defineProps<{
  eyebrow?: string
  title: string
}>()
</script>

<template>
  <header class="mb-10 flex flex-col gap-2">
    <p v-if="eyebrow" class="text-sm font-medium tracking-widest text-yellow-300 uppercase">
      {{ eyebrow }}
    </p>
    <h2 class="text-3xl font-bold text-gray-100 md:text-4xl">{{ title }}</h2>
  </header>
</template>
