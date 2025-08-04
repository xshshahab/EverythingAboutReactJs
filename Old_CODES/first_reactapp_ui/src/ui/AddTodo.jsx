import React from 'react'

const AddTodo = () => {
  return (
    <div className="p-2 mt-2 row">
      <div className="p-2 border col-6">
        <input type="text" className="bg-transparent form-control" placeholder="Enter Task" />
      </div>
      <div className="p-2 border col-4">
        <input type="date" name="" id="" className="form-control " />
      </div>
      <div className="p-2 border col-2">
        <button className="btn btn-primary">Add</button>
      </div>
    </div>
  )
}

export default AddTodo