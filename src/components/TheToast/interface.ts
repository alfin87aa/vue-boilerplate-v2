export interface Toast {
  id: string
  title?: string
  message: string
  type?: 'success' | 'info' | 'warning' | 'error'
  duration?: number
  autoClose?: boolean
}
