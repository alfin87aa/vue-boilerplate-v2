<script setup lang="ts">
interface MenuItem {
  name: string
  url: string
  permission: string
  icon: string
  children: childItem[]
}

interface childItem {
  name: string
  url: string
  permission: string
}

const props = defineProps({
  isMenuExpanded: {
    type: Boolean,
    default: true,
  },
})

const menuItems = ref<MenuItem[]>([])
const userPermission = ['users.read', 'home', 'roles.read']
const checkPermission = (permission: string) => userPermission.includes(permission) ?? false

fetch('src/assets/menu.json')
  .then(response => response.json())
  .then((data) => {
    menuItems.value = data
    console.log(menuItems.value)
  })
  .catch((error) => {
    showToast({
      title: 'Error',
      message: error.message,
      type: 'error',
    })
  })

const { t } = useI18n()
</script>

<template>
  <div class="py-4 overflow-y-auto overflow-x-hidden">
    <ul class="space-y-2 font-medium">
      <li v-for="(item, index) in menuItems" :key="index">
        <TheDropdownMenu
          v-if="item.children"
          :is-dropdown-open="false"
          :is-perent-open="props.isMenuExpanded"
          :icon="item.icon"
          :name="item.name"
          :child="item.children"
          :user-permission="userPermission"
        />
        <RouterLink v-else-if="checkPermission(item.permission)" v-slot="{ isActive }" :to="item.url" class="group overflow-hidden">
          <div
            :class="isActive ? 'bg-gray-100 dark:bg-gray-700' : 'text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'"
            class="flex items-center rounded-lg"
          >
            <div :class="isActive && 'bg-primary'" class="w-1 h-12 rounded-r-lg mr-3" />
            <span
              :class="[item.icon, isActive ? 'text-gray-900 dark:text-white' : 'text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white']"
              class="flex-shrink-0 text-2xl " aria-hidden="true"
            />
            <span
              v-if="isMenuExpanded"
              :class="[isActive ? 'text-gray-900 dark:text-white' : 'text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white']"

              class="overflow-hidden flex-1 ms-3 whitespace-nowrap"
            >{{ t(item.name) }}</span>
          </div>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>
