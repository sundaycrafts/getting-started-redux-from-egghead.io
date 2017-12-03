import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import todoApp from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

const configureStore = () => {
  const middlewares = [thunk]

  let composedMiddlewares
  if (process.env.NODE_ENV === 'development') {
    composedMiddlewares = composeWithDevTools(applyMiddleware(...middlewares))
  } else {
    composedMiddlewares = applyMiddleware(...middlewares)
  }

  const store = createStore(todoApp, composedMiddlewares)

  return store
}
export default configureStore
