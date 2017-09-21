import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { toggleTodo } from '../actions'
import TodoList from './TodoList'

const getVisibleTodos = (
  todos,
  filter
) => {
  switch (filter) {
    case 'all':
      return todos
    case 'completed':
      return todos.filter(
        t => t.completed
      )
    case 'active':
      return todos.filter(
        t => !t.completed
      )
    default:
      return todos
  }
}

const mapStateToProps = (state, { match }) => ({
  todos: getVisibleTodos(
    state.todos,
    match.params.filter || 'all'
  )
})

const VisibleTodoList = withRouter(connect(
  mapStateToProps,
  { onTodoClick: toggleTodo }
)(TodoList))

export default VisibleTodoList
