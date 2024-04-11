import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const Add =()=>{
    // here the count will not increase 5 times in one go , as the requests to ui in react are bundled , so we have to do something to achieve this

    setCount(count+1);
    setCount(count+1);
    setCount((prevCount)=>prevCount+1);
    setCount((prevCount)=>prevCount+1);
    setCount((prevCount)=>prevCount+1);
  }
  const Remove =()=>{
    setCount(count-1);
    
  }

  return (
    <>
      {/* building a counter */}

      <h1>Counter : {count}</h1>
      <button onClick={Add}>Add</button>
      <br />
      <button onClick={Remove}>Remove</button>  

    </>
  )
}

export default App
