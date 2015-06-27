import React from 'react'

export const App = React.createClass({
  render() {
    return (
      <div>Hello, {this.props.data.name}!</div>
    )
  },
})
