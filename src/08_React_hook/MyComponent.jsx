// React hook = Special function that allows functional components
//                         to use React features without writing class components 
//                         (useState, useEffect, useContext, useReducer, and more...)                

// useState() = A React hook that allows the creation of a stateful variable
//                       AND a setter function to update its value in the Virtual DOM.
//                       [name, setName]

/*
React hook = Hàm đặc biệt cho phép các thành phần chức năng sử dụng các tính năng của React mà không cần viết các thành phần lớp (useState, useEffect, useContext, useReducer, v.v.)
*/

/*
useState() = Một hook React cho phép tạo một biến trạng thái "state" VÀ một hàm "setter" để cập nhật giá trị của nó trong Virtual DOM. [name, setName]
*/
import { useState } from "react"
const MyComponent = () => {
    // destructuring
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0)
    const [isEmployee, setIsEmployee] = useState(false)

    const updateName = () => {
        setName("Tuan") //setName giúp cập nhật lại biến name
    }

    const incrementAge = () => {
        setAge(age + 1) //setAge giúp cập nhật lại biến age
    }

    const toogleEmployeedStatus = () => {
        setIsEmployee(!isEmployee)
    }

    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>

            <p>Is employeed: {isEmployee ? "Yes" : "No"}</p>
            <button onClick={toogleEmployeedStatus}>Toggle Status</button>
        </div>
    )
}

export default MyComponent