<script setup lang="ts">
export interface Props {
  name?: string
  disabled?: false | true
}
const props = withDefaults(defineProps<Props>(), {
})

const id = ref(Math.random().toString(36).substring(7))
</script>

<template>
  <button
    :id="id"
    :name="props.name"
    :disabled="props.disabled"
    class="px-4 py-1 text-sm rounded-md font-semibold
          disabled:bg-gray-200 disabled:text-gray-500
          transform active:scale-75 transition-transform"
  >
    <slot />
  </button>
</template>
