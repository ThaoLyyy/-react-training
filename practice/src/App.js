// import './App.css'
import Home from './page/Home'
import { StoreProvider } from './store'

const App = () => {
  return (
    <StoreProvider>
      <Home />
    </StoreProvider>
  )
}

export default App
