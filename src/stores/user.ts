import { defineStore } from 'pinia'
import { useForm } from 'vee-validate'
import * as zod from 'zod'
import { toTypedSchema } from '@vee-validate/zod'
import type { AuthData } from '~/apis/auth'
import { authApi } from '~/apis/auth'
import api from '~/modules/axios'

const formSchema = toTypedSchema(zod.object({
  email: zod.string().email().nonempty(),
  password: zod.string().min(8).nonempty(),
  remember: zod.boolean().optional(),
}))

interface User {
  id: string
  email: string
  first_name: string
  last_name: string
  avatar: string
}

export const useUserStore = defineStore('user', () => {
  const form = useForm({
    validationSchema: formSchema,
  })

  const router = useRouter()
  const { startLoading, endLoading } = useLoading()
  const errors = form.errors
  const [email, password, remember] = form.useFieldModel(['email', 'password', 'remember'])
  const loggedIn = ref(false)
  const isLoggedIn = computed(() => loggedIn.value)
  const user = ref<User | null>(null)

  const setUser = async () => {
    loggedIn.value = true
    const response = await authApi.me().then(res => res.data)
    user.value = response.data
  }

  const getUser = computed(() => user.value)

  const login = async () => {
    startLoading()

    if (!(await form.validate()).valid)
      return

    const loginData: AuthData = form.values as AuthData

    await authApi.login(loginData).then((res) => {
      if (remember.value)
        localStorage.setItem('token', res.data.token)

      api.defaults.headers.common.Authorization = `Bearer ${res.data.token}`
      loggedIn.value = true

      form.resetForm()
      setUser()
      router.push('/home')
    }).finally(() => {
      endLoading()
    }).catch((err) => {
      showToast({
        title: 'Error',
        message: err.response.data.error,
        type: 'error',
      })
    })
  }

  const logout = async () => {
    localStorage.removeItem('token')
    // TODO: Integration with backend and remove router.push('/')
    loggedIn.value = false

    router.push('/')

    // await authApi.logout().finally(() => {
    //   router.push('/')
    // })
  }

  return {
    form,
    errors,
    email,
    password,
    remember,
    isLoggedIn,
    login,
    setUser,
    getUser,
    logout,
  }
})
