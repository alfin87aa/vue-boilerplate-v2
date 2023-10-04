<script setup lang="ts">
const { isLoading } = useLoading()
const { t } = useI18n()
</script>

<template>
  <div v-if="isLoading" class="absolute z-50 w-screen h-screen flex flex-col justify-center items-center bg-gray-100 opacity-75">
    <span class="icon-[line-md--loading-alt-loop] text-9xl mb-8" />
    <h4>{{ t('intro.loading') }}</h4>
  </div>
</template>
