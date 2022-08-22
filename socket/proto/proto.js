/* eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars */
'use strict'

var $protobuf = require('protobufjs/light')

var $root = ($protobuf.roots.default || ($protobuf.roots.default = new $protobuf.Root()))
  .addJSON({
    lzy: {
      nested: {
        Room: {
          fields: {
            sid: {
              type: 'string',
              id: 1
            },
            name: {
              type: 'string',
              id: 2
            },
            emptyTimeout: {
              type: 'uint32',
              id: 3
            },
            maxParticipants: {
              type: 'uint32',
              id: 4
            },
            creationTime: {
              type: 'int64',
              id: 5
            },
            turnPassword: {
              type: 'string',
              id: 6
            },
            enabledCodecs: {
              rule: 'repeated',
              type: 'Codec',
              id: 7
            },
            metadata: {
              type: 'string',
              id: 8
            },
            numParticipants: {
              type: 'uint32',
              id: 9
            },
            activeRecording: {
              type: 'bool',
              id: 10
            }
          }
        },
        Codec: {
          fields: {
            mime: {
              type: 'string',
              id: 1
            },
            fmtpLine: {
              type: 'string',
              id: 2
            }
          }
        },
        ParticipantPermission: {
          fields: {
            canSubscribe: {
              type: 'bool',
              id: 1
            },
            canPublish: {
              type: 'bool',
              id: 2
            },
            canPublishData: {
              type: 'bool',
              id: 3
            },
            hidden: {
              type: 'bool',
              id: 7
            },
            recorder: {
              type: 'bool',
              id: 8
            }
          }
        },
        ParticipantInfo: {
          fields: {
            sid: {
              type: 'string',
              id: 1
            },
            identity: {
              type: 'string',
              id: 2
            },
            state: {
              type: 'State',
              id: 3
            },
            tracks: {
              rule: 'repeated',
              type: 'TrackInfo',
              id: 4
            },
            metadata: {
              type: 'string',
              id: 5
            },
            joinedAt: {
              type: 'int64',
              id: 6
            },
            name: {
              type: 'string',
              id: 9
            },
            version: {
              type: 'uint32',
              id: 10
            },
            permission: {
              type: 'ParticipantPermission',
              id: 11
            },
            region: {
              type: 'string',
              id: 12
            },
            isPublisher: {
              type: 'bool',
              id: 13
            }
          },
          nested: {
            State: {
              values: {
                JOINING: 0,
                JOINED: 1,
                ACTIVE: 2,
                DISCONNECTED: 3
              }
            }
          }
        },
        TrackType: {
          values: {
            AUDIO: 0,
            VIDEO: 1,
            DATA: 2
          }
        },
        TrackSource: {
          values: {
            UNKNOWN: 0,
            CAMERA: 1,
            MICROPHONE: 2,
            SCREEN_SHARE: 3,
            SCREEN_SHARE_AUDIO: 4
          }
        },
        SimulcastCodecInfo: {
          fields: {
            mimeType: {
              type: 'string',
              id: 1
            },
            mid: {
              type: 'string',
              id: 2
            },
            cid: {
              type: 'string',
              id: 3
            },
            layers: {
              rule: 'repeated',
              type: 'VideoLayer',
              id: 4
            }
          }
        },
        TrackInfo: {
          fields: {
            sid: {
              type: 'string',
              id: 1
            },
            type: {
              type: 'TrackType',
              id: 2
            },
            name: {
              type: 'string',
              id: 3
            },
            muted: {
              type: 'bool',
              id: 4
            },
            width: {
              type: 'uint32',
              id: 5
            },
            height: {
              type: 'uint32',
              id: 6
            },
            simulcast: {
              type: 'bool',
              id: 7
            },
            disableDtx: {
              type: 'bool',
              id: 8
            },
            source: {
              type: 'TrackSource',
              id: 9
            },
            layers: {
              rule: 'repeated',
              type: 'VideoLayer',
              id: 10
            },
            mimeType: {
              type: 'string',
              id: 11
            },
            mid: {
              type: 'string',
              id: 12
            },
            codecs: {
              rule: 'repeated',
              type: 'SimulcastCodecInfo',
              id: 13
            }
          }
        },
        VideoQuality: {
          values: {
            LOW: 0,
            MEDIUM: 1,
            HIGH: 2,
            OFF: 3
          }
        },
        VideoLayer: {
          fields: {
            quality: {
              type: 'VideoQuality',
              id: 1
            },
            width: {
              type: 'uint32',
              id: 2
            },
            height: {
              type: 'uint32',
              id: 3
            },
            bitrate: {
              type: 'uint32',
              id: 4
            },
            ssrc: {
              type: 'uint32',
              id: 5
            }
          }
        },
        DataPacket: {
          oneofs: {
            value: {
              oneof: [
                'user',
                'speaker'
              ]
            }
          },
          fields: {
            kind: {
              type: 'Kind',
              id: 1
            },
            user: {
              type: 'UserPacket',
              id: 2
            },
            speaker: {
              type: 'ActiveSpeakerUpdate',
              id: 3
            }
          },
          nested: {
            Kind: {
              values: {
                RELIABLE: 0,
                LOSSY: 1
              }
            }
          }
        },
        ActiveSpeakerUpdate: {
          fields: {
            speakers: {
              rule: 'repeated',
              type: 'SpeakerInfo',
              id: 1
            }
          }
        },
        SpeakerInfo: {
          fields: {
            sid: {
              type: 'string',
              id: 1
            },
            level: {
              type: 'float',
              id: 2
            },
            active: {
              type: 'bool',
              id: 3
            }
          }
        },
        UserPacket: {
          fields: {
            participantSid: {
              type: 'string',
              id: 1
            },
            payload: {
              type: 'bytes',
              id: 2
            },
            destinationSids: {
              rule: 'repeated',
              type: 'string',
              id: 3
            }
          }
        },
        ConnectionQuality: {
          values: {
            POOR: 0,
            GOOD: 1,
            EXCELLENT: 2
          }
        },
        ParticipantTracks: {
          fields: {
            participantSid: {
              type: 'string',
              id: 1
            },
            trackSids: {
              rule: 'repeated',
              type: 'string',
              id: 2
            }
          }
        },
        ServerInfo: {
          fields: {
            edition: {
              type: 'Edition',
              id: 1
            },
            version: {
              type: 'string',
              id: 2
            },
            protocol: {
              type: 'int32',
              id: 3
            },
            region: {
              type: 'string',
              id: 4
            },
            nodeId: {
              type: 'string',
              id: 5
            },
            debugInfo: {
              type: 'string',
              id: 6
            }
          },
          nested: {
            Edition: {
              values: {
                Standard: 0,
                Cloud: 1
              }
            }
          }
        },
        ClientInfo: {
          fields: {
            sdk: {
              type: 'SDK',
              id: 1
            },
            version: {
              type: 'string',
              id: 2
            },
            protocol: {
              type: 'int32',
              id: 3
            },
            os: {
              type: 'string',
              id: 4
            },
            osVersion: {
              type: 'string',
              id: 5
            },
            deviceModel: {
              type: 'string',
              id: 6
            },
            browser: {
              type: 'string',
              id: 7
            },
            browserVersion: {
              type: 'string',
              id: 8
            },
            address: {
              type: 'string',
              id: 9
            },
            network: {
              type: 'string',
              id: 10
            }
          },
          nested: {
            SDK: {
              values: {
                UNKNOWN: 0,
                JS: 1,
                SWIFT: 2,
                ANDROID: 3,
                FLUTTER: 4,
                GO: 5,
                UNITY: 6
              }
            }
          }
        },
        ClientConfiguration: {
          fields: {
            video: {
              type: 'VideoConfiguration',
              id: 1
            },
            screen: {
              type: 'VideoConfiguration',
              id: 2
            },
            resumeConnection: {
              type: 'ClientConfigSetting',
              id: 3
            },
            disabledCodecs: {
              type: 'DisabledCodecs',
              id: 4
            }
          }
        },
        ClientConfigSetting: {
          values: {
            UNSET: 0,
            DISABLED: 1,
            ENABLED: 2
          }
        },
        VideoConfiguration: {
          fields: {
            hardwareEncoder: {
              type: 'ClientConfigSetting',
              id: 1
            }
          }
        },
        DisabledCodecs: {
          fields: {
            codecs: {
              rule: 'repeated',
              type: 'Codec',
              id: 1
            }
          }
        },
        DisconnectReason: {
          values: {
            UNKNOWN_REASON: 0,
            CLIENT_INITIATED: 1,
            DUPLICATE_IDENTITY: 2,
            SERVER_SHUTDOWN: 3,
            PARTICIPANT_REMOVED: 4,
            ROOM_DELETED: 5,
            STATE_MISMATCH: 6,
            JOIN_FAILURE: 7
          }
        },
        RTPStats: {
          fields: {
            duration: {
              type: 'double',
              id: 3
            },
            packets: {
              type: 'uint32',
              id: 4
            },
            packetRate: {
              type: 'double',
              id: 5
            },
            bytes: {
              type: 'uint64',
              id: 6
            },
            headerBytes: {
              type: 'uint64',
              id: 39
            },
            bitrate: {
              type: 'double',
              id: 7
            },
            packetsLost: {
              type: 'uint32',
              id: 8
            },
            packetLossRate: {
              type: 'double',
              id: 9
            },
            packetLossPercentage: {
              type: 'float',
              id: 10
            },
            packetsDuplicate: {
              type: 'uint32',
              id: 11
            },
            packetDuplicateRate: {
              type: 'double',
              id: 12
            },
            bytesDuplicate: {
              type: 'uint64',
              id: 13
            },
            headerBytesDuplicate: {
              type: 'uint64',
              id: 40
            },
            bitrateDuplicate: {
              type: 'double',
              id: 14
            },
            packetsPadding: {
              type: 'uint32',
              id: 15
            },
            packetPaddingRate: {
              type: 'double',
              id: 16
            },
            bytesPadding: {
              type: 'uint64',
              id: 17
            },
            headerBytesPadding: {
              type: 'uint64',
              id: 41
            },
            bitratePadding: {
              type: 'double',
              id: 18
            },
            packetsOutOfOrder: {
              type: 'uint32',
              id: 19
            },
            frames: {
              type: 'uint32',
              id: 20
            },
            frameRate: {
              type: 'double',
              id: 21
            },
            jitterCurrent: {
              type: 'double',
              id: 22
            },
            jitterMax: {
              type: 'double',
              id: 23
            },
            gapHistogram: {
              keyType: 'int32',
              type: 'uint32',
              id: 24
            },
            nacks: {
              type: 'uint32',
              id: 25
            },
            nackAcks: {
              type: 'uint32',
              id: 37
            },
            nackMisses: {
              type: 'uint32',
              id: 26
            },
            nackRepeated: {
              type: 'uint32',
              id: 38
            },
            plis: {
              type: 'uint32',
              id: 27
            },
            firs: {
              type: 'uint32',
              id: 29
            },
            rttCurrent: {
              type: 'uint32',
              id: 31
            },
            rttMax: {
              type: 'uint32',
              id: 32
            },
            keyFrames: {
              type: 'uint32',
              id: 33
            },
            layerLockPlis: {
              type: 'uint32',
              id: 35
            }
          }
        },
        TimedVersion: {
          fields: {
            unixMicro: {
              type: 'int64',
              id: 1
            },
            ticks: {
              type: 'int32',
              id: 2
            }
          }
        },
        SignalRequest: {
          oneofs: {
            message: {
              oneof: [
                'offer',
                'answer',
                'trickle',
                'addTrack',
                'mute',
                'subscription',
                'trackSetting',
                'leave',
                'updateLayers',
                'subscriptionPermission',
                'syncState',
                'simulate',
                'ping'
              ]
            }
          },
          fields: {
            offer: {
              type: 'SessionDescription',
              id: 1
            },
            answer: {
              type: 'SessionDescription',
              id: 2
            },
            trickle: {
              type: 'TrickleRequest',
              id: 3
            },
            addTrack: {
              type: 'AddTrackRequest',
              id: 4
            },
            mute: {
              type: 'MuteTrackRequest',
              id: 5
            },
            subscription: {
              type: 'UpdateSubscription',
              id: 6
            },
            trackSetting: {
              type: 'UpdateTrackSettings',
              id: 7
            },
            leave: {
              type: 'LeaveRequest',
              id: 8
            },
            updateLayers: {
              type: 'UpdateVideoLayers',
              id: 10
            },
            subscriptionPermission: {
              type: 'SubscriptionPermission',
              id: 11
            },
            syncState: {
              type: 'SyncState',
              id: 12
            },
            simulate: {
              type: 'SimulateScenario',
              id: 13
            },
            ping: {
              type: 'int64',
              id: 14
            }
          }
        },
        SignalResponse: {
          oneofs: {
            message: {
              oneof: [
                'join',
                'answer',
                'offer',
                'trickle',
                'update',
                'trackPublished',
                'leave',
                'mute',
                'speakersChanged',
                'roomUpdate',
                'connectionQuality',
                'streamStateUpdate',
                'subscribedQualityUpdate',
                'subscriptionPermissionUpdate',
                'refreshToken',
                'trackUnpublished',
                'pong'
              ]
            }
          },
          fields: {
            join: {
              type: 'JoinResponse',
              id: 1
            },
            answer: {
              type: 'SessionDescription',
              id: 2
            },
            offer: {
              type: 'SessionDescription',
              id: 3
            },
            trickle: {
              type: 'TrickleRequest',
              id: 4
            },
            update: {
              type: 'ParticipantUpdate',
              id: 5
            },
            trackPublished: {
              type: 'TrackPublishedResponse',
              id: 6
            },
            leave: {
              type: 'LeaveRequest',
              id: 8
            },
            mute: {
              type: 'MuteTrackRequest',
              id: 9
            },
            speakersChanged: {
              type: 'SpeakersChanged',
              id: 10
            },
            roomUpdate: {
              type: 'RoomUpdate',
              id: 11
            },
            connectionQuality: {
              type: 'ConnectionQualityUpdate',
              id: 12
            },
            streamStateUpdate: {
              type: 'StreamStateUpdate',
              id: 13
            },
            subscribedQualityUpdate: {
              type: 'SubscribedQualityUpdate',
              id: 14
            },
            subscriptionPermissionUpdate: {
              type: 'SubscriptionPermissionUpdate',
              id: 15
            },
            refreshToken: {
              type: 'string',
              id: 16
            },
            trackUnpublished: {
              type: 'TrackUnpublishedResponse',
              id: 17
            },
            pong: {
              type: 'int64',
              id: 18
            }
          }
        },
        SignalTarget: {
          values: {
            PUBLISHER: 0,
            SUBSCRIBER: 1
          }
        },
        SimulcastCodec: {
          fields: {
            codec: {
              type: 'string',
              id: 1
            },
            cid: {
              type: 'string',
              id: 2
            },
            enableSimulcastLayers: {
              type: 'bool',
              id: 3
            }
          }
        },
        AddTrackRequest: {
          fields: {
            cid: {
              type: 'string',
              id: 1
            },
            name: {
              type: 'string',
              id: 2
            },
            type: {
              type: 'TrackType',
              id: 3
            },
            width: {
              type: 'uint32',
              id: 4
            },
            height: {
              type: 'uint32',
              id: 5
            },
            muted: {
              type: 'bool',
              id: 6
            },
            disableDtx: {
              type: 'bool',
              id: 7
            },
            source: {
              type: 'TrackSource',
              id: 8
            },
            layers: {
              rule: 'repeated',
              type: 'VideoLayer',
              id: 9
            },
            simulcastCodecs: {
              rule: 'repeated',
              type: 'SimulcastCodec',
              id: 10
            },
            sid: {
              type: 'string',
              id: 11
            }
          }
        },
        TrickleRequest: {
          fields: {
            candidateInit: {
              type: 'string',
              id: 1
            },
            target: {
              type: 'SignalTarget',
              id: 2
            }
          }
        },
        MuteTrackRequest: {
          fields: {
            sid: {
              type: 'string',
              id: 1
            },
            muted: {
              type: 'bool',
              id: 2
            }
          }
        },
        JoinResponse: {
          fields: {
            room: {
              type: 'Room',
              id: 1
            },
            participant: {
              type: 'ParticipantInfo',
              id: 2
            },
            otherParticipants: {
              rule: 'repeated',
              type: 'ParticipantInfo',
              id: 3
            },
            serverVersion: {
              type: 'string',
              id: 4
            },
            iceServers: {
              rule: 'repeated',
              type: 'ICEServer',
              id: 5
            },
            subscriberPrimary: {
              type: 'bool',
              id: 6
            },
            alternativeUrl: {
              type: 'string',
              id: 7
            },
            clientConfiguration: {
              type: 'ClientConfiguration',
              id: 8
            },
            serverRegion: {
              type: 'string',
              id: 9
            },
            pingTimeout: {
              type: 'int32',
              id: 10
            },
            pingInterval: {
              type: 'int32',
              id: 11
            },
            serverInfo: {
              type: 'ServerInfo',
              id: 12
            }
          }
        },
        TrackPublishedResponse: {
          fields: {
            cid: {
              type: 'string',
              id: 1
            },
            track: {
              type: 'TrackInfo',
              id: 2
            }
          }
        },
        TrackUnpublishedResponse: {
          fields: {
            trackSid: {
              type: 'string',
              id: 1
            }
          }
        },
        SessionDescription: {
          fields: {
            type: {
              type: 'string',
              id: 1
            },
            sdp: {
              type: 'string',
              id: 2
            }
          }
        },
        ParticipantUpdate: {
          fields: {
            participants: {
              rule: 'repeated',
              type: 'ParticipantInfo',
              id: 1
            }
          }
        },
        UpdateSubscription: {
          fields: {
            trackSids: {
              rule: 'repeated',
              type: 'string',
              id: 1
            },
            subscribe: {
              type: 'bool',
              id: 2
            },
            participantTracks: {
              rule: 'repeated',
              type: 'ParticipantTracks',
              id: 3
            }
          }
        },
        UpdateTrackSettings: {
          fields: {
            trackSids: {
              rule: 'repeated',
              type: 'string',
              id: 1
            },
            disabled: {
              type: 'bool',
              id: 3
            },
            quality: {
              type: 'VideoQuality',
              id: 4
            },
            width: {
              type: 'uint32',
              id: 5
            },
            height: {
              type: 'uint32',
              id: 6
            }
          }
        },
        LeaveRequest: {
          fields: {
            canReconnect: {
              type: 'bool',
              id: 1
            },
            reason: {
              type: 'DisconnectReason',
              id: 2
            }
          }
        },
        UpdateVideoLayers: {
          fields: {
            trackSid: {
              type: 'string',
              id: 1
            },
            layers: {
              rule: 'repeated',
              type: 'VideoLayer',
              id: 2
            }
          }
        },
        ICEServer: {
          fields: {
            urls: {
              rule: 'repeated',
              type: 'string',
              id: 1
            },
            username: {
              type: 'string',
              id: 2
            },
            credential: {
              type: 'string',
              id: 3
            }
          }
        },
        SpeakersChanged: {
          fields: {
            speakers: {
              rule: 'repeated',
              type: 'SpeakerInfo',
              id: 1
            }
          }
        },
        RoomUpdate: {
          fields: {
            room: {
              type: 'Room',
              id: 1
            }
          }
        },
        ConnectionQualityInfo: {
          fields: {
            participantSid: {
              type: 'string',
              id: 1
            },
            quality: {
              type: 'ConnectionQuality',
              id: 2
            },
            score: {
              type: 'float',
              id: 3
            }
          }
        },
        ConnectionQualityUpdate: {
          fields: {
            updates: {
              rule: 'repeated',
              type: 'ConnectionQualityInfo',
              id: 1
            }
          }
        },
        StreamState: {
          values: {
            ACTIVE: 0,
            PAUSED: 1
          }
        },
        StreamStateInfo: {
          fields: {
            participantSid: {
              type: 'string',
              id: 1
            },
            trackSid: {
              type: 'string',
              id: 2
            },
            state: {
              type: 'StreamState',
              id: 3
            }
          }
        },
        StreamStateUpdate: {
          fields: {
            streamStates: {
              rule: 'repeated',
              type: 'StreamStateInfo',
              id: 1
            }
          }
        },
        SubscribedQuality: {
          fields: {
            quality: {
              type: 'VideoQuality',
              id: 1
            },
            enabled: {
              type: 'bool',
              id: 2
            }
          }
        },
        SubscribedCodec: {
          fields: {
            codec: {
              type: 'string',
              id: 1
            },
            qualities: {
              rule: 'repeated',
              type: 'SubscribedQuality',
              id: 2
            }
          }
        },
        SubscribedQualityUpdate: {
          fields: {
            trackSid: {
              type: 'string',
              id: 1
            },
            subscribedQualities: {
              rule: 'repeated',
              type: 'SubscribedQuality',
              id: 2
            },
            subscribedCodecs: {
              rule: 'repeated',
              type: 'SubscribedCodec',
              id: 3
            }
          }
        },
        TrackPermission: {
          fields: {
            participantSid: {
              type: 'string',
              id: 1
            },
            allTracks: {
              type: 'bool',
              id: 2
            },
            trackSids: {
              rule: 'repeated',
              type: 'string',
              id: 3
            },
            participantIdentity: {
              type: 'string',
              id: 4
            }
          }
        },
        SubscriptionPermission: {
          fields: {
            allParticipants: {
              type: 'bool',
              id: 1
            },
            trackPermissions: {
              rule: 'repeated',
              type: 'TrackPermission',
              id: 2
            }
          }
        },
        SubscriptionPermissionUpdate: {
          fields: {
            participantSid: {
              type: 'string',
              id: 1
            },
            trackSid: {
              type: 'string',
              id: 2
            },
            allowed: {
              type: 'bool',
              id: 3
            }
          }
        },
        SyncState: {
          fields: {
            answer: {
              type: 'SessionDescription',
              id: 1
            },
            subscription: {
              type: 'UpdateSubscription',
              id: 2
            },
            publishTracks: {
              rule: 'repeated',
              type: 'TrackPublishedResponse',
              id: 3
            },
            dataChannels: {
              rule: 'repeated',
              type: 'DataChannelInfo',
              id: 4
            }
          }
        },
        DataChannelInfo: {
          fields: {
            label: {
              type: 'string',
              id: 1
            },
            id: {
              type: 'uint32',
              id: 2
            },
            target: {
              type: 'SignalTarget',
              id: 3
            }
          }
        },
        CandidateProtocol: {
          values: {
            UDP: 0,
            TCP: 1
          }
        },
        SimulateScenario: {
          oneofs: {
            scenario: {
              oneof: [
                'speakerUpdate',
                'nodeFailure',
                'migration',
                'serverLeave',
                'switchCandidateProtocol'
              ]
            }
          },
          fields: {
            speakerUpdate: {
              type: 'int32',
              id: 1
            },
            nodeFailure: {
              type: 'bool',
              id: 2
            },
            migration: {
              type: 'bool',
              id: 3
            },
            serverLeave: {
              type: 'bool',
              id: 4
            },
            switchCandidateProtocol: {
              type: 'CandidateProtocol',
              id: 5
            }
          }
        }
      }
    }
  })

module.exports = $root
