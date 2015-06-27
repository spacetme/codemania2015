
import IO from 'socket.io'

const io = IO(12345)

io.on('connection', (conn) => {
  conn.on('chat', data => io.emit('chat', data))
})
