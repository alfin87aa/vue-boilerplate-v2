<script setup lang="ts">
export interface Props {
  label?: string
  modelValue?: any
  color?: string
  filledColor?: string
}
const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
})

const emit = defineEmits(['update:modelValue'])
const id = ref(Math.random().toString(36).substring(7))
const isTrue = ref(props.modelValue)

const componentValue = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
    isTrue.value = value
  },
})
</script>

<template>
  <div class="flex flex-row">
    <label
      :class="filledColor && isTrue && `bg-${filledColor}`"
      class="border border-gray-300 rounded-md
      w-5 h-5 flex items-center justify-center
      transform transition-colors duration-500 ease-linear"
    >
      <input
        :id="id"
        v-model="componentValue"
        type="checkbox"
        class="sr-only peer"
      >
      <span
        :class="color && `text-${color}`"
        class="icon-[carbon--checkmark] opacity-0 peer-checked:opacity-100
       transform transition-opacity duration-500 ease-out"
      />
    </label>
    <label :for="id" class="ml-2 text-sm">{{ label }}</label>
  </div>
</template>
