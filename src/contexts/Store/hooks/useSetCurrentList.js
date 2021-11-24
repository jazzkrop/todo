const useSetCurrentList = (dispatch) => {
  const SetCurrentList = ({ id }) => {
    const payload = { id }

    dispatch({ type: 'setCurrentList', payload })
  }

  return SetCurrentList
}

export default useSetCurrentList
