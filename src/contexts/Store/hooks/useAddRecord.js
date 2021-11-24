const uuidv4 = require('uuid')

const useAddRecord = (dispatch) => {
  const addRecord = ({ listId, record }) => {
    record = record || {}
    if (listId) {
      record.title = ''
      record.done = false
      record.flaged = false
    }
    else {
      record.name= 'Новый список'
      record.color = 'var(--submit-1)'
      record.children  = {}
    }
    record.id = record.id || uuidv4.v4()
    const payload = {
      listId,
      id: record.id,
      record
    }

    dispatch({ type: 'createRecord', payload })
  }

  return addRecord
}

export default useAddRecord
