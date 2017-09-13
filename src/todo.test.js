import { toggleTodo } from './todo'
import deepFreeze from 'deep-freeze'

it('Todo test', () => {
  const todoBefore = {
    id: 0,
    text: 'Learn Redux',
    completed: false
  }

  const todoAfter = {
    id: 0,
    text: 'Learn Redux',
    completed: true
  }

  deepFreeze(todoBefore)

  expect(toggleTodo(todoBefore)).toEqual(todoAfter)
})
