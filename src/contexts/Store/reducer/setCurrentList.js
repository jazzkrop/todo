const setCurrentList = (state, payload) => {
  const { id } = payload

  // Creating copy of the state
  const stateCopy = JSON.parse(JSON.stringify(state))

  // Creating record
  if (id) {
    if (!stateCopy.lists[id]) {
      // console.error('There is no list with this id');
    }
    stateCopy.currentList = id
  }
  else {
    if (stateCopy.currentList) {
      delete stateCopy.currentList
    }
    
  }
  return { ...stateCopy }
}

export default setCurrentList
