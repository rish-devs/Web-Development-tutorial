import { React, useRef } from 'react'
import { MdAddTask } from "react-icons/md";
const AddTodo = ({ handleNewItem }) => {
  const todoNameElement = useRef();
  const todoDueDateElement = useRef();
  console.log("Add todo repainted");
  const handleAddButton = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const todoDueDate = todoDueDateElement.current.value;
    handleNewItem(todoName, todoDueDate)
    todoNameElement.current.value = "";
    todoDueDateElement.current.value = "";
  }
  return (
    <div className='todo-container w-50'>
      <form onSubmit={handleAddButton} className="row kg-row">
        <div className="col-6">
          <input ref={todoNameElement} className='w-100' type="text" name="todo" id="" placeholder="Enter a TODO Task" />
        </div>
        <div className="col-4">
          <input ref={todoDueDateElement} type="date" name="" id="" />
        </div>
        <div className="col-2">
          <button type='submit' className="btn btn-success todo-button kg-button">
            <MdAddTask />
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddTodo
