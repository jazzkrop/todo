import AppLayout from '../../components/Layouts/AppLayout'
import { ListAll } from './Dashboard/List'
import useStore from '../../contexts/Store/hooks/useStore'
import ListAdvancedView from '../../domains/List/components/ListAdvancedView'

const App = () => {
  const { store } = useStore()
  return (
    <AppLayout>
      {store.currentList === 'all' ? (
        <ListAll />
      ) : store.currentList === 'flag' ? (
        <ListAdvancedView id="flaged"/>
      ) : (
        <ListAdvancedView id={store.currentList} />
      )}
    </AppLayout>
  )
}
export default App
