import request from '@/utils/request'

export type LoginResponse = {
  token: string
}

export function login(data: { username: string; password: string }) {
  return request({
    url: 'user/login',
    method: 'post',
    data,
  })
}

export type UserInfoResponse = {
  roles: string[]
  introduction: string
  avatar: string
  name: string
}

export function getUserInfo(data: { token: string }) {
  return request({
    url: 'user/info',
    method: 'post',
    data,
  })
}

export function logout() {
  return request({
    url: 'user/logout',
    method: 'post',
  })
}
