let wsconnection = ''
module.exports = () => {
  const protobuf = require('protobufjs')
  const protoRoot = require('./proto')
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2aWRlbyI6eyJyb29tSm9pbiI6dHJ1ZSwicm9vbSI6ImFkbWluIiwiY2FuUHVibGlzaCI6dHJ1ZSwiY2FuU3Vic2NyaWJlIjp0cnVlfSwiaWF0IjoxNjYwODcwMjkwLCJuYmYiOjE2NjA4NzAyOTAsImV4cCI6MTY2MDg5MTg5MCwiaXNzIjoiZGV2a2V5Iiwic3ViIjoid2ViIiwianRpIjoid2ViIn0.odVHmD10sqz5FQu4vj4FZUSKN9_Ebf1wcUUaXkq6YLE'
  const socketURL = `ws://192.168.0.106:80/rtc?access_token=+${token}&sdk=js&version=1.2.9&protocol=8&adaptive_stream=1`
  const WebSocketClient = require('websocket').client
  const ws = new WebSocketClient()
  ws.on('connectFailed', error => console.log('Connect Error: ' + error.toString()))
  ws.on('connect', function (connection) {
    wsconnection = connection
    console.log('WebSocket Client Connected')
    connection.on('error', error => console.log('Connection Error: ' + error.toString()))
    connection.on('close', () => console.log('Connection Closed'))
    connection.on('message', function (e) {
      if (e.type === 'binary') {
        const buf = protobuf.util.newBuffer(e.binaryData)
        const BagFrameMsg = protoRoot.lookup('lzy.SignalResponse')
        const decodedResponse = BagFrameMsg.decode(buf)
        // console.log(decodedResponse)
        require('../wsserve/ws').sendMsg(decodedResponse)
      }
    })
  })
  ws.binaryType = 'arraybuffer'
  ws.connect(socketURL)
}

exports.sendMsg = (msg) => {
  if (wsconnection) {
    wsconnection.send(JSON.stringify(msg))
    // console.log(msg)
  } else console.log('unconnected!')
}
