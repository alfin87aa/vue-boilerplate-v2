import { defineStore } from 'pinia'

export const useLangStore = defineStore('lang', () => {
  const langList = ref<Array<{ code: string; name: string; icon: string }>>([
    { code: 'en', name: 'English', icon: 'icon-[flag--gb-4x3]' },
    { code: 'id', name: 'Indonesia', icon: 'icon-[flag--id-4x3]' },
  ])

  function getLangIcon(code: string) {
    const lang = langList.value.find(lang => lang.code === code)

    return lang ? lang.icon : ''
  }

  return {
    getLangIcon,
  }
})
