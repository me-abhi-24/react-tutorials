import { useState } from 'react'

import './App.css'

function App() {

  let [counter, setCounter] =useState(1);
  // counter is variable
  // setCounter is function

  const addValue=()=>{
    // setCounter(counter+1);
    setCounter((prevCounter)=>prevCounter+1);
    setCounter((prevCounter)=>prevCounter+1);
    setCounter((prevCounter)=>prevCounter+1);
  }
  const removeValue=()=>{
    setCounter(counter-1);
  }

  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter Value: {counter} </h2>
      <button onClick={addValue}>Add Value</button>{" "}
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
