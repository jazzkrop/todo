import { useRef } from 'react'
import { useState } from 'react'
import useStore from '../../../contexts/Store/hooks/useStore'
import useOnComponentDidMount from '../../../hooks/useOnComponentDidMount'

const ListSimpleView = ({ list }) => {
  const { updateRecord, setCurrentList, store } = useStore()
  const [listName, setListName] = useState(list.name)
  const inputName = useRef(null)

  useOnComponentDidMount(() => {
    inputName.current.click()
  })
  return (
    <div
      className={
        store.currentList === list.id
          ? 'list-item list-item-current'
          : 'list-item'
      }
      onClick={() => {
        setCurrentList({ id: list.id })
      }}
    >
      <div className="" style={{ fontSize: '23px' }}>
        O
      </div>
      <input
        style={{ marginLeft: '4px', padding: '0' }}
        type="text"
        name="name"
        ref={inputName}
        required
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            event.target.blur()
            updateRecord({ record: { id: list.id, name: listName } })
          }
        }}
        onClick={(event) => {
          event.target.select()
        }}
        onChange={(event) => {
          setListName(event.target.value)
        }}
        defaultValue={listName}
      />
      <div
        className=""
        style={{
          marginLeft: '4px',
          padding: '0 8px'
        }}
      >
        0
      </div>
    </div>
  )
}
export default ListSimpleView
