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
  const res = response.data

  if (res.code !== 200) {
    message.error(res.msg || 'Error')
    return Promise.reject(new Error(res.message || 'Error'))
  }
  return res
})
export default request
