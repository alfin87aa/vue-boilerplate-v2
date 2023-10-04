<script setup lang="ts">
import { availableLocales, loadLanguageAsync } from '~/modules/i18n'

const { getLangIcon } = useLangStore()
const { t, locale } = useI18n()
const { isDarkMode } = defineModels<{
  isDarkMode?: boolean
}>()

const langList = ref<Array<{ code: string; icon: string }>>([])

onMounted(async () => {
  langList.value = availableLocales.map(lang => ({
    code: lang,
    icon: getLangIcon(lang),
  }))
})

isDarkMode.value = isDark.value
const locales = availableLocales

async function toggleLocales() {
  const newLocale = locales[(locales.indexOf(locale.value) + 1) % locales.length]
  await loadLanguageAsync(newLocale)
  locale.value = newLocale
}

async function toggleDark() {
  isDarkMode.value = !isDarkMode.value
  await new Promise(resolve => setTimeout(resolve, 500))
  isDark.value = isDarkMode.value
}

async function changeLocales(newLocale: string) {
  await loadLanguageAsync(newLocale)
  locale.value = newLocale
}
</script>

<template>
  <div class="flex gap-4 justify-center text-xl">
    <button
      :title="t('button.toggle_dark')"
      class="flex justify-between static w-16 h-6 cursor-pointer items-center
              text-gray-600 dark:text-warning-300 flex-shrink-0
              p-1 bg-light dark:bg-dark rounded-full
              transition-all transform duration-500"
      @click="toggleDark()"
    >
      <input v-model="isDarkMode" type="checkbox" class="sr-only peer">
      <div
        class="w-6 h-6 bg-primary rounded-full z-50 absolute
        transition-all transform duration-500 ease-in-out peer-checked:translate-x-8"
      />
      <div
        class="icon-[carbon--moon] z-0 translate-x-8
               transition-all transform duration-500
               peer-checked:translate-x-0 peer-checked:icon-[carbon--sun]"
      />
    </button>
    <div class="relative inline-block group">
      <a :title="t('button.toggle_langs')" class="peer" @click="toggleLocales()">
        <span class="icon-[carbon--language]" />
      </a>
      <!-- Dropdown menu -->
      <div
        class="absolute hidden pb-10 md:pt-10 group-hover:block
        md:top-0 md:right-0"
      >
        <div v-for="(item, index) in langList" :key="item.code">
          <div
            :class="[index === 0 && 'rounded-t', index === langList.length - 1 && 'rounded-b']
            "
            class="bg-light-secondary-200 hover:bg-gray-300 py-2 px-4 block
             whitespace-no-wrap"
            @click="changeLocales(item.code)"
          >
            <span :class="[item.icon]" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
