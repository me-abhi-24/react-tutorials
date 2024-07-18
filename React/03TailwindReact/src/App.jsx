import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card username="Abhishek"/> //using props
      <Card username="abhishek" post="GM"/> //direct passing value
      <Card/>
    </>
  )
}

export default App
