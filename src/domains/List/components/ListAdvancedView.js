import useStore from '../../../contexts/Store/hooks/useStore'
import { useState } from 'react'
// import TaskList from '../../Task/components/TaskList';

const ListAdvancedView = ({ id }) => {
  const [showDone, setShowDone] = useState(false)
  const { store, getNumberOfDone } = useStore()
  const tasks = []
  const title = id === 'flaged' ? 'С флажком' : store.lists[id].name
  const color =
    id === 'flaged'
      ? 'var(--warning)'
      : store.lists[id].color
      ? store.lists[id].color
      : '#fff'
  return (
    <div
      style={{
        paddingLeft: '18px',
        marginTop: '62px',
        width: '100%'
      }}
    >
      <div
        style={{
          paddingRight: '16px',
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '24px'
        }}
      >
        <h1
          style={{
            color: color
          }}
        >
          {title}
        </h1>
        {id != 'flaged' ? (
          <h1
            style={{
              color: color
            }}
          >
            0
          </h1>
        ) : (
          <></>
        )}
      </div>
      <div style={{display:'flex', justifyContent:'space-between', paddingRight:'16px'}}>
        <p>{getNumberOfDone(id)} выполнено</p>
        <button style={{color: color}}>Показать</button>
      </div>

      <hr />
    </div>
  )
}

export default ListAdvancedView
