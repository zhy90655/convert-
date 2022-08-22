exports.hdRoute = (router, { method, url, meta, middleware, hdfunc }) =>
  router[method || 'post'](url, (req, res, next) => { req.meta = meta || {}; next() }, ...(middleware || []), hdfunc)

exports.hdquery = (data) => { // 处理查询中的空数据
  for (const key in data) {
    if (data[key] === undefined || data[key] === '') delete data[key]
  }
  return data
}
// 处理接口数据压缩
exports.shouldCompress = (compression) => (req, res) => req.meta && req.meta.gzip ? compression.filter(req, res) : false

const hdt = t => ('0' + t).slice(-2)
exports.formatTime = (time, n = 0, split = '-') => {
  const t = new Date(time - n * 24 * 3600000)
  return t.getFullYear() + split + hdt(t.getMonth() + 1) + split + hdt(t.getDate())
}

const getNumber = (n) => Math.floor(Math.random() * n)

exports.getRepitNumber = (lentgh, num = 10) => Array(lentgh).fill(1).map(_ => getNumber(num))
