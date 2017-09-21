import todos, * as fromTodos from './todos'
import visibilityFilter from './visibilityFilter'
import { combineReducers } from 'redux'

const todoApp = combineReducers({ todos, visibilityFilter })
export default todoApp

export const getVisibleTodos = (state, filter) =>
  fromTodos.getVisibleTodos(state.todos, filter)
