import Store from './components/Store'
import { ShoppingCartProvider } from './context/ShoppingCartContext'

function App() {
  return (
    <ShoppingCartProvider>
    <Store/>
    </ShoppingCartProvider>
  )
}

export default App