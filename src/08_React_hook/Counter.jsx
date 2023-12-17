// import { useState } from "react"

import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0)
    const increment = () => {
        setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }
    const resetAll = () => {
        setCount(0)
    }
    const counterContainer = {
        textAlign: 'center'
    }
    const countDisplay = {
        fontSize: "10em",
        marginTop: "0",
        marginBottom: "50px",
    }
    const counterButton = {
        width: "150px",
        height: "50px",
        fontSize: "1.5em",
        fontWeight: "bold",
        margin: "0px 5px",
        backgroundColor: "hsl(197, 100%, 58%)",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        transition: "background-color 0.3s ease-in-out", // Thêm transition cho hiệu ứng mềm mại
        // Thêm kiểu dáng khi hover
        "&:hover": {
            backgroundColor: "hsl(197, 100%, 48%)",
        },
    }
    return (
        <div style={counterContainer}>
            <h1 style={countDisplay}>{count}</h1>
            <button style={counterButton} onClick={decrement}>Decrement</button>
            <button style={counterButton} onClick={resetAll}>Reset</button>
            <button style={counterButton} onClick={increment}>Increment</button>
        </div>
    )
}

export default Counter