const assert = require('http-assert')
const jwt = require('jsonwebtoken')
module.exports = user => async (req, res, next) => {
  if (req.meta.login === false) return next()
  const token = String(req.headers.authorization || '').split(' ').pop()
  assert(token, 401, '请先登录')
  try {
    const { id } = await jwt.verify(token, req.app.get('secret'))
    assert(id, 401, '请先登录')
    req.user = await user.findById(id)
    assert(req.user, 401, '请先登录')
    next()
  } catch (err) {
    switch (err.message) {
      case 'jwt expired': assert(0, 401, '登录已过期'); break
      default: assert(0, 401, '无效的token'); break
    }
  }
}
