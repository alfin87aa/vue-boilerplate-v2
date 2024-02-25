<script setup lang="ts">
const isMenuExpanded = ref(true)
const isMenuPinned = ref(true)
const appName = import.meta.env.VITE_APP_NAME

function expandMenu() {
  if (isMenuPinned.value)
    return
  isMenuExpanded.value = true
}

function collapseMenu() {
  if (isMenuPinned.value)
    return
  isMenuExpanded.value = false
}

function togglePin() {
  isMenuPinned.value = !isMenuPinned.value
  if (isMenuPinned.value)
    isMenuExpanded.value = true
  else
    isMenuExpanded.value = false
}
</script>

<template>
  <div class="flex flex-row">
    <aside
      :class="isMenuExpanded ? 'w-64 transition-all duration-500 ease-in-out' : 'w-16 transition-all duration-500 ease-in-out'"
      class="bg-light-secondary hidden md:block dark:bg-dark-secondary h-screen rounded-r-2xl shadow-lg z-50"
      @mouseover="expandMenu"
      @mouseleave="collapseMenu"
    >
      <div class="flex flex-col">
        <div class="flex flex-row p-4 h-16 justify-between">
          <RouterLink to="/" class="flex flex-row evenly">
            <img src="@/assets/logo.svg" alt="logo" class="w-8 mr-2">
            <H4 :class="isMenuExpanded ? 'opacity-100' : 'opacity-0'" class="transition-opacity duration-500 ease-in-out">
              {{ appName }}
            </H4>
          </RouterLink>

          <div
            :class="isMenuExpanded ? 'opacity-100' : 'opacity-0'"
            class="cursor-pointer ring-2 ring-slate-500 dark:ring-slate-100 h-4 w-4 rounded-full place-self-center flex items-center justify-center transition-opacity duration-500 ease-in-out"
            @click="togglePin"
          >
            <div :class="isMenuPinned && 'bg-slate-500 dark:bg-slate-100 h-1 w-1 rounded-full'" />
          </div>
        </div>

        <TheMenu :is-menu-expanded="isMenuExpanded" />
      </div>
    </aside>

    <div class="flex-grow flex-col">
      <TheHorizontalNavbar />
      <div class="h-[calc(100vh-112px)] overflow-auto">
        <slot />
      </div>
    </div>
  </div>
</template>
