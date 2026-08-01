<script setup lang="ts" generic="T">
import { ref, onMounted, onUnmounted, computed, watch, type StyleValue } from 'vue'

interface Props {
  items: T[]
  autoPlayInterval?: number
  itemsToShow?: number
}

const props = withDefaults(defineProps<Props>(), {
  autoPlayInterval: 3000,
  itemsToShow: 1,
})

defineSlots<{
  card(props: { item: T; index: number }): any
}>()

const sliderContainer = ref<HTMLDivElement | null>(null)
const currentIndex = ref<number>(0)
let timer: ReturnType<typeof setInterval> | null = null

// Conversion sécurisée en nombre
const itemsToShowNum = computed(() => Number(props.itemsToShow) || 1)

// Index maximum
const maxIndex = computed(() => {
  return Math.max(0, props.items.length - itemsToShowNum.value)
})

// Validation de la capacité de défilement
const canScroll = computed(() => props.items.length > itemsToShowNum.value)

const totalPages = computed(() => {
  if (!canScroll.value) return 1
  return props.items.length - itemsToShowNum.value + 1
})

// Autoplay
const startAutoPlay = (): void => {
  stopAutoPlay()
  if (!canScroll.value) return

  timer = setInterval(() => {
    next()
  }, props.autoPlayInterval)
}

const stopAutoPlay = (): void => {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
}

// Navigation (avec émission garantie)
const next = (e?: Event): void => {
  if (e) e.stopPropagation()
  console.log('NEXT CLICKED -> Index actuel :', currentIndex.value, 'Max :', maxIndex.value)

  if (currentIndex.value >= maxIndex.value) {
    currentIndex.value = 0
  } else {
    currentIndex.value++
  }
}

const prev = (e?: Event): void => {
  if (e) e.stopPropagation()
  console.log('PREV CLICKED -> Index actuel :', currentIndex.value)

  if (currentIndex.value <= 0) {
    currentIndex.value = maxIndex.value
  } else {
    currentIndex.value--
  }
}

const goTo = (index: number): void => {
  currentIndex.value = Math.min(index, maxIndex.value)
}

watch([() => props.items.length, () => props.itemsToShow], () => {
  if (currentIndex.value > maxIndex.value) {
    currentIndex.value = maxIndex.value
  }
  startAutoPlay()
})

const trackStyle = computed<StyleValue>(() => {
  const translateValue = currentIndex.value * (100 / itemsToShowNum.value)
  return {
    transform: `translateX(-${translateValue}%)`,
  }
})

const itemStyle = computed<StyleValue>(() => ({
  flex: `0 0 ${100 / itemsToShowNum.value}%`,
}))

onMounted(() => {
  startAutoPlay()
})

onUnmounted(() => {
  stopAutoPlay()
})
</script>

<template>
  <!-- Le conteneur principal -->
  <div
    class="w-full flex flex-col py-4 select-none gap-4 group"
    @mouseenter="stopAutoPlay"
    @mouseleave="startAutoPlay"
  >
    <!-- Ligne principale : "items-stretch" force les boutons à prendre la hauteur des cartes -->
    <div class="flex items-stretch justify-between w-full gap-2 md:gap-4">
      <!-- Bouton Précédent -->
      <button
        v-if="canScroll"
        type="button"
        @click.stop.prevent="prev"
        class="shrink-0 flex items-center bg-linear-to-r from-yellow-500 focus:ring-yellow-500 hover:from-yellow-300 justify-center cursor-pointer px-2 md:px-4 rounded-xl shadow-md transition-all duration-300 focus:outline-none focus:ring-2 text-gray-800"
        aria-label="Carte précédente"
      >
        <svg
          class="w-6 h-6 md:w-8 md:h-8 pointer-events-none transition-transform group-hover:-translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <!-- Conteneur des cartes -->
      <div class="flex-1 overflow-hidden py-2">
        <div
          class="flex transition-transform duration-500 ease-out h-full"
          :style="trackStyle"
          ref="sliderContainer"
        >
          <div
            v-for="(item, index) in items"
            :key="index"
            class="px-2 md:px-3 box-border h-full"
            :style="itemStyle"
          >
            <!-- Ajout de h-full ici pour que les cartes prennent aussi toute la hauteur si elles ont des tailles différentes -->
            <slot name="card" :item="item" :index="index">
              <div
                class="bg-white h-full p-6 rounded-2xl shadow-lg border border-gray-100 text-black"
              >
                <pre>{{ item }}</pre>
              </div>
            </slot>
          </div>
        </div>
      </div>

      <!-- Bouton Suivant -->
      <button
        v-if="canScroll"
        type="button"
        @click.stop.prevent="next"
        class="flex-shrink-0 flex items-center bg-linear-to-l from-yellow-500 focus:ring-yellow-500 hover:from-yellow-300 justify-center cursor-pointer px-2 md:px-4 rounded-xl shadow-md transition-all duration-300 focus:outline-none focus:ring-2 text-gray-800"
        aria-label="Carte suivante"
      >
        <svg
          class="w-6 h-6 md:w-8 md:h-8 pointer-events-none transition-transform group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>

    <!-- Indicateurs / Puces -->
    <div v-if="totalPages > 1" class="flex justify-center space-x-2 mt-2">
      <button
        v-for="(_, index) in totalPages"
        :key="index"
        type="button"
        @click.stop.prevent="goTo(index)"
        :class="[
          'h-2.5 rounded-full transition-all duration-300 cursor-pointer',
          currentIndex === index ? 'w-8 bg-yellow-600' : 'w-2.5 bg-gray-300 hover:bg-gray-400',
        ]"
        :aria-label="`Aller à la page ${index + 1}`"
      />
    </div>
  </div>
</template>
