import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import { TodoApp } from './todos'

ReactDOM.render(
  <TodoApp />,
  document.getElementById('root')
)

registerServiceWorker()
