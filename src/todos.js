export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo => {
        if (todo.id !== action.id) {
          return todo
        }

        return {
          ...todo,
          completed: !todo.completed
        }
      })
    default:
      return state
  }
}
