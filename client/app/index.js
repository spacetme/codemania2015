
import { render } from './UI'
import Actions from './Actions'
import IO from 'socket.io-client'

const io = IO('ws://localhost:12345')

let _name
let _messages = []

Actions.login = function(name) {
  _name = name
  update()
}
Actions.send = function(text) {
  io.emit('chat', { name: _name, text: text })
}
io.on('chat', function(data) {
  _messages = [..._messages, data]
  update()
})

function update() {
  render({
    isLoggedIn: !!_name,
    name: _name,
    messages: _messages,
  })
}

update()
