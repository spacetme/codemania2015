import React from 'react'
import { App } from './Components'
import './style.styl'

export function render(data) {
  React.render(<App data={data} />, document.body)
}
