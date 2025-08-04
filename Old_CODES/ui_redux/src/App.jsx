import React from 'react';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

function App() {

  return (
    <div className='w-full min-h-screen text-white bg-zinc-800'>
      <AddTodo />
      <Todos />
    </div>
  )
}

export default App
