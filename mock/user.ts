import Mock from 'mockjs'

const tokens: Record<string, object> = {
  admin: {
    token: 'admin-token',
  },
  editor: {
    token: 'editor-token',
  },
}

const users = {
  'admin-token': {
    roles: ['admin'],
    introduction: 'I am a super administrator',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin',
  },
  'editor-token': {
    roles: ['editor'],
    introduction: 'I am an editor',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
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