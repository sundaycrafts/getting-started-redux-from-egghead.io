import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import { TodoApp, store } from './todos'

const render = () => {
  ReactDOM.render(
    <TodoApp {...store.getState()} />,
    document.getElementById('root')
  )
}

store.subscribe(render)
render()

registerServiceWorker()
