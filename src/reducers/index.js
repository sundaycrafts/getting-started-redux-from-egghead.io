import todos from './todos'
import visibilityFilter from './visibilityFilter'
import { combineReducers } from 'redux'
// const combineReducers = (reducers) =>
//   (state = {}, action) => Object.keys(reducers).reduce(
//     (nextState, key) => {
//       nextState[key] = reducers[key](
//         state[key],
//         action
//       )
//       return nextState
//     },
//     {}
//   )

const todoApp = combineReducers({ todos, visibilityFilter })
export default todoApp
