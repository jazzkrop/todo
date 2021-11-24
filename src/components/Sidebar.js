import Search from './Search'
import Navigation from './Navigation'
import { ListList } from '../domains/List/components'
import AddList from './AddList'

const Sidebar = () => {
  return (
    <div
      style={{
        width: '410px',
        background: '#454b4c',
        height: '100vh',
        padding: '16px'
      }}
    >
      <Search />
      <Navigation />
      <div>
        <p
          style={{
            marginTop: '16px',
            marginLeft: '12px',
            fontSize: 'var(--fz-body-2)',
            color: 'var(--primary-4)',
            fontWeight: '600'
          }}
        >
          Мои списки
        </p>
        <ListList />
      </div>
      <AddList />
    </div>
  )
}
export default Sidebar
