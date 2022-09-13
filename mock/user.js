const tokens = {
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
module.exports = [
  {
    url: '/user/login',
    method: 'post',
    response: (req) => {
      const { username } = req.body
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
    },
  },
  {
    url: '/user/info',
    method: 'post',
    response: (req) => {
      const { token } = req.body
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
    },
  },
]
