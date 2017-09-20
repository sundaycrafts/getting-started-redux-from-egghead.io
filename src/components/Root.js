import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router >
      <div>
        <Route path='/' component={App} />
        <Link to={'working-check'}>Link</Link>
      </div>
    </Router>
  </Provider>
)
export default Root
