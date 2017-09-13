export const toggleTodo = (todo) => {
  /* 1 (not freezed) */
  // todo.completed = !todo.completed
  // return todo

  /* 2 (freezed, not ES6) */
  // return {
  //   id: todo.id,
  //   text: todo.text,
  //   completed: !todo.completed
  // }

  /* 3 (freezed, ES6 with polyfill of Object.assign()) */
  // return Object.assign({}, todo, {
  //   completed: !todo.completed
  // })

  /* 4 (freezed, ES6 using ...spread) */
  return {
    ...todo,
    completed: !todo.completed
  }
}
