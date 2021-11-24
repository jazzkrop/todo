import { StoreProvider } from './contexts/Store'
import './index.css'
import Navigator from './pages/Navigator'

function App() {
  return (
    <div className="App">
      <StoreProvider>
        <Navigator />
      </StoreProvider>
    </div>
  )
}

export default App
