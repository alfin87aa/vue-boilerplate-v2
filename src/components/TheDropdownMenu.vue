<script setup lang="ts">
interface childItem {
  name: string
  url: string
  permission: string
}

const props = defineProps({
  isDropdownOpen: Boolean,
  isPerentOpen: {
    type: Boolean,
    default: true,
  },
  icon: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    default: '',
  },
  child: {
    type: Array as PropType<childItem[]>,
    default: () => [],
  },
  userPermission: Array<string>,
})

const route = useRoute()
const pathUrl = route.path
const isDropdownOpen = ref(props.isDropdownOpen)
const id = ref(Math.random().toString(36).substring(7))
const toggleDropdown = () => isDropdownOpen.value = !isDropdownOpen.value
const { t } = useI18n()
const checkPermission = (permission: string) => props.userPermission?.includes(permission) ?? false
const isPerentHasPermission = computed(() => props.child.some(item => checkPermission(item.permission)))
const isParentActive = computed(() => props.child.some(item => item.url === pathUrl))

console.log('isParentActive', isDropdownOpen)
</script>

<template>
  <button
    v-if="isPerentHasPermission"
    type="button"
    :class="(isParentActive) && 'bg-gray-100 dark:bg-gray-700'"
    class="flex items-center w-full text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
    :aria-controls="id"
    :data-collapse-toggle="id"
    @click="toggleDropdown"
  >
    <span
      :class="(isParentActive) && 'bg-primary'"
      class="w-1 h-14 rounded-r-lg mr-3 transition duration-500"
    />
    <span
      class="flex-shrink-0 text-2xl text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white " aria-hidden="true"
      :class="icon"
    />
    <span v-if="isPerentOpen" class="overflow-hidden flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">{{ t(name) }}</span>
    <span
      v-if="isPerentOpen"
      :class="isDropdownOpen && isPerentOpen ? 'rotate-90' : 'rotate-0'"
      class="icon-[carbon--chevron-right] font-bold text-lg mx-2 my-auto transition duration-500"
    />
  </button>
  <ul
    :id="id"
    :class="isDropdownOpen && isPerentOpen ? 'h-auto' : 'h-0 overflow-hidden'"
    class="space-y-2 transition-all duration-500 ease-in-out"
  >
    <li v-for="(item, index) in child" :key="index">
      <RouterLink v-if="checkPermission(item.permission)" v-slot="{ isActive }" :to="item.url" class="group overflow-hidden">
        <div class="flex flex-row">
          <a
            :class="(isActive) && 'bg-gray-100 dark:bg-gray-700'"
            class="flex items-center w-full px-8 py-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
          >
            <div class="relative flex h-2 w-2 mr-4">
              <div v-if="isActive" class="bg-primary animate-ping w-full h-full rounded-full self-center absolute inline-flex opacity-75" />
              <div :class="isActive ? 'bg-primary' : 'bg-gray-500'" class="w-2 h-2 rounded-full self-center relative inline-flex" />
            </div>
            {{ t(item.name) }}
          </a>
        </div>
      </RouterLink>
    </li>
  </ul>
</template>
