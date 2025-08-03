import React, { useState } from 'react'

const ColorPicker = () => {
    const [color, setColor] = useState("#FFFFFF")
    const handleColorChange = (e)=>{
        setColor(e.target.value)
        // window.alert(`color changed to ${color}`)
    }
  return (

    <>
    
     <div className='color-picker-container'>
    <h1>ColorPicker</h1>
    <div className='color-display' style={{backgroundColor: color}}>
<p>Selected COlor: {color}</p>
    </div>
    <label htmlFor="">Select a color</label>
<input type="color"
value={color}
onChange={(e)=>handleColorChange(e)}
/>
     </div>
    
    </>
  )
}

export default ColorPicker