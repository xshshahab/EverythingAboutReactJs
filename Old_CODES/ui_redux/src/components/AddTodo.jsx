import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/Todo/TodoSlice'

function AddTodo() {

  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const addTodoHandler = (e) => {
    e.preventDefault()
    dispatch(addTodo(input))
    setInput('')
  }

  return (
    <form onSubmit={addTodoHandler} className="flex items-center justify-center pt-12 space-x-1">
      <input
        type="text"
        className="px-2 py-1 text-base leading-8 text-gray-900 transition-colors duration-200 ease-in-out border border-gray-700 rounded outline-none bg-emerald-400 placeholder:text-black w-80 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-900"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="px-6 py-1.5 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600"
      >
        Add Todo
      </button>
    </form>
  )
}

export default AddTodo