function counter(state, action) {
  if (typeof state === 'undefined') return 0

  if (action.type === 'INCREMENT') {
    return state + 1
  } else if (action.type === 'DECREMENT') {
    return state - 1
  } else {
    return state
  }
}

export default counter
