import { useState } from 'react'

const MyComponents = () => {
    const [cars, setCars] = useState([])
    const [years, setYears] = useState(new Date().getFullYear())
    const [makes, setMakes] = useState("")
    const [models, setModels] = useState("")

    const handleAddCars = () => {
        const newCar = {
            years: years,
            makes: makes,
            models: models,
        }

        setCars(cars => ([...cars, newCar]))
        setYears(new Date.getFullYear())
        setMakes("")
        setModels("")
    }

    const handleRemoveCars = (index) => {
        setCars(cars.filter((_, i) => i !== index))
    }

    const handleOnChangeYears = (e) => {
        setYears(e.target.value)
    }

    const handleOnChangeMakes = (e) => {
        setMakes(e.target.value)
    }

    const handleOnChangeModels = (e) => {
        setModels(e.target.value)
    }
    return (
        <div>
            <h1>List of Cars</h1>
            <ul>
                {cars.map((car, index) => {
                    return (
                        <li key={index} onClick={() => handleRemoveCars(index)}>{car.years}, {car.models}, {car.makes}</li>
                    )
                })}
            </ul>
            <input type="number" value={years} onChange={handleOnChangeYears} placeholder='Enter years' />
            <input type="text" value={makes} onChange={handleOnChangeMakes} placeholder='Enter makes' />
            <input type="text" value={models} onChange={handleOnChangeModels} placeholder='Enter models' />
            <button onClick={handleAddCars}>Add Car</button>
            <button onClick={handleRemoveCars}>Remove Car</button>
        </div>

    )
}

export default MyComponents