import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showBtn, setShowBtn] = useState(false);
  const [todos, setTodos] = useState({
    key: 1,
    title: 'Todo 1',
    desc: "Hey there this is todo 1"
  },
    {
      key: 2,
      title: 'Todo 2',
      desc: "Hey there this is todo 2"
    },
    {
      key: 3,
      title: 'Todo 3',
      desc: "Hey there this is todo 3"
    })
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {showBtn && <button>Hey there</button>}
      {/* {showBtn ? <button>Hey there</button> : <button>btn hidden</button>} */}
      {todos.map(todo => {
        return (
          <div key={todo.key}>
            <h2>{todo.title}</h2>
            <p>{todo.desc}</p>
          </div>
        )
      })}
      <div className="card">
        <button onClick={() => setShowBtn(!showBtn)}>
          {showBtn ? "Hide Button" : "Show Button"}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App
