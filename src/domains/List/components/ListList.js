import { useStore } from '../../../contexts/Store'
import ListSimpleView from './ListSimpleVIew';
const ListList = () => {
  const { store } = useStore()
  const lists = Object.values(store.lists)
  return (
    <>
      {lists.map((item) => {
        return <ListSimpleView list={item} />
      })}
    </>
  )
}
export default ListList
