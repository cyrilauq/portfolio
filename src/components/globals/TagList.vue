<script setup lang="ts">
withDefaults(
  defineProps<{
    items: string[]
    size?: 'xs' | 'sm'
    label?: string
  }>(),
  { size: 'xs', label: undefined },
)
</script>

<template>
  <ul class="flex flex-wrap gap-2" :aria-label="label">
    <li
      v-for="item in items"
      :key="item"
      :class="[
        'rounded-full bg-gray-700/60 px-3 py-1 text-gray-200',
        size === 'sm' ? 'text-sm' : 'text-xs',
      ]"
    >
      {{ item }}
    </li>
  </ul>
</template>
