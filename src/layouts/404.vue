<script setup lang="ts">
const router = useRouter()
const { t } = useI18n()
</script>

<template>
  <main class="px-4 py-10 text-center text-teal-700 dark:text-gray-200">
    <div class="text-4xl icon-[carbon--warning]" />
    <RouterView />
    <div>
      <TheButton class="text-sm m-3 mt-7 px-4 py-1 text-sm text-teal-600 font-semibold rounded-md border border-teal-200 hover:text-white hover:bg-teal-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2" @click="router.back()">
        {{ t('button.back') }}
      </TheButton>
    </div>
  </main>
</template>
