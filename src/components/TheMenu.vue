<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <RouterLink v-slot="{ isActive }" class="text-white" to="/home">
    <div class="flex flex-row gap-2 items-center md:rounded-lg p-2" :class="[isActive && 'bg-primary']">
      <span class="icon-[carbon--home] xl:text-xl " />
      {{ t('navbar.home') }}
    </div>
  </RouterLink>
</template>
