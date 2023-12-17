// updater function = A function passed as an argument to setState() usually
//                                  Allow for safe updates based on the previous state
//                                  Used with multiple state updates and asynchronous functions
//                                  Good practice to use updater functions



// Cập nhật hàm = Một hàm thường được truyền dưới dạng đối số cho setState(). Cho phép cập nhật an toàn dựa trên trạng thái trước đó. Được sử dụng với nhiều cập nhật trạng thái và chức năng không đồng bộ. Thực hành tốt để sử dụng các chức năng cập nhật


// updater function = A function passed as an argument to setState() usually
//                                  ex. setYear(y => y + 1)
//                                 Allow for safe updates based on the previous state
//                                 Used with multiple state updates and asynchronous functions
//                                 Good practice to use updater functions

import { useState } from "react"

const MyComponent = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        // Solution: không cặp nhật đúng
        // setCount(count + 1)
        // setCount(count + 1)

        // Cách khắc phục
        // Take the "PENDING" state to calculate NEXT state.
        // React puts your updater function in a queue (waiting in line)
        // During the next render, it will call them in the same order

        // Lấy trạng thái "Đang chờ xử lý" để tính trạng thái TIẾP THEO.
        // React đặt chức năng cập nhật của bạn vào hàng đợi (chờ xếp hàng)
        // Trong lần kết xuất tiếp theo, nó sẽ gọi chúng theo thứ tự tương tự
        setCount(prevCount => prevCount + 1)
        setCount(prevCount => prevCount + 1)
        setCount(prevCount => prevCount + 1)
    }

    const decrement = () => {
        setCount(prevCount => prevCount - 1)
        setCount(prevCount => prevCount - 1)
        setCount(prevCount => prevCount - 1)
    }

    const resetCount = () => {
        setCount(0)
    }

    return (
        <div>
            <div>{count}</div>
            <button onClick={decrement}>Decrement</button>
            <button onClick={resetCount}>Reset</button>
            <button onClick={increment}>Increment</button>
        </div>
    )
}

export default MyComponent