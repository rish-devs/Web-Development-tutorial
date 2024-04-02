import AddTodo from './components/AddTodo'
import AppHeading from './components/AppHeading'
// import TodoList from './components/TodoList'
import Navbar from './components/Navbar'
import CreateTodo from './components/CreateTodo';
import './App.css'
import { useState } from 'react';
import NoTaskDueMsg from './components/NoTaskDueMsg';
function App() {
  const intialTodoItems = [];
  const [todoItems, setTodoItems] = useState(intialTodoItems);
  const handleNewItem = (itemName, itemDueDate) => {
    const newItem = {
      name: itemName,
      dueDate: itemDueDate
    }
    setTodoItems([...todoItems, newItem])
  }
  const handleDeleteItem = (itemName) => {
    console.log(`Item Deleted  ${itemName}`)
    const updateItems = todoItems.filter(item => item.name !== itemName)
    setTodoItems(updateItems)

  }
  return (
    <>
      <Navbar />
      <center className='todo-container my-3'>
        <AppHeading />
        <div className="container w-100">
          <AddTodo handleNewItem={handleNewItem} />
          <CreateTodo todoItems={todoItems} handleDeleteItem={handleDeleteItem} />
          {todoItems.length === 0 && <NoTaskDueMsg />}
        </div>
      </center>
    </>
  )
}
export default App
