import { useState } from 'react'
import './App.css'
import Car from './components/Car'
import Counter from './components/Counter'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Counter/> */}
     <Car />
    </>
  )
}

export default App
