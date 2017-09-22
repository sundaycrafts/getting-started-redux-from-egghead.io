import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise'
import { createLogger } from 'redux-logger'
import todoApp from './reducers'

const configureStore = () => {
  const middlewares = [promise]

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger())
  }

  const store = createStore(
    todoApp,
    applyMiddleware(...middlewares)
  )

  return store
}
export default configureStore
