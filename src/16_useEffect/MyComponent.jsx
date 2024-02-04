// import React from 'react'

import { useEffect, useState } from "react"

/*
    useEffect = React Hook that tells React DO SOME CODE WHEN (pick one):   
                This component re-renders - 
                This component mounts
                This state of a value

    useEffect(function, [dependecies])

    1. useEffect(() => {})          // Runs after every re-render
    2. useEffect(() => {}, [])      // Runs only on mount
    3. useEffect(() => {}, [value]) // Runs only mount + when value changes

    Uses: 
    1. Event listeners
    2. Dom manipulation
    3. Subscriptions (real-time updates)
    4. fetching Data from an API
    5. Clean up when a component unmounts


    useEffect = React Hook yêu cầu React THỰC HIỆN MỘT SỐ MÃ KHI (chọn một):
                Thành phần này hiển thị lại
                Thành phần này gắn kết (tạo ra 1 thành phần và nối nó vào dom thì gọi la mounting)
                Trạng thái giá trị này

    useEffect(function, [dependecies])

    1. useEffect(() => {})          // Chạy sau mỗi lần kết xuất lại
    2. useEffect(() => {}, [])      // Chỉ chạy trên mount
    3. useEffect(() => {}, [value]) // Chỉ chạy mount + khi giá trị thay đổi
*/

const MyComponent = () => {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    // useEffect(function, [dependencies]);
    // useEffect(() => {
    //     document.title = `Count: ${count}`;
    // }) // render lại mỗi khi có sự thay đổi - loại 1

    // useEffect(() => {
    //     document.title = `Count: ${count}`;
    // }, []) // chỉ render 1 lần duy nhất

    useEffect(() => {
        document.title = `Count: ${count} ${color}`;
        return () => {
            // Some clean up code
        }
    }, [count, color]) // chỉ render khi dependecies theo dõi có sự thay đổi. 

    const addCount = () => {
        setCount((prevCount) => prevCount + 1);
    }

    const subCount = () => {
        setCount((prevCount) => prevCount - 1);
    }

    const changeColor = () => {
        setColor((prevColor) => prevColor === "green" ? "red" : "green");
    }

    return (
        <>
            <p style={{ color: color }}>Count: ${count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={subCount}>Subtract</button>
            <button onClick={changeColor}>Change Color</button>
        </>
    )
}

export default MyComponent