<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'Vue Boilerplate',
  meta: [
    { name: 'description', content: 'Opinionated Vue + Vite Starter Template' },
    {
      name: 'theme-color',
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: '/favicon.svg',
    },
  ],
})
</script>

<template>
  <TheLoadingScreen />
  <TheToast />
  <RouterView />
</template>
