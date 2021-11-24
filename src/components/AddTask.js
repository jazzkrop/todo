import useStore from '../contexts/Store/hooks/useStore'
const AddTask = () => {
  const { store, addRecord } = useStore()
  return (
    <button
      style={{
        position: 'fixed',
        lineHeight: '42px',
        top: '8px',
        right: '16px',
        fontSize: '36px',
        color: 'var(--secondary-4)',
        background: 'none',
        border: 'none',
        fontWeight: '300'
      }}
      onClick={() => {
        store.currentList === 'all' || store.currentList === 'flag'
          ? Object.values(store.lists).length > 0
            ? addRecord({ listId: store.lists[0] })
            : console.error('Create at first TaskList')
          : addRecord({ listId: store.currentList })
      }}
    >
      +
    </button>
  )
}
export default AddTask