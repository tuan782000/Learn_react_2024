import { useState } from 'react'

const MyComponent = () => {
    const [car, setCar] = useState({ year: 2024, make: 'Ford', model: 'Mustang' })

    const handleOnChangeYear = (e) => {
        // setCar({ ...car, year: e.target.value })
        setCar(car => ({ ...car, year: e.target.value }))
        // car giống như previousState, trạng thái trước đó của nó, xong mình truyền vào làm đối số, cho callbacks, cái hàm callbacks đóng vai trò copy lại object cũ sau đó cập nhật lại 1 giá trị cụ thể cho object
    }
    const handleOnChangeMake = (e) => {
        // setCar({ ...car, make: e.target.value })
        setCar(car => ({ ...car, make: e.target.value }))
    }
    const handleOnChangeModel = (e) => {
        // setCar({ ...car, model: e.target.value })
        // Làm theo cách này cũng được, nhưng cần phải tuân thủ tính toàn vẹn dữ liệu react nên dùng cách dưới
        setCar(car => ({ ...car, model: e.target.value }))
    }

    return (
        <div>
            <p>Your favorite car is: {car.year} {car.make} {car.model}</p>

            <input type="number" value={car.year} onChange={handleOnChangeYear} />
            <input type="text" value={car.make} onChange={handleOnChangeMake} />
            <input type="text" value={car.model} onChange={handleOnChangeModel} />
        </div>
    )
}

export default MyComponent