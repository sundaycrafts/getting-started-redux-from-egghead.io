import todos from './todos'
import deepFreeze from 'deep-freeze'

it('add todo', () => {
  const stateBefore = []

  const action = {
    type: 'ADD_TODO',
    id: 0,
    text: 'Learn Redux'
  }

  const stateAfter = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false
    }
  ]

  deepFreeze(action)

  expect(todos(stateBefore, action)).toEqual(stateAfter)
})
