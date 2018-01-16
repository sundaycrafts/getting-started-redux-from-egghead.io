import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import todoApp from './reducers'

const configureStore = () => {
  const middlewares = [thunk]
  const composeEnhancers = process.env.NODE_ENV === 'development' ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose :
    compose

  const store = createStore(todoApp,
    composeEnhancers(applyMiddleware(...middlewares)))

  return store
}
export default configureStore
