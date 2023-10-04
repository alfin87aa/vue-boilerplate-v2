import axios from 'axios'

const router = useRouter()
const BASE_URL = `${import.meta.env.VITE_API_URL.replace(/\/$/, '')}/`

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  // This is will automatic request Header to backend for CORS from options http method
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
    'Accept': '*/*',
  },
})

api.interceptors.request.use((req) => {
  const accessToken = localStorage.getItem('accessToken')
  if (accessToken)
    req.headers.Authorization = `Bearer ${accessToken}`

  return req
})
api.interceptors.response.use(
  (res) => {
    return res
  },
  (err) => {
    if (err.response.status === 401) {
      // TODO: Logic Refresh Token
      const refreshToken = localStorage.getItem('refreshToken')

      if (refreshToken) {
        api.post('/auth/refresh', { refreshToken }).then((res) => {
          const newAccessToken = res.data.accessToken
          const newRefreshToken = res.data.refreshToken

          localStorage.setItem('accessToken', newAccessToken)
          localStorage.setItem('refreshToken', newRefreshToken)

          err.config.headers.Authorization = `Bearer ${newAccessToken}`

          return api.request(err.config)
        }).catch(() => {
          localStorage.removeItem('accessToken')
          localStorage.removeItem('refreshToken')

          router.push({ name: '/login', query: { redirect: router.currentRoute.value.fullPath } })
        })
      }
    }

    if (err.response.status === 422) {
      const errors = err.response.data.detail.map((detail: any) => ({
        [detail.loc[1]]: detail.msg,
      }))
      return Promise.reject(errors)
    }

    if (err.response.status >= 500) {
      showToast({
        title: 'Error',
        message: 'Something went wrong',
        type: 'error',
      })
    }

    return Promise.reject(err)
  },
)

export default api
