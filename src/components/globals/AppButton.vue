<script setup lang="ts">
withDefaults(
  defineProps<{
    href: string
    variant?: 'primary' | 'secondary'
    external?: boolean
  }>(),
  { variant: 'secondary', external: false },
)
</script>

<template>
  <a
    :href="href"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
    :class="[
      'inline-block rounded-lg px-5 py-3 font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-sun focus-visible:outline-none',
      variant === 'primary'
        ? 'bg-sun text-ink hover:bg-sun-light focus-visible:ring-offset-2 focus-visible:ring-offset-ink'
        : 'border border-white/20 text-white hover:border-sun hover:text-sun',
    ]"
  >
    <slot />
  </a>
</template>
