<script setup lang="ts">
import { availableLocales, loadLanguageAsync } from '~/modules/i18n'

const { t, locale } = useI18n()

async function toggleLocales() {
  // change to some real logic
  const locales = availableLocales
  const newLocale = locales[(locales.indexOf(locale.value) + 1) % locales.length]
  await loadLanguageAsync(newLocale)
  locale.value = newLocale
}
</script>

<template>
  <div class="flex gap-4 justify-center mt-6 text-xl">
    <RouterLink icon-btn to="/" :title="t('button.home')">
      <span class="icon-[carbon--campsite]" />
    </RouterLink>

    <a href="#" :title="t('button.toggle_dark')" @click="toggleDark()">
      <span class="icon-[carbon--sun] dark:icon-[carbon--moon]" />
    </a>

    <a :title="t('button.toggle_langs')" @click="toggleLocales()">
      <span class="icon-[carbon--language]" />
    </a>

    <RouterLink to="/about" :title="t('button.about')" data-test-id="about">
      <span class="icon-[carbon--dicom-overlay]" />
    </RouterLink>
  </div>
</template>
