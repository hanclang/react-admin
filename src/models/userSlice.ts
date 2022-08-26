import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getUserInfo, UserInfoResponse, login as userLogin, LoginResponse } from '@/api/user'
import { AxiosResponse } from 'axios'
import { removeToken, setToken } from 'utils/auth'
import history from '@/utils/history'

interface User {
  roles: string[]
  introduction: string
  avatar: string
  name: string
}

interface InitialState {
  token: string
  user: Partial<User>
}

const initialState: InitialState = {
  token: '',
  user: { avatar: '' },
}

// 获取用户信息
export const fetchUsers = createAsyncThunk('user/getUserInfo', async (data: { token: string }) => {
  const res = await getUserInfo(data)
  return res.data
})

// 用户登录
export const login = createAsyncThunk('user/login', async (data: { username: string; password: string }, action) => {
  const res = await userLogin(data)
  const token: string = res.data.token
  const userAction = await action.dispatch(fetchUsers({ token }))
  return {
    token,
    user: userAction.payload as User,
  }
})

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<any>) => {
      state.user = action.payload
    },
    logout: (state) => {
      state.user = {}
      removeToken()
      history.replace('/login')
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.user = action.payload
      })
      .addCase(login.fulfilled, (state, action) => {
        const token = action.payload.token
        state.token = token
        state.user = action.payload.user
        setToken(token)
        history.replace('/')
      })
  },
})

export const { logout } = userSlice.actions

export default userSlice.reducer
