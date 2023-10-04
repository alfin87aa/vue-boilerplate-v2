const loadingKey = ref(false)

export function useLoading() {
  const startLoading = () => {
    loadingKey.value = true
  }

  const endLoading = () => {
    loadingKey.value = false
  }

  const isLoading = computed(() => loadingKey.value)

  return {
    startLoading,
    endLoading,
    isLoading,
  }
}
