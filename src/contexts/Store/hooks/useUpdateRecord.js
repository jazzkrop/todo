const useUpdateRecord = (dispatch) => {
  const updateRecord = ({ listId, record }) => {
    const payload = {
      listId,
      id: record.id,
      record
    }

    dispatch({ type: 'updateRecord', payload })
  }

  return updateRecord
}

export default useUpdateRecord