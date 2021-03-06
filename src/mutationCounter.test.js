import { addCounter, removeCounter, incrementCounter } from './mutationCounter'
import deepFreeze from 'deep-freeze'

it('test addCounter', () => {
  const listBefore = []
  const listAfter = [0]

  deepFreeze(listBefore)

  expect(
    addCounter(listBefore)
  ).toEqual(listAfter)
})

it('test removeCounter', () => {
  const listBefore = [0, 10, 20]
  const listAfter = [0, 20]

  deepFreeze(listBefore)

  expect(
    removeCounter(listBefore, 1)
  ).toEqual(listAfter)
})

it('test incrementCounter', () => {
  const listBefore = [0, 10, 20]
  const listAfter = [0, 11, 20]

  deepFreeze(listBefore)

  expect(
    incrementCounter(listBefore, 1)
  ).toEqual(listAfter)
})
