import type { Toast } from './interface'

const Toasts = ref<Array<Toast>>([])

export default function useToasts() {
  const removeToast = (id: string) => {
    Toasts.value = Toasts.value.filter(toast => toast.id !== id)
  }

  const dispatchToast = ({
    title,
    message,
    type,
    autoClose = true,
    duration = 3000,
  }: Omit<Toast, 'id'>) => {
    const id = Math.random().toString(36).substring(7)
    const toasts = [{
      id,
      title,
      message,
      type,
    }, ...Toasts.value]
    Toasts.value = toasts

    if (autoClose) {
      setTimeout(() => {
        removeToast(id)
      }, duration)
    }
  }

  const getToasts = computed(() => {
    return [...Toasts.value].slice(0, 4)
  })

  const getToastsCount = computed(() => Toasts.value.length)

  return {
    Toasts: readonly(Toasts),
    dispatchToast,
    removeToast,
    getToasts,
    getToastsCount,
  }
}
