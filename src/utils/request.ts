import axios, { AxiosInstance } from 'axios'
import { message } from 'antd'

const request: AxiosInstance = axios.create({
  baseURL: '/',
  timeout: 5000,
})

request.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

request.interceptors.response.use((response) => {
  if (response.status !== 200) {
    message.error('服务器开小差了')
    return Promise.reject(new Error('Error'))
  }
  const res = response.data
  if (res.code !== 200) {
    message.error(res.msg || 'Error')
    return Promise.reject(new Error(res.message || 'Error'))
  }
  return response
})
export default request
