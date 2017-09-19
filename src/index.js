import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import PropTypes from 'prop-types'
import registerServiceWorker from './registerServiceWorker'
import { TodoApp, todoApp } from './todos'

class Provider extends React.Component {
  getChildContext () {
    return { store: this.props.store }
  }
  render () {
    return this.props.children
  }
}
Provider.childContextTypes = {
  store: PropTypes.object
}

ReactDOM.render(
  <Provider store={createStore(todoApp)}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
