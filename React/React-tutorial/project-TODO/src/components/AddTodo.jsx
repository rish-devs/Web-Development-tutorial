import { React, useState } from 'react'

const AddTodo = ({ handleNewItem }) => {
  const [todoName, setTodoName] = useState("");
  const [todoDueDate, setTodoDueDate] = useState("");

  const handleTodoChange = (e) => {
    setTodoName(e.target.value)
  }
  const handleDueDateChange = (e) => {
    setTodoDueDate(e.target.value)
  }
  const handleAddButton = () => {
    handleNewItem(todoName, todoDueDate)
    setTodoName("")
    setTodoDueDate("")
  }
  return (
    <div className='todo-container w-50'>
      <div className="row kg-row">
        <div className="col-6">
          <input value={todoName} className='w-100' type="text" name="todo" id="" placeholder="Enter a TODO Task" onChange={handleTodoChange} />
        </div>
        <div className="col-4">
          <input value={todoDueDate} type="date" name="" id="" onChange={handleDueDateChange} />
        </div>
        <div className="col-2">
          <button onClick={handleAddButton} type="button" className="btn btn-success todo-button kg-button">ADD</button>
        </div>
      </div>
    </div>
  )
}

export default AddTodo
