import Sidebar from '../Sidebar'
import AddTask from '../AddTask'

const AppLayout = ({ children }) => {
  return (
    <div style={{display:"flex"}}>
      <Sidebar/>
      <AddTask/>
      {children}
    </div>
  )
}
export default AppLayout
