const useDestroyRecord = (dispatch) => {
  const destroyRecord = async ({ id }) => {
    const payload = { id }
    dispatch({ type: 'deleteRecord', payload })
  }
  return destroyRecord
}

export default useDestroyRecord
