const User = require('../../models/user')
const assert = require('http-assert')
const jwt = require('jsonwebtoken')
module.exports = (app) => [
  {
    url: '/regist',
    meta: { login: false },
    hdfunc: async (req, res) => {
      const { username, password } = req.body
      assert(username && password, 422, '非法的数据')
      const model = await User.create(req.body)
      res.send(model)
    }
  },
  {
    url: '/login',
    meta: { login: false },
    hdfunc: async (req, res) => {
      const { username, password } = req.body
      assert(username && password, 422, '非法的数据')
      const user = await User.findOne({ username }).select('+password')
      assert(user, 422, '用户不存在')
      const isValid = require('bcrypt').compareSync(password, user.password)
      assert(isValid, 422, '密码错误')
      const token = jwt.sign({ id: user._id }, app.get('secret'), { expiresIn: 3600 * 24 })
      res.send({ token, user: { ...user.toJSON(), password: undefined } })
    }
  },
  {
    url: '/getuser',
    hdfunc: async (req, res) => {
      res.send({ ...req.user.toJSON(), password: undefined })
    }
  }
]
