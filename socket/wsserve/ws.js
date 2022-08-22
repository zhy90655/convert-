const protobuf = require('protobufjs')
const protoRoot = require('../proto/proto')
module.exports = (app) => {
  require('express-ws')(app)
  app.ws('/ws/client', async (ws, req) => {
    const { token } = req.query
    ws._send = data => ws.send(JSON.stringify({ data }))
    ws.on('message', function (msg) {
      console.log(msg)
      ws.send(msg)
    })
    ws.on('close', (e) => {
      console.log(e, '断了')
    })
    // if (token) return
    require('../proto/ws')(token, ws).then(wsConnection => {
      ws.wsConnection = wsConnection
      wsConnection.on('message', function (e) {
        if (e.type === 'binary') {
          const buf = protobuf.util.newBuffer(e.binaryData)
          const BagFrameMsg = protoRoot.lookup('lzy.SignalResponse')
          const decodedResponse = BagFrameMsg.decode(buf)
          ws._send(decodedResponse)
          // ws._send(decodedResponse[decodedResponse.message])
        }
      })
    }).catch(err => ws._send('Connect Error: ' + err.toString()))
  })
}
