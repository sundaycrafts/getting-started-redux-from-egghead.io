import { connect } from 'react-redux'
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

const mapStateToProps = (state, ownProps) => ({
  todos: getVisibleTodos(
    state.todos,
    ownProps.filter
  )
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onTodoClick: id => {
    dispatch(toggleTodo(id))
  }
})

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
