import './App.css';
import { useState } from 'react';
function App() {
  const [value, setvalue] = useState(0);
  // const handleClick = () => {
  //   setvalue(value + 1);
  // };
  return (
    <div className="App">
      Count
      <div className="container">
        {value}
        <br />
        <button className='btn' onClick={() => {
          setvalue(value + 1);
        }}>Click me </button>
      </div>
    </div>
  );
}

export default App;
