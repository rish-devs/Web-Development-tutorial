import AddTodo from './components/AddTodo'
import AppHeading from './components/AppHeading'
// import TodoList from './components/TodoList'
import Navbar from './components/Navbar'
import CreateTodo from './components/CreateTodo';
import './App.css'
import { useState } from 'react';
import NoTaskDueMsg from './components/NoTaskDueMsg';
function App() {
  const [todoItems, setTodoItems] = useState([]);
  const handleNewItem = (itemName, itemDueDate) => {
    setTodoItems((currValue) => [...currValue, { name: itemName, dueDate: itemDueDate }])
  }
  const handleDeleteItem = (itemName) => {
    console.log(`Item Deleted  ${itemName}`)
    const updateItems = todoItems.filter(item => item.name !== itemName)
    setTodoItems(updateItems)

  }
  console.log("App refresh")
  return (
    <>
      <Navbar />
      <center className='todo-container my-3'>
        <AppHeading />
        <div className="container w-100">
          <AddTodo handleNewItem={handleNewItem} />
          <CreateTodo todoItems={todoItems} handleDeleteItem={handleDeleteItem} />
          <NoTaskDueMsg todoItems={todoItems} />
        </div>
      </center>
    </>
  )
}
export default App
