<script setup lang="ts">
const router = useRouter()
const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col items-center pt-36 gap-4">
    <span class=" text-4xl icon-[carbon--warning]" />
    {{ t('not-found') }}
    <TheButton
      class="border-primary border-2 bg-transparent hover:bg-primary hover:text-white"
      @click="router.back()"
    >
      {{ t('button.back') }}
    </TheButton>
  </div>
</template>

<route lang="yaml">
meta:
  layout: full
</route>
