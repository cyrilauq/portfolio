<script setup lang="ts">
withDefaults(
  defineProps<{
    as?: string
    /** Adds hover lift + accent border. Use with a stretched link inside (`after:absolute after:inset-0`). */
    interactive?: boolean
  }>(),
  { as: 'article', interactive: false },
)
</script>

<template>
  <component
    :is="as"
    :class="[
      'rounded-2xl border border-gray-700 bg-gray-900/40 p-6',
      interactive &&
        'group relative transition hover:-translate-y-1 hover:border-yellow-300/60 hover:shadow-xl hover:shadow-black/20 motion-reduce:transition-none motion-reduce:hover:translate-y-0',
    ]"
  >
    <slot />
  </component>
</template>
