import React from 'react'
import IfPassword from './pages/IfPassword'
import TernaryPassword from './pages/TernaryPassword'
import Cart from './components/Cart'
import AllTask from './pages/AllTask'

const App = () => {
  return (
    <div>
      <IfPassword isValid={true} />
      <TernaryPassword isValid={false} />
      <Cart />
      <AllTask />
    </div>
  )
}

export default App