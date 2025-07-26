import React, {useState} from 'react'

const Car = () => {

    const [car, setCar] = useState({
        make: '',
        model: '',
        year: ''
    })

  return (
    <>
    <div className='car-container'>

        <div className='car-form'>

            <div>Car</div>
            <p>Car Make: <b>{car.make}</b> </p>
            <input
            placeholder="Type in your car make"
            value={car.make}
            onChange={(e) => setCar({...car, make: e.target.value})}
            />
            
            <p>Car Model: <b>{car.model}</b> </p>
            <input
            placeholder="Type in your car model"
            value={car.model}
            onChange={(e) => setCar({...car, model: e.target.value})}
            />
            <p>Car Year: <b>{car.year}</b> </p>
            <input
            placeholder="Type in your car year"
            value={car.year}
            onChange={(e) => setCar({...car, year: e.target.value})}
            /> <br />
            <button className='car-button'>SAVE</button>
        </div>
        <div className='car-details'>
            <h3>Car Details</h3>
            <p><b>Make:</b> {car.make}</p>
            <p><b>Model:</b> {car.model}</p>
            <p><b>Year:</b> {car.year}</p>
        </div>
    </div>
    </>
  )
}

export default Car