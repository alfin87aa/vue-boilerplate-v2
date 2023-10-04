import { type UserModule } from '~/types'

export const install: UserModule = ({ app, isClient, router }) => {
  if (isClient) {
    router.beforeEach((to, from, next) => {
      const user = useUserStore()
      const guest = to.meta.guest
      console.log(user.isLoggedIn)

      if (!guest && !user.isLoggedIn)
        next({ name: 'index', query: { redirect: to.fullPath } })
      else if (guest && user.isLoggedIn)
        next({ name: 'home' })
      else
        next()
    })

    app.use(router)
  }
}
