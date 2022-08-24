import Mock from 'mockjs'

const tokens: Record<string, object> = {
  admin: {
    token: 'admin-token',
  },
  editor: {
    token: 'editor-token',
  },
}

const users: Record<string, object> = {
  'admin-token': {
    roles: ['admin'],
    introduction: 'I am a super administrator',
    avatar: 'https://joeschmoe.io/api/v1/random',
    name: 'Super Admin',
  },
  'editor-token': {
    roles: ['editor'],
    introduction: 'I am an editor',
    avatar: 'https://joeschmoe.io/api/v1/random',
    name: 'Normal Editor',
  },
}
Mock.mock(/user\/login/, 'post', function (config: any) {
  const { username }: { username: string } = JSON.parse(config.body)
  const token = tokens[username]

  // mock error
  if (!token) {
    return {
      code: 60204,
      msg: 'Account or password are incorrect.',
    }
  }

  return {
    code: 200,
    data: token,
  }
})

Mock.mock(/user\/info/, 'post', function (config: any) {
  const { token }: { token: string } = JSON.parse(config.body)
  const info = users[token]

  // mock error
  if (!info) {
    return {
      code: 50008,
      msg: 'Login failed, unable to get user details.',
    }
  }

  return {
    code: 200,
    data: info,
  }
})
