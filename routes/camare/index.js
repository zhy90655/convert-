module.exports = (app, router) => {
  const { hdRoute } = require('../../utils/tools')
  require('./item')(app).forEach(_ => hdRoute(router, _))
  app.use('/clent', router)
}
