// const assert = require('http-assert')
module.exports = (app) => [
  {
    url: '/api/turn',
    method: 'get',
    hdfunc: async (req, res) => {
      const data = {
        username: '1651805221:flutter-webrtc',
        password: '5gfnZ2emNoD1OMHYlP3Mrfh',
        ttl: 300,
        uris: [
          'turn:47.102.201.4:19303?transport=udp',
          'turns:3-137-191-85.t-c01cb9af.kinesisvideo.us-east-2.amazonaws.com:443?transport=udp',
          'turns:3-137-191-85.t-c01cb9af.kinesisvideo.us-east-2.amazonaws.com:443?transport=tcp'
        ]
      }
      res.send(data)
    }
  },
  {
    url: '/describeSignalingChannel',
    hdfunc: async (req, res) => {
      const data = {
        ChannelInfo: {
          ChannelARN: 'arn:aws:kinesisvideo:us-east-2:196773672762:channel/webrtc/1648619840865',
          ChannelName: 'webrtc',
          ChannelStatus: 'ACTIVE',
          ChannelType: 'SINGLE_MASTER',
          CreationTime: 1.648619840865e9,
          FullMeshConfiguration: null,
          SingleMasterConfiguration: { MessageTtlSeconds: 60 },
          Version: '9NEzl7O5E8s1MhSUMIJE'
        }
      }
      res.send(data)
      // res.send({ ...data.toJSON(), opentime });
    }
  },
  {
    url: '/getSignalingChannelEndpoint',
    hdfunc: async (req, res) => {
      res.contentType('html')
      const data = {
        ChannelInfo: {
          ResourceEndpointList: [
            { Protocol: 'HTTP', ResourceEndpoint: 'http://192.168.0.106' },
            { Protocol: 'WS', ResourceEndpoint: 'ws://192.168.0.106/peerjs' }
          ]
        }
      }
      res.send(data)
    }
  },
  {
    url: '/v1/get-ice-server-config',
    hdfunc: async (req, res) => {
      res.contentType('html')
      const data = {
        IceServerList: [{
          Password: 'admin',
          Ttl: 300,
          Uris: ['turn:47.242.54.179:3479?transport=udp', 'turn:47.242.54.179:3479?transport=tcp'],
          Username: 'admin'
        }, {
          Password: 'oaQXYJtKsyUbBTzjovn+uVdyhNP5/yNlvRoa/0nRBeU=',
          Ttl: 300,
          Uris: ['turn:3-145-22-168.t-c01cb9af.kinesisvideo.us-east-2.amazonaws.com:443?transport=udp', 'turns:3-145-22-168.t-c01cb9af.kinesisvideo.us-east-2.amazonaws.com:443?transport=udp', 'turns:3-145-22-168.t-c01cb9af.kinesisvideo.us-east-2.amazonaws.com:443?transport=tcp'],
          Username: '1649319677:djE6YXJuOmF3czpraW5lc2lzdmlkZW86dXMtZWFzdC0yOjE5Njc3MzY3Mjc2MjpjaGFubmVsL3dlYnJ0Yy8xNjQ4NjE5ODQwODY1'
        }, {
          Password: '3RXaXT2v4bTU66T8GvtIhxTsFqpx1ILUAquxqLzAPok=',
          Ttl: 300,
          Uris: ['turn:3-137-191-85.t-c01cb9af.kinesisvideo.us-east-2.amazonaws.com:443?transport=udp', 'turns:3-137-191-85.t-c01cb9af.kinesisvideo.us-east-2.amazonaws.com:443?transport=udp', 'turns:3-137-191-85.t-c01cb9af.kinesisvideo.us-east-2.amazonaws.com:443?transport=tcp'],
          Username: '1649319677:djE6YXJuOmF3czpraW5lc2lzdmlkZW86dXMtZWFzdC0yOjE5Njc3MzY3Mjc2MjpjaGFubmVsL3dlYnJ0Yy8xNjQ4NjE5ODQwODY1'
        }]
      }
      res.send(data)
    }
  }
]
