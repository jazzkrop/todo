import { ListAdvancedView } from '../../../../domains/List/components'
import useStore from '../../../../contexts/Store/hooks/useStore'

const ListAll = () => {
  const { store, getNumberOfDone } = useStore()

  const keys = Object.keys(store.lists)

  return (
    <div
      style={{
        paddingLeft: '18px',
        width: '100%',
        marginTop: '62px'
      }}
    >
      <h1 style={{ marginBottom: '24px' }}>Все</h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          paddingRight: '16px'
        }}
      >
        <p>{getNumberOfDone()} выполнено</p>
        <button style={{ color: 'var(--primary-3)' }}>Показать</button>
      </div>
      <hr />
      {keys.forEach((key) => {
        return <ListAdvancedView list={{ id: key, ...store.lists[key] }} />
      })}
    </div>
  )
}

export default ListAll
