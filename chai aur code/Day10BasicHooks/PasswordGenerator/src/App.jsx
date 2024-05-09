import { useState , useCallback , useEffect} from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(8);
  const [numberAllowed , setnumberAllowed] = useState(false);
  const [characterAllowed,setcharacterAllowed] = useState(false);
  const [password , setpassword] = useState("");


  const passwordGenerator=useCallback(()=>{
    let pass ="";

    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed){
      str+="1234567890";
    }
    if(characterAllowed){
      str+="@#$%^&*!~";
    }


  },[length,numberAllowed,characterAllowed,setpassword]);



  return (
    <div className='bg-black'>
      <h1 className='text-white'>Password Generator</h1>
    </div>
  )
}

export default App

