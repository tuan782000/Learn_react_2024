// onChange = Event handler used primarily with form elements.
//                       ex. <input>, <textarea>, <select>, <radio>
//                       Triggers a function every time the value of the input changes.

/*
onChange = Trình xử lý sự kiện được sử dụng chủ yếu với các phần tử biểu mẫu.
           ex <input>, <textarea>, <select>, <radio>
           Kích hoạt một hàm mỗi khi giá trị đầu vào thay đổi.
*/

import { useState } from "react"

const MyComponent = () => {
    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(0);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");
    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleQuantityChange = (e) => {
        setQuantity(e.target.value)
    }

    const handleCommentChange = (e) => {
        setComment(e.target.value)
    }

    const handlePaymentChange = (e) => {
        setPayment(e.target.value)
    }
    const shippingChange = (e) => {
        setShipping(e.target.value)
    }
    return (
        <div>
            <input type="text" value={name} onChange={handleNameChange} />
            <p>Name: {name}</p>

            <input type="number" value={quantity} onChange={handleQuantityChange} />
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange} placeholder="Enter delivery instructions"></textarea>
            <p>Comment: {comment}</p>
            {/* Tương tự nhau */}
            {/* <textarea value={comment} onChange={(e) => handleComment(e)} placeholder="Enter delivery instructions"></textarea>
            <p>Comment: {comment}</p> */}

            <select value={payment} onChange={handlePaymentChange} name="" id="">
                <option value="">Selection Options</option>
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
                <option value="Giftcard">Giftcard</option>
            </select>

            <p>Payment: {payment}</p>

            <p>Pickup Delivery: </p>
            <label htmlFor="regular">Shipping Regular</label>
            <input id="regular" name="shipping" type="radio" value={"Regular"} onChange={shippingChange} />
            <br />
            <label htmlFor="fast">Shipping Fast</label>
            <input id="fast" name="shipping" type="radio" value={"Fast"} onChange={shippingChange} />

            <p>Delivery is: {shipping}</p>
        </div>
    )
}

export default MyComponent