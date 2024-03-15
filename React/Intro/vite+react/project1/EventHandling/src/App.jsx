import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [Form, setForm] = useState({ name: "", phone: "" })
  const handleClick = () => {
    alert('Clicked')
  }
  const handleChange = (e) => {
    setForm({ ...Form, [e.target.name]: e.target.value })
  }
  return (
    <>
      <div className="button">
        <button onClick={handleClick}>CLick me</button>
      </div>
      <div className="input">
        <input type="text" name='name' value={Form.name} onChange={handleChange} />
        <input type="number" name='phone' value={Form.phone} onChange={handleChange} />
      </div>
    </>
  )
}

export default App
