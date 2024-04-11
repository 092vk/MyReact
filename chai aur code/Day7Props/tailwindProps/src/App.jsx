import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card"

function App() {
  const [count, setCount] = useState(0);

  const arr = [1,1,2];
  const obj = {
    name : "vivek",
    class : "ece"
  }

  return (
    <>
      <h1 className="bg-green-400 text-black p-5 rounded-xl mb-4">
        {" "}
        Tailwind With React
      </h1>



      {/* making arrays and objects to be passed in the componenst  */}
      
      
      <Card name = "vievk" arr={arr} object={obj}/>
      <Card object={obj}/>

      {/* now i can reuse the componenst and also pass to them values called props in react  */}



    </>
  );
}

export default App;
