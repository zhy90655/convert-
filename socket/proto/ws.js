const WebSocketClient = require('websocket').client
module.exports = (token, ws) => new Promise((resolve, reject) => {
  const protoWs = new WebSocketClient()
  protoWs.on('connectFailed', error => {
    reject(error)
    console.log('Connect Error: ' + error.toString())
  })
  protoWs.on('connect', function (connection) {
    console.log('WebSocket Client Connected')
    resolve(connection)
    connection.on('error', error => {
      ws._send('Connection Error: ' + error.toString())
      console.log('Connection Error: ' + error.toString())
    })
    connection.on('close', () => {
      ws._send('Connection Closed')
      console.log('Connection Closed')
    })
  })
  protoWs.binaryType = 'arraybuffer'
  protoWs.connect(`ws://192.168.0.106:80/rtc?access_token=+${token}&sdk=js&version=1.2.9&protocol=8&adaptive_stream=1`)
})
