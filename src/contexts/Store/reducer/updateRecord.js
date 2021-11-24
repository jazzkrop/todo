const updateRecord = (state, payload) => {
  const { listId, id, record } = payload

  // Creating copy of the state
  const stateCopy = JSON.parse(JSON.stringify(state))

  // Creating record
  if (listId) {
    if (!stateCopy.lists[listId]) {
      console.error('There is no list with this id')
    } else {
      Object.assign(stateCopy.lists[listId].children[id], record)
    }
  } else {
    Object.assign(stateCopy.lists[id], record)
  }
  return { ...stateCopy }
}

export default updateRecord
