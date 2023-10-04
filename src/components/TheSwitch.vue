<script setup lang="ts">
const { modelValue } = defineModels<{
  modelValue: string
}>()
</script>

<template>
  <label class="relative inline-flex items-center cursor-pointer">
    <input v-model="modelValue" type="checkbox" class="sr-only peer">
    <div
      class="w-11 h-6 bg-light rounded-full peer dark:bg-dark
            peer-checked:after:translate-x-full peer-checked:after:border-white
            after:content-[''] after:absolute after:top-[2px] after:left-[2px]
            after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5
            after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"
    />
  </label>
</template>
