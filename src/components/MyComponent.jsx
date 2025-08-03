import React, { useState } from 'react'

const MyComponent = () => {

    // Updating State of Arrays
    const [foods, setFoods] = useState([
        "Apple", "Orange", "Banana"
    ]);

    const handleAddFood = (e)=>{

        const newFood = document.getElementById("foodInput").value
    document.getElementById("foodInput").value = ""
setFoods(f=> [...f, newFood])
    }
    const handleFoodDelete = (index)=>{
setFoods(foods.filter((_, i) => i !== index))
    }


    // Updating State of Array of Objects
    

    const [cars, setCars]= useState([]);
    const [carYear, setCarYear]= useState(new Date().getFullYear());
    const [carModel, setCarModel]= useState("Benz");
    const [carMake, setCarMake]= useState("");

    
    const handleAddCar = ()=>{
            const newCar = {Make: carMake,
                        Model: carModel,
                        Year: carYear
                    }
            setCars(c=> [...c, newCar])
        }
        const handleRemoveCar =(index)=>{
setCars(cars.filter((_, i)=>
    i !== index)
)
        }
        const handleYearChange = (e)=>{
            setCarYear(e.target.value)
        }
        const handleModelChange = (e)=>{
setCarModel(e.target.value)
        }
        const handleMakeChange = (e)=>{
setCarMake(e.target.value)
        }
  return (
<>
<div>
    <h2>LIST OF FOOD</h2>
    <ul  >
        {foods.map((food, index)=> 
        <li key={index}
        onClick={()=>handleFoodDelete(index)}
        >{food}</li>
        )}
    </ul>
    <input type="text"
    placeholder='Enter Food Name'
    id='foodInput'
    
    />
    <button className='mobile-button1' onClick={(e)=>handleAddFood(e)}>Add Food</button>

    <h2>Cars Update</h2>
    
    <ul>Cars: {cars.map((car, index)=>
        <li key={index} onClick={()=>handleRemoveCar(index)}>{car.Year} {car.Make} {car.Model}</li>
    )}</ul>
    <input type="number" value={carYear} onChange={(e)=>handleYearChange(e)} />
    <p>Car Year: <b>{carYear}</b></p>
    <input type="text" value={carModel} onChange={(e)=>handleModelChange(e)} />
    <p>Car Model:<b>{carModel}</b> </p>
    <input type="text" value={carMake}  onChange={(e)=>handleMakeChange(e)}/>
    <p>Car Make: <b>{carMake}</b></p>
    <button className='mobile-button1' onClick={handleAddCar}>Add Car</button>

</div>
</> 
 )
}

export default MyComponent 