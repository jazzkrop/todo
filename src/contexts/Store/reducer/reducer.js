import createRecord from './createRecord'
import deleteRecord from './deleteRecord'
import updateRecord from './updateRecord'
import setCurrentList from './setCurrentList'

const reducer = (state, action) => {
  const { type, payload } = action

  const actionsMap = {
    deleteRecord,
    createRecord,
    updateRecord,
    setCurrentList
  }
  return actionsMap[type](state, payload)
}

export default reducer
