import { InitiativesProvider } from './context/InitiativesContext.jsx'
import Home from './pages/Home.jsx'

function App() {
  return (
    <>
      <InitiativesProvider>
        <Home />
      </InitiativesProvider>
    </>
  )
}

export default App
