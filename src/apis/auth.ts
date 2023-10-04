import api from '~/modules/axios'

export interface AuthData {
  email: string
  password: string
}

export const authApi = {
  // TODO: change the api endpoint forgot password, logout and refresh
  login: (data: AuthData) => api.post('/api/login', data),
  register: (data: AuthData) => api.post('/api/register', data),
  forgotPassword: (email: string) => api.post('/auth/forgot-password', email),
  me: () => api.get('/api/users/2'),
  refresh: () => api.post('/api/refresh'),
  logout: () => api.post('/auth/logout'),
}
