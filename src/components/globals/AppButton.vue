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
      'inline-block rounded-lg px-5 py-3 font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-yellow-300 focus-visible:outline-none',
      variant === 'primary'
        ? 'bg-yellow-300 text-gray-900 hover:bg-yellow-200 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-800'
        : 'border border-gray-600 text-gray-100 hover:border-yellow-300 hover:text-yellow-300',
    ]"
  >
    <slot />
  </a>
</template>
