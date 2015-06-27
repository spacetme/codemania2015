import React from 'react'
import Actions from './Actions'

export const App = React.createClass({
  render() {
    const data = this.props.data
    if (data.isLoggedIn) {
      return (
        <Chat data={data} />
      )
    } else {
      return (
        <LoginForm />
      )
    }
  },
})

export const Chat = React.createClass({
  render() {
    const data = this.props.data
    return (
      <section>
        <h1>Hello, {data.name}</h1>
        <ul>
          {data.messages.map(message => (
            <li>
              <strong>{message.name}:</strong> {message.text}
            </li>
          ))}
        </ul>
        <SendForm />
      </section>
    )
  },
})

export const LoginForm = React.createClass({
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Please login</h1>
        <input ref='name' />
        <input type='submit' />
      </form>
    )
  },
  handleSubmit(e) {
    let textField = React.findDOMNode(this.refs.name)
    let name = textField.value
    Actions.login(name)
    e.preventDefault()
  }
})

export const SendForm = React.createClass({
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input ref='text' />
        <input type='submit' />
      </form>
    )
  },
  handleSubmit(e) {
    let textField = React.findDOMNode(this.refs.text)
    let text = textField.value
    Actions.send(text)
    textField.value = ''
    e.preventDefault()
  }
})
