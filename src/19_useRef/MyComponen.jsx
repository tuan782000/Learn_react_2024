/* eslint-disable no-unused-vars */
/*
useState() = re-renders the component when the state value changes

useRef() = "use Reference" Dose not cause re-renders when its value changes.
            When you want a component to 'remember' some information,
            but you don't want that information to trigger new renders.

            1. Accessing/Interacting with DOM elements
            2. Handling Focus, Animations, and Transitions
            3. Managing Timers and Intervals 

useRef sẽ return 1 object và bên trong object có duy nhất 1 thuộc tính là thuộc tính current: value
*/
import { useState, useEffect, useRef } from 'react'
const MyComponen = () => {
    // let [number, setNumber] = useState(0)
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    /*
        khai báo ba biến inputRef1, inputRef2, và inputRef3 sử dụng useRef, để lưu trữ tham chiếu đến các input field trong DOM.
    */

    // console.log(ref)

    useEffect(() => {
        console.log("COMPONENT RENDERED")
    })

    /*
    useEffect được sử dụng để in ra "COMPONENT RENDERED" mỗi khi component được render lại. Tuy nhiên, useEffect này không có dependency array, do đó, nó sẽ chạy sau mỗi lần render.
    */

    const handleClick1 = () => {
        // setNumber(prevState => prevState + 1)
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "yellow";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }

    const handleClick2 = () => {
        inputRef2.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "yellow";
        inputRef3.current.style.backgroundColor = "";
    }

    const handleClick3 = () => {
        inputRef3.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "yellow";
    }

    /*
    Ba hàm xử lý sự kiện (handleClick1, handleClick2, handleClick3) được gọi khi người dùng click vào ba nút tương ứng. Mỗi hàm này tập trung vào việc đặt focus vào một input field cụ thể và thay đổi màu sắc của input field đó.
    */
    return (
        <div>
            <button onClick={handleClick1}>
                Click me 1!
            </button>
            <input ref={inputRef1} />

            <button onClick={handleClick2}>
                Click me 2!
            </button>
            <input ref={inputRef2} />

            <button onClick={handleClick3}>
                Click me 3!
            </button>
            <input ref={inputRef3} />
        </div>
    )
}

/*
Component trả về một đoạn JSX gồm ba button và ba input field. Mỗi button kích thích một hàm xử lý sự kiện tương ứng và mỗi input field được tham chiếu đến thông qua ref. Khi người dùng click vào một button, input field tương ứng sẽ nhận focus và thay đổi màu sắc.
*/
export default MyComponen