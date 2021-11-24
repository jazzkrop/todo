const removeRecord = (state, payload) => {
  const { id } = payload
  // Creating copy of the state
  const stateCopy = state

  if (stateCopy.lists[id]) {
    delete stateCopy.lists[id]
  } else {
    stateCopy.lists.map((item) => {
      if (item[id]) {
        delete item[id]
      }
      return item
    })
  }
  return stateCopy
}

export default removeRecord
