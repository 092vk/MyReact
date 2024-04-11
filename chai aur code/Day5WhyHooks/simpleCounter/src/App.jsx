import { useState } from 'react';
import './App.css'

function App() {
  const [count , setCounter]=useState(0)
  //the setCounter function is already defined , it changes the count, you have to give it value which it has to dispaly insted of 0 


  const Add = ()=>{
    setCounter(count+1)
  }

  const Remove = ()=>{
    if(count > 0){
      setCounter(count-1);
    }
    else{
      alert("the counter is going below 0");
    }
    
  }

  return (
    <>
      <h1>Hello React</h1>
      <h2>Counter Value {count}</h2>
      <button onClick={Add}>Add {count}</button>
      <br />
      <button onClick={Remove}>Remove  {count}</button>
    </>
  )
}

export default App



// so while natively using js ,if i am using same varibale at multiple locations in the page and i want them to change at the same time i have to target all of them ,i have to decide which once i have to change and which ones not , which is quite hectic , this is automated using react or reactive library , react makes the process of reacting automatic , if a value is present at multiple locations or at multiple pages , and if we change it , react will react for us and change it at all the locations , this is where react hooks comes in the picture .  
