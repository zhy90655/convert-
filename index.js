const express = require('express')
require('express-async-errors')
const compression = require('compression')
const router = express.Router()
const app = express()

app.set('secret', 'aa123123')

app.use(require('cors')())
app.use(express.json())
app.use(compression({ filter: require('./utils/tools').shouldCompress(compression) }))

// app.use('/uploads', express.static(path.join(__dirname, '/uploads')))
// require('./plugins/db')(app)
// require('./routes/admin/index')(app)
// require('./routes/web/index')(app)
// setTimeout(() => require('./socket/proto/ws')(), 5000)
require('./socket/wsserve/ws')(app)
require('./routes/camare/index')(app, router)

// 错误处理函数
app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).send({ message: err.message })
})

app.listen(3000, () => {
  console.log('http://127.0.0.1:3000')
})
