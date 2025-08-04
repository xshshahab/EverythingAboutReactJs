import React from 'react'
import XshButton from './components/XshButton'
import Dynamic from './components/Dynamic'
import LightButton from './components/LightButton'
import AddTodo from './ui/AddTodo'
import TodoItems from './ui/TodoItems'
import AppName from './ui/AppName'
import BharatName from './shared/BharatName'
import BharatSlogan from './shared/BharatSlogan'
import BharatClock from './shared/BharatClock'

const App = () => {
  return (
    <div>
      <center className='App'>
        <h1>Open Instagram</h1>
        <XshButton />
        <br />
        <br />
        <hr />
        <br />
        <Dynamic></Dynamic>
        <br />

        <LightButton />
        <br /> <br />
      </center>


      {/* Todo app ui design */}
      <center>
        <AppName />
        <div className="container text-center ">
          <AddTodo />
          <TodoItems />
        </div>
      </center>

      {/* Indian clock */}
      <center>
        <BharatName />
        <BharatSlogan />
        <BharatClock />
      </center>
    </div>

  )
}

export default App