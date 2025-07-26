import { useState } from "react"


const Counter = () => {

    const [count, setCount] = useState(0);

    const handleIncrease = ()=>{
        setCount(prevCount=> prevCount + 1)
    }
     const handleDecrease = ()=>{
        setCount(prevCount=> prevCount - 1)
    }
     const handleReset = ()=>{
        setCount(0)
    }
    
  return (
    <>
    
        <div className="counterContainer">
            <label htmlFor="" className="counterHeader">COUNTER</label>
            <div className="counterDisplay">COUNT: <b>{count}</b> </div>
            <button onClick={handleIncrease}>Increase</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleDecrease}>Decrease</button>
        </div>
    </>
  )
}

export default Counter