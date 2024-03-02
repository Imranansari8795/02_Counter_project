import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(15)

  const addValue =() =>{
    if(counter < 25)
    {
      setCounter(counter + 1);
    }
  }
  const removeValue = () =>{
    if(counter > 0)
    {
      setCounter(counter - 1);
    }
  }
  const reSet = () =>{
    setCounter(0);
  }
  
  return (
    <>
      <h1>Counter Basic Project</h1>
      <h2>Counter Value: {counter}</h2>

      <button
      onClick={addValue}
      >Increment by One</button>
      <br />
      <br />
      <button
        onClick={removeValue}
      >Decrement by One</button>
      <br />
      <br />
      <button
      onClick={reSet}
      >Reset Value</button>
    </>
  )
}

export default App
