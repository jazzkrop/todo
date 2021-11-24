const useGetNumberOfDone = (store) => {
  const GetNumberOfDone = () => {
    let numberOfDone = 0
    const keys = Object.keys(store.lists)

    keys.forEach((key) => {
      const taskKeys = Object.keys(store.lists[key].children)
      taskKeys.forEach((taskKey) => {
        if (store.lists[key].children[taskKey]?.done) {
          numberOfDone++
        }
      })
    })
    return numberOfDone
  }

  return GetNumberOfDone
}

export default useGetNumberOfDone
