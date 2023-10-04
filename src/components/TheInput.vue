<script setup lang="ts">
export interface Props {
  name?: string
  labelPlaceholder?: string
  label?: string
  placeholder?: string
  required?: false | true
  password?: false | true
  modelValue?: any
  error?: string
  textColor?: string
  bgColor?: string
  icon?: string
}
const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  textColor: 'text-black dark:text-white',
  bgColor: 'bg-light dark:bg-dark',
})

const emit = defineEmits(['update:modelValue'])

const value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  },
})

const id = ref(Math.random().toString(36).substring(7))
const isPassword = ref(props.password)
const input = document.getElementById(id.value)
let inputClass = ''

if (props.icon)
  inputClass += ' pl-10 group-focus-within:px-10 peer-valid:px-10'
else
  inputClass += ' group-focus-within:px-4 peer-valid:px-4'

if (props.bgColor)
  inputClass += ` ${props.bgColor}`

function focus() {
  input?.focus()
}

function togglePassword() {
  isPassword.value = !isPassword.value
}
</script>

<template>
  <div :class="textColor" class="relative group">
    <label
      v-if="label"
      class="absolute -translate-y-6 text-sm font-[500]"
      :class="required && `after:content-['*'] after:ml-0.5 after:text-danger`"
      :for="id"
    >
      {{ label }}
    </label>
    <input
      :id="id"
      v-model="value"
      :name="name"
      :type="isPassword ? 'password' : 'text'"
      required="true"
      :class="error ? `border-danger border-b-2 ${bgColor}` : inputClass"
      class="w-full h-10 rounded-md px-2 text-sm peer
    dark:bg-dark outline-none
    transform transition-all duration-100"
    >
    <span v-if="icon" :class="icon" class="absolute top-3 left-2 text-lg" :for="id" />

    <label
      v-if="placeholder"
      :for="id"
      :class="icon && 'pl-8'"
      class="cursor-text text-sm opacity-75 z-10 absolute top-2 left-2
            transform transition-all duration-500 focus:top-0 focus:left-0
            group-focus-within:px-4 group-focus-within:opacity-0
            peer-valid:opacity-0"
      @click="focus"
    >
      {{ placeholder }}
    </label>

    <!-- For Label And Placeholder -->
    <label
      v-if="labelPlaceholder && !placeholder && !label"
      :for="id"
      class="absolute cursor-text top-0 left-0 h-full flex items-center
       pl-2 text-sm opacity-75 transform transition-all
       duration-500 group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2
       peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full
       group-focus-within:pl-0 peer-valid:pl-0 group-focus-within:opacity-100
       peer-valid:opacity-100"
      :class="required && `after:peer-valid:content-['*'] after:group-focus-within:content-['*']
                           after:ml-0.5 after:text-danger`"
      @click="focus"
    >
      {{ labelPlaceholder }}
    </label>

    <!-- For toggle show password -->
    <div
      v-if="password"
      class="absolute top-1 right-2 text-sm opacity-75 z-10 p-2 rounded-md
        active:scale-50 cursor-pointer
        hover:text-primary
        hover:opacity-100
        hover:shadow-xl
        hover:bg-light-50 dark:hover:bg-dark-950
        hover:-translate-y-2
        hover:translate-x-4
        group-focus:text-primary
        group-focus:opacity-100
        group-focus-within:shadow-xl
        group-focus-within:bg-light-50 dark:group-focus-within:bg-dark-950
        group-focus-within:-translate-y-2
        group-focus-within:translate-x-4
        transform transition-all duration-500"
      @click="togglePassword"
    >
      <span
        :class="isPassword ? 'icon-[carbon--view]' : 'icon-[carbon--view-off]'"
      />
    </div>

    <label
      v-if="error"
      class="absolute -bottom-4 left-2 text-xs  text-danger"
      :for="id"
    >
      {{ error }}
    </label>
  </div>
</template>
