import React from 'react'
import { App } from './Components'

export function render(data) {
  React.render(<App data={data} />, document.body)
}
