import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker'
import { TodoApp, todoApp } from './todos'

const persistedState = {
  todos: [{
    id: '0',
    text: 'Welcome back!',
    completed: false
  }]
}
const store = createStore(todoApp, persistedState)

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
