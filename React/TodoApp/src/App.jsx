// import { useState } from 'react'
import { useState } from 'react'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';

function App() {
  // const [count, setCount] = useState(0)
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    setTodo("")
    console.log(todos)
  }
  const handleEdit = () => {

  }
  const handleDelete = () => {

  }
  const handleChange = (e) => {
    setTodo(e.target.value)
  }
  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = item.findIndex(item => {
      return item.id === id;
    })
    let newTodos = todos;
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos)
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto rounded-xl bg-slate-200 p-5 my-5 min-h-screen">
        <div className="addTodo my-5">
          <h2 className='text-lg font-bold '>Add a task</h2>
          <input onChange={handleChange} className='w-96 p-1 rounded-md' value={todo} type="text" name="" id="" />
          <button onClick={handleAdd} className=' rounded-md bg-gray-600 text-sm font-bold text-white p-2 mx-6 hover:bg-green-500 transition-all '>Add</button>
        </div>
        <h2 className='text-xl font-bold'>Your Todos</h2>
        <div className="todos">
          {todos.map(item => {
            return (<div key={item.id} className="todo flex justify-between w-1/4 p-1">
              <input onChange={handleCheckbox} type="checkbox" value={item.isCompleted} name="" id="" />
              <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
              <div className="buttons">
                <button onClick={handleEdit} className='rounded-md bg-gray-600 text-sm font-bold text-white p-2 mx-1 hover:bg-blue-500 transition-all '>Edit</button>
                <button onClick={handleDelete} className='rounded-md bg-gray-600 text-sm font-bold text-white p-2 mx-1 hover:bg-red-500 transition-all '>Delete</button>
              </div>
            </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default App
