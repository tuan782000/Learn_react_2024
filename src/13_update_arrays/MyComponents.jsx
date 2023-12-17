/*
"You can put objects and arrays into state. In React, state is considered read-only, so you should replace it rather than mutate your existing objects. For example, if you have a form object in state, don’t mutate it:"

Bạn có thể đặt các đối tượng và mảng vào trạng thái. Trong React, trạng thái được coi là chỉ đọc, vì vậy bạn nên thay thế nó thay vì thay đổi các đối tượng hiện có của mình. Ví dụ: nếu bạn có một đối tượng biểu mẫu ở trạng thái, đừng thay đổi nó:
*/
import { useState } from "react"



const MyComponents = () => {
    const [foods, setFoods] = useState(["Apple", "Banana", "Orange"])

    const handleAddFood = () => {
        // setFoods(foods => ({ ...foods, }))
        const newFood = document.getElementById("foodInputs").value;
        document.getElementById("foodInputs").value = "";

        setFoods((foods) => ([...foods, newFood]))
    }

    const handleRemoveFood = (index) => {
        setFoods(foods.filter((_, i) => i !== index))
        // lọc ra những thằng không có index trùng với cái index mình đã chọn, xong return mảng. Riêng thằng trùng thì không được return. Thành ra loại bỏ được

        // "_" bỏ qua tham số đó nếu như không dùng
    }
    return (
        <div>
            <h2>List of foods</h2>
            <ul>
                {foods.map((food, index) => {
                    return (
                        <li key={index} onClick={() => { handleRemoveFood(index) }}>{food}</li>
                    )
                })}
            </ul>
            <input type="text" id="foodInputs" placeholder="Enter a food name" />
            <button onClick={handleAddFood}>Add Food</button>
            <button onClick={handleRemoveFood}>Remove Food</button>

        </div>
    )
}

export default MyComponents