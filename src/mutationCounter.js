export const addCounter = (list) => {
  /* 1 (not freezed) */
  // list.push(0)
  // return list

  /* 2 (freezed, not ES6) */
  // return list.concat([0])

  /* 3 (freezed, ES6) */
  return [...list, 0]
}

export const removeCounter = (list, index) => {
  /* 1 (not freezed) */
  // list.splice(index, 1)
  // return list

  /* 2 (freezed, not ES6) */
  // return list
  //   .slice(0, index)
  //   .concat(list.slice(index + 1))

  /* 3 (freezed, ES6) */
  return [
    ...list.slice(0, index),
    ...list.slice(index + 1)
  ]
}

export const incrementCounter = (list, index) => {
  /* 1 (not freezed) */
  // list[index]++
  // return list

  /* 2 (freezed, not ES6) */
  // return list
  //   .slice(0, index)
  //   .concat([list[index] + 1])
  //   .concat(list.slice(index + 1))

  /* 3 (freezed, ES6) */
  return [
    ...list.slice(0, index),
    list[index] + 1,
    ...list.slice(index + 1)
  ]
}
