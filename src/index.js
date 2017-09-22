import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import Root from './components/Root'
import configureStore from './configureStore'
import { fetchTodos } from './api'

fetchTodos('all').then(todos => console.log(todos))

const store = configureStore()

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
)

registerServiceWorker()
