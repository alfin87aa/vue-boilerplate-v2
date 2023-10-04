import { defineStore } from 'pinia'

interface Notification {
  id: string
  imageFrom: string
  title: string
  message: string
  dateTime: Date
  isRead: boolean
}

export const useNotificationStore = defineStore('notification', () => {
  // TODO: Remove this dummy data and change to request to backend with axios
  const notifications = ref<Array<Notification>>([
    { id: '1', imageFrom: 'https://i.pravatar.cc/300?u=1', title: 'John Doe', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet tempor rutrum. Fusce id mi non augue malesuada euismod ut eu arcu. Nam diam nulla, faucibus sit amet erat sit amet, imperdiet tincidunt sapien.', dateTime: new Date(), isRead: true },
    { id: '2', imageFrom: 'https://i.pravatar.cc/300?u=2', title: 'Jane Doe', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet tempor rutrum. Fusce id mi non augue malesuada euismod ut eu arcu. Nam diam nulla, faucibus sit amet erat sit amet, imperdiet tincidunt sapien.', dateTime: new Date(), isRead: false },
    { id: '3', imageFrom: 'https://i.pravatar.cc/300?u=3', title: 'John Doe', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet tempor rutrum. Fusce id mi non augue malesuada euismod ut eu arcu. Nam diam nulla, faucibus sit amet erat sit amet, imperdiet tincidunt sapien.', dateTime: new Date(), isRead: true },
    { id: '4', imageFrom: 'https://i.pravatar.cc/300?u=4', title: 'Jane Doe', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet tempor rutrum. Fusce id mi non augue malesuada euismod ut eu arcu. Nam diam nulla, faucibus sit amet erat sit amet, imperdiet tincidunt sapien.', dateTime: new Date(), isRead: false },
    { id: '5', imageFrom: 'https://i.pravatar.cc/300?u=5', title: 'John Doe', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet tempor rutrum. Fusce id mi non augue malesuada euismod ut eu arcu. Nam diam nulla, faucibus sit amet erat sit amet, imperdiet tincidunt sapien.', dateTime: new Date(), isRead: false },
    { id: '6', imageFrom: 'https://i.pravatar.cc/300?u=6', title: 'Jane Doe', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin laoreet tempor rutrum. Fusce id mi non augue malesuada euismod ut eu arcu. Nam diam nulla, faucibus sit amet erat sit amet, imperdiet tincidunt sapien.', dateTime: new Date(), isRead: false },
  ])

  const getNotifications = computed(() => {
    return notifications.value
  })

  const getUnreadNotifications = computed(() => {
    return notifications.value.filter(notification => !notification.isRead)
  })

  const readNotification = (id: string) => {
    const notification = notifications.value.find(notification => notification.id === id)
    if (notification)
      notification.isRead = true
  }

  const addNotification = (notification: Notification) => {
    notifications.value.push(notification)
  }

  const removeNotification = (notification: Notification) => {
    const index = notifications.value.indexOf(notification)
    if (index > -1)
      notifications.value.splice(index, 1)
  }

  return {
    getNotifications,
    getUnreadNotifications,
    readNotification,
    addNotification,
    removeNotification,
  }
})
