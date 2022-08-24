import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getUserInfo, UserInfoResponse } from '@/api/user'
import { AxiosResponse } from 'axios'
import { removeToken } from 'utils/auth'
import history from '@/utils/history'

interface User {
  roles: string[]
  introduction: string
  avatar: string
  name: string
}

interface InitialState {
  user: Partial<User>
}

const initialState: InitialState = {
  user: { avatar: '' },
}

export const fetchUsers = createAsyncThunk('user/getUserInfo', async (data: { token: string }) => {
  const res: AxiosResponse<BaseResponse<UserInfoResponse>, any> = await getUserInfo(data)
  return res.data.data
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
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.user = action.payload
    })
  },
})

export const { logout } = userSlice.actions

export default userSlice.reducer
