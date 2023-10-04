<script setup lang="ts">
import store from './store'
import type { Toast } from './interface'

const props = withDefaults(defineProps<Toast>(), {
  duration: 3000,
})
const progress = ref(0)

function closeToast(id: string) {
  const { removeToast } = store()
  removeToast(id)
}

setInterval(() => {
  if (progress.value === 100)
    return

  progress.value += 1
}, props.duration / 100)
</script>

<template>
  <div class="bg-white shadow-lg rounded-lg pointer-events-auto">
    <div class="rounded-lg shadow-xl overflow-hidden">
      <div class="flex flex-row flex-grow p-2">
        <!-- Icon -->
        <div v-if="props.type" class="w-8 my-auto pr-2">
          <span v-if="props.type === 'success'" class="icon-[carbon--checkmark-filled] text-2xl text-success" />
          <span v-if="props.type === 'error'" class="icon-[carbon--close-filled] text-2xl text-danger" />
          <span v-if="props.type === 'warning'" class="icon-[carbon--warning-filled] text-2xl text-warning" />
          <span v-if="props.type === 'info'" class="icon-[carbon--information-filled] text-2xl text-info text-secondary" />
        </div>
        <!-- End Icon -->

        <!-- Content -->
        <div class="flex flex-col flex-grow">
          <h5 class="font-bold text-lg line-clamp-1">
            {{ props.title }}
          </h5>
          <p class="text-sm line-clamp-4">
            {{ props.message }}
          </p>
        </div>
        <!-- End Content -->

        <!-- Close Button -->
        <div class="w-4">
          <button class="items-center p-2 group relative" @click="closeToast(props.id)">
            <div
              class="bg-black h-[1.3px] w-3
           rotate-45 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
           group-hover:rotate-0 transition-all duration-100"
            />
            <div
              class="bg-black h-[1.3px] w-3
           -rotate-45 z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
           group-hover:rotate-0 transition-all duration-100"
            />
          </button>
        </div>
        <!-- End Close Button -->
      </div>
      <!-- Progress Bar -->
      <div
        v-if="props.duration"
        class="h-[1.5px] bg-primary"
        :class="`bg-${props.type}`"
        :style=" `width: ${progress}%`"
      />
      <!-- End Progress Bar -->
    </div>
  </div>
</template>
